/* eslint-disable react/prop-types */

const Paragraph = ({children}) => {
  return (
    <p className={`lg:text-[20px] md:text-[18px] text-[16px] font-light tracking-wider z-10  leading-snug   capitalize`}>
   {children}
   </p>
  )
}

export default Paragraph