import Stats from "./Stats";

/* eslint-disable react/prop-types */
const StatsContainer = () => {
 
   const statsData = [
    [{ value: '500,000+', label: 'Satisfied Customers' }],
    [
      { value: '1,000,000+', label: 'Products Sold' },
      { value: '99%', label: 'Customer Satisfaction' }
    ],
    [{ value: '10,000+', label: 'Total Users' }]
  ];
  
  return (
    <div className='flex flex-col items-center  space-y-4 overflow-visible gradient-border'>
      {statsData.map((row, rowIndex) => (
        <div 
        key={rowIndex} 
        className={`flex items-center overflow-visible p-2 z-10  gap-x-[44px] ${row.length === 1 ? 'justify-center w-full' : 'justify-between w-full '}  
         ${rowIndex===0 && 'pl-[160px]' }
         ${rowIndex===2 && 'pr-[160px]' }  `}>
          
          {row.map((stat, index) => (
            <Stats stats={stat} key={index} />
          ))}
        </div>
      ))}
    </div>
  );
};
 
export default StatsContainer;

//using grid
// import Paragraph from "./Paragraph";

// function Stats() {
//     const statsData = [
//         [{ value: '500,000+', label: 'Satisfied Customers' }],
//         [{ value: '1,000,000+', label: 'Products Sold' }, 
//         { value: '99%', label: 'Customer Satisfaction' }],
//         [{ value: '10,000+', label: 'Total Users' }]
//       ];
//       //add border   
//   return (
//     <div className="flex items-center w-[50%]  py-2 pl-1 ">
//       <div className="grid grid-cols-1 gap-8 h-full">
//         {statsData.map((row, index) => (
//           <div 
//             key={index} 
//             className={`${index === 1  ? 'grid grid-cols-2 gap-56 max-w-md mx-auto' : 'col-span-1 max-w-md mx-auto'}
//            ${index===0 && 'pl-[240px]' } `}>
//             {row.map((cardData, cardIndex) => (
//               <div key={cardIndex} 
//               className="gradient-border  bg-GradientBG h-[200px] w-[300px] p-3  flex items-center flex-col 
//                justify-center  rounded-[16px] text-center">
//                 <h2 className="text-[41px] font-bold  tracking-widest">{cardData.value}</h2>
//                 <Paragraph Text={cardData.label} isCentered={true}/>
//               </div>
//             ))}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Stats;