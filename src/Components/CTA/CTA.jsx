/* eslint-disable react/no-unescaped-entities */
import BigHeading from "../TextUi/BigHeading"
import Shape from '../BlurShape/Shape'
import Paragraph from "../TextUi/Paragraph"
import PrimaryBtn from "../Buttons/PrimaryBtn"
const CTA = () => {
  return (
    <div className="w-full py-[200px] ">
      <div className="w-full  gradient-border  ">
      <div className="w-full bg-GradientBG  overflow-hidden relative  py-[86px] px-[300px]    rounded-[16px] ">
        <Shape />
        <div className="w-full flex items-center justify-center flex-col gap-[64px]">
        <div className="flex flex-col gap-[32px]">
            <BigHeading>Have a Question or Need Assistance?</BigHeading>
            <Paragraph isCentered={true}>Reach out to our team for expert advice, product inquiries, or any assistance you need. We're here to help!</Paragraph>
            </div>
            <PrimaryBtn UrlPage="/Contact" >Contact us</PrimaryBtn>    
        </div>
        </div>
      </div>
    </div>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default CTA