import { groq } from "next-sanity";

//query for fetching all products from sanity
export const allProducts = groq`*[_type == "product"]`

//query for only four products fetching from sanity
export const fourProducts = groq`*[_type == "product"][0..3]`


//query for only product's categories fetching from sanity
export const productsCategory = groq`*[_type == "product"].category`