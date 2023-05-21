import React from 'react'
import Image from 'next/image';
import { grpahCMSImageLoader } from '../util';
import whatsapp from '../public/whatsapp.png'
import facebook from '../public/facebook.png'
import placeholder from '../public/placeholder.png'
import twitter from '../public/twitter.png'
const PostWidget = () => {
  return (
    <div className="social-menu">
        <ul>
            <li><a href="https://wa.me/254724611036" target="blank"> <Image
            
        unoptimized
        loader={grpahCMSImageLoader}
        alt=''
        className="object"
      width={2}
        src={whatsapp}
      />Message us on WhatsApp</a></li>
            <li><a href="https://web.facebook.com/profile.php?id=100064181139062" target="blank"> <Image
            
        unoptimized
        loader={grpahCMSImageLoader}
        alt=''
        className="object"
      width={2}
        src={facebook}
      />Connect with us on Facebook</a></li>
            <li><a href="https://twitter.com/merleeelectrics" target="blank"> <Image
            
        unoptimized
        loader={grpahCMSImageLoader}
        alt=''
        className="object"
      width={2}
        src={twitter}
      /> Find us on Twitter</a></li>
            <li><a href="https://goo.gl/maps/dsLEP8HJXa3YNYy66" target="blank"> <Image
            
        unoptimized
        loader={grpahCMSImageLoader}
        alt=''
        className="object"
      width={2}
        src={placeholder}
      />Locate our shop</a></li>          
        </ul>
    </div>
  )
}

export default PostWidget