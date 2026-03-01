import { useState } from 'react';
import { ThemeProvider } from './context/ThemeProvider';
import { BrowserRouter as Router, Route, Routes } from 'react-router';
import Loader from './components/Loader';
import Home from './components/Home';
import NotFound from './components/NotFound';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const handleLoaderComplete = () => {
    setLoading(false);
  };

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
          <div className='App'>
            {loading && <Loader onComplete={handleLoaderComplete} />}
            {!loading && (
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='*' element={<NotFound />} />
              </Routes>
            )}
          </div>
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
