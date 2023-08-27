import React, { useState } from 'react';
import { Image } from "@chakra-ui/react"
import { Link } from "react-router-dom";
import { RiArrowRightSLine  , TiArrowRight,BsArrowBarRight} from "react-icons/all";
import wave from './img/wavev.png'

import './Notfound.css'
const NotFoundPage = () => {
  const [arrow, setarrow] = useState(false)
  return <>
  
  <Image className='imgnot' src='https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1901.jpg?t=st=1655298116~exp=1655298716~hmac=6980251085a943df3eee139ac7802797b89017e6df19f917d6a0805da41aceff&w=740' />
  <Image className="wave" src={wave} />
<h1>

             
            <Link to = '/' className ='notfound' onMouseOver = {()=>{setarrow(true)}} onMouseLeave = {()=>{setarrow(false)}}>
            Go To HomePage
            {!arrow ? <RiArrowRightSLine className = 'arrow' /> : <BsArrowBarRight className = 'arrow'/> }
            </Link>

            </h1>
            
  </>
}

export default NotFoundPage;