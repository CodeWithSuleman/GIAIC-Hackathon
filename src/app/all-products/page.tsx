"use client"
import Image from "next/legacy/image";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Products } from '@/types/products';
import { client } from '@/sanity/lib/client';
import { allProducts, productsCategory } from '@/sanity/lib/queries';
import { urlFor } from '@/sanity/lib/image';

export default function AllProducts() {

  const[product,setProduct] = useState<Products[]>([])
  const[category,setcategory] = useState<string[]>([])

  useEffect(()=>{
  async function fetchingAllProducts(){
    const fetchedProducts:Products[] = await client.fetch(allProducts)
    const fetchedCategories:string[] = await client.fetch(productsCategory)
    setProduct(fetchedProducts)
    setcategory(fetchedCategories) 
  }
  fetchingAllProducts()
},[]);
 

return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-6">


      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters */}
        <aside className="w-full lg:w-1/4 bg-gray-50 p-4 rounded-lg shadow-sm">
  {/* Categories */}
  <h3 className="font-bold text-lg mb-4">Categories</h3>
  <ul className="space-y-2 text-sm">
    <li>Shoes</li>
    <li>Sports Bras</li>
    <li>Tops & T-Shirts</li>
    <li>Hoodies & Sweatshirts</li>
    <li>Jackets</li>
    <li>Trousers & Tights</li>
    <li>Shorts</li>
    <li>Tracksuits</li>
    <li>Jumpsuits & Rompers</li>
    <li>Skirts & Dresses</li>
    <li>Socks</li>
    <li>Accessories & Equipment</li>
  </ul>

  {/* Gender */}
  <div className="mt-6">
    <h4 className="font-semibold text-sm mb-2">Gender</h4>
    <ul className="space-y-1 text-sm">
      <li>
        <input type="checkbox" id="men" className="mr-2" /> 
        <label htmlFor="men">Men</label>
      </li>
      <li>
        <input type="checkbox" id="women" className="mr-2" />
        <label htmlFor="women">Women</label>
      </li>
      <li>
        <input type="checkbox" id="unisex" className="mr-2" />
        <label htmlFor="unisex">Unisex</label>
      </li>
    </ul>
  </div>

  {/* Kids */}
  <div className="mt-6">
    <h4 className="font-semibold text-sm mb-2">Kids</h4>
    <ul className="space-y-1 text-sm">
      <li>
        <input type="checkbox" id="boys" className="mr-2" />
        <label htmlFor="boys">Boys</label>
      </li>
      <li>
        <input type="checkbox" id="girls" className="mr-2" />
        <label htmlFor="girls">Girls</label>
      </li>
    </ul>
  </div>

  {/* Price */}
  <div className="mt-6">
    <h4 className="font-semibold text-sm mb-2">Shop By Price</h4>
    <ul className="space-y-1 text-sm">
      <li>
        <input type="checkbox" id="under-2500" className="mr-2" />
        <label htmlFor="under-2500">Under ₹2,500</label>
      </li>
      <li>
        <input type="checkbox" id="above-2500" className="mr-2" />
        <label htmlFor="above-2500">₹2,501 - ₹5,000</label>
      </li>
    </ul>
  </div>
</aside>


        {/* Products Grid */}
        <section className="w-full lg:w-3/4">
        
          <h2 className="text-2xl font-bold mb-6">All Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {product.map((product) => (
              <div key={product._id} className="space-y-3">
                <div>
                <Link href={`/products/${product.slug?.current}`}>
                {/* Product Image */}
                <div className="w-full h-48 flex justify-center items-center bg-gray-100 rounded-lg">
                  {product.image &&(
                  <Image
                    src={urlFor(product.image).url()}
                    alt={product.productName}
                    width={200}
                    height={200}
                    className="object-contain"
                  />)}
                </div>

                {/* Product Details */}
                <div className="text-start space-y-1 mt-1">
                  <h4 className="text-sm md:text-base font-medium leading-tight">
                    {product.productName}
                  </h4>
                  <p className="text-gray-500 text-xs md:text-sm">{product.color}</p>
                  <p className="text-gray-500 text-xs md:text-sm">{product.category}</p>
                  <p className="text-lg font-bold">Rs {product.price}</p>
                </div>
                </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Related Categories */}
          <div className="mt-12">
            <h3 className="text-lg font-bold mb-4">Related Categories</h3>
            <div className="flex flex-wrap gap-3">
              {category.map((category, index) => (
                
                <div
                  key={index}
                  className="px-4 py-2 bg-gray-100 text-sm font-medium text-gray-600 rounded-full border border-gray-300"
                ><Link href={''}>
                {category}
                </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
