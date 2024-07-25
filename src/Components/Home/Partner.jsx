/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react/dist/iconify.js"
const Partner = ({icon}) => {
  return (
    <div
        className="gradient-border bg-GradientBG text-white rounded-[16px]
        flex items-center justify-center  gap-[44px] relative
           px-[62px] py-[17px]"
      >
    <Icon icon={icon} width="50" height="50" />
</div>
  )
}

export default Partner