import { useState } from 'react'
import Faq from './Faq'

const FaqContainer = () => {
    const data=[
        {
          question:"Are Bytewise products genuine and brand new?",
          response:"Yes, all products sold by Bytewise are 100% genuine and brand new. We source our products directly from authorized distributors and manufacturers to ensure authenticity and quality."
        },
        {
            question:"What payment methods do you accept?",
            response:"Bytewise accepts a variety of payment methods including credit/debit cards, PayPal, and bank transfers. We also offer financing options through our partner financial institutions."
          },
          {
            question:"How long does shipping take?",
            response:"Shipping times vary depending on your location and the shipping method selected. Typically, standard shipping takes 3-7 business days, while expedited options are available for faster delivery."
          },
          {
            question:" Can I track my order?",
            response:" Yes, once your order has been shipped, you will receive a tracking number via email. You can use this number to track your order through our website or the carrier's tracking system."
          },
          {
            question:"What is your return policy?",
            response:"We offer a 30-day return policy on most items. If you are not satisfied with your purchase, you can return it within 30 days of receipt for a full refund or exchange, provided the item is in its original condition and packaging."
          },
          {
            question:"Do you offer warranties on your products?",
            response:"Yes, all products come with a manufacturer's warranty. The duration and terms of the warranty vary by product and manufacturer. Please refer to the product details page for specific warranty information."
          },
          {
            question:"How can I contact customer support?",
            response:"You can contact our customer support team via email at support@bytewise.com, or call us at 1-800-123-4567. Our support team is available Monday to Friday, 9 AM to 6 PM EST."
          },
          {
            question:"Do you offer international shipping?",
            response:"Yes, Bytewise offers international shipping to select countries. Shipping rates and delivery times will vary based on the destination. Please check our shipping policy for more details."
          },
    ]
    const [openIndex, setOpenIndex] = useState(null);

    const handleFaqClick = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

  return (
    <div className='xl:pt-[67px] pt-[44px]'>
        <div className='grid grid-cols-1 xl:grid-cols-2  xl:gap-[44px] gap-[32px] '>
            {data.map((faq,idx)=>(
                <Faq 
                  key={idx}
                  faq={faq}   
                  isOpen={openIndex === idx} 
                  onClick={() => handleFaqClick(idx)}/>
             ))}
        </div>
    </div>
  )
}

export default FaqContainer