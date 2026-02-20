import { Outlet } from 'react-router-dom';
import { Navigation } from '@/sections/navigation';
import { Footer } from '@/sections/footer';
import { ScrollToTop } from '@/components/scroll-to-top';
import { Toaster } from '@/components/ui/sonner';

export function SiteLayout() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <ScrollToTop />
      <Toaster richColors closeButton />
      <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
