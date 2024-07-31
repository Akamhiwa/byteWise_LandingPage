import TestimonialSliderNegativeX from "./TestimonialSliderNegativeX"
import TestimonialSliderPositiveX from "./TestimonialSliderPositiveX"
const TestimonialContainer = () => {
    const TestimonialDataPositiveX=[
        {
            name:"john doe",
            Position:"Assistant Manager",
            Qoute:"Hear what our customers have to say about their Bytewise experience. Our commitment to quality products and exceptional service has earned us glowing reviews from satisfied customers.",
            imagePath:"../../../public/images/ProfileImage.jpg"
        },
        {
            name:"john doe",
            Position:"Assistant Manager",
            Qoute:"Hear what our customers have to say about their Bytewise experience. Our commitment to quality products and exceptional service has earned us glowing reviews from satisfied customers.",
             imagePath:"../../../public/images/ProfileImage.jpg"

        },
        {
            name:"john doe",
            Position:"Assistant Manager",
            Qoute:"Hear what our customers have to say about their Bytewise experience. Our commitment to quality products and exceptional service has earned us glowing reviews from satisfied customers.",
            imagePath:"../../../public/images/ProfileImage.jpg"
        },
        {
            name:"john doe",
            Position:"Assistant Manager",
            Qoute:"Hear what our customers have to say about their Bytewise experience. Our commitment to quality products and exceptional service has earned us glowing reviews from satisfied customers.",
             imagePath:"../../../public/images/ProfileImage.jpg"

        }, {
            name:"john doe",
            Position:"Assistant Manager",
            Qoute:"Hear what our customers have to say about their Bytewise experience. Our commitment to quality products and exceptional service has earned us glowing reviews from satisfied customers.",
            imagePath:"../../../public/images/ProfileImage.jpg"
        },
        {
            name:"john doe",
            Position:"Assistant Manager",
            Qoute:"Hear what our customers have to say about their Bytewise experience. Our commitment to quality products and exceptional service has earned us glowing reviews from satisfied customers.",
             imagePath:"../../../public/images/ProfileImage.jpg"

        },
       
    ]
    const TestimonialDataNegativeX=[
        {
            name:"john doe",
            Position:"Assistant Manager",
            Qoute:"Hear what our customers have to say about their Bytewise experience. Our commitment to quality products and exceptional service has earned us glowing reviews from satisfied customers.",
            imagePath:"../../../public/images/ProfileImage.jpg"
        },
        {
            name:"john doe",
            Position:"Assistant Manager",
            Qoute:"Hear what our customers have to say about their Bytewise experience. Our commitment to quality products and exceptional service has earned us glowing reviews from satisfied customers.",
             imagePath:"../../../public/images/ProfileImage.jpg"

        },
        {
            name:"john doe",
            Position:"Assistant Manager",
            Qoute:"Hear what our customers have to say about their Bytewise experience. Our commitment to quality products and exceptional service has earned us glowing reviews from satisfied customers.",
            imagePath:"../../../public/images/ProfileImage.jpg"
        },
        {
            name:"john doe",
            Position:"Assistant Manager",
            Qoute:"Hear what our customers have to say about their Bytewise experience. Our commitment to quality products and exceptional service has earned us glowing reviews from satisfied customers.",
             imagePath:"../../../public/images/ProfileImage.jpg"

        }, {
            name:"john doe",
            Position:"Assistant Manager",
            Qoute:"Hear what our customers have to say about their Bytewise experience. Our commitment to quality products and exceptional service has earned us glowing reviews from satisfied customers.",
            imagePath:"../../../public/images/ProfileImage.jpg"
        },
        {
            name:"john doe",
            Position:"Assistant Manager",
            Qoute:"Hear what our customers have to say about their Bytewise experience. Our commitment to quality products and exceptional service has earned us glowing reviews from satisfied customers.",
             imagePath:"../../../public/images/ProfileImage.jpg"

        },
    ]
  return (
    <div className="pt-[81px]">
        <div className="flex flex-col gap-[44px]">
                <TestimonialSliderPositiveX testimonial={TestimonialDataPositiveX}/>

                <TestimonialSliderNegativeX testimonial={TestimonialDataNegativeX} />
        </div>
       
    </div>
  )
}

export default TestimonialContainer