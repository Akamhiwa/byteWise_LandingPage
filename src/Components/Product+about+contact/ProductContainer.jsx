import Items from './Items'
const ProductContainer = () => {
  const data=[
    {
      image:"../../../public/images/team.png",
      name:"MAC"
    },
    {
      image:"../../../public/images/team.png",
      name:"MAC"
    },
    {
      image:"../../../public/images/team.png",
      name:"MAC"
    },
    {
      image:"../../../public/images/team.png",
      name:"MAC"
    },
    {
      image:"../../../public/images/team.png",
      name:"MAC"
    },
    {
      image:"../../../public/images/team.png",
      name:"MAC"
    },
    {
      image:"../../../public/images/team.png",
      name:"MAC"
    },
    {
      image:"../../../public/images/team.png",
      name:"MAC"
    },
    {
      image:"../../../public/images/team.png",
      name:"MAC"
    },
    {
      image:"../../../public/images/team.png",
      name:"MAC"
    },  
    {
      image:"../../../public/images/team.png",
      name:"MAC"
    },
    {
      image:"../../../public/images/team.png",
      name:"MAC"
    },
  ]
  return (
    <div className="z-40 lg:pb-[200px] pb-[100px]  2xl:px-[220px] xl:px-[180px] lg:px-[100px] md:px-[30px] px-[20px] lg:-mt-24 mt-12">
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-y-[44px] content-center lg:gap-x-[40px] gap-[22px]">
        {data.map((item,index)=>(
          <Items item={item} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default ProductContainer