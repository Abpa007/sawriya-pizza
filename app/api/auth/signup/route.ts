import { NextResponse } from 'next/server';
import dbConnect from '@/lib/database';
import User from '@/lib/models/user';
import bcrypt from 'bcryptjs';

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();
    const { name, email, password, dateOfBirth } = body;

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return NextResponse.json({ message: 'User already exists' }, { status: 409 });
    }

    // Create a new user with the hashed password (handled by the pre-save hook in the User model)
    const user = await User.create({
      name,
      email,
      password,
      dateOfBirth,
    });

    return NextResponse.json(
      { message: 'User created successfully', user: { email: user.email } },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}