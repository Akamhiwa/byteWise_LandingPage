/* eslint-disable no-mixed-spaces-and-tabs */
import { NavLink } from "react-router-dom"
import Languages from "./Languages"

const Nav = () => {
  return (
    <div className={`px-[220px] h-[95px] fixed inset-0 z-30 backdrop-blur-md`}
    style={{ 
      background: 'linear-gradient(to bottom, rgba(21, 29, 44, 0.25), rgba(11, 16, 24, 0.25))'
    }}>
         <div className="flex items-center h-full justify-between ">
        <NavLink to={'/Home'} className={' uppercase tracking-widest text-[31px] font-semibold '}>ByteWIse</NavLink>
        <ul className=" flex items-center justify-center gap-[32px] ">
            <NavLink to={'/Home'} className={'text-[14px] uppercase tracking-widest hover:text-Primary'}>Home</NavLink>
            <NavLink to={'/Product'} className={'text-[14px] uppercase tracking-widest hover:text-Primary'}>Products</NavLink>
            <NavLink to={'/About'} className={'text-[14px] uppercase tracking-widest hover:text-Primary'}>About US</NavLink>
            <NavLink to={'/Contact'} className={'text-[14px] uppercase tracking-widest hover:text-Primary'}>Contact Us</NavLink>
        </ul>
        <div>
          <Languages />
        </div>
    </div>
    </div>
    
     
  )
}

export default Nav