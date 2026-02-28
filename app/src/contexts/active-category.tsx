import { createContext, useContext, useMemo, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { getActiveCategoryIdFromPath } from '@/lib/nav-utils';

const DEFAULT_CATEGORY_ID = 'ai-digital-tools';

type ActiveCategoryContextValue = {
  activeCategory: string;
  setActiveCategory: (id: string) => void;
};

const ActiveCategoryContext = createContext<ActiveCategoryContextValue | null>(null);

/** Single source of truth: activeCategory is derived from pathname only (no state). */
export function ActiveCategoryProvider({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const activeCategory =
    getActiveCategoryIdFromPath(pathname) ??
    (pathname === '/store' ? 'deals' : null) ??
    DEFAULT_CATEGORY_ID;

  const value = useMemo(
    () => ({
      activeCategory,
      setActiveCategory: () => {},
    }),
    [activeCategory],
  );

  return (
    <ActiveCategoryContext.Provider value={value}>
      {children}
    </ActiveCategoryContext.Provider>
  );
}

export function useActiveCategory(): ActiveCategoryContextValue {
  const ctx = useContext(ActiveCategoryContext);
  if (!ctx) {
    return {
      activeCategory: DEFAULT_CATEGORY_ID,
      setActiveCategory: () => {},
    };
  }
  return ctx;
}
