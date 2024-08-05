import useScrollAnimationVariants from '../../Hooks/useScrollAnimationVariants';
import MediumHeading from '../TextUi/MediumHeading'
import Paragraph from '../TextUi/Paragraph'
import FaqContainer from './FaqContainer'
import { motion } from 'framer-motion';
const FaqSection = () => {
  const variants = useScrollAnimationVariants(0, 80, 0.8);
  return (
      <div className="bg-SectionBg w-screen pb-[130px] border-t border-[#747474] 2xl:-mt-[100px] -mt-24 ">
        <div className='2xl:px-[220px] xl:px-[180px] lg:px-[100px] md:px-[40px] px-[30px]'>
                <motion.div className='text-left 2xl:w-[50%] w-full 2xl:mt-12 mt-[140px] '
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false }}
                  variants={variants}>
                    <MediumHeading >Frequently Asked qusetions!</MediumHeading>
                    <Paragraph>Before submitting the form , you can find quick answers to some frequently asked questions below and save your time </Paragraph>
                </motion.div>
                <FaqContainer />
        </div>
      </div>
  )
}

export default FaqSection