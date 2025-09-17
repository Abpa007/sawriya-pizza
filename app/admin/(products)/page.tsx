import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import jwt from 'jsonwebtoken';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import dbConnect from '@/lib/database';
import Product from '@/lib/models/product';
import { Pencil, Trash2 } from 'lucide-react';

// Define the JWT secret from the environment variables
const JWT_SECRET = process.env.JWT_SECRET || 'your_super_secret_key_for_jwt_signing';

// Function to get all products from the database
async function getProducts() {
  await dbConnect();
  const products = await Product.find({});
  return products.map((product) => ({
    id: product._id.toString(),
    name: product.name,
    price: product.price,
    category: product.category,
    isFeatured: product.isFeatured,
  }));
}

// Admin products page component
export default async function AdminProductsPage() {

  const cookieStore =  await cookies();
  const token = cookieStore.get('token')?.value;
  // Protect the route by checking for a valid admin token
  if (!token) {
    redirect('/login');
  }

  try {
    const decodedToken = jwt.verify(token, JWT_SECRET) as { role: string };
    if (decodedToken.role !== 'admin') {
      redirect('/');
    }
  } catch (error) {
    redirect('/login');
  }

  const products = await getProducts();

  return (
    <>
      <Navigation />
      <main className="flex-1 p-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-foreground dark:text-white">Products</h1>
            <Button>Add New Product</Button>
          </div>
          
          <Card>
            <CardHeader>
              <CardTitle>Product List</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product Name</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Featured</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {products.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell className="font-medium">{product.name}</TableCell>
                      <TableCell>${product.price.toFixed(2)}</TableCell>
                      <TableCell>{product.category}</TableCell>
                      <TableCell>{product.isFeatured ? 'Yes' : 'No'}</TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="sm" className="mr-2">
                          <Pencil className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </>
  );
}