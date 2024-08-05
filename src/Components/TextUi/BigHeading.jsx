/* eslint-disable react/prop-types */

const BigHeading = ({children,}) => {
    return (
      <h1
      className={`font-bold lg:text-[61px] md:text-[41px] text-[31px] z-10 text-center uppercase 
      leading-tight tracking-widest`}
    >
      {children}
    </h1>
    )
  }
  
  export default BigHeading