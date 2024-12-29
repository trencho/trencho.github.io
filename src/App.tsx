import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Loader from "./components/Loader"; // Import Loader component

const App = () => {
  const [loading, setLoading] = useState(true);

  const handleLoaderComplete = () => {
    setLoading(false); // Hide loader after animation
  };

  return (
    <Router>
      <div className="App">
        {loading && <Loader onComplete={handleLoaderComplete} />}
        {!loading && (
          <Routes>
            {/* Home Route */}
            <Route path="/*" element={<Home />} />
          </Routes>
        )}
      </div>
    </Router>
  );
};

export default App;
