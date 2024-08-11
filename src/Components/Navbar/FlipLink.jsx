/* eslint-disable react/prop-types */
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

const FlipLink = ({ children, to, setIsNav }) => {
  const DURATION = 0.25;
  const STAGGER = 0.025;
    const menuBaseClass=`text-[41px] uppercase relative block overflow-hidden whitespace-nowrap tracking-widest hover:text-Primary`
    const menuActiveClass=`text-Primary `+ menuBaseClass
    const navClass='relative whitespace-nowrap overflow-hidden block text-[14px] uppercase tracking-widest hover:text-Primary'
  return (
    <motion.span
      initial="initial"
      whileHover="hovered"
    >
      <NavLink
        onClick={setIsNav ? () => setIsNav(prevValue => !prevValue) : null}
        to={to}
        className={({ isActive }) => {
          if (setIsNav) {
            return isActive
              ? menuActiveClass
              : menuBaseClass;
          } else {
            return  navClass;
          }
        }}
      >
        <div>
          {children.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: {
                  y: 0,
                },
                hovered: {
                  y: "-110%",
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </div>
        <div className="absolute inset-0">
          {children.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: {
                  y: "100%",
                },
                hovered: {
                  y: 0,
                },
              }}
              transition={{
                duration: DURATION,
                ease: "easeInOut",
                delay: STAGGER * i,
              }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </div>
      </NavLink>
    </motion.span>
  );
}

export default FlipLink;
