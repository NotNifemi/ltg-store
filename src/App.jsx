import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Intro from "./components/Intro";
import Marquee from "./components/Marquee";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MusicPlayer from "./components/MusicPlayer";
import { useMusic } from "./context/MusicContext";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {window.scrollTo(0, 0);}, [pathname]);
  return null;
}

export default function App() {
  const [entered, setEntered] = useState(false);
  const { play } = useMusic();

  const handleEnter = (withSound) => {
    if (withSound) play(); // music must start from a click
    setEntered(true);
  };

  return (
    <>
      {!entered && <Intro onEnter={handleEnter} />}
      <ScrollToTop />
      <Marquee />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <MusicPlayer />
    </>
  );
}
