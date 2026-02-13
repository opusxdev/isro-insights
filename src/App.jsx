import { Route, Routes } from 'react-router-dom';

import Catalog from "./pages/Catalog"
import Centers from './pages/Centers';
import Commercial from './pages/Commercial';
import Dashboard from './pages/Dashboard';
import Explore from './pages/Explore';
import Home from './pages/Home';
import SpaceCrafts from './pages/SpaceCrafts';
import About from './pages/About';
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"


function App() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col font-sans">
      <header className="z-50">
        <NavBar />
      </header>

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/commercial" element={<Commercial />} />
          <Route path="/catalog/spacecrafts" element={<SpaceCrafts />} />
          <Route path="/centers" element={<Centers />} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </main>

      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}

export default App;