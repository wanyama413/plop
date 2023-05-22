import React,{useState,useEffect} from 'react'
import Link from 'next/link'
import { getCategories } from '../services';


const Header = () => {
  const [show,setShow]=useState(true)

  const [isMobile, setIsMobile] = useState(false);
  const [categories, setCategories] = useState([]);
    
  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  // Initial check on component mount
 
useEffect(()=>{
  setIsMobile(window.innerWidth < 768);
  window.addEventListener('resize', handleResize);
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, [show])
  

  const handlemenu=()=>{
    setShow(!show)
  
  }
  const handleChoice=()=>{
    setShow(true)
  }
 
  return (
    <div className='container mx-auto  mb-8'>
      <div className='papa border-b w-full inline-block border-blue-400 py-8'>
        <div className='md:float-left block'>
          <Link href='/'>
            <span className='pass cursor-pointer font-bold text-1xl text-white'>Marlee Electricals</span>
         </Link>
        </div>
        {(isMobile&&!show)&&<div onClick={handleChoice} className='mining  md:float-left md:contents'>
          {categories.map((category)=><Link key={category.slug} href={`/category/${category.slug}`}>
            <span className='cat md:float-right mt-2 align-middle   font-semibold cursor-pointer'>
              {category.name}
            </span>
          </Link>)}
        </div>}
        <div className='whole' onClick={handlemenu}>
          <div className='one'></div>
          <div className='two'></div>
          <div className='three'></div>
        </div>
      </div>
    </div>
  )
}

export default Header