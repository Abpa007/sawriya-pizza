// app/menu/page.tsx
import { MenuSection } from "@/components/sections/menu-section";
import { fetchMenuItems } from "@/lib/api"; // A new utility function to fetch data

// Fetches menu items on the server
async function getMenuItems() {
  const res = await fetchMenuItems();
  if (!res) {
    // Handle error gracefully
    return null;
  }
  return res;
}

export default async function MenuPage() {
  const menuItems = await getMenuItems();

  return (
    <main>
      <MenuSection products={menuItems} />
    </main>
  );
}
