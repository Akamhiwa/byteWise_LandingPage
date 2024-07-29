import { Icon } from "@iconify/react/dist/iconify.js"
import Service from "./Service"
const ServicesContainer = () => {
  const ServicesData=[
    {
    ServiceNumber:"01",
    ServiceTItle:"Wide Range of Tech Products",
    ServiceDetail:"Discover an extensive selection of the latest tech products at Bytewise. From cutting-edge gadgets and electronics to essential accessories.",
    isSpan:true   ,
    icon:<Icon icon="eos-icons:products" width="45" height="45" />
    },
    {
      ServiceNumber:"02",
      ServiceTItle:"Competitive Pricing",
      ServiceDetail:"Enjoy the best deals on tech products with Bytewise's competitive pricing.",
      isSpan:false,
      icon:<Icon icon="solar:tag-price-bold" width="45" height="45" /> 
      },
      {
        ServiceNumber:"03",
        ServiceTItle:"Fast and Reliable Shipping",
        ServiceDetail:"Experience fast and reliable shipping with bytewise.Experience fast and reliable shipping with Bytewise..",
        isSpan:false,
        icon:<Icon icon="material-symbols:local-shipping-rounded" width="44" height="44" />
        },
        {
          ServiceNumber:"04",
          ServiceTItle:"Easy Returns and Exchanges",
          ServiceDetail:"Shop with confidence at Bytewise, knowing that our easy returns and exchanges policy has you covered",
          isSpan:false,
          icon:<Icon icon="mdi:exchange" width="45" height="45" />
          },
          {
            ServiceNumber:"05",
            ServiceTItle:"Tech Support and Assistance",
            ServiceDetail:"Enjoy our round-the-clock tech support and assistance services to keep your technology running smoothly and efficiently.",
            isSpan:false   ,
            icon:<Icon icon="fluent:person-support-20-filled" width="45" height="45" />
           },
]

  
  return (
    <div className="mt-[66px]  ">
        <div className="grid grid-rows-2 grid-cols-3  gap-x-[44px] gap-y-[32px] ">
          {
            ServicesData.map((service,index)=>(
              <Service service={service} key={index} />
            ))
          }
            
        </div>

    </div>
  )
}

export default ServicesContainer