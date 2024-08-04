/* eslint-disable react/prop-types */
import BreadCrumbs from "./BreadCrumbs"
import BigHeading from '../TextUi/BigHeading'
const PageTitle = ({page}) => {
  return (
    <div className="flex items-center flex-col justify-center h-[500px] gap-[6px] z-40">
        <BreadCrumbs />
        <BigHeading>{page}</BigHeading>
    </div>
  ) 
}

export default PageTitle