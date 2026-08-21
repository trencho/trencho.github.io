import { lazy, Suspense, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { ThemeProvider } from '@/shared/theme/ThemeProvider';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import Loader from '@/shared/ui/Loader';
import Home from '@/layout/Home';
import ErrorBoundary from '@/shared/ui/ErrorBoundary';

// Lazy-load the NotFound route so it stays out of the main bundle.
const NotFound = lazy(() => import('@/shared/ui/NotFound'));

const App = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const handleLoaderComplete = () => {
    setLoading(false);
  };

  return (
    <ErrorBoundary>
      <MotionConfig reducedMotion='user'>
        <ThemeProvider>
          <Router>
            <div className='App'>
              {loading && <Loader onComplete={handleLoaderComplete} />}
              {!loading && (
                <Suspense fallback={null}>
                  <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='*' element={<NotFound />} />
                  </Routes>
                </Suspense>
              )}
            </div>
          </Router>
        </ThemeProvider>
      </MotionConfig>
    </ErrorBoundary>
  );
};

export default App;
