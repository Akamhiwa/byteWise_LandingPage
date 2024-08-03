/* eslint-disable react/prop-types */

const BigHeading = ({children}) => {
  return (
    <h1
    className="font-bold lg:text-[61px] md:text-[41px]  text-[31px]  bg-300% bg-gradient-to-r animate-gradient z-10
     from-[#F4F4F5] via-[#f4f5f5d5] to-[#91949F]  text-center uppercase leading-tight tracking-widest"
    style={{
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      color: "transparent",
    }}
  >
    {children}
  </h1>
  )
}

export default BigHeading