// lib/api.ts

// A utility function to fetch all menu items
export async function fetchMenuItems() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/menu`);
  if (!res.ok) {
    throw new Error('Failed to fetch menu items');
  }
  return res.json();
}

// A utility function to fetch only featured menu items
export async function fetchFeaturedItems() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/menu?isFeatured=true`);
  if (!res.ok) {
    throw new Error('Failed to fetch featured items');
  }
  return res.json();
}