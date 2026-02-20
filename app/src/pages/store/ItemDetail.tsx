import { useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, ShieldCheck, Zap, Mail } from 'lucide-react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/state/cart';
import { allProducts, getProductById } from '@/lib/store';

export function ItemDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = id ? getProductById(id) : undefined;
  const { addItem } = useCart();

  const related = useMemo(() => {
    if (!product) return [];
    return allProducts
      .filter((p) => p.category === product.category && p.id !== product.id)
      .slice(0, 6);
  }, [product]);

  const [qty, setQty] = useState(1);
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState<string>('auto');

  const regionOptions = useMemo(() => {
    if (!product) return [];
    const regions = Array.from(
      new Set(allProducts.filter((p) => p.category === product.category).map((p) => p.region))
    ).sort();
    return regions;
  }, [product]);

  if (!product) {
    return (
      <div className="pt-28 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold mb-2">Item not found</h1>
          <p className="text-muted-foreground mb-6">Please return to the store and choose another item.</p>
          <Button asChild className="bg-gradient-primary text-white border-0">
            <Link to="/store">Back to Store</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 mb-8">
          <Button variant="outline" className="border-border bg-surface-1" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-4 h-4 mr-2" /> Back
          </Button>
          <Button asChild className="bg-gradient-primary text-white border-0 hover:opacity-90">
            <Link to="/cart">View Cart</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Image */}
          <div className="bg-surface-1 border border-border rounded-2xl overflow-hidden">
            <div className="aspect-[4/3] bg-surface-2">
              <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="p-5">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">{product.platform}</Badge>
                <Badge variant="secondary">{product.region}</Badge>
                {product.instantDelivery && (
                  <Badge className="bg-primary/15 text-primary border border-primary/20">Instant delivery</Badge>
                )}
              </div>
              <p className="text-sm text-muted-foreground mt-3">
                Digital delivery product. Codes are issued electronically after order confirmation.
              </p>
            </div>
          </div>

          {/* Purchase */}
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">{product.name}</h1>
            <p className="text-muted-foreground mb-6">
              Sold by CrossMor (Merchant of Record). We handle payment acceptance, tax/compliance screening, and post-sale
              support.
            </p>

            <div className="bg-surface-1 border border-border rounded-2xl p-6">
              <div className="flex items-baseline justify-between gap-4">
                <div>
                  <div className="text-3xl font-bold">${product.price.toFixed(2)}</div>
                  {product.originalPrice && (
                    <div className="text-sm text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</div>
                  )}
                </div>
                <div className="text-sm text-muted-foreground">USD · Taxes may apply by region</div>
              </div>

              <Separator className="my-6" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <div className="text-sm text-muted-foreground mb-2">Region</div>
                  <Select value={region} onValueChange={setRegion}>
                    <SelectTrigger className="bg-background border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="auto">Auto (recommended)</SelectItem>
                      {regionOptions.map((r) => (
                        <SelectItem key={r} value={r}>{r}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <div className="text-sm text-muted-foreground mb-2">Quantity</div>
                  <Input
                    type="number"
                    min={1}
                    value={qty}
                    onChange={(e) => setQty(Math.max(1, Math.floor(Number(e.target.value) || 1)))}
                    className="bg-background border-border"
                  />
                </div>
              </div>

              <div className="mt-4">
                <div className="text-sm text-muted-foreground mb-2 inline-flex items-center gap-2">
                  <Mail className="w-4 h-4" /> Delivery email (optional)
                </div>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  className="bg-background border-border"
                />
                <p className="text-xs text-muted-foreground mt-2">
                  We use this for digital delivery confirmation. In real checkout, email is required.
                </p>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <Button
                  className="bg-gradient-primary text-white border-0 hover:opacity-90"
                  onClick={() => {
                    addItem(product, qty);
                    toast.success('Added to cart', { description: `${qty} × ${product.name}` });
                  }}
                >
                  <Zap className="w-4 h-4 mr-2" /> Add to cart
                </Button>
                <Button asChild variant="outline" className="border-border bg-background">
                  <Link to="/contact">Talk to sales</Link>
                </Button>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <ShieldCheck className="w-4 h-4 text-primary" /> PCI-style secure checkout
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <ShieldCheck className="w-4 h-4 text-primary" /> Fraud & compliance screening
                </div>
              </div>
            </div>

            {related.length > 0 && (
              <div className="mt-10">
                <h2 className="text-xl font-semibold mb-4">Related items</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {related.map((p) => (
                    <div key={p.id} className="bg-surface-1 border border-border rounded-xl p-4">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <div className="font-medium">{p.name}</div>
                          <div className="text-xs text-muted-foreground">{p.platform} · {p.region}</div>
                        </div>
                        <Button asChild size="sm" className="bg-gradient-primary text-white border-0">
                          <Link to={`/item/${p.id}`}>View</Link>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
