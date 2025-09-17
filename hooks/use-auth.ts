'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootState } from '@/lib/store/store';

export function useAuth() {
  const router = useRouter();
  const { isLoggedIn, user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    if (!isLoggedIn) {
      // alert('You must be logged in to access this page.');
      // Redirect to the login page if not logged in
      // router.push('/login');
    }
  }, [isLoggedIn, router]);

  return { isLoggedIn, user };
}