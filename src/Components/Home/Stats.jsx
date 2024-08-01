/* eslint-disable react/prop-types */
import useMouseEffect from '../../Hooks/useMouseEffect';
import MouseEffectShape from '../Shapes/MouseEffectShape';
import MediumHeading from '../TextUi/MediumHeading';
import Paragraph from '../TextUi/Paragraph'
const Stats = ({stats}) => {
    const { mousePosition, controls, handleMouseMove, handleMouseEnter, handleMouseLeave } = useMouseEffect();
  return (
    <div 
        className='gradient-border h-[200px] flex items-center relative  justify-center rounded-[16px] flex-col w-[300px] bg-GradientBG p-4 m-2 '
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}>
            <MouseEffectShape controls={controls} mousePosition={mousePosition} />
            <MediumHeading>{stats.value}</MediumHeading>
            <Paragraph isCentered={true}>{stats.label}</Paragraph>
        </div>
  )
}

export default Stats