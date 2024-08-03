/* eslint-disable react/prop-types */
const StatsSection = ({children}) => {
  return (
    <div className=" lg:pt-[166px] pt-[100px] pb-[69px]">
         <div className="bg-SectionBg lg:h-[900px] h-full w-screen  flex items-center">
        <div className="flex flex-col-reverse  gap-[44px] lg:flex-row   2xl:px-[220px] xl:px-[180px] lg:px-[100px] md:px-[30px] px-[20px]   lg:justify-between lg:items-start justify-center items-center  ">
                {children}
        </div>
    </div>
    </div>
   
  )
}

export default StatsSection