import MediumHeading from "../TextUi/MediumHeading"
import Paragraph from "../TextUi/Paragraph"

const Footer = () => {
  return (
    <div className="flex justify-between items-center bg-GradientBG w-screen px-[220px] py-[31px]">
      <MediumHeading>BYTEWISE</MediumHeading>
      <Paragraph> @ 2024 All rights Reserved to ByteWise</Paragraph>
    </div>
  )
}

export default Footer