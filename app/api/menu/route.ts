import { NextResponse } from 'next/server';
import dbConnect from '@/lib/database';
import Product from '@/lib/models/product';

// Sample product data to use if the database is empty
const sampleProducts = [
  {
    name: 'Margherita Pizza',
    description: 'Classic cheese and tomato pizza.',
    price: 12.99,
    image: '/images/margherita.jpg',
    category: 'Pizza',
    isFeatured: true,
  },
  {
    name: 'Pepperoni Pizza',
    description: 'A popular American pizza with spicy pepperoni slices.',
    price: 14.50,
    image: '/images/pepperoni.jpg',
    category: 'Pizza',
    isFeatured: false,
  },
  {
    name: 'Veggie Supreme',
    description: 'A vegetarian feast with onions, bell peppers, olives, and mushrooms.',
    price: 13.99,
    image: '/images/veggie.jpg',
    category: 'Pizza',
    isFeatured: true,
  },
];

// GET method to retrieve all products from the database
export async function GET(request: Request) {
  await dbConnect();
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const isFeatured = searchParams.get("isFeatured") === "true";

  let query: any = {};
  if (category) {
    query.category = category;
  }
  if (isFeatured) {
    query.isFeatured = true;
  }

  const products = await Product.find(query);
  return NextResponse.json(products);
}