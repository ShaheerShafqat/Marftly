import React,{useRef,useEffect, useState} from 'react'
import { Helmet } from 'react-helmet';
import {Image} from '@chakra-ui/react'
import HashLoader from "react-spinners/HashLoader";
import './aboutcss.css'
const About = () => {
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
            <title>About</title>
        </Helmet>


            <div className='headingA'>
                <div className = 'line' ref={Line}>
                </div>
                <h1 className ='title' ref={text}>About Us</h1>
            </div>
            <div className='Content1'>
                <div className = 'text'>
                    <h1>
                        Why?
                    </h1>
                <p>To redefine the landscape of retailing and E-commerce in Pakistan by working towards a more customer-centric business approach and to ensure customer convenience and gratification. Giving a new dimension to dropshipping by a custom ecommerce website. To make Pakistani high quality products available to the whole world by our smooth and responsive website. To provide best value to customer all around the globe by providing best quality products with discounts and in a very cheaper price. Delivering products to your door steps much faster. </p>
                </div>
               
                   <div className ='imagecontainer'>
                    <div className = 'Imageabt'>
                    <Image className='mImage' boxSize = '400px' objectFit="cover" src='https://images.unsplash.com/photo-1595991209266-5ff5a3a2f008?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNob3B8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60%27%20alt=%22Segun%20Adebayo'/>
                    </div>
                   </div>
            </div>
            <div className ='Content2'>
                   
                   <div className ='imagecontainer'>
                    <div className = 'Imageabt'>
                    <Image className='mImage' boxSize = '400px' objectFit="cover" src='https://images.unsplash.com/photo-1600950207944-0d63e8edbc3f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGNsb3RoaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60%27%20alt=%22Segun%20Adebayo'/>
                    </div>
                   </div>
                   <div className = 'text'>
                    <h1>
                        How?
                    </h1>
                <p>MARFTLY believes in providing our customers not only value for money, but exceeding their expectations at every level through our pre- and post-sales perspective. We aim to keep our customers updated and, in the loop, so whether it's a query for an order or any tech-update, we will go beyond our excellence to create an ultimate online shopping experience when using our e-commerce platform.</p>
                </div>
            </div>
        </>
    
    )
}

export default About
