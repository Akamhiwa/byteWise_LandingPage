/* eslint-disable react/prop-types */
import { animate, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";
import Testimonial from "./Testimonial";
const TestimonialSliderPositiveX = ({testimonial}) => {
    let [Ref,{width}]=useMeasure();
    //make the functionality dor a custome hook we need it for the teams and testimonial sections as it is the same functionality with different props 
     const Xtranslation=useMotionValue(0)
   
     const Fast_duration=23
     const Slow_duration=37
     const [duration,setDUration]=useState(Fast_duration)
     const [mustFInish,setMustFInish]=useState(false)
     const [rerender,setReRender]=useState(false)
   
     useEffect(()=>{
       let controls;
       let finalPosition=-width/2.8-24;
       // change the calculation for responsivniess 
       if(mustFInish){
         controls=animate(Xtranslation,[Xtranslation.get(),finalPosition],{
           ease:"linear",
           duration:duration*(1-Xtranslation.get() / finalPosition)
           ,onComplete:()=>{
             setMustFInish(false)
             setReRender(!rerender)
           }
         })
   
       }
       else{
         controls =animate(Xtranslation,[0,finalPosition],{
           ease:"linear",
           duration:duration,
           repeat:Infinity,
           repeatType:"loop",
           repeatDelay:0
         })
   
       }
      
       return controls?.stop
     },[Xtranslation, width, duration, rerender, mustFInish])
  return (
    <div>
          <motion.div
         onHoverStart={()=>{
          setDUration(Slow_duration)
          setMustFInish(true)
          }}
          onHoverEnd={()=>{ 
            setDUration(Fast_duration)
            setMustFInish(true)
          }}

          className="flex gap-[44px]"
          ref={Ref}
          style={{x:Xtranslation}}
          >
            {
          [...testimonial,...testimonial].map((testimonial,idx)=>(
          <Testimonial testimonial={testimonial} key={idx}/>
          ))
        }
      </motion.div>

    </div>
  )
}

export default TestimonialSliderPositiveX