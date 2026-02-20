import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { PackageSearch, ArrowRight, CheckCircle2, Clock, BadgeCheck } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getOrder, listOrders } from '@/lib/orders';

const statusMeta = {
  created: { icon: Clock, label: 'Created' },
  paid: { icon: BadgeCheck, label: 'Paid' },
  delivered: { icon: CheckCircle2, label: 'Delivered' },
  refunded: { icon: CheckCircle2, label: 'Refunded' },
} as const;

export function TrackOrder() {
  const [params] = useSearchParams();
  const prefill = params.get('oid') ?? '';
  const [oid, setOid] = useState(prefill);

  const order = useMemo(() => {
    const id = oid.trim();
    if (!id) return undefined;
    return getOrder(id);
  }, [oid]);

  const recent = useMemo(() => listOrders().slice(0, 5), []);

  const meta = order ? statusMeta[order.status] : undefined;
  const Icon = meta?.icon;

  return (
    <div className="pt-28 pb-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Track Order</h1>
          <p className="text-muted-foreground">
            Enter your order ID (e.g. <span className="font-mono">CM-20260220-AB12CD</span>). Demo orders are stored in your
            browser.
          </p>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <PackageSearch className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
            <Input
              value={oid}
              onChange={(e) => setOid(e.target.value)}
              placeholder="Order ID"
              className="pl-9 bg-surface-1 border-border"
            />
          </div>
          <Button asChild className="bg-gradient-primary text-white border-0 hover:opacity-90">
            <Link to="/help">Help</Link>
          </Button>
        </div>

        <div className="mt-10">
          {order ? (
            <Card className="bg-surface-1 border-border">
              <CardHeader>
                <CardTitle className="flex items-center justify-between gap-4">
                  <span className="font-mono">{order.id}</span>
                  {Icon && (
                    <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon className="w-4 h-4 text-primary" /> {meta?.label}
                    </span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-muted-foreground">Created</div>
                    <div>{new Date(order.createdAt).toLocaleString()}</div>
                  </div>
                  <div>
                    <div className="text-muted-foreground">Amount</div>
                    <div className="font-semibold">{order.currency} {order.amount.toFixed(2)}</div>
                  </div>
                </div>

                <div className="mt-6">
                  <div className="text-muted-foreground text-sm mb-2">Items</div>
                  <div className="space-y-2">
                    {order.items.map((it) => (
                      <div key={it.product.id} className="flex items-center justify-between text-sm">
                        <span>{it.quantity} × {it.product.name}</span>
                        <span className="text-muted-foreground">${(it.product.price * it.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  <Button asChild className="bg-gradient-primary text-white border-0 hover:opacity-90">
                    <Link to="/store" className="inline-flex items-center">
                      Shop more <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="border-border bg-background">
                    <Link to="/contact">Contact support</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-surface-1 border-border">
              <CardHeader>
                <CardTitle>Not found</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                If you just created a demo order, copy the ID from the confirmation toast or check “Recent demo orders” below.
              </CardContent>
            </Card>
          )}
        </div>

        {recent.length > 0 && (
          <div className="mt-10">
            <div className="text-sm text-muted-foreground mb-3">Recent demo orders</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {recent.map((o) => (
                <Card key={o.id} className="bg-surface-1 border-border">
                  <CardContent className="p-4 flex items-center justify-between gap-4">
                    <div>
                      <div className="font-mono text-sm">{o.id}</div>
                      <div className="text-xs text-muted-foreground">{new Date(o.createdAt).toLocaleString()}</div>
                    </div>
                    <Button size="sm" variant="outline" className="border-border bg-background" onClick={() => setOid(o.id)}>
                      View
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
