import { Route, Routes } from 'react-router-dom';

import Catalog from "../src/Pages/Catalog"
import Centers from '../src/Pages/Centers';
import Commercial from '../src/Pages/Commercial';
import Dashboard from '../src/Pages/Dashboard';
import Explore from '../src/Pages/Explore';
import Home from '../src/Pages/Home';
import SpaceCrafts from '../src/Pages/SpaceCrafts';
import About from '../src/Pages/About';

import NavBar from  "../src/components/NavBar"

import Footer from '../src/components/Footer';

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