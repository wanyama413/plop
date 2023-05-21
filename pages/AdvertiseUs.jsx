import React,{ useRef }  from 'react'
import Image from 'next/image';
import inside from '../public/hide.webp'
const AdvertiseUs = () => {
  const emailRef=useRef(null)
  const messageRef=useRef(null)
  const phoneRef=useRef(null)
  const nameRef=useRef(null)
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(emailRef.current.value)
    console.log(messageRef.current.value)
    console.log(phoneRef.current.value)
    console.log(nameRef.current.value)
  }
  return (
    <div className='adv'>
      <div className='advertise'>
        <h1 className='advertiseTitle'>WANT TO ADVERTISE WITH US?</h1>
      </div>
      <div className='lower'>
      <div className='contain'>
      <Image unoptimized src={inside} alt=""   layout='fill' className="w-full object-top object-cover" />
      </div>
      <div className='notcontain'>
        <div className='detail'>
          <h2 className='bott'>Your Email</h2>
          <input ref={emailRef} className='riti'/>
        </div>
        <div className='detail'>
          <h2 className='bott'>Your Name</h2>
          <input ref={nameRef} className='riti'/>
        </div>
        <div className='detail'>
          <h2 className='bott'>Your Phone</h2>
          <input ref={phoneRef} className='riti' type='number'/>
        </div>
        <div className='detail'>
          <h2 className='bott'>Message</h2>
          <input ref={messageRef} className='riti'/>
        </div>
      </div>
      </div>
      <div className='submitAdv'>
          <button onClick={handleSubmit}>SUBMIT</button>
        </div>
    </div>
  )
}

export default AdvertiseUs