import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import './i18n'
import './index.css'
import App from './App.tsx'
import { CartProvider } from './state/cart'
import { ErrorBoundary } from './components/error-boundary'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ErrorBoundary>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
        <CartProvider>
          <HashRouter>
            <App />
          </HashRouter>
        </CartProvider>
      </Suspense>
    </ErrorBoundary>
  </StrictMode>,
)
