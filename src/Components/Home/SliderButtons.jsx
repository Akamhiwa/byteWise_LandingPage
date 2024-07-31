/* eslint-disable react/prop-types */
import SliderBtn from "../Buttons/SliderBtn";
const SliderButtons = ({handleDecrement,handleIncrement}) => {
  
  return (
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
  )
}

export default SliderButtons