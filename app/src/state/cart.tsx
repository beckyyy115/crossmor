import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { CartItem, Product } from '@/types';

type CartState = {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  setQuantity: (productId: string, quantity: number) => void;
  clear: () => void;
  itemCount: number;
  subtotal: number;
};

const CartContext = createContext<CartState | null>(null);

const STORAGE_KEY = 'crossmor_cart_v1';

function loadCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as CartItem[];
    if (!Array.isArray(parsed)) return [];
    return parsed
      .filter((x) => x && x.product && typeof x.product.id === 'string')
      .map((x) => ({
        product: x.product,
        quantity: Number.isFinite(x.quantity) && x.quantity > 0 ? Math.floor(x.quantity) : 1,
      }));
  } catch {
    return [];
  }
}

function saveCart(items: CartItem[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // ignore
  }
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setItems(loadCart());
  }, []);

  useEffect(() => {
    saveCart(items);
  }, [items]);

  const api = useMemo<CartState>(() => {
    const addItem = (product: Product, quantity = 1) => {
      const q = Math.max(1, Math.floor(quantity));
      setItems((prev) => {
        const idx = prev.findIndex((x) => x.product.id === product.id);
        if (idx === -1) return [...prev, { product, quantity: q }];
        const next = [...prev];
        next[idx] = { ...next[idx], quantity: next[idx].quantity + q };
        return next;
      });
    };

    const removeItem = (productId: string) => {
      setItems((prev) => prev.filter((x) => x.product.id !== productId));
    };

    const setQuantity = (productId: string, quantity: number) => {
      const q = Math.max(1, Math.floor(quantity));
      setItems((prev) => prev.map((x) => (x.product.id === productId ? { ...x, quantity: q } : x)));
    };

    const clear = () => setItems([]);

    const itemCount = items.reduce((sum, x) => sum + x.quantity, 0);
    const subtotal = items.reduce((sum, x) => sum + x.product.price * x.quantity, 0);

    return { items, addItem, removeItem, setQuantity, clear, itemCount, subtotal };
  }, [items]);

  return <CartContext.Provider value={api}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
