import { animate, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";

const useAutoSlider = (fastDuration,slowDuration,finalPositionCalculation) => {
  const [ref, { width }] = useMeasure();
  const Xtranslation = useMotionValue(0);
  const [duration, setDuration] = useState(fastDuration);
  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setReRender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = finalPositionCalculation(width);

    if (mustFinish) {
      controls = animate(Xtranslation, [Xtranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - Xtranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setReRender(!rerender);
        }
      });
    } else {
      controls = animate(Xtranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0
      });
    }

    return () => controls?.stop();
  }, [Xtranslation, width, duration, rerender, mustFinish, finalPositionCalculation]);

  const handleHoverStart = () => {
    setDuration(slowDuration);
    setMustFinish(true);
  };

  const handleHoverEnd = () => {
    setDuration(fastDuration);
    setMustFinish(true);
  };

  return {
    ref,
    style: { x: Xtranslation },
    handleHoverStart,
    handleHoverEnd
  };
};

export default useAutoSlider;
