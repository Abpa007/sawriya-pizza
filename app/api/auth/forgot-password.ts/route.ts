import { NextResponse } from 'next/server';
import dbConnect from '@/lib/database';
import User from '@/lib/models/user';
import crypto from 'crypto';
import nodemailer from 'nodemailer';

const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;

if (!EMAIL_USER || !EMAIL_PASS) {
  throw new Error('Please define EMAIL_USER and EMAIL_PASS environment variables');
}

const transporter = nodemailer.createTransport({
  service: 'Gmail', // or any other email service
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

export async function POST(request: Request) {
  try {
    await dbConnect();
    const body = await request.json();
    const { email } = body;

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // Generate a 6-digit OTP
    const otp = crypto.randomInt(100000, 999999).toString();
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // OTP expires in 10 minutes

    user.otp = otp;
    user.otpExpiry = otpExpiry;
    await user.save();

    const mailOptions = {
      from: EMAIL_USER,
      to: email,
      subject: 'Restaurant App - Password Reset OTP',
      html: `<p>Your One-Time Password (OTP) to reset your password is: <strong>${otp}</strong></p>
             <p>This code is valid for 10 minutes.</p>`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'OTP sent successfully' }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}