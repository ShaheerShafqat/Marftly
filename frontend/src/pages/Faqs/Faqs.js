import React from 'react'
import {useRef,useEffect, useState} from 'react';
import { Helmet } from 'react-helmet';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box, Image
  } from '@chakra-ui/react'
  import './faqs.css'

function Faqs() {

    const Line = useRef(null);
    const text = useRef(null);
    useEffect(() => {
                setTimeout(() =>{
        Line.current.classList.add('lineon')
        text.current.classList.add('titleon');
        },5)


        return () => {

        }
    },[])

    
  return (
    <>
     <Helmet>
            <title>FAQs</title>
        </Helmet>
     
     <div className='headingA'>
                <div className = 'line' ref={Line}>
                </div>
                <h1 className ='title' ref={text}>FAQs</h1>
            </div>
   
<div className='accordion'>
    <Accordion>
  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{bg: 'gray', color: 'white'}}>
        <Box flex='1' textAlign='left'>
        What about defective or flawed items?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    We stand behind all of our shoes and gear. If it’s been less than 60 days since your purchase, use one of the options above to return a defective or flawed item. If it’s been more than 60 days, please please contact us to return the item. See our warranty information for additional details.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{bg: 'gray', color: 'white'}}>
        <Box flex='1' textAlign='left'>
        Do I need a receipt to return items at a Marftly store?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    For orders placed on Nike.com or in any of the Nike apps, just have either your order barcode or order number ready. Nike Members can also provide the email address or phone number used to place the order.

For store purchases, the quickest and easiest way to return items is to provide the original store receipt. If you no longer have the receipt, here are your options:

If you provided your Nike Membership email address or had your Nike Pass scanned during checkout, a Nike store athlete may be able to look up your order and provide a refund to your original form of payment.
If you did not provide your Nike Membership information, and the items you want to return are unworn and unwashed, you still may be able to return them for an in-store credit for the current price of the items. We also may be able to help you with an exchange.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{bg: 'gray', color: 'white'}}>
        <Box flex='1' textAlign='left'>
        What is same day delivery and how does it work?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Buy today, receive today. It’s possible, as long as you order at least four hours before your local participating store closes. Here’s how it works: 

On Levi.com, select Same-Day Delivery as your delivery method at checkout ($20 flat fee) and place your order. An order confirmation will be sent to you shortly after.
Once your order is on its way, our delivery partner will send you a text (SMS) message with the tracking information. 
Same-Day Delivery orders will be delivered contactless to your door by our delivery service partner.
Same-Day Delivery orders may be returned or exchanged at any store or by mail.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{bg: 'gray', color: 'white'}}>
        <Box flex='1' textAlign='left'>
        Why can’t I add an item to my shopping cart?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    If you are unable to add an item to your shopping cart, unfortunately, that means the item you selected is currently out of stock. Please continue to check back for updated availability if you are still interested in purchasing the item.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{bg: 'gray', color: 'white'}}>
        <Box flex='1' textAlign='left'>
        What Kind of Payment Does Marftly Accept?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    We accept Visa, Mastercard, American Express, Discover, PayPal,  Apple Pay (Apple Pay is available on mobile devices only) and Afterpay. We don't accept Cash on Delivery (CODs), personal checks, or layaway plans.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{bg: 'gray', color: 'white'}}>
        <Box flex='1' textAlign='left'>
        Will my payment information be secure?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    We take security very seriously, so we do everything we can to protect your information. All confidential data, including payment information, is encrypted and transmitted through our industry standard Secure Socket Layer (SSL). Should any unauthorized charges show up on your credit card as a result of shopping with Levi.com, you must alert your credit card provider immediately and in accordance with your credit card's reporting rules and procedures. Levi Strauss & Co. will assume liability for purchases made through Levi.com only if the unauthorized use of your credit card resulted through no fault of your own.
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton _expanded={{bg: 'gray', color: 'white'}}>
        <Box flex='1' textAlign='left'>
        Have I been charged twice for my order?
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    Due to health safety measures implemented to limit the impact of COVID-19 on our employees, we are experiencing delivery delays. With some delays, it may be necessary to reauthorize customer payment cards if the first authorization has expired. If that happens, the reauthorization will appear as a second hold on the account for the value of the order. The account will show two holds for a short time (12-24 hours) until the original hold is dropped from the account. Customers will see the official charge and payment when the order items have been shipped.
    </AccordionPanel>
  </AccordionItem>

  

  
</Accordion>
</div>
    </>
  )
}

export default Faqs