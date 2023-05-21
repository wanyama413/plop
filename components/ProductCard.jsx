import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import { grpahCMSImageLoader } from '../util';

const ProductCard = ({product}) => {

  return (
    <div className="product bg-white shadow-lg rounded-lg p-0 lg:p-0 pb-2 mb-8">
      <div className="imaga relative  inline-block w-full h-60 lg:h-40 mb-0.2">
      <Image
        unoptimized
        loader={grpahCMSImageLoader}
        alt={product.title}
        className="object-contain"
      layout='fill'
        src={product.photo.url}
      />
    </div>
   

    <h1 className="transition duration-700 text-center mb-2 cursor-pointer hover:text-pink-600 text-1xl font-semibold">
      <Link href={`/product/${product.slug}`}>{product.title}</Link>
    </h1>
    <p className="text-center text-xs text-gray-700 font-normal px-4 lg:px-2 mb-2">
      {product.description}
    </p>
    <div className="text-center">
      <Link href={`/product/${product.slug}`}>
        <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-xs font-medium rounded-full text-white px-4 py-3 cursor-pointer">view product</span>
      </Link>
    </div>
  </div>
  )
}

export default ProductCard