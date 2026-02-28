/**
 * Derive active category id from current pathname (react-router).
 * Used for nav highlight and hero primary CTA.
 */
export function getActiveCategoryIdFromPath(pathname: string): string | null {
  if (pathname === '/store') return 'deals';
  const m = pathname.match(/^\/store\/group\/([^/]+)/);
  return m ? m[1] : null;
}

/** Get category id from nav item href (for comparison with activeId) */
export function getCategoryIdFromHref(href: string): string {
  if (href === '/store') return 'deals';
  const m = href.match(/\/store\/group\/([^/]+)/);
  return m ? m[1] : '';
}
