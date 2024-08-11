/* eslint-disable react/prop-types */

const SubTitle = ({children,isSemibold}) => {
  return (
    <h1 className={`lg:text-[24px] cursor-text md:text-[20px] text-[18px]  z-20 uppercase ${isSemibold ? 'font-semibold':"font-normal"} leading-snug tracking-wide `}>{children}</h1>
  )
}

export default SubTitle