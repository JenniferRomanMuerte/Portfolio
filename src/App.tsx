import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Experience from "./pages/Experience/Experience";
import Projects from "./pages/Projects/Projects";
import LoadingOverlay from "./components/LoadingOverlay/LoadingOverlay";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      {isLoading && <LoadingOverlay visible={isLoading} />}
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Home onReady={() => setIsLoading(false)} />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
