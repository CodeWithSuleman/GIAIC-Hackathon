import { client } from "@/sanity/lib/client";
import { Products } from "../../../../types/products";
import { groq } from "next-sanity";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

interface productPageProps{
    params:Promise<{slug:string}>
}

async function getProduct(slug:string):Promise<Products> {
    return client.fetch(
        groq`*[_type=="product" && slug.current==$slug][0]{
        _id,
        productName,
        image,
        type,
        description,
        price,
        }`,{slug}
    )
}

export default async function ProductPage({params}:productPageProps){
    const {slug} = await params
    const product = await getProduct(slug)


    return (
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center px-4 sm:px-6 lg:px-12 py-8">
          {/* Product Image */}
          <div className="w-full max-w-sm">
            {product?.image && (
              <img
                src={urlFor(product.image).url()}
                alt={product?.productName}
                className="w-full h-auto object-contain"
              />
            )}
          </div>
    
          {/* Product Details */}
          <div className="mt-6 lg:mt-0 lg:ml-10 text-center lg:text-left">
            <h1 className="text-2xl font-bold mb-4">{product?.productName}</h1>
            <p className="text-gray-600 mb-6">{product?.description}</p>
            <p className="text-lg font-semibold mb-6">Rs {product?.price}</p>
            <Link href="/cart">
            <button className="px-6 py-3 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-all">
              Add to Cart
            </button></Link>
          </div>
        </div>
      );
}