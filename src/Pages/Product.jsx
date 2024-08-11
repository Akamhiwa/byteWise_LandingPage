import Footer from "../Components/Footer/Footer"
import Imagebg from "../Components/Product+about+contact/Imagebg"
import PageTitle from "../Components/Product+about+contact/PageTitle"
import bytewise from '../assets/images/bytewise.png'
import ProductContainer from '../Components/Product+about+contact/ProductContainer'
const Product = () => {
 
  return (
    <div className="overflow-hidden">
      <Imagebg img={bytewise} isBlur={true}>
        <PageTitle page="Products" /> 
      </Imagebg>
      <ProductContainer />
      <Footer />
    </div>
  )
}

export default Product