import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CreditCard, ArrowLeft, Trash2, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { useCart } from '@/state/cart';
import { createDemoOrder } from '@/lib/orders';

export function CartPage() {
  const navigate = useNavigate();
  const { items, subtotal, setQuantity, removeItem, clear } = useCart();
  const [email, setEmail] = useState('');
  const [open, setOpen] = useState(false);

  const canCheckout = items.length > 0;
  const total = useMemo(() => subtotal, [subtotal]);

  return (
    <div className="pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 mb-8">
          <Button variant="outline" className="border-border bg-surface-1" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-4 h-4 mr-2" /> Back
          </Button>
          <Button asChild variant="outline" className="border-border bg-surface-1">
            <Link to="/store">Continue shopping</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Items */}
          <div className="lg:col-span-2">
            <h1 className="text-3xl font-bold mb-4">Cart</h1>

            {items.length === 0 ? (
              <div className="bg-surface-1 border border-border rounded-2xl p-8">
                <p className="text-muted-foreground mb-6">Your cart is empty.</p>
                <Button asChild className="bg-gradient-primary text-white border-0">
                  <Link to="/store">Browse store</Link>
                </Button>
              </div>
            ) : (
              <div className="bg-surface-1 border border-border rounded-2xl divide-y divide-border">
                {items.map((item) => (
                  <div key={item.product.id} className="p-5 flex gap-4">
                    <div className="w-24 h-18 rounded-lg overflow-hidden bg-surface-2 shrink-0">
                      <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <Link to={`/item/${item.product.id}`} className="font-semibold hover:text-primary">
                            {item.product.name}
                          </Link>
                          <div className="text-xs text-muted-foreground mt-1">
                            {item.product.platform} · {item.product.region}
                          </div>
                        </div>
                        <div className="font-semibold">${(item.product.price * item.quantity).toFixed(2)}</div>
                      </div>

                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mt-4">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">Qty</span>
                          <Input
                            type="number"
                            min={1}
                            value={item.quantity}
                            onChange={(e) => setQuantity(item.product.id, Number(e.target.value) || 1)}
                            className="w-24 bg-background border-border"
                          />
                        </div>
                        <Button
                          variant="ghost"
                          className="text-destructive hover:text-destructive hover:bg-destructive/10 self-start"
                          onClick={() => removeItem(item.product.id)}
                        >
                          <Trash2 className="w-4 h-4 mr-2" /> Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Summary */}
          <div>
            <div className="bg-surface-1 border border-border rounded-2xl p-6 sticky top-24">
              <h2 className="text-xl font-semibold mb-4">Order summary</h2>
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Fees / taxes</span>
                  <span className="text-muted-foreground">Calculated at checkout</span>
                </div>
              </div>
              <Separator className="my-5" />
              <div className="flex items-center justify-between mb-5">
                <span className="font-semibold">Total</span>
                <span className="text-xl font-bold">${total.toFixed(2)}</span>
              </div>

              <div className="text-sm text-muted-foreground mb-2">Delivery email (optional)</div>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="bg-background border-border mb-5"
              />

              <Button
                disabled={!canCheckout}
                className="w-full bg-gradient-primary text-white border-0 hover:opacity-90"
                onClick={() => setOpen(true)}
              >
                <CreditCard className="w-4 h-4 mr-2" /> Demo checkout
              </Button>

              {items.length > 0 && (
                <Button
                  variant="ghost"
                  className="w-full mt-2 text-muted-foreground hover:bg-surface-2"
                  onClick={() => {
                    clear();
                    toast.message('Cart cleared');
                  }}
                >
                  Clear cart
                </Button>
              )}

              <p className="text-xs text-muted-foreground mt-4">
                This is a demo storefront for partner review. “Checkout” creates a local demo order ID you can track.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-xl">
          <DialogHeader>
            <DialogTitle>Demo checkout</DialogTitle>
            <DialogDescription>
              We’ll create a demo order and show the flow for payments, fraud checks and digital delivery.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4">
            <div className="bg-surface-1 border border-border rounded-xl p-4 text-sm">
              <div className="font-medium mb-2">What this simulates</div>
              <ul className="list-disc pl-5 text-muted-foreground space-y-1">
                <li>Merchant of Record checkout + receipts</li>
                <li>Basic compliance screening checkpoints</li>
                <li>Instant code delivery workflow</li>
              </ul>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Total</span>
              <span className="text-lg font-bold">${total.toFixed(2)} USD</span>
            </div>
          </div>

          <DialogFooter className="sm:justify-between gap-2">
            <Button variant="outline" className="border-border" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button
              className="bg-gradient-primary text-white border-0 hover:opacity-90"
              onClick={() => {
                const order = createDemoOrder({ items, amount: total, currency: 'USD', email: email.trim() || undefined });
                clear();
                setOpen(false);
                toast.success('Demo order created', { description: order.id });
                navigate(`/track-order?oid=${encodeURIComponent(order.id)}`);
              }}
            >
              <CheckCircle2 className="w-4 h-4 mr-2" /> Create order
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
