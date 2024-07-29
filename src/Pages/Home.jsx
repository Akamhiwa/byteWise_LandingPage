import Heading from "../Components/Home/Heading"
import HeadingImage from "../Components/Home/HeadingImage"
import Partners from "../Components/Home/Partners"
import ServicesContainer from "../Components/Home/ServicesContainer"
import SectionTitle from "../Components/sectionTitle/SectionTitle"

const Home = () => {
  return (
    <div className=" text-center overflow-hidden h-[20000px] px-[220px]">
      <div className="flex flex-col items-center justify-center">
      <Heading />
      <HeadingImage />
      <Partners /> 
      <SectionTitle 
          title="Services" padding="pt-[137px]" >
          <ServicesContainer />
      </SectionTitle>
      </div>
     
    </div>
  )
}

export default Home