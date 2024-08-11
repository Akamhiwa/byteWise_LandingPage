import Items from './Items'
import pr1 from '../../assets/images/team.png'
const ProductContainer = () => {
  const data=[
    {
      image:pr1,
      name:"MAC"},
    {
      image:pr1,
      name:"MAC"
    },
    {
      image:pr1,
      name:"MAC"
    },
    {
      image:pr1,
      name:"MAC"
    },
    {
      image:pr1,
      name:"MAC"
    },
    {
      image:pr1,
      name:"MAC"
    },
    {
      image:pr1,
      name:"MAC"
    },
    {
      image:pr1,
      name:"MAC"
    },
    {
      image:pr1,
      name:"MAC"
    },
    {
      image:pr1,
      name:"MAC"
    },  
    {
      image:pr1,
      name:"MAC"
    },
    {
      image:pr1,
      name:"MAC"
    },
  ]
  return (
    <div className="z-40 lg:pb-[200px] pb-[100px]  2xl:px-[220px] xl:px-[180px] lg:px-[100px] md:px-[30px] px-[20px] lg:-mt-24 -mt-16">
      <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-y-[44px] content-center lg:gap-x-[40px] gap-[22px]">
        {data.map((item,index)=>(
          <Items item={item} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default ProductContainer