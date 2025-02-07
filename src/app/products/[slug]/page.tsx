import { client } from "@/sanity/lib/client";
import { Products } from "@/types/products";
import { groq } from "next-sanity";
import ProductPage from "./addToCartPage"; // Client Component import

async function getProduct(slug: string): Promise<Products> {
  return client.fetch(
    groq`*[_type=="product" && slug.current==$slug][0]{
      _id,
      productName,
      image,
      type,
      description,
      price,
    }`,
    { slug }
  );
}

export default async function ProductServerPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; // Await params
  const product = await getProduct(slug); // Now pass slug

  return <ProductPage product={product} />;
}
