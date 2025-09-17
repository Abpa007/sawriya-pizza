import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import dbConnect from '@/lib/database';
import Order from '@/lib/models/order';

const JWT_SECRET = process.env.JWT_SECRET || 'your_super_secret_key_for_jwt_signing';

// Helper function to get user ID and role from the JWT token
function getAuthInfoFromToken(token: string) {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string; role: string };
    return { userId: decoded.userId, role: decoded.role };
  } catch (error) {
    return { userId: null, role: null };
  }
}

// GET method to retrieve orders (for admin or a specific user)
export async function GET() {
  await dbConnect();
 const cookieStore =  await cookies();
  const token = cookieStore.get('token')?.value;

  if (!token) {
    return NextResponse.json({ message: 'Authentication required' }, { status: 401 });
  }

  const { userId, role } = getAuthInfoFromToken(token);
  if (!userId) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  try {
    if (role === 'admin') {
      // Admin can see all orders
      const allOrders = await Order.find({}).populate('user').populate('items.product');
      return NextResponse.json(allOrders);
    } else {
      // Regular users can only see their own orders
      const userOrders = await Order.find({ user: userId }).populate('items.product');
      return NextResponse.json(userOrders);
    }
  } catch (error) {
    return NextResponse.json({ message: 'Failed to fetch orders' }, { status: 500 });
  }
}

// POST method to place a new order (checkout)
export async function POST() {
  await dbConnect();
 const cookieStore =  await cookies();
  const token = cookieStore.get('token')?.value;

  if (!token) {
    return NextResponse.json({ message: 'Authentication required' }, { status: 401 });
  }

  const { userId } = getAuthInfoFromToken(token);
  if (!userId) {
    return NextResponse.json({ message: 'Invalid token' }, { status: 401 });
  }

  try {
    // Find the user's pending cart
    const cart = await Order.findOne({ user: userId, status: 'pending' });

    if (!cart || cart.items.length === 0) {
      return NextResponse.json({ message: 'Cart is empty' }, { status: 400 });
    }

    // Update the cart status to 'confirmed' to finalize the order
    cart.status = 'confirmed';
    await cart.save();

    return NextResponse.json({ message: 'Order placed successfully', order: cart }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to place order' }, { status: 500 });
  }
}