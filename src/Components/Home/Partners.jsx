import { useEffect, useState } from "react"
import { animate, motion, useMotionValue } from "framer-motion"
import useMeasure from 'react-use-measure'
import Partner from "./Partner"
const Partners = () => {
  
    const icons=["cib:amazon-aws","cib:habr","cib:stumbleupon","cib:spotify",
      "cib:macys","cib:gitlab","cib:codio","cib:opsgenie","cib:stripe",
      "cib:tinder","cib:cloudbees","cib:bitdefender","cib:opsgenie","cib:stripe"
    
  ]
  let [Ref,{width}]=useMeasure();
 //make the functionality dor a custome hook we need it for the teams and testimonial sections as it is the same functionality with different props 
  const Xtranslation=useMotionValue(0)

  const Fast_duration=23
  const Slow_duration=75
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
  



// absolute left-0 
  return (
    <main className="py-8 ">
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
          [...icons,...icons].map((icon,idx)=>(
          <Partner icon={icon} key={idx}/>
          ))
        }
      </motion.div>
    </main>
  )
}

export default Partners