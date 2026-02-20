import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Ensures that navigation between routes starts at the top of the page.
 * Keeps hash-router UX clean when switching between store pages.
 */
export function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    // Skip smooth scroll for predictable “audit review” experience.
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [location.pathname, location.search]);

  return null;
}
