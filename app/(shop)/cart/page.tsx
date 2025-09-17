import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { CartSection } from '@/components/sections/cart-section';

export default function CartPage() {
  return (
    <>
      <main className="flex-1">
        <CartSection />
      </main>
    </>
  );
}