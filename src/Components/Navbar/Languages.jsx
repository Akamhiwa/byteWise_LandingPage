import { useState } from "react"
import DropDown from "./DropDown"

const Languages = () => {
    const [value,setValue]=useState("English")
    const [isOpen,setIsOpen]=useState(false)
    const Languages=[
        {
            value:"English",
            Language:"English"
        },
        {
            value:"Kurdish",
            Language:"Kurdish"
        },
        {
            value:"Arabic",
            Language:"Arabic"
        }
    ]
    const handleDropDown=()=>{
        setIsOpen(PrevValue=>!PrevValue)
    }
    const handleValue=(value)=>{
        setValue(value)
        setIsOpen(PrevValue=>!PrevValue)
    }
  return (
    <div className="relative">
         <div 
         className=" w-[143px] rounded-full cursor-pointer h-[37px] flex items-center justify-center  gradient-border"
         onClick={()=>handleDropDown()}
         style={{
            background: 'linear-gradient(to bottom, rgba(21, 29, 44, 25), rgba(11, 16, 24, 25))'
          }}>
          <div className=" tracking-wide text-[16px] ">{value}</div>
            <div className="">
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" >
                  <path fill="currentColor" d="M16.293 9.293L12 13.586L7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z"></path>
                  </svg>
            </div>
          </div> 
          {isOpen &&(
           <DropDown Languages={Languages} handleValue={handleValue}/>
          )}

    </div>
    
          
  )
}

export default Languages