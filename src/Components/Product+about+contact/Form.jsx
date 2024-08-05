import { useState } from "react"
import useMouseEffect from "../../Hooks/useMouseEffect";
import MouseEffectShape from "../Shapes/MouseEffectShape";
import useScrollAnimationVariants from "../../Hooks/useScrollAnimationVariants";
import { motion } from "framer-motion";
const Form = () => {
  const { mousePosition, controls, handleMouseMove, handleMouseEnter, handleMouseLeave } = useMouseEffect();
  const variants = useScrollAnimationVariants(60, 0, 0.6);
  const [inputs,setInputs]=useState({
    FirstName:"",
    LastName:"",
    Email:"",
    Subject:"",
    Message:""
  })
  const handleChange=(e)=>{
    const { name, value } = e.target;
    setInputs(prevState=>({...prevState,[name]:value}))
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    if (!inputs.FirstName || !inputs.LastName || !inputs.Email || !inputs.Subject || !inputs.Message) return;
    setInputs({
      FirstName:"",
      LastName:"",
      Email:"",
      Subject:"",
      Message:""
    })
  }
  return (
    <motion.div className="bg-GradientBG border relative border-[#747474] rounded-[16px] lg:px-[32px] 2xl:w-[70%] w-full px-[16px] py-[22px] lg:py-[44px] z-10"   
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave} 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={variants}
          >
               <MouseEffectShape controls={controls} mousePosition={mousePosition} />
        <form className="flex flex-col lg:gap-[44px] gap-[33px] z-10 " onSubmit={handleSubmit}>
             <div className="flex flex-col lg:gap-[32px] gap-[22px]">
              <div className="flex lg:gap-[31px] gap-[22px] items-center justify-between">
                  <div className="flex flex-col gap-[12px] w-full">
                      <label htmlFor="FirstName" className="text-[16px] z-10 font-bold">First Name</label>
                      <input type="text" name="FirstName" value={inputs.FirstName} id="FirstName"  onChange={handleChange} className="bg-[#101722] z-10 border border-[#747474] focus:border-Primary w-full  outline-none py-[15px] pl-[29px]  rounded-[16px] " placeholder="EX:Name"/>
                  </div>
                  <div className="flex flex-col gap-[12px] w-full">
                      <label htmlFor="LastName" className="text-[16px] z-10 font-bold">Last Name</label>
                      <input type="text" name="LastName" value={inputs.LastName} onChange={handleChange} id="LastName" className="bg-[#101722] z-10 border border-[#747474] focus:border-Primary w-full outline-none py-[15px] pl-[29px]  rounded-[16px] " placeholder="EX:Name"/>
                  </div>
              </div>
                  <div className="flex flex-col gap-[12px] w-full">
                      <label htmlFor="Email" className="text-[16px] z-10 font-bold">Email</label>
                      <input type="email" name="Email" id="Email" value={inputs.Email}  onChange={handleChange} className="bg-[#101722] z-10 border border-[#747474] focus:border-Primary  outline-none py-[15px] pl-[29px] ring-Primary focus:ring-Primary rounded-[16px] " placeholder="EX:Name"/>
                  </div>
                  <div className="flex flex-col gap-[12px]  w-full">
                      <label htmlFor="Subject" className="text-[16px] z-10 font-bold">Subject</label>
                      <input type="text" name="Subject" id="Subject" value={inputs.Subject}  onChange={handleChange} className="bg-[#101722] z-10 border border-[#747474] focus:border-Primary  outline-none py-[15px] pl-[29px] focus:ring-red-700  rounded-[16px] " placeholder="EX:Name"/>
                  </div>
                  <div className="flex flex-col gap-[12px] z-10 w-full">
                      <label htmlFor="Message" className="text-[16px] z-10 font-bold">Message</label>
                      <textarea name="Message" id="Message" value={inputs.Message}  onChange={handleChange} className="bg-[#101722] z-10 border border-[#747474] focus:border-Primary  outline-none focus:ring-Primary py-[15px] pl-[29px] h-[170px]  rounded-[16px]" placeholder="your text here"></textarea>
                  </div>

              </div> 
              <div className="w-full z-10">
                <button className="py-[14px] md:px-[60px] px-[42px] w-full z-10  bg-Primary lg:text-[16px] text-[14px]
                     tracking-widest uppercase rounded-[16px] font-bold hover:shadow-glow" onClick={handleSubmit}>Send message</button>
              </div>
        </form>
    </motion.div>
  )
}

export default Form