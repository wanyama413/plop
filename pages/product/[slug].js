import React from 'react';
import { useRouter } from 'next/router';

import { ProductDetail, Categories, PostWidget,Loader } from '../../components';
import { getProducts, getProductDetails } from '../../services';


const PostDetails = ({ product }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <>
      <div className="container mx-auto px-10 mb-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="col-span-1 lg:col-span-8">
            <ProductDetail product={product} />
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              <PostWidget slug={product.slug} categories={product.categories.map((category) => category.slug)} />
              <Categories />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PostDetails;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const data = await getProductDetails(params.slug);
  return {
    props: {
      product: data,
    },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const products = await getProducts();
  return {
    paths: products.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
   
  };
}