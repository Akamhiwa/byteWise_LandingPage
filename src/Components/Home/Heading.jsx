// import { motion } from "framer-motion"
import BigHeading from "../TextUi/BigHeading"
import Paragraph from "../TextUi/Paragraph"
import PrimaryBtn from "../Buttons/PrimaryBtn"
import SecondaryBtn from "../Buttons/SecondaryBtn"
const Heading = () => {
  
  return (
    <div className="w-[1018px] text-center mt-[147px]">
      <div className="flex flex-col gap-[32px] ">

            <div className="flex flex-col gap-[12px] "> 
                <span className="text-[31px] uppercase tracking-widest">Bytewise</span>

                  <div className="flex flex-col gap-[24px] ">
                       <BigHeading>Unleashing the Power of Technology</BigHeading>
                       <Paragraph isCentered={true}>Explore a wide range of cutting-edge technology products, from the latest gadgets to essential accessories. 
                                          Bytewise is committed to bringing you the best in tech, with unbeatable prices and unparalleled customer service. 
                                          Join us and experience the future of shopping today.</Paragraph>
                  </div>
            </div>
            <div className="flex items-center justify-center gap-[44px]">
              <PrimaryBtn  UrlPage="/Product">Products</PrimaryBtn>
             <SecondaryBtn  UrlPage="/About">About Us</SecondaryBtn>
             </div>
        </div>
    </div>
  )
}

export default Heading