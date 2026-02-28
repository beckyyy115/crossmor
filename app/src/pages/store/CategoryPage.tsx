import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Filter } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ProductCard } from '@/components/product-card';
import { getCategoryBySlug, getProductsByCategorySlug } from '@/lib/store';

export function CategoryPage() {
  const { t } = useTranslation();
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
          <h1 className="text-2xl font-bold mb-2">{t('storeCategory.categoryNotFound')}</h1>
          <p className="text-muted-foreground mb-6">{t('storeCategory.categoryNotFoundHint')}</p>
          <Button asChild className="bg-gradient-primary text-white border-0">
            <Link to="/store">{t('storeGroup.backToStore')}</Link>
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
            <p className="text-muted-foreground">{t('storeCategory.subtitle')}</p>
          </div>
          <Button asChild variant="outline" className="border-border bg-surface-1">
            <Link to="/store" className="inline-flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" /> {t('common.back')}
            </Link>
          </Button>
        </div>

        <div className="bg-surface-1 border border-border rounded-xl p-4 sm:p-5 mb-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Filter className="w-4 h-4" />
            {t('storeCategory.filterSort')}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <Select value={platform} onValueChange={setPlatform}>
              <SelectTrigger className="bg-background border-border">
                <SelectValue placeholder={t('storeCategory.filterPlatform')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('storeCategory.allPlatforms')}</SelectItem>
                {platforms.map((p) => (
                  <SelectItem key={p} value={p}>{p}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={region} onValueChange={setRegion}>
              <SelectTrigger className="bg-background border-border">
                <SelectValue placeholder={t('storeCategory.filterRegion')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">{t('storeCategory.allRegions')}</SelectItem>
                {regions.map((r) => (
                  <SelectItem key={r} value={r}>{r}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className="bg-background border-border">
                <SelectValue placeholder={t('storeCategory.sortBy')} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popular">{t('storeCategory.mostPopular')}</SelectItem>
                <SelectItem value="rating">{t('storeCategory.highestRating')}</SelectItem>
                <SelectItem value="price_asc">{t('storeCategory.priceLowToHigh')}</SelectItem>
                <SelectItem value="price_desc">{t('storeCategory.priceHighToLow')}</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Products */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground">{t('storeCategory.itemsCount', { count: filtered.length })}</p>
          <Button asChild className="bg-gradient-primary text-white border-0 hover:opacity-90">
            <Link to="/cart">{t('common.viewCart')}</Link>
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
