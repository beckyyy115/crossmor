import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react';
import { useLocation } from 'react-router-dom';
import { getActiveCategoryIdFromPath } from '@/lib/nav-utils';

const DEFAULT_CATEGORY_ID = 'ai-digital-tools';

type ActiveCategoryContextValue = {
  activeCategory: string;
  setActiveCategory: (id: string) => void;
};

const ActiveCategoryContext = createContext<ActiveCategoryContextValue | null>(null);

export function ActiveCategoryProvider({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const [activeCategory, setActiveCategoryState] = useState<string>(DEFAULT_CATEGORY_ID);

  useEffect(() => {
    const next =
      getActiveCategoryIdFromPath(pathname) ?? (pathname === '/store' ? 'deals' : null) ?? DEFAULT_CATEGORY_ID;
    setActiveCategoryState(next);
  }, [pathname]);

  const setActiveCategory = useCallback((id: string) => {
    setActiveCategoryState(id);
  }, []);

  const value = useMemo(
    () => ({ activeCategory, setActiveCategory }),
    [activeCategory, setActiveCategory],
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
