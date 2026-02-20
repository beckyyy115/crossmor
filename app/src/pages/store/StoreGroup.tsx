import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { CategoryCard } from '@/components/category-card';
import { getGroup } from '@/lib/store';

export function StoreGroup() {
  const { groupId } = useParams();
  const group = groupId ? getGroup(groupId) : undefined;

  if (!group) {
    return (
      <div className="pt-28 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold mb-2">Group not found</h1>
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
        <div className="flex items-center justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">{group.title}</h1>
            <p className="text-muted-foreground">{group.subtitle}</p>
          </div>
          <Button asChild variant="outline" className="border-border bg-surface-1">
            <Link to="/store" className="inline-flex items-center">
              <ArrowLeft className="w-4 h-4 mr-2" /> Back
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {group.categories.map((c, idx) => (
            <CategoryCard key={c.id} category={c} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
