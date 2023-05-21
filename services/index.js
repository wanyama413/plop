import {request,gql} from "graphql-request";
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT
export const getProducts=async()=>{
    const query = gql`
    query MyQuery {
        productsConnection {
            edges {
              node {
                available
                description
                id
                price
                slug
                title
                photo {
                  url
                }
                categories {
                  name
                  slug
                }
              }
            }
          }
    }
    
    `
   const result = await request(graphqlAPI, query) 
   return result.productsConnection.edges
}
export const getCategories = async () => {
    const query = gql`
      query GetGategories {
          categories {
            name
            slug
          }
      }
    `;
  
    const result = await request(graphqlAPI, query);
  
    return result.categories;
  };
  export const getProductDetails = async (slug) => {
    const query = gql`
      query GetPostDetails($slug : String!) {
        product(where: {slug: $slug}) {
          title
          description
          photo {
            url
          }
          slug
          content {
            raw
          }
          categories {
            name
            slug
          }
        }
      }
    `;
  
    const result = await request(graphqlAPI, query, { slug });
  
    return result.product;
  };
  export const getFeaturedPosts = async () => {
    const query = gql`
      query GetCategoryPost() {
        products(where: {available: true}) {
          photo {
            url
          }
          title
          slug
        }
      }   
    `;
  
    const result = await request(graphqlAPI, query);
  
    return result.products;
  };
  export const getCategoryPost = async (slug) => {
    const query = gql`
      query GetCategoryPost($slug: String!) {
        productsConnection(where: {categories_some: {slug: $slug}}) {
          edges {
            cursor
            node {
              slug
              title
              description
              photo {
                url
              }
              categories {
                name
                slug
              }
            }
          }
        }
      }
    `;
  
    const result = await request(graphqlAPI, query, { slug });
  
    return result.productsConnection.edges;
  };