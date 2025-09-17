import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import jwt from 'jsonwebtoken';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Utensils, Users, ShoppingBag } from 'lucide-react';
import dbConnect from '@/lib/database';
import User from '@/lib/models/user';
import Product from '@/lib/models/product';

// Define the JWT secret from the environment variables
const JWT_SECRET = process.env.JWT_SECRET || 'your_super_secret_key_for_jwt_signing';

// Function to get dashboard da ta from the database
async function getDashboardData () {
  await dbConnect();
  const usersCount = await User.countDocuments();
  const productsCount = await Product.countDocuments();
  const ordersCount = 0; // Placeholder for orders
  return { usersCount, productsCount, ordersCount };
}

// Function to retrieve the token safely, bypassing linter issues
 async function getToken  () {
  const cookieStore = await cookies();

  return cookieStore.get('token')?.value;
}

// Admin dashboard page component
export default async function AdminDashboardPage() {
  const token = await getToken();

  // Protect the route by checking for a valid admin token
  if (!token) {
    redirect('/login');
  }

  try {
    const decodedToken = jwt.verify(token, JWT_SECRET) as { role: string };
    if (decodedToken.role !== 'admin') {
      redirect('/'); // Redirect if the user is not an admin
    }
  } catch (error) {
    redirect('/login'); // Redirect if the token is invalid
  }

  // Fetch the data for the dashboard
  const { usersCount, productsCount, ordersCount } = await getDashboardData();

  return (
    <>
      <Navigation />
      <main className="flex-1 p-8 bg-gray-50 dark:bg-gray-900 min-h-screen">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-center text-foreground dark:text-white">Admin Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* User Count Card */}
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{usersCount}</div>
              </CardContent>
            </Card>

            {/* Product Count Card */}
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Products</CardTitle>
                <Utensils className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{productsCount}</div>
              </CardContent>
            </Card>

            {/* Order Count Card */}
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
                <ShoppingBag className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{ordersCount}</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}