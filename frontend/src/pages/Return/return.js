import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';
import { Image } from 'react-bootstrap'
import { BsArrowRight } from "react-icons/all"
import wave from '../Login/img/wavev.png'
import './return.css'
import returnimg from '../Return/imgs/return.png'
import { RiArrowRightSLine  , TiArrowRight,BsArrowBarRight} from "react-icons/all";



const ReturnScreen = () => {

    const [arrow, setarrow] = useState(false)


    return (
        <>
            <Helmet>
                <title>Return Policy</title>

            </Helmet>
            <Image className="wave" src={wave} />

            <div className="containera">
        
                <div className="imga">
                    <Image src={returnimg} />
                                </div>
               
                <div className='return-content'>
                    
<h1>Return Policy</h1> 
                    <p className='para'> Returns by Mail
Items purchased on Marftly.com can be returned by mail. Review the return policy details here. Once you've found the appropriate portal, enter your order number and email address, select the item for return, then choose one of these two easy return options:Print a return label. If you have a printer, print a prepaid shipping label and packing slip. Place the packing slip inside the package and attach the shipping label to the outside. Drop the package at a FedEx or a participating Walgreens.Go printer-less (orders before September 15th). If don’t have a printer handy, get a mobile return code for your package. Take the code to a FedEx store or a participating Walgreens and they will print the label for you. You will receive an email when your return is processed. Using the mobile return code or the prepaid label deducts $7.50 from your refund.*Returns via Nordstrom are currently available only in the greater Los Angeles area.</p> 



<Link to = '/' className ='notfound' onMouseOver = {()=>{setarrow(true)}} onMouseLeave = {()=>{setarrow(false)}}>
            Go To HomePage
            {!arrow ? <RiArrowRightSLine className = 'arrow' /> : <BsArrowBarRight className = 'arrow'/> }
            </Link>
                   
                    </div> 
                   

                </div>
               
            
                </>
    )
}

export default ReturnScreen
