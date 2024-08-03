/* eslint-disable react/prop-types */
const SliderIndicator = ({images,ActiveImage,SetACtiveImage}) => {
  return (
    <div className='sliders absolute z-10 lg:bottom-[62px] lg:left-[62px] bottom-[32px] left-[12px] flex items-center justify-center gap-[12px]'> 
                {images.map((_, index) => (
              <div 
                key={index} 
                className={`h-[4px] md:w-[110px] w-[80px] rounded-full cursor-pointer ${ActiveImage >= index + 1 ? 'bg-Primary' : 'bg-textColor'}`} 
                onClick={() => SetACtiveImage(index + 1)}></div>
            ))}
                </div>
  )
}

export default SliderIndicator