import { ArrowRight } from 'lucide-react';
import { CategoryCard } from '@/components/category-card';
import { ScrollReveal } from '@/components/scroll-reveal';
import { Button } from '@/components/ui/button';
import { categoryGroups } from '@/lib/data';

export function CategoryGroups() {
  return (
    <section id="categories" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Browse by Category
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of digital goods across gaming, AI tools, and entertainment
          </p>
        </ScrollReveal>

        {/* Category Groups */}
        <div className="space-y-20">
          {categoryGroups.map((group, groupIndex) => (
            <div key={group.id} id={group.id}>
              {/* Group Header */}
              <ScrollReveal delay={groupIndex * 0.1}>
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                      {group.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {group.subtitle}
                    </p>
                  </div>
                  <Button
                    variant="ghost"
                    className="self-start sm:self-auto text-primary hover:text-primary hover:bg-primary/10"
                  >
                    View All
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </ScrollReveal>

              {/* Categories Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
                {group.categories.map((category, index) => (
                  <CategoryCard
                    key={category.id}
                    category={category}
                    index={index + groupIndex * 6}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
