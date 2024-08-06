/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/no-unescaped-entities */
import Imagebg from "../Components/Product+about+contact/Imagebg"
import PageTitle from "../Components/Product+about+contact/PageTitle"
import Footer from "../Components/Footer/Footer"
import MediumHeading from "../Components/TextUi/MediumHeading"
import Paragraph from "../Components/TextUi/Paragraph"
import AboutusImage from '../../public/images/first.png'
import Vision from '../../public/images/second.png'
import Mision from '../../public/images/third.png'
import CompanyOverview from "../Components/Product+about+contact/CompanyOverview"
import SectionTitle from "../Components/sectionTitle/SectionTitle"
import Partners from "../Components/Home/Partners"
import CTA from "../Components/CTA/CTA"
import TeamsContainer from "../Components/Product+about+contact/TeamsContainer"
import { useEffect } from "react"
const About = () => {
  
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);
  return (
    <div className="text-center">
      <Imagebg img='../../../public/images/bytewise.png' isBlur={false}>
        <PageTitle page="About US" /> 
      </Imagebg>

      <div className="overflow-hidden 2xl:px-[220px] xl:px-[180px] lg:px-[100px] md:px-[30px] px-[20px] lg:py-16 py-4">

          <CompanyOverview imgUrl={AboutusImage} flexDirection="lg:flex-row" >
              <>
                <MediumHeading>Who we Are</MediumHeading>
                <Paragraph>At Bytewise, we're passionate about technology. Founded with a vision to redefine how consumers experience and interact with tech products,
                        we strive to offer the latest innovations coupled with exceptional service. Our commitment lies in bridging the gap between cutting-edge technology and everyday
                          convenience, ensuring our customers stay connected and empowered in a rapidly evolving digital world.
                </Paragraph>
            </>
          </CompanyOverview>
          <CompanyOverview imgUrl={Vision}  flexDirection="lg:flex-row-reverse ">
              <>
                <MediumHeading>Vision</MediumHeading>
                <Paragraph>To be the leading destination where technology meets lifestyle, empowering individuals and businesses through
                innovative solutions and unparalleled customer experiences
                </Paragraph>
            </>
          </CompanyOverview>
          <CompanyOverview imgUrl={Mision}  flexDirection="lg:flex-row">
              <>
                <MediumHeading>Mission</MediumHeading>
                <Paragraph>Our mission is to curate and deliver the best-in-class technology products 
                  while providing expert guidance and support, enabling our customers to make informed decisions and enhance their digital lives effortlessly
                  </Paragraph>
              </>
          </CompanyOverview>

          <span className="flex flex-col justify-center items-center lg:gap-[64px] gap-[32px] ">
              <SectionTitle  title="Trusted by" padding="lg:pt-[100px] pt-[50px]"/>
              <Partners />
        </span>
        <span className="flex flex-col justify-center items-center lg:gap-[64px] gap-[32px] ">
              <SectionTitle  title="the Teams" padding="lg:pt-[200px] pt-[50px]"/>
              <TeamsContainer />
        </span>
        <CTA />

      </div>      
      <Footer />
    </div>
  )
}

export default About