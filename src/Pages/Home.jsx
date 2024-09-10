import CTA from "../Components/CTA/CTA"
import Footer from "../Components/Footer/Footer"
import Heading from "../Components/Home/Heading"
import HeadingImage from "../Components/Home/HeadingImage"
import Partners from "../Components/Home/Partners"
import ServicesContainer from "../Components/Home/ServicesContainer"
import StatsSection from "../Components/Home/StatsSection"
import StatsContainer from "../Components/Home/StatsContainer"
import StatsTitle from "../Components/Home/StatsTitle"
import TestimonialContainer from "../Components/Home/TestimonialContainer"
import SectionTitle from "../Components/sectionTitle/SectionTitle"
import Lines from '../assets/images/Vector.png'
import { motion } from "framer-motion" 
const Home = () => {
  return (
    <div className=" text-center  overflow-hidden 2xl:px-[220px] xl:px-[180px] lg:px-[100px] md:px-[30px] px-[20px]  ">
      <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, }}
      transition={{duration:1.5,delay:0.2}}
      className="bg-center  lg:h-screen  h-[600px] absolute top-0 left-0 right-0 -z-10 opacity-80" 
      style={{ 
      backgroundImage: `url(${Lines})`,   
    }}></motion.div>
      <div className="flex flex-col items-center justify-center ">
      <Heading />
      <HeadingImage />
      <Partners />
       
      <SectionTitle  title="Services" padding="lg:pt-[137px] pt-[70px]" />
      <ServicesContainer />
      
      <StatsSection>
          <StatsContainer />
          <StatsTitle />
      </StatsSection >

      <SectionTitle title="TESTIMONIAL" padding="lg:pt-[49px]" />
      <TestimonialContainer />
      <CTA />
      <Footer />

      </div>
      
    </div>
  )
}

export default Home