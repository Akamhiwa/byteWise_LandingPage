import { useState } from 'react'
import Faq from './Faq'
const FaqContainer = () => {
    const faqData1=[
      {
        id:0,
        question:"Are Bytewise products genuine and brand new?",
        response:"Yes, all products sold by Bytewise are 100% genuine and brand new. We source our products directly from authorized distributors and manufacturers to ensure authenticity and quality."
      },
      {
          id:1,
          question:"What payment methods do you accept?",
          response:"Bytewise accepts a variety of payment methods including credit/debit cards, PayPal, and bank transfers. We also offer financing options through our partner financial institutions."
        },
        {
          id:2,
          question:"How long does shipping take?",
          response:"Shipping times vary depending on your location and the shipping method selected. Typically, standard shipping takes 3-7 business days, while expedited options are available for faster delivery."
        },
        {
          id:3,
          question:" Can I track my order?",
          response:" Yes, once your order has been shipped, you will receive a tracking number via email. You can use this number to track your order through our website or the carrier's tracking system."
        },
    ]
    const faqData2=[
      {
        id:4,
        question:"What is your return policy?",
        response:"We offer a 30-day return policy on most items. If you are not satisfied with your purchase, you can return it within 30 days of receipt for a full refund or exchange, provided the item is in its original condition and packaging."
      },
      {
        id:5,
        question:"Do you offer warranties on your products?",
        response:"Yes, all products come with a manufacturer's warranty. The duration and terms of the warranty vary by product and manufacturer. Please refer to the product details page for specific warranty information."
      },
      {
        id:6,
        question:"How can I contact customer support?",
        response:"You can contact our customer support team via email at support@bytewise.com, or call us at 1-800-123-4567. Our support team is available Monday to Friday, 9 AM to 6 PM EST."
      },
      {
        id:7,
        question:"Do you offer international shipping?",
        response:"Yes, Bytewise offers international shipping to select countries. Shipping rates and delivery times will vary based on the destination. Please check our shipping policy for more details."
      },
    ]
    const [openIndex, setOpenIndex] = useState(null);

    const handleFaqClick = (id) => {
        setOpenIndex(openIndex === id ? null : id);
    };

  return (
    <div className='xl:pt-[67px] pt-[44px]'>
       <div className='flex 2xl:flex-row flex-col justify-between xl:gap-[44px] gap-[32px]'>
        <div className='flex flex-col xl:gap-[44px] gap-[32px]  w-full'>
          {faqData1.map((faq)=>(
            <Faq key={faq.id } faq={faq} isOpen={openIndex===faq.id} onClick={()=>handleFaqClick(faq.id)} />
          ))}
        </div>
        <div className='flex flex-col xl:gap-[44px] gap-[32px] w-full'>
        {faqData2.map((faq)=>(
            <Faq key={faq.id} faq={faq} isOpen={openIndex===faq.id} onClick={()=>handleFaqClick(faq.id)} />
          ))}
        </div>
       </div>
    </div>
  )
}

export default FaqContainer