import { Route,Routes, useLocation } from "react-router-dom"
import Home from "./Pages/Home"
import Product from "./Pages/Product"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import BlurShape from './Components/Shapes/BlurShape'
import Nav from "./Components/Navbar/Nav"
import { useEffect, useRef } from "react"
const App = () => {
  const location = useLocation();
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }
  }, [location.pathname]);
  return (
    <div className="text-textColor font-Primary_Font  overflow-hidden relative ">
     
      <Nav />
      <BlurShape />
      <div>
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
 
    </div>
  )
}

export default App