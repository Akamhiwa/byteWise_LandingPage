import { NavLink } from "react-router-dom"

const HeadingButton = () => {
  return (
    <div className="flex items-center justify-center gap-[44px]">
    <NavLink 
    to={"/Product"} 
    className="py-[14px] px-[60px] bg-Primary text-[16px] tracking-widest
     uppercase rounded-[16px] font-bold  hover:shadow-glow">Products</NavLink>
    <NavLink 
    to={"/About"}
     className="py-[14px] px-[60px]  text-[16px] uppercase 
     tracking-widste rounded-[16px]  font-bold gradient-border"
      style={{
        background: 'linear-gradient(to bottom, rgba(21, 29, 44, 25), rgba(11, 16, 24, 25))'
      }}>About Us</NavLink>
  </div>
  )
}

export default HeadingButton