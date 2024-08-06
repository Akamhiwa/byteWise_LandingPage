/* eslint-disable react/prop-types */

const DropDown = ({Languages,handleValue}) => {
  return (
    <div className="rounded-[16px] w-[143px] flex flex-col items-center justify-center absolute top-12 right-6 bg-GradientBG py-1">
        {Languages.map((language,index)=>(
            <div key={index} className="w-full">
            <div onClick={()=>handleValue(language.value)} className=" py-2 cursor-pointer tracking-wide w-full text-center hover:text-Primary">{language.Language}</div>
            </div>
        ))}
</div>
  )
}

export default DropDown