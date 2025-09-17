// components/ui/ToastContainer.tsx
'use client';

import { useToast } from '@/hooks/use-toast';
import { useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { Button } from './button';

export function ToastContainer() {
  const { toast, hideToast } = useToast();

  const dismiss = useCallback(() => {
    hideToast();
  }, [hideToast]);

  useEffect(() => {
    if (toast.isOpen) {
      const timer = setTimeout(dismiss, 5000);
      return () => clearTimeout(timer);
    }
  }, [toast.isOpen, dismiss]);

  if (!toast.isOpen) {
    return null;
  }

  const baseClasses = "fixed bottom-5 left-1/2 -translate-x-1/2 p-4 rounded-lg shadow-lg text-white z-50 transition-all duration-300 ease-in-out flex items-center justify-between space-x-4";

  const colorClasses = {
    success: "bg-green-500",
    error: "bg-red-500",
    info: "bg-blue-500", // <-- Added the 'info' type
  }[toast.type || 'info'];

  return (
    <div className={cn(baseClasses, colorClasses)}>
      <p>{toast.message}</p>
      <Button variant="ghost" className="text-white hover:bg-white/20" onClick={dismiss}>
        Dismiss
      </Button>
    </div>
  );
}