import CTA from "../Components/CTA/CTA"
import Footer from "../Components/Footer/Footer"
import Heading from "../Components/Home/Heading"
import HeadingImage from "../Components/Home/HeadingImage"
import Partners from "../Components/Home/Partners"
import ServicesContainer from "../Components/Home/ServicesContainer"
import Stats from "../Components/Home/Stats"
import StatsContainer from "../Components/Home/StatsContainer"
import StatsTitle from "../Components/Home/StatsTitle"
import TestimonialContainer from "../Components/Home/TestimonialContainer"
import SectionTitle from "../Components/sectionTitle/SectionTitle"

const Home = () => {
  return (
    <div className=" text-center overflow-hidden  px-[220px]">
      <div className="flex flex-col items-center justify-center">
      <Heading />
      <HeadingImage />
      <Partners /> 
      <SectionTitle 
          title="Services" padding="pt-[137px]" >
          <ServicesContainer />
      </SectionTitle>
      
      <StatsContainer>
          <Stats />
          <StatsTitle />
      </StatsContainer >

      <SectionTitle 
          title="TESTIMONIAL" padding="pt-[49px]" >
          <TestimonialContainer />
      </SectionTitle>
      <CTA />
      <Footer />

      </div>
      
    </div>
  )
}

export default Home