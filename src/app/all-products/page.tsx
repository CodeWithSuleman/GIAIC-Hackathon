import Image from 'next/image';
import Product1 from '@/app/assets/product1.png';
import Product2 from '@/app/assets/product2.png';
import Product3 from '@/app/assets/product3.png';
import Product4 from '@/app/assets/product4.png';
import Shoe1 from '@/app/assets/shoe1.png';
import Shoe3 from '@/app/assets/shoe3.png';
import Shoe4 from '@/app/assets/shoe4.png';
import Shoe5 from '@/app/assets/shoe5.png';
import Shoe6 from '@/app/assets/shoe6.png';
import Link from 'next/link';

export default function AllProducts() {
  const products = [
    { id: 1, image: Shoe1, name: 'Nike Air Max', price: '₹10,795', color: '1 Colour', category: "Men's Shoes" },
    { id: 2, image: Shoe3, name: 'Nike Air Max', price: '₹10,795', color: '1 Colour', category: "Men's Shoes" },
    { id: 3, image: Shoe4, name: 'Nike Air Max', price: '₹10,795', color: '1 Colour', category: "Men's Shoes" },
    { id: 4, image: Shoe5, name: 'Nike Air Max', price: '₹10,795', color: '1 Colour', category: "Men's Shoes" },
    { id: 5, image: Shoe6, name: 'Nike Air Max', price: '₹10,795', color: '1 Colour', category: "Men's Shoes" },
    { id: 6, image: Product1, name: 'Nike Air Max', price: '₹10,795', color: '1 Colour', category: "Men's Shoes" },
    { id: 7, image: Product2, name: 'Nike Sports Tee', price: '₹4,995', color: '1 Colour', category: "Men's Shoes" },
    { id: 8, image: Product3, name: 'Nike Jacket', price: '₹8,695', color: '1 Colour', category: "Women's Shoes" },
    { id: 9, image: Product4, name: 'Nike Hoodie', price: '₹6,995', color: '1 Colour', category: 'Hoodies' },
  ];

  const categories = [
    'Best Selling Products',
    'Best Shoes',
    'New Basketball Shoes',
    'New Football Shoes',
    'New Men\'s Shoes',
    'New Running Shoes',
    'Best Men\'s Shoes',
    'New Jordan Shoes',
    'Best Women\'s Shoes',
    'Best Training & Gym',
  ];

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
            {products.map((product) => (
              <div key={product.id} className="space-y-3">
                <div>
                <Link href='/product-detail'>
                {/* Product Image */}
                <div className="w-full h-48 flex justify-center items-center bg-gray-100 rounded-lg">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="object-contain"
                  />
                </div>

                {/* Product Details */}
                <div className="text-start space-y-1 mt-1">
                  <h4 className="text-sm md:text-base font-medium leading-tight">
                    {product.name}
                  </h4>
                  <p className="text-gray-500 text-xs md:text-sm">{product.color}</p>
                  <p className="text-gray-500 text-xs md:text-sm">{product.category}</p>
                  <p className="text-lg font-bold">{product.price}</p>
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
              {categories.map((category, index) => (
                
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
