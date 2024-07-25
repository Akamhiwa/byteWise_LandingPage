import { NavLink } from "react-router-dom"

const HeadingButton = () => {
  return (
    <div className="flex items-center justify-center gap-[44px]">
    <NavLink to={"/Product"} className="py-[14px] px-[60px] bg-Primary text-[16px] tracking-widest uppercase rounded-[16px] font-bold  shadow-glow">Products</NavLink>
    <NavLink to={"/About"} className="py-[14px] px-[60px] bg-GradientBG text-[16px] uppercase tracking-widste rounded-[16px]  font-bold gradient-border">About Us</NavLink>
  </div>
  )
}

export default HeadingButton