import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import Home from "./components/Home";
import Loader from "./components/Loader";
import NotFound from "./components/NotFound";
import { ThemeProvider } from "./context/ThemeProvider";

const App = () => {
  const [loading, setLoading] = useState(true);

  const handleLoaderComplete = () => {
    setLoading(false);
  };

  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          {loading && <Loader onComplete={handleLoaderComplete} />}
          {!loading && (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          )}
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
