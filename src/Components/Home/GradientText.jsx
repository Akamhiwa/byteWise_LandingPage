/* eslint-disable react/prop-types */

const GradientText = ({Title}) => {
  return (
    <h1
    className="font-bold text-[61px] bg-300% bg-gradient-to-r animate-gradient 
     from-[#F4F4F5] via-[#f4f5f5d5] to-[#91949F]  text-center uppercase leading-tight tracking-widest"
    style={{
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      color: "transparent",
    }}
  >
    {Title}
  </h1>
  )
}

export default GradientText