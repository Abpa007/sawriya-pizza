'use client';
import { useAuth } from '@/hooks/use-auth';
import { useDispatch } from 'react-redux';
import { logout } from '@/lib/store/features/authSlice';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export default function ProfilePage() {
  const { isLoggedIn, user } = useAuth();
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    // Call the logout API route to clear the cookie
    await fetch('/api/auth/logout', {
      method: 'POST',
    });

    // Dispatch the logout action to clear the Redux state
    dispatch(logout());

    // Redirect to the homepage or login page
    router.push('/');
  };

  // The hook handles the redirection, so we only render if logged in
  if (!isLoggedIn || !user) {
    return null; // Don't render anything while redirecting
  }

  return (
    <>
      <main className="flex-1 flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <Card className="w-full max-w-md p-6">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Your Profile</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold">Name</h3>
              <p className="text-muted-foreground">{user.name}</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Email</h3>
              <p className="text-muted-foreground">{user.email}</p>
            </div>
            <Button className="w-full" onClick={handleLogout}>
              Logout
            </Button>
          </CardContent>
        </Card>
      </main>
    </>
  );
}