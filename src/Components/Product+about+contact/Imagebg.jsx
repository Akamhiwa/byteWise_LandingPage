/* eslint-disable react/prop-types */

import ImageOverlay from '../overlays/ImageOverlay'
const Imagebg = ({img,isBlur,children}) => {
  return (
    <div className='lg:h-[500px] h-[300px] w-screen relative'>
          <div className={` h-full  w-full ${isBlur && 'blur-2xl'} bg-no-repeat bg-cover bg-center`} 
               style={{backgroundImage: `url(${img})`}}>
        <ImageOverlay />  
    </div>
    {children}

    </div>
  
  )
}

export default Imagebg