/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */
import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";
import { cn } from "../../lib/utils";
import BigHeading from "../TextUi/BigHeading";
import ImageOverlay from "../overlays/ImageOverlay";

 const Items = ({
  images,
}) => {
  const gridRef = useRef(null);
  const { scrollYProgress } = useScroll();

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  return (
    <div className={(cn)}>
      <div
        className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-y-[44px] content-center lg:gap-x-[40px] gap-[22px]"
        ref={gridRef}>
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              // Apply the translateY motion value here
              className="relative"
              style={{ y: translateFirst }}
              key={"grid-1" + idx}>
              <img
                src={el.image}
                className="xl:h-[600px] md:h-[300px]  h-[200px]  grayscale w-full  object-cover object-left-top rounded-[16px]  gap-10 !m-0 !p-0"
                alt="thumbnail" />

                <ImageOverlay />
                <motion.span className="absolute inset-0 flex items-center justify-center" whileHover={{y:-10}} transition={{duration:0.2}}>
                  <BigHeading>{el.name}</BigHeading>
                </motion.span>
             </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div style={{ y: translateSecond }} key={"grid-2" + idx} className="relative">
              <img
                src={el.image}
                className="xl:h-[600px] md:h-[300px]  h-[200px]  grayscale w-full object-cover object-left-top rounded-[16px]  gap-10 !m-0 !p-0"
                alt="thumbnail" />
                  <ImageOverlay />
                <motion.span className="absolute inset-0 flex items-center justify-center" whileHover={{y:-10}} transition={{duration:0.2}}>
                  <BigHeading>{el.name}</BigHeading>
                </motion.span>
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div style={{ y: translateThird }} key={"grid-3" + idx} className="relative">
              <img
                src={el.image}
                className="xl:h-[600px] md:h-[300px]  h-[200px]  grayscale w-full object-cover object-left-top rounded-[16px]  gap-10 !m-0 !p-0"
                alt="thumbnail" />
                  <ImageOverlay />
                <motion.span className="absolute inset-0 flex items-center justify-center" whileHover={{y:-10}} transition={{duration:0.2}}>
                  <BigHeading>{el.name}</BigHeading>
                </motion.span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Items