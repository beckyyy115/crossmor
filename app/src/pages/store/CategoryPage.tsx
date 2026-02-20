import { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Filter } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ProductCard } from '@/components/product-card';
import { getCategoryBySlug, getProductsByCategorySlug } from '@/lib/store';

export function CategoryPage() {
  const { categorySlug } = useParams();
  const category = categorySlug ? getCategoryBySlug(categorySlug) : undefined;
  const products = useMemo(() => (categorySlug ? getProductsByCategorySlug(categorySlug) : []), [categorySlug]);

  const platforms = useMemo(() => Array.from(new Set(products.map((p) => p.platform))).sort(), [products]);
  const regions = useMemo(() => Array.from(new Set(products.map((p) => p.region))).sort(), [products]);

  const [platform, setPlatform] = useState<string>('all');
  const [region, setRegion] = useState<string>('all');
  const [sort, setSort] = useState<string>('popular');

  const filtered = useMemo(() => {
    let list = [...products];
    if (platform !== 'all') list = list.filter((p) => p.platform === platform);
    if (region !== 'all') list = list.filter((p) => p.region === region);

    if (sort === 'price_asc') list.sort((a, b) => a.price - b.price);
    if (sort === 'price_desc') list.sort((a, b) => b.price - a.price);
    if (sort === 'rating') list.sort((a, b) => b.rating - a.rating);
    if (sort === 'popular') list.sort((a, b) => b.reviewCount - a.reviewCount);

    return list;
  }, [products, platform, region, sort]);

  if (!categorySlug || !category) {
    return (
      <div className="pt-28 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold mb-2">Category not found</h1>
          <p className="text-muted-foreground mb-6">Please return to the store and choose a category.</p>
          <Button asChild className="bg-gradient-primary text-white border-0">
            <Link to="/store">Back to Store</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">{category.name}</h1>
            <p className="text-muted-foreground">Instant delivery digital goods · MOR checkout · Regional options</p>
          </div>
          <Button asChild variant="outline" className="border-border bg-surface-1">
            <Link to="/store" className="inline-flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back
            </Link>
          </Button>
        </div>

        {/* Filters */}
        <div className="bg-surface-1 border border-border rounded-xl p-4 sm:p-5 mb-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Filter className="w-4 h-4" />
            Filter & sort
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Select value={platform} onValueChange={setPlatform}>
              <SelectTrigger className="bg-background border-border">
                <SelectValue placeholder="Platform" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All platforms</SelectItem>
                {platforms.map((p) => (
                  <SelectItem key={p} value={p}>{p}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={region} onValueChange={setRegion}>
              <SelectTrigger className="bg-background border-border">
                <SelectValue placeholder="Region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All regions</SelectItem>
                {regions.map((r) => (
                  <SelectItem key={r} value={r}>{r}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className="bg-background border-border">
                <SelectValue placeholder="Sort" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">Most popular</SelectItem>
                <SelectItem value="rating">Highest rating</SelectItem>
                <SelectItem value="price_asc">Price: low to high</SelectItem>
                <SelectItem value="price_desc">Price: high to low</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Products */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground">{filtered.length} items</p>
          <Button asChild className="bg-gradient-primary text-white border-0 hover:opacity-90">
            <Link to="/cart">View Cart</Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filtered.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
