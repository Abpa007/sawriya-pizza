import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import dbConnect from '@/lib/database';
import Order from '@/lib/models/order';

const JWT_SECRET = process.env.JWT_SECRET || 'your_super_secret_key_for_jwt_signing';

// Helper function to get the user ID from the JWT token
function getUserIdFromToken(token: string) {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
    return decoded.userId;
  } catch (error) {
    return null;
  }
}

// GET method to retrieve the user's cart
export async function GET(request: Request) {
  await dbConnect();
  const cookieStore =  await cookies();
  const token = cookieStore.get('token')?.value;

  if (!token) {
    return NextResponse.json({ message: 'Authentication required' }, { status: 401 });
  }

  const userId = getUserIdFromToken(token);
  if (!userId) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  try {
    const cart = await Order.findOne({ user: userId, status: 'pending' }).populate('items.product');
    if (!cart) {
      return NextResponse.json({ items: [], totalPrice: 0 });
    }
    return NextResponse.json(cart);
  } catch (error) {
    return NextResponse.json({ message: 'Failed to fetch cart' }, { status: 500 });
  }
}

// POST method to add an item to the cart
export async function POST(request: Request) {
  await dbConnect();
 const cookieStore =  await cookies();
  const token = cookieStore.get('token')?.value;

  if (!token) {
    return NextResponse.json({ message: 'Authentication required' }, { status: 401 });
  }

  const userId = getUserIdFromToken(token);
  if (!userId) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  const { productId, quantity } = await request.json();

  try {
    let cart = await Order.findOne({ user: userId, status: 'pending' });

    if (!cart) {
      cart = await Order.create({
        user: userId,
        items: [{ product: productId, quantity }],
        status: 'pending',
      });
    } else {
      const itemIndex = cart.items.findIndex(
        (item: any) => item.product.toString() === productId
      );

      if (itemIndex > -1) {
        cart.items[itemIndex].quantity += quantity;
      } else {
        cart.items.push({ product: productId, quantity });
      }
      await cart.save();
    }
    return NextResponse.json({ message: 'Item added to cart' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to add item to cart' }, { status: 500 });
  }
}

// DELETE method to remove an item from the cart
export async function DELETE(request: Request) {
  await dbConnect();
  // CORRECTED: Remove the 'await' keyword here.
 const cookieStore =  await cookies();
  const token = cookieStore.get('token')?.value;
  
  if (!token) {
    return NextResponse.json({ message: 'Authentication required' }, { status: 401 });
  }

  const userId = getUserIdFromToken(token);
  if (!userId) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  const { productId } = await request.json();

  try {
    const cart = await Order.findOne({ user: userId, status: 'pending' });

    if (!cart) {
      return NextResponse.json({ message: 'Cart not found' }, { status: 404 });
    }

    const initialItemCount = cart.items.length;
    cart.items = cart.items.filter((item: any) => item.product.toString() !== productId);

    if (cart.items.length === initialItemCount) {
      return NextResponse.json({ message: 'Item not in cart' }, { status: 404 });
    }

    await cart.save();
    return NextResponse.json({ message: 'Item removed from cart' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to remove item from cart' }, { status: 500 });
  }
}