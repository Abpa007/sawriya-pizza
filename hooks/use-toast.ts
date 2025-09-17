// hooks/use-toast.ts
import { createContext, useContext, useState, useCallback } from "react";

type ToastType = "success" | "error" | "info";

interface ToastState {
  isOpen: boolean;
  message: string;
  type?: ToastType;
}

interface ToastContextType {
  toast: ToastState;
  showToast: (message: string, type?: ToastType) => void;
  hideToast: () => void; // <-- The missing function
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toast, setToast] = useState<ToastState>({
    isOpen: false,
    message: "",
  });

  const showToast = useCallback((message: string, type?: ToastType) => {
    setToast({
      isOpen: true,
      message,
      type,
    });
  }, []);

  const hideToast = useCallback(() => {
    setToast((currentToast) => ({
      ...currentToast,
      isOpen: false,
    }));
  }, []);

  const value = { toast, showToast, hideToast };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
