/* eslint-disable react/prop-types */
/* eslint-disable react/prop-types */
import useScrollAnimationVariants from "../../Hooks/useScrollAnimationVariants";
import ImageOverlay from "../overlays/ImageOverlay";
import BigHeading from "../TextUi/BigHeading";
import { motion } from "framer-motion";
const   Items = ({ item }) => {
  const variants = useScrollAnimationVariants(0, 160, 0.77);

  return (
    <motion.div 
        className="xl:h-[600px] md:h-[300px]  h-[200px]  grayscale rounded-[16px] relative w-full"  
        style={{backgroundImage: `url(${item?.image})`}}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: false }}
         variants={variants}
         whileHover={{scale:1.05}}
         >
          <ImageOverlay />
      <motion.span className="absolute inset-0 flex items-center justify-center" whileHover={{y:-10}} transition={{duration:0.2}}>
        <BigHeading>{item.name}</BigHeading>
      </motion.span>
    </motion.div>
  );
};

export default Items;

// "use client";
// import { useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import { cn } from "@/lib/utils";

// export const Items = ({
//   images,
//   className
// }) => {
//   const gridRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     container: gridRef, // remove this if your container is not fixed height
//     offset: ["start start", "end start"], // remove this if your container is not fixed height
//   });

//   const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
//   const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
//   const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

//   const third = Math.ceil(images.length / 3);

//   const firstPart = images.slice(0, third);
//   const secondPart = images.slice(third, 2 * third);
//   const thirdPart = images.slice(2 * third);

//   return (
//     (<div
//       className={cn("h-[40rem] items-start overflow-y-auto w-full", className)}
//       ref={gridRef}>
//       <div
//         className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start  max-w-5xl mx-auto gap-10 py-40 px-10"
//         ref={gridRef}>
//         <div className="grid gap-10">
//           {firstPart.map((el, idx) => (
//             <motion.div
//               // Apply the translateY motion value here
//               style={{ y: translateFirst }}
//               key={"grid-1" + idx}>
//               <Image
//                 src={el}
//                 className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
//                 height="400"
//                 width="400"
//                 alt="thumbnail" />
//             </motion.div>
//           ))}
//         </div>
//         <div className="grid gap-10">
//           {secondPart.map((el, idx) => (
//             <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
//               <Image
//                 src={el}
//                 className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
//                 height="400"
//                 width="400"
//                 alt="thumbnail" />
//             </motion.div>
//           ))}
//         </div>
//         <div className="grid gap-10">
//           {thirdPart.map((el, idx) => (
//             <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
//               <Image
//                 src={el}
//                 className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
//                 height="400"
//                 width="400"
//                 alt="thumbnail" />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>)
//   );
// };
