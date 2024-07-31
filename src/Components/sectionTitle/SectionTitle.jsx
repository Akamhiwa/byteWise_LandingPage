import MediumHeading from "../TextUi/MediumHeading"
import Paragraph from "../TextUi/Paragraph"

// eslint-disable-next-line react/prop-types
const SectionTitle = ({title,padding,children}) => {
  return (
    <div className={`${padding}`}>
        <div>
              <MediumHeading>{title}</MediumHeading>
              <Paragraph isCentered={true}>Hear what our customers have to say about their Bytewise experience.</Paragraph>
        </div>
        {children}
        
    </div>
  )
}

export default SectionTitle