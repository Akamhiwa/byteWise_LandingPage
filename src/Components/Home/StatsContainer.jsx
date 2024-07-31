/* eslint-disable react/prop-types */
const StatsContainer = ({children}) => {
  return (
    <div className=" pt-[166px] pb-[69px]">
         <div className="bg-SectionBg h-[900px] w-[1920px] px-[220px] flex items-center">
        <div className="flex  justify-between  ">
                {children}
        </div>
    </div>
    </div>
   
  )
}

export default StatsContainer