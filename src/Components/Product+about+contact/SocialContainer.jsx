import SubTitle from '../TextUi/SubTitle'
import Paragraph from '../TextUi/Paragraph'
import { Icon } from '@iconify/react/dist/iconify.js'
import { motion } from 'framer-motion'
const SocialContainer = () => {
  const data=[
    {
        icon:<Icon icon="material-symbols:mail" width="30" height="30" />,
        title:"Mail US",
        text:"Bytewise@gmail.com",
    },
    {
        icon:<Icon icon="ic:round-call" width="30" height="30" />,
        title:"Call us",
        text:"+1 (034) 765-7094",
     },
     {
        icon:<Icon icon="mdi:location" width="30" height="30" />,
        title:"Location",
        text:"Erbil&nishtiman",
     },
     {
        title:"Social",
        icons:[
            {icon:<Icon icon="pajamas:twitter" width="30" height="30" />},
            {icon:<Icon icon="dashicons:facebook-alt" width="30" height="30" />},
            {icon:<Icon icon="mdi:instagram" width="30" height="30" />},
            {icon:<Icon icon="bxl:linkedin" width="30" height="30" />},
             ],
        isSocial:true
     },
    ]
  return (
    <>
      {data.map((item,idx)=>(
        item.isSocial ?   (
            <div key={idx} className='flex flex-col lg:-mt-[8px] lg:gap-[16px] gap-[8px]'>
                <SubTitle>{item.title}</SubTitle>
                <div className='flex gap-[12px]'>
                    {item.icons?.map((icon,idx)=>(
                        <motion.div
                           key={idx} 
                           className='relative inline-block p-[1px]  rounded-[16px] bg-gradient-to-b from-[rgba(244,244,245,0.4)] to-[rgba(142,142,143,0)]  bg-clip-padding border border-transparent'
                           whileHover={{scale:1.05}}
                            >
                              <motion.span className='h-[55px] cursor-pointer w-[55px] bg-GradientBG flex items-center justify-center rounded-[16px]' >
                                   <motion.span  whileHover={{y:-5}} transition={{duration:0.2}}> {icon.icon}</motion.span>
                            </motion.span>  
                        </motion.div>
                          
                    ))}
                </div>

            </div>

        ):(
            <div key={idx} className="social flex items-start lg:gap-[16px] gap-[8px]">
                <motion.div  className='relative inline-block  p-[1px]  rounded-[16px] bg-gradient-to-b from-[rgba(244,244,245,0.4)] to-[rgba(142,142,143,0)] bg-clip-padding border border-transparent'
                     whileHover={{scale:1.05}}
                >
                    <span className="h-[55px] cursor-pointer w-[55px] bg-GradientBG rounded-[16px] flex items-center justify-center">
                           <motion.span  whileHover={{y:-5}} transition={{duration:0.2}}>{item.icon}</motion.span> 
                    </span>
                </motion.div>
                <span>
                    <SubTitle>{item.title}</SubTitle>
                    <Paragraph>{item.text}</Paragraph>
                </span>
        </div>
        )
    ))}
    </>
  
   
  ) 
}

export default SocialContainer