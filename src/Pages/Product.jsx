import Footer from "../Components/Footer/Footer"
import Imagebg from "../Components/Product+about+contact/Imagebg"
import PageTitle from "../Components/Product+about+contact/PageTitle"
import ProductContainer from '../Components/Product+about+contact/ProductContainer'
const Product = () => {
  return (
    <div className="overflow-hidden">
      <Imagebg img='../../../public/images/bytewise.png' isBlur={true}>
        <PageTitle page="Products" /> 
      </Imagebg>
      <ProductContainer />
      <Footer />
    </div>
  )
}

export default Product