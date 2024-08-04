/* eslint-disable react/prop-types */

import ImageOverlay from '../overlays/ImageOverlay'
const Imagebg = ({img,isBlur,children}) => {
  return (
    <div className='lg:h-[500px] h-[300px] relative'>
          <div className={`absolute inset-0   w-full ${isBlur && 'blur-2xl'}`} 
               style={{backgroundImage: `url(${img})`}}>
        <ImageOverlay />  
    </div>
    {children}

    </div>
  
  )
}

export default Imagebg