import { ArrowRight } from 'lucide-react';
import productImg1 from "../../src/assets/product-1.png";
import productImg2 from "../../src/assets/product-2.png";
import productImg3 from "../../src/assets/product-3.png";
import productImg4 from "../../src/assets/product-4.png";
import productImg5 from "../../src/assets/product-5.png";

const products = [
  {
    id: 1,
    category: 'ACCESSORIES',
    name: 'Milan Silk Square',
    price: 85,
    image: productImg1
  },
  {
    id: 2,
    category: 'SHIRTS',
    name: 'The Essential Poplin',
    price: 180,
    image: productImg2
  },
  {
    id: 3,
    category: 'LEATHER GOODS',
    name: 'Grained Calf Belt',
    price: 120,
    image: productImg3
  },
  {
    id: 4,
    category: 'KNITWEAR',
    name: 'Merino Crewneck',
    price: 240,
    image: productImg4
  },
  {
    id: 5,
    category: 'JEWELRY',
    name: 'Onyx Cufflinks',
    price: 145,
    image: productImg5
  }
];

export default function NewArrivals() {
  return (
    <section className="pt-8 pb-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl md:text-3xl lg:text-3xl font-serif font-medium text-gray-900 mb-4 sm:mb-0">
            New Arrivals
          </h2>
          <button className="group cursor-pointer flex items-center justify-center sm:justify-end gap-2 text-xs md:text-sm uppercase tracking-widest text-gray-500 hover:text-gray-900 transition-colors duration-300 mt-[-5px]">
            View Collection
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer"
            >
              {/* Product Image */}
              <div className="relative aspect-square bg-gray-100 overflow-hidden mb-4 md:mb-5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                {/* Quick Add Button - Show on hover desktop, always visible on mobile touch */}
                <button className="absolute cursor-pointer rounded-[4px] bottom-3 left-3 right-3 bg-white text-gray-900 py-2 md:py-2.5 text-xs md:text-sm uppercase tracking-wider font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-gray-900 hover:text-white">
                  Quick Add
                </button>
              </div>

              {/* Product Info */}
              <div className="space-y-1.5 md:space-y-2">
                <p className="text-[10px] md:text-xs uppercase tracking-wider text-gray-400">
                  {product.category}
                </p>
                <h3 className="text-sm md:text-base font-medium text-gray-900 group-hover:text-gray-600 transition-colors duration-300 line-clamp-1">
                  {product.name}
                </h3>
                <p className="text-xs md:text-sm text-[#C4A564] font-medium">
                  ${product.price}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
