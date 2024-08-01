/* eslint-disable react/prop-types */

const Paragraph = ({isCentered,children}) => {
  return (
    <p className={`text-[20px] font-light tracking-wider z-10  leading-snug  ${isCentered ? 'text-center ':'text-left'} capitalize`}>
   {children}
   </p>
  )
}

export default Paragraph