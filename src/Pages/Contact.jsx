import Footer from "../Components/Footer/Footer"
import ContactUsTextSection from "../Components/Product+about+contact/ContactUsTextSection"
import FaqSection from "../Components/Product+about+contact/FaqSection"
import Form from "../Components/Product+about+contact/Form"


const Contact = () => {
  return (
    <div className=" flex items-center justify-center flex-col overflow-visible 2xl:mt-[186px] mt-[130px] 
     2xl:px-[220px] xl:px-[180px] lg:px-[100px] md:px-[30px] px-[20px] ">
      <div className="flex flex-col 2xl:flex-row justify-between gap-[64px] w-full ">
          <ContactUsTextSection />
          <Form />
      </div>
      <FaqSection />
      <Footer />
    </div>
  )
}

export default Contact