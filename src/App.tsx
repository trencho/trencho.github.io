import { lazy, Suspense, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { ThemeProvider } from './context/ThemeProvider';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import Loader from './components/Loader';
import Home from './components/Home';
import ErrorBoundary from './components/ErrorBoundary';

// Lazy-load the NotFound route so it stays out of the main bundle.
const NotFound = lazy(() => import('./components/NotFound'));

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
