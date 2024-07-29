/* eslint-disable react/prop-types */

const Paragraph = ({Text,isCentered}) => {
  return (
    <p className={`text-[20px] font-light   leading-snug  ${isCentered && 'text-center '} capitalize`}>
   {Text}
</p>
  )
}

export default Paragraph