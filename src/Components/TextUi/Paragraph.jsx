/* eslint-disable react/prop-types */

const Paragraph = ({children,isSemiBold}) => {
  return (
    <p className={`lg:text-[20px] cursor-text md:text-[18px] text-[16px] ${isSemiBold ? 'font-semibold' :'font-light '} tracking-wider z-10  leading-snug   capitalize`}>
   {children}
   </p>
  )
}

export default Paragraph