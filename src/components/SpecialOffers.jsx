import { ArrowRight } from 'lucide-react';
import productOffersImg1 from "../assets/product-offers-1.png";
import productOffersImg2 from "../assets/product-offers-2.png";
import productOffersImg3 from "../assets/product-offers-3.png";
import productOffersImg4 from "../assets/product-offers-4.png";
import productOffersImg5 from "../assets/product-offers-5.png";
const SpecialOffers = () => {
  const products = [
    {
      id: 1,
      name: 'Wool Blend Overcoat',
      category: 'LIMITED OFFER',
      originalPrice: 650,
      salePrice: 390,
      image: productOffersImg1
    },
    {
      id: 2,
      name: 'Tech Chinos',
      category: 'SEASON CLEARANCE',
      originalPrice: 220,
      salePrice: 145,
      image: productOffersImg2
    },
    {
      id: 3,
      name: 'Woven Silk Tie',
      category: 'SPECIAL PRICE',
      originalPrice: 110,
      salePrice: 65,
      image: productOffersImg3
    },
    {
      id: 4,
      name: 'Merino Cardigan',
      category: 'LIMITED STOCK',
      originalPrice: 295,
      salePrice: 195,
      image: productOffersImg4
    },
    {
      id: 5,
      name: 'Classic Derby Shoe',
      category: 'FINAL DAYS',
      originalPrice: 450,
      salePrice: 270,
      image: productOffersImg5
    }
  ];

  return (
    <section className="pt-8 pb-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-gray-900">
            Special Offers
          </h2>
          <a
            href="#"
            className="hidden sm:flex items-center text-xs sm:text-sm text-gray-400 hover:text-[#C4A564] transition-colors uppercase tracking-widest"
          >
            Shop All Sale
            <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-2 transition-transform hover:translate-x-1" />
          </a>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              {/* Product Image */}
              <div className="relative aspect-square bg-gray-100 overflow-hidden mb-4 md:mb-5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                {/* Quick Add Button */}
                <button className="cursor-pointer absolute bottom-0 left-0 right-0 bg-[#C4A564] text-white py-3 sm:py-4 text-xs sm:text-sm font-medium uppercase tracking-wider translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  Quick Add
                </button>
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                {/* Category Tag */}
                <p className="text-[10px] sm:text-xs text-red-400 uppercase tracking-wider font-medium">
                  {product.category}
                </p>

                {/* Product Name */}
                <h3 className="text-sm sm:text-base font-serif text-gray-900 group-hover:text-[#C4A564] transition-colors">
                  {product.name}
                </h3>

                {/* Prices */}
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm text-gray-400 line-through">
                    ${product.originalPrice}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-[#C4A564]">
                    ${product.salePrice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SpecialOffers;
