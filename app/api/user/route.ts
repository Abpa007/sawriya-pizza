import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import jwt from 'jsonwebtoken';
import dbConnect from '@/lib/database';
import User from '@/lib/models/user';

const JWT_SECRET = process.env.JWT_SECRET || 'your_super_secret_key_for_jwt_signing';

// Helper function to get user ID from the JWT token
function getUserIdFromToken(token: string) {
  try {
    const decoded = jwt.verify(token, JWT_SECRET) as { userId: string };
    return decoded.userId;
  } catch (error) {
    return null;
  }
}

// GET method to retrieve the logged-in user's details
export async function GET() {
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
    const user = await User.findById(userId).select('-password'); // Exclude the password field
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({ message: 'Failed to fetch user data' }, { status: 500 });
  }
}

// PUT method to update the logged-in user's details
export async function PUT(request: Request) {
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

  const body = await request.json();
  const { name, email, dateOfBirth } = body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { name, email, dateOfBirth },
      { new: true, runValidators: true }
    ).select('-password');

    if (!updatedUser) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Profile updated successfully', user: updatedUser });
  } catch (error) {
    return NextResponse.json({ message: 'Failed to update profile' }, { status: 500 });
  }
}