import MediumHeading from '../TextUi/MediumHeading';
import Paragraph from '../TextUi/Paragraph'
const statsData = [
  [{ value: '500,000+', label: 'Satisfied Customers' }],
  [
    { value: '1,000,000+', label: 'Products Sold' },
    { value: '99%', label: 'Customer Satisfaction' }
  ],
  [{ value: '10,000+', label: 'Total Users' }]
];

const Stats = () => {
  return (
    <div className='flex flex-col items-center  space-y-4 overflow-visible gradient-border'>
      {statsData.map((row, rowIndex) => (
        <div 
        key={rowIndex} 
        className={`flex items-center overflow-visible p-2 z-10  gap-x-[44px] ${row.length === 1 ? 'justify-center w-full' : 'justify-between w-full '}  
         ${rowIndex===0 && 'pl-[160px]' }
         ${rowIndex===2 && 'pr-[160px]' }  `}>
          
          {row.map((stat, index) => (
            <div key={index} className='gradient-border h-[200px] flex items-center justify-center rounded-[16px] flex-col w-[300px] bg-GradientBG p-4 m-2 '>
              <MediumHeading>{stat.value}</MediumHeading>
              <Paragraph isCentered={true}>{stat.label}</Paragraph>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};
 
export default Stats;



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