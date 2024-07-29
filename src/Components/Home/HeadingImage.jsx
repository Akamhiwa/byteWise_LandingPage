import { useState } from 'react'
import bytewiseImage from '../../../public/images/bytewise.png'
import TechStore from '../../../public/images/techstore.jpg'
import Team from '../../../public/images/team.png'
import SliderButtons from './SliderButtons'
import SliderIndicator from './SliderIndicator'
import ImageOverlay from './ImageOverlay'
const HeadingImage = () => {
  const [ActiveImage,SetACtiveImage]=useState(1)
  const images=[bytewiseImage,TechStore,Team]

  const handleIncrement = () => {
    SetACtiveImage((prev) => (prev >= images.length ? 1 : prev + 1))
  }

  const handleDecrement = () => {
    SetACtiveImage((prev) => (prev <= 1 ? images.length : prev - 1))
  }
  return (
    <div className="my-[83px] w-full ">
        <div className="relative w-full ">
            <div className="bg-cover h-[800px]  bg-center relative rounded-[16px]" 
              style={{ 
            backgroundImage: `url(${images[ActiveImage-1]})`,
          
          }}>
               <SliderButtons handleDecrement={handleDecrement} handleIncrement={handleIncrement}/>
                <SliderIndicator images={images} ActiveImage={ActiveImage} SetACtiveImage={SetACtiveImage}/>
                <ImageOverlay />
            </div>

        </div>

    </div>
  )
}

export default HeadingImage