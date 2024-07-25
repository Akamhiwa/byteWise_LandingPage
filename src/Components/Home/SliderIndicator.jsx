/* eslint-disable react/prop-types */
const SliderIndicator = ({images,ActiveImage,SetACtiveImage}) => {
  return (
    <div className='sliders absolute z-10 bottom-[62px] left-[62px] flex items-center justify-center gap-[12px]'> 
                {images.map((_, index) => (
              <div 
                key={index} 
                className={`h-[4px] w-[110px] rounded-full cursor-pointer ${ActiveImage >= index + 1 ? 'bg-Primary' : 'bg-textColor'}`} 
                onClick={() => SetACtiveImage(index + 1)}></div>
            ))}
                </div>
  )
}

export default SliderIndicator