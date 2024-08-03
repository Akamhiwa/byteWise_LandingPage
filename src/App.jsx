import { Route,Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Product from "./Pages/Product"
import About from "./Pages/About"
import Contact from "./Pages/Contact"
import BlurShape from './Components/Shapes/BlurShape'
import Nav from "./Components/Navbar/Nav"
const App = () => {
  return (
    <div className="text-textColor font-Primary_Font overflow-hidden relative ">
      <Nav />
      <BlurShape />
      <div>
        <Routes>
          <Route path="/" index element={<Home />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/About" index element={<About />}></Route>
          <Route path="/Product" index element={<Product />}></Route>
          <Route path="/Contact" index element={<Contact />}></Route>
        </Routes>
      </div>

      
    </div>
  )
}

export default App