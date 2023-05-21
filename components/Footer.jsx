import React from 'react'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='higher'>
        <div className='top'>
            <ul className='toplow'>
                <li className='linkss'><Link href='/AboutUs'>About us</Link></li>
                <li className='linkss'><Link href='/ContactUs'>Contact Us</Link></li>
                <li className='linkss'><Link href='/Gallery'>Delivery</Link></li>
                <li className='linkss'><Link href='/AdvertiseUs'>Advertise with us</Link></li>
            </ul>
        </div>
        <div>
            <ul className='foot'>
                <li className='linkss'>&copy; {new Date().getFullYear()} Marlee Electricals.All rights reserved</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer