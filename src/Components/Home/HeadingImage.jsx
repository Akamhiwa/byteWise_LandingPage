import { useState } from 'react'
import bytewiseImage from '../../../public/images/bytewise.png'
import TechStore from '../../../public/images/techstore.jpg'
import Team from '../../../public/images/team.png'
import SliderIndicator from './SliderIndicator'
import ImageOverlay from './ImageOverlay'
import SliderBtn from '../Buttons/SliderBtn'
import { motion } from 'framer-motion'
import useScrollAnimationVariants from '../../Hooks/useScrollAnimationVariants'
const HeadingImage = () => {
  const [ActiveImage,SetACtiveImage]=useState(1)
  const images=[bytewiseImage,TechStore,Team]
  
  const handleIncrement = () => {
    SetACtiveImage((prev) => (prev >= images.length ? 1 : prev + 1))
  }
  
  const handleDecrement = () => {
    SetACtiveImage((prev) => (prev <= 1 ? images.length : prev - 1))
  }

  const variants = useScrollAnimationVariants(-80, 0, 0.5);
  return (
    <motion.div className="my-[83px] w-full "  initial="hidden"
    whileInView="visible"
    viewport={{ once: false }}
    variants={variants}>
        <div className="relative w-full ">
            <div className="bg-cover h-[800px]  bg-center relative rounded-[16px]" 
              style={{ 
            backgroundImage: `url(${images[ActiveImage-1]})`,   
          }}>
             <div className='flex items-center justify-center gap-[12px] absolute top-[62px] right-[62px] z-10'>
                <SliderBtn handleClick={handleDecrement}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" >
                        <path fill="currentColor" d="M15.41 7.41L14 6l-6 6l6 6l1.41-1.41L10.83 12z"></path>
                    </svg>
                </SliderBtn>
 
                <SliderBtn handleClick={handleIncrement}>
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" >
                      <path fill="currentColor" d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z"></path>
                      </svg>
                </SliderBtn>
                </div>
                 
                <SliderIndicator images={images} ActiveImage={ActiveImage} SetACtiveImage={SetACtiveImage}/>
                <ImageOverlay />
            </div>

        </div>

    </motion.div>
  )
}

export default HeadingImage