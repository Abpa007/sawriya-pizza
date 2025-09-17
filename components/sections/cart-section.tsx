'use client';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/lib/store/store';
import {
  removeItemFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "@/lib/store/features/cartSlice";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import Link from "next/link";

export function CartSection() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalPrice = useSelector((state: RootState) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const handleRemove = (id: string) => {
    dispatch(removeItemFromCart(id));
  };

  const handleIncrease = (id: string) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id: string) => {
    dispatch(decreaseQuantity(id));
  };

  const formattedPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(price);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-full max-w-2xl p-6">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Your Cart</CardTitle>
        </CardHeader>
        <CardContent>
          {cartItems.length === 0 ? (
            <div className="text-center text-gray-500">
              <p className="mb-4">
                Your cart is empty. Add some delicious food!
              </p>
              <Link href="/menu">
                <Button>Go to Menu</Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b pb-4"
                >
                  <div className="flex flex-col">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600">
                      {formattedPrice(item.price)} x {item.quantity}
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <p className="font-semibold">
                      {formattedPrice(item.price * item.quantity)}
                    </p>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDecrease(item.id)}
                      >
                        -
                      </Button>
                      <span className="font-semibold">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleIncrease(item.id)}
                      >
                        +
                      </Button>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemove(item.id)}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
        {cartItems.length > 0 && (
          <CardFooter className="flex flex-col gap-4 pt-6">
            <div className="flex justify-between w-full font-bold text-2xl">
              <span>Total:</span>
              <span>{formattedPrice(totalPrice)}</span>
            </div>
            <Button className="w-full text-lg">Proceed to Checkout</Button>
          </CardFooter>
        )}
      </Card>
    </div>
  );
}