/* eslint-disable react/prop-types */
import useAutoSlider from "../../Hooks/useAutoSlider";
import { motion } from "framer-motion";
import Team from "./Team";
const TeamsPositiveSlider = ({TeamData}) => {
    const otherFinalPositionCalculation = (width) => width / 3.8 - 24;
    const { ref, style, handleHoverStart, handleHoverEnd } = useAutoSlider(15, 37, otherFinalPositionCalculation);
  return (
        <div>
             <motion.div
              onHoverStart={handleHoverStart}
              onHoverEnd={handleHoverEnd}
              className="flex lg:gap-[44px] gap-[24px]"
              ref={ref}
              style={style}
                >
                {
                [...TeamData,...TeamData].map((team,idx)=>(
                <Team team={team} key={idx}/>
                ))
            }
            </motion.div>

    </div>
    
  )
}

export default TeamsPositiveSlider