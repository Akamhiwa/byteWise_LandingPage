import Paragraph from "../TextUi/Paragraph"
import SubTitle from "../TextUi/SubTitle"

/* eslint-disable react/prop-types */
const Testimonial = ({testimonial}) => {
  return (
    <div className="bg-GradientBG gradient-border px-[42px] pt-[32px] pb-[64px] rounded-[16px]  flex flex-col gap-[32px]  min-w-[636px] text-left">
        <div className="flex gap-[24px] items-start justify-start">
            <span className="h-[65px] w-[65px]  bg-center rounded-full bg-cover"    
            style={{ 
            backgroundImage: `url(${testimonial.imagePath})`,
          }}> </span>
            <div className="flex flex-col  ">
                <SubTitle>{testimonial.name}</SubTitle>
                <Paragraph isCentered={false}>{testimonial.Position}</Paragraph>

            </div>
        </div>
        <Paragraph isCentered={false} >{testimonial.Qoute}</Paragraph>

    </div>
  )
}

export default Testimonial