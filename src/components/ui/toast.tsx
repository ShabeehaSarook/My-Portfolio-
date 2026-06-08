"use client";

import * as React from "react";
import { AnimatePresence } from "framer-motion";
import { CheckCircle2, XCircle, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { Motion } from "@/components/ui/motion";

type ToastTone = "success" | "error" | "info";
type ToastMessage = {
  id: number;
  title: string;
  description?: string;
  tone: ToastTone;
};

type ToastContextValue = {
  push: (toast: Omit<ToastMessage, "id">) => void;
};

const ToastContext = React.createContext<ToastContextValue | null>(null);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = React.useState<ToastMessage[]>([]);

  const push = React.useCallback((toast: Omit<ToastMessage, "id">) => {
    const id = Date.now() + Math.round(Math.random() * 1000);
    setToasts((current) => [...current, { ...toast, id }]);
    window.setTimeout(() => {
      setToasts((current) => current.filter((item) => item.id !== id));
    }, 3500);
  }, []);

  return (
    <ToastContext.Provider value={{ push }}>
      {children}
      <div
        suppressHydrationWarning
        className="fixed bottom-5 right-5 z-[80] flex w-[min(92vw,24rem)] flex-col gap-3"
      >
        <AnimatePresence>
          {toasts.map((toast) => (
            <Motion.div
              key={toast.id}
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              className={cn(
                "rounded-2xl border p-4 shadow-2xl backdrop-blur-xl",
                toast.tone === "success" && "border-emerald-400/20 bg-emerald-400/10",
                toast.tone === "error" && "border-rose-400/20 bg-rose-400/10",
                toast.tone === "info" && "border-cyan-400/20 bg-cyan-400/10",
              )}
            >
              <div className="flex gap-3">
                <div className="mt-0.5">
                  {toast.tone === "success" ? (
                    <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                  ) : toast.tone === "error" ? (
                    <XCircle className="h-5 w-5 text-rose-300" />
                  ) : (
                    <Info className="h-5 w-5 text-cyan-300" />
                  )}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{toast.title}</p>
                  {toast.description ? (
                    <p className="mt-1 text-sm leading-6 text-slate-300">{toast.description}</p>
                  ) : null}
                </div>
              </div>
            </Motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
}
