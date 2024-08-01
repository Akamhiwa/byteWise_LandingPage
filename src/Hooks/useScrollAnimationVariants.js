import { useMemo } from 'react';

const useScrollAnimationVariants = (x = 80, y = 0, duration = 0.5) => {
    const variants = useMemo(() => ({
        hidden: { opacity: 0, y, x },
        visible: { opacity: 1, y: 0, x: 0, transition: { duration } }
    }), [x, y, duration]);

    return variants;
};

export default useScrollAnimationVariants;