import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';

import { ScrollReveal } from '@/components/scroll-reveal';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { CategoryCard } from '@/components/category-card';
import { ProductCard } from '@/components/product-card';
import { categoryGroups, featuredProducts } from '@/lib/data';
import { allProducts } from '@/lib/store';

export function StoreHome() {
  const [q, setQ] = useState('');

  const results = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return [];
    return allProducts
      .filter((p) => (
        p.name.toLowerCase().includes(query) ||
        p.platform.toLowerCase().includes(query) ||
        p.region.toLowerCase().includes(query)
      ))
      .slice(0, 12);
  }, [q]);

  return (
    <div className="bg-background">
      {/* Header */}
      <section className="pt-28 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">Store</h1>
            <p className="text-muted-foreground">
              Browse categories, compare regional options, and place demo orders. This storefront is designed to help
              partners verify our MOR operating model (product catalog → checkout → order tracking → support).
            </p>
          </ScrollReveal>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
              <Input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search products (Steam, Xbox, ChatGPT, region…)"
                className="pl-9 bg-surface-1 border-border"
              />
            </div>
            <Button asChild className="bg-gradient-primary text-white border-0 hover:opacity-90">
              <Link to="/cart">Go to Cart</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Search results */}
      {results.length > 0 && (
        <section className="pb-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Search results</h2>
              <Button variant="ghost" className="text-primary hover:bg-primary/10" onClick={() => setQ('')}>
                Clear
              </Button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {results.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Groups */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {categoryGroups.map((group) => (
            <div key={group.id}>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">{group.title}</h2>
                  <p className="text-muted-foreground">{group.subtitle}</p>
                </div>
                <Button asChild variant="ghost" className="text-primary hover:bg-primary/10">
                  <Link to={`/store/group/${group.id}`} className="inline-flex items-center">
                    View all
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
                {group.categories.map((c, idx) => (
                  <CategoryCard key={c.id} category={c} index={idx} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trending */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Trending</h2>
              <p className="text-muted-foreground">Popular items from our catalog</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.slice(0, 8).map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
