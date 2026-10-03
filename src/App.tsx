import { lazy, Suspense } from 'react';
import { domAnimation, LazyMotion, MotionConfig } from 'motion/react';
import { ThemeProvider } from '@/shared/theme/ThemeProvider';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import Home from '@/layout/Home';
import ErrorBoundary from '@/shared/ui/ErrorBoundary';
import { CV_ROUTE } from '@/shared/utils/constants';

// Lazy-load the NotFound route so it stays out of the main bundle.
const NotFound = lazy(() => import('@/shared/ui/NotFound'));

// Same for the CV: every visitor reaches `/`, only some ask for the CV, and the
// route reads six of the seven data files.
const Cv = lazy(() => import('@/routes/Cv'));

// No splash screen: `#root` already holds the prerendered page, and a timed gate
// in front of it would blank that content before the app showed it again.
const App = () => (
  <ErrorBoundary>
    <MotionConfig reducedMotion='user'>
      {/* `m` components with only the DOM animation features: smaller than `motion`.
          `strict` throws if a full `motion` component slips back in. */}
      <LazyMotion features={domAnimation} strict>
        <ThemeProvider>
          <Router>
            <div className='App'>
              <Suspense fallback={null}>
                <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path={CV_ROUTE} element={<Cv />} />
                  <Route path='*' element={<NotFound />} />
                </Routes>
              </Suspense>
            </div>
          </Router>
        </ThemeProvider>
      </LazyMotion>
    </MotionConfig>
  </ErrorBoundary>
);

export default App;
