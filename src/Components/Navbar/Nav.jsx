/* eslint-disable no-mixed-spaces-and-tabs */
import { NavLink } from "react-router-dom"
import Languages from "./Languages"

const Nav = () => {
  return (
    <div className=" px-[220px] h-[95px]">
         <div className="flex items-center h-full justify-between z-10">
        <div className="text-[31px] font-semibold tracking-widest">Bytewise</div>
        <ul className=" flex items-center justify-center gap-[32px] ">
            <NavLink to={'/Home'} className={'text-[14px] uppercase tracking-widest'}>Home</NavLink>
            <NavLink to={'/Product'} className={'text-[14px] uppercase tracking-widest'}>Products</NavLink>
            <NavLink to={'/About'} className={'text-[14px] uppercase tracking-widest'}>About US</NavLink>
            <NavLink to={'/Contact'} className={'text-[14px] uppercase tracking-widest'}>Contact Us</NavLink>
        </ul>
        <div>
          <Languages />
        </div>
    </div>
    </div>
  //  make languages as custom dropdown not select input
  )
}

export default Nav