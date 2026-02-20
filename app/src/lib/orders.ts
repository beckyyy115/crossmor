import type { CartItem } from '@/types';

export type OrderStatus = 'created' | 'paid' | 'delivered' | 'refunded';

export type Order = {
  id: string;
  createdAt: string;
  email?: string;
  status: OrderStatus;
  items: CartItem[];
  amount: number;
  currency: string;
};

const KEY = 'crossmor_orders_v1';

function load(): Order[] {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as Order[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function save(orders: Order[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(orders));
  } catch {
    // ignore
  }
}

export function listOrders(): Order[] {
  return load().sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));
}

export function getOrder(id: string): Order | undefined {
  return load().find((o) => o.id.toLowerCase() === id.toLowerCase());
}

export function createDemoOrder(args: {
  items: CartItem[];
  amount: number;
  currency?: string;
  email?: string;
}): Order {
  const now = new Date();
  const id = `CM-${now.getUTCFullYear()}${String(now.getUTCMonth() + 1).padStart(2, '0')}${String(now.getUTCDate()).padStart(2, '0')}-${Math.random().toString(16).slice(2, 8).toUpperCase()}`;

  const order: Order = {
    id,
    createdAt: now.toISOString(),
    status: 'created',
    items: args.items,
    amount: args.amount,
    currency: args.currency ?? 'USD',
    email: args.email,
  };

  const orders = load();
  orders.unshift(order);
  save(orders.slice(0, 50));
  return order;
}

export function updateOrderStatus(id: string, status: OrderStatus) {
  const orders = load();
  const idx = orders.findIndex((o) => o.id === id);
  if (idx === -1) return;
  orders[idx] = { ...orders[idx], status };
  save(orders);
}
