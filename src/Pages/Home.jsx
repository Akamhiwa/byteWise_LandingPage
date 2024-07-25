import Heading from "../Components/Home/Heading"
import HeadingImage from "../Components/Home/HeadingImage"
import Partners from "../Components/Home/Partners"

const Home = () => {
  return (
    <div className=" text-center overflow-hidden ">
      <div className="flex flex-col items-center justify-center">
      <Heading />
      <HeadingImage />
      <Partners />
      </div>
     
    </div>
  )
}

export default Home