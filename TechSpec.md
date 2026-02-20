# PayCore - Technical Specification

---

## Component Inventory

### shadcn/ui Components (Built-in)

| Component | Purpose | Customization |
|-----------|---------|---------------|
| Button | CTAs, actions | Custom gradient variant, glow effect |
| Card | Product cards, feature cards | Dark theme styling |
| Input | Form fields | Dark theme, focus glow |
| Badge | Platform tags, status | Custom color variants |
| Dialog | Modals, quick view | Dark backdrop |
| Dropdown Menu | Navigation, filters | Dark theme |
| Select | Country, currency, sorting | Custom styling |
| Tabs | Product details, categories | Underline style |
| Accordion | FAQ, mobile footer | Dark theme |
| Sheet | Mobile navigation | Slide from right |
| Skeleton | Loading states | Pulse animation |
| Toast | Notifications | Custom positioning |
| Tooltip | Info hints | Quick show/hide |
| Separator | Visual dividers | Subtle color |
| Scroll Area | Custom scrollbars | Hidden/default |

### Third-Party Registry Components

| Component | Registry | Purpose |
|-----------|----------|---------|
| @magicui/particles | magicui | Hero background effect |
| @magicui/number-ticker | magicui | Stats counter animation |
| @aceternity/floating-navbar | aceternity | Enhanced navigation |

### Custom Components

| Component | Purpose | Location |
|-----------|---------|----------|
| GradientButton | Primary CTA with gradient | `components/ui/gradient-button.tsx` |
| ProductCard | Product display card | `components/product-card.tsx` |
| CategoryCard | Category navigation card | `components/category-card.tsx` |
| TrustBadge | Trust indicator with icon | `components/trust-badge.tsx` |
| PriceDisplay | Price with discount formatting | `components/price-display.tsx` |
| AnimatedCounter | Stats counter animation | `components/animated-counter.tsx` |
| ScrollReveal | Scroll-triggered animation wrapper | `components/scroll-reveal.tsx` |
| PaymentIcon | Payment method logo | `components/payment-icon.tsx` |
| StarRating | Product rating display | `components/star-rating.tsx` |

---

## Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Hero text stagger reveal | Framer Motion | `staggerChildren` variant on container | Medium |
| Gradient orb floating | CSS Keyframes | `@keyframes float` with transform | Low |
| Navbar scroll effect | React Hook | `useScroll` hook, opacity/blur transition | Low |
| Card hover lift | Tailwind + FM | `whileHover={{ y: -4 }}` | Low |
| Button hover glow | CSS + Tailwind | Box-shadow transition, scale | Low |
| Scroll reveal (fade-up) | Framer Motion | `useInView` + motion.div | Medium |
| Category card stagger | Framer Motion | Parent `staggerChildren: 0.05` | Medium |
| Product grid reveal | Framer Motion | `variants` with stagger | Medium |
| Stats counter | Custom Hook | `useCountUp` with requestAnimationFrame | Medium |
| How it works line draw | Framer Motion | `pathLength` animation on SVG | High |
| Step icon bounce | Framer Motion | `spring` transition on reveal | Low |
| Testimonial card hover | Tailwind | `hover:shadow-lg hover:-translate-y-1` | Low |
| Payment logo grayscale | Tailwind | `grayscale hover:grayscale-0` | Low |
| CTA gradient shift | CSS Keyframes | `@keyframes gradient-shift` | Low |
| Cart badge pulse | CSS Keyframes | `@keyframes pulse` | Low |
| Mobile menu slide | Framer Motion | `AnimatePresence` + slide variant | Medium |
| Dropdown fade-slide | Framer Motion | `initial/animate/exit` variants | Low |
| Loading skeleton | Tailwind | `animate-pulse` | Low |

---

## Animation Library Choices

### Primary: Framer Motion
**Rationale**: Best React integration, declarative API, excellent performance

**Use for**:
- Component mount/unmount animations
- Scroll-triggered reveals
- Hover/tap interactions
- Page transitions
- Complex stagger sequences

### Secondary: CSS Keyframes
**Rationale**: Zero JS overhead, perfect for continuous animations

**Use for**:
- Infinite floating animations
- Gradient shifts
- Pulse effects
- Simple transitions

### Utilities
- **Tailwind CSS**: Utility-based simple transitions
- **Intersection Observer**: Scroll trigger detection (via Framer Motion's `useInView`)

---

## Project File Structure

```
/mnt/okcomputer/output/app/
├── app/
│   ├── page.tsx                    # Home page
│   ├── layout.tsx                  # Root layout
│   ├── globals.css                 # Global styles
│   ├── category/
│   │   └── [slug]/
│   │       └── page.tsx            # Category page
│   ├── product/
│   │   └── [id]/
│   │       └── page.tsx            # Product detail
│   ├── cart/
│   │   └── page.tsx                # Cart page
│   ├── checkout/
│   │   └── page.tsx                # Checkout page
│   ├── dashboard/
│   │   └── page.tsx                # User dashboard
│   └── support/
│       └── page.tsx                # Support/FAQ
├── components/
│   ├── ui/                         # shadcn components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── badge.tsx
│   │   ├── dialog.tsx
│   │   ├── dropdown-menu.tsx
│   │   ├── select.tsx
│   │   ├── tabs.tsx
│   │   ├── accordion.tsx
│   │   ├── sheet.tsx
│   │   ├── skeleton.tsx
│   │   ├── toast.tsx
│   │   ├── tooltip.tsx
│   │   ├── separator.tsx
│   │   ├── scroll-area.tsx
│   │   └── gradient-button.tsx     # Custom
│   ├── navigation.tsx              # Main navbar
│   ├── mobile-nav.tsx              # Mobile navigation
│   ├── hero.tsx                    # Hero section
│   ├── category-grid.tsx           # Category cards
│   ├── featured-products.tsx       # Product grid
│   ├── how-it-works.tsx            # Process steps
│   ├── trust-security.tsx          # Trust section
│   ├── payment-methods.tsx         # Payment logos
│   ├── testimonials.tsx            # Reviews
│   ├── cta-banner.tsx              # Final CTA
│   ├── footer.tsx                  # Site footer
│   ├── product-card.tsx            # Product card
│   ├── category-card.tsx           # Category card
│   ├── trust-badge.tsx             # Trust indicator
│   ├── price-display.tsx           # Price formatter
│   ├── animated-counter.tsx        # Counter animation
│   ├── scroll-reveal.tsx           # Scroll wrapper
│   ├── payment-icon.tsx            # Payment logo
│   └── star-rating.tsx             # Rating stars
├── hooks/
│   ├── use-scroll-position.ts      # Scroll tracking
│   ├── use-count-up.ts             # Counter animation
│   └── use-media-query.ts          # Responsive
├── lib/
│   ├── utils.ts                    # Utilities
│   └── data.ts                     # Mock data
├── types/
│   └── index.ts                    # TypeScript types
├── public/
│   ├── images/
│   │   ├── products/               # Product images
│   │   ├── categories/             # Category images
│   │   ├── payment/                # Payment logos
│   │   └── hero/                   # Hero assets
│   └── fonts/                      # Custom fonts
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Dependencies

### Core
```json
{
  "next": "latest",
  "react": "^18",
  "react-dom": "^18",
  "typescript": "^5"
}
```

### Styling
```json
{
  "tailwindcss": "^3.4",
  "@tailwindcss/forms": "latest",
  "class-variance-authority": "latest",
  "clsx": "latest",
  "tailwind-merge": "latest"
}
```

### Animation
```json
{
  "framer-motion": "^11"
}
```

### UI Components
```json
{
  "@radix-ui/react-*": "latest",
  "lucide-react": "latest"
}
```

### Utilities
```json
{
  "zod": "latest",
  "react-hook-form": "latest"
}
```

---

## Key Implementation Notes

### Dark Theme Setup
- Use CSS variables for theme colors
- Default to dark mode
- `dark` class on html element

### Animation Performance
- Use `transform` and `opacity` only
- Add `will-change` sparingly
- Implement `prefers-reduced-motion` support

### Responsive Strategy
- Mobile-first approach
- Breakpoints: sm(640), md(768), lg(1024), xl(1280)
- Touch-friendly tap targets (min 44px)

### Accessibility
- Semantic HTML structure
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus visible states
- Color contrast compliance

---

## Build Configuration

### next.config.js
```javascript
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true
  }
}
module.exports = nextConfig
```

### tailwind.config.ts
- Custom colors from Design.md
- Custom animations
- Extended spacing scale
