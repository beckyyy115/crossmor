import { Routes, Route, Navigate } from 'react-router-dom';
import { SiteLayout } from '@/layouts/site-layout';

import { HomePage } from '@/pages/home';
import { StoreHome } from '@/pages/store/StoreHome';
import { StoreGroup } from '@/pages/store/StoreGroup';
import { CategoryPage } from '@/pages/store/CategoryPage';
import { ItemDetail } from '@/pages/store/ItemDetail';
import { CartPage } from '@/pages/store/CartPage';

import { ContactPage } from '@/pages/support/ContactPage';
import { HelpCenter } from '@/pages/support/HelpCenter';
import { TrackOrder } from '@/pages/support/TrackOrder';
import { RefundPolicyPage } from '@/pages/support/RefundPolicyPage';

import { TermsPage } from '@/pages/legal/TermsPage';
import { PrivacyPage } from '@/pages/legal/PrivacyPage';
import { CookiePage } from '@/pages/legal/CookiePage';
import { ComplianceCenter } from '@/pages/legal/ComplianceCenter';

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<HomePage />} />

        <Route path="/store" element={<StoreHome />} />
        <Route path="/store/group/:groupId" element={<StoreGroup />} />
        <Route path="/store/c/:categorySlug" element={<CategoryPage />} />
        <Route path="/item/:id" element={<ItemDetail />} />
        <Route path="/cart" element={<CartPage />} />

        <Route path="/contact" element={<ContactPage />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/track-order" element={<TrackOrder />} />
        <Route path="/refund-policy" element={<RefundPolicyPage />} />

        <Route path="/legal/terms" element={<TermsPage />} />
        <Route path="/legal/privacy" element={<PrivacyPage />} />
        <Route path="/legal/cookies" element={<CookiePage />} />
        <Route path="/compliance" element={<ComplianceCenter />} />

        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
