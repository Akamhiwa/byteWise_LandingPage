import Paragraph from "../Home/Paragraph"

// eslint-disable-next-line react/prop-types
const SectionTitle = ({title,padding,children}) => {
  return (
    <div className={`${padding}`}>
        <div>
              <h1 className="text-[41px] font-bold tracking-wide">{title}</h1>
              <Paragraph Text='Bytewise offers a comprehensive range of services to enhance your tech shopping experience. From expert product 
          recommendations and competitive pricing to fast shipping and reliable tech support.'  isCentered={true}/>
        </div>
        {children}
        
    </div>
  )
}

export default SectionTitle