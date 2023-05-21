import React from 'react';
import { useRouter } from 'next/router';

import { getCategories, getCategoryPost } from '../../services';
import { ProductCard, Categories, Loader } from '../../components';

const CategoryPost = ({ products }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <Loader />;
  }

  return (
    <div className="container  mx-auto px-10 mb-8">
      <div className="gapp">
        <div className="list">
          {products.map((product, index) => (
            <ProductCard key={index} product={product.node} />
          ))}
        </div>
        <div className="where">
          <div className="relative lg:sticky top-8">
            <Categories />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CategoryPost;

// Fetch data at build time
export async function getStaticProps({ params }) {
  const products = await getCategoryPost(params.slug);

  return {
    props: { products },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export async function getStaticPaths() {
  const categories = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
}