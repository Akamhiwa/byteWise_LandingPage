import { motion } from 'framer-motion';
import useAutoSlider from '../../Hooks/useAutoSlider';
import Partner from './Partner';

const Partners = () => {
  const icons=["cib:amazon-aws","cib:habr","cib:stumbleupon","cib:spotify",
    "cib:macys","cib:gitlab","cib:codio","cib:opsgenie","cib:stripe",
    "cib:tinder","cib:cloudbees","cib:bitdefender","cib:opsgenie","cib:stripe"
]
  const otherFinalPositionCalculation = (width) => -width / 2.8 - 24;
  const { ref, style, handleHoverStart, handleHoverEnd } = useAutoSlider(23, 37, otherFinalPositionCalculation);

  return (
    <main className="py-8">
      <motion.div
        onHoverStart={handleHoverStart}
        onHoverEnd={handleHoverEnd}
        className="flex lg:gap-[44px] gap-[24px]"
        ref={ref}
        style={style}
      >
        {icons.concat(icons).map((icon, idx) => (
          <Partner icon={icon} key={idx} />
        ))}
      </motion.div>
    </main>
  );
};

export default Partners;
