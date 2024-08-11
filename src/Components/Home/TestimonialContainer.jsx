import TestimonialSliderNegativeX from "./TestimonialSliderNegativeX"
import TestimonialSliderPositiveX from "./TestimonialSliderPositiveX"
import testimonialImg from '../../../public/images/ProfileImage.jpg'
const TestimonialContainer = () => {
    const TestimonialDataPositiveX=[
        {
            name:"john doe",
            Position:"Assistant Manager",
            Qoute:"Hear what our customers have to say about their Bytewise experience. Our commitment to quality products and exceptional service has earned us glowing reviews from satisfied customers.",
            imagePath:testimonialImg
        },
        {
            name:"john doe",
            Position:"Assistant Manager",
            Qoute:"Hear what our customers have to say about their Bytewise experience. Our commitment to quality products and exceptional service has earned us glowing reviews from satisfied customers.",
             imagePath:testimonialImg

        },
        {
            name:"john doe",
            Position:"Assistant Manager",
            Qoute:"Hear what our customers have to say about their Bytewise experience. Our commitment to quality products and exceptional service has earned us glowing reviews from satisfied customers.",
            imagePath:testimonialImg
        },
        {
            name:"john doe",
            Position:"Assistant Manager",
            Qoute:"Hear what our customers have to say about their Bytewise experience. Our commitment to quality products and exceptional service has earned us glowing reviews from satisfied customers.",
             imagePath:testimonialImg

        }, {
            name:"john doe",
            Position:"Assistant Manager",
            Qoute:"Hear what our customers have to say about their Bytewise experience. Our commitment to quality products and exceptional service has earned us glowing reviews from satisfied customers.",
            imagePath:testimonialImg
        },
        {
            name:"john doe",
            Position:"Assistant Manager",
            Qoute:"Hear what our customers have to say about their Bytewise experience. Our commitment to quality products and exceptional service has earned us glowing reviews from satisfied customers.",
             imagePath:testimonialImg

        },
       
    ]
    const TestimonialDataNegativeX=[
        {
            name:"john doe",
            Position:"Assistant Manager",
            Qoute:"Hear what our customers have to say about their Bytewise experience. Our commitment to quality products and exceptional service has earned us glowing reviews from satisfied customers.",
            imagePath:testimonialImg
        },
        {
            name:"john doe",
            Position:"Assistant Manager",
            Qoute:"Hear what our customers have to say about their Bytewise experience. Our commitment to quality products and exceptional service has earned us glowing reviews from satisfied customers.",
             imagePath:testimonialImg

        },
        {
            name:"john doe",
            Position:"Assistant Manager",
            Qoute:"Hear what our customers have to say about their Bytewise experience. Our commitment to quality products and exceptional service has earned us glowing reviews from satisfied customers.",
            imagePath:testimonialImg
        },
        {
            name:"john doe",
            Position:"Assistant Manager",
            Qoute:"Hear what our customers have to say about their Bytewise experience. Our commitment to quality products and exceptional service has earned us glowing reviews from satisfied customers.",
             imagePath:testimonialImg
        }, {
            name:"john doe",
            Position:"Assistant Manager",
            Qoute:"Hear what our customers have to say about their Bytewise experience. Our commitment to quality products and exceptional service has earned us glowing reviews from satisfied customers.",
            imagePath:testimonialImg
        },
        {
            name:"john doe",
            Position:"Assistant Manager",
            Qoute:"Hear what our customers have to say about their Bytewise experience. Our commitment to quality products and exceptional service has earned us glowing reviews from satisfied customers.",
             imagePath:testimonialImg

        },
    ]
  return (
    <div className="lg:pt-[81px] pt-[44px] ">
        <div className="flex flex-col lg:gap-[32px] gap-[22px]">
                <TestimonialSliderPositiveX testimonial={TestimonialDataPositiveX}/>

                <TestimonialSliderNegativeX testimonial={TestimonialDataNegativeX} />
        </div>
       
    </div>
  )
}

export default TestimonialContainer