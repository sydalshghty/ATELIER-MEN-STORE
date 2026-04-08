import BestSellersImg from "../../src/assets/bestsellers-product.png";
const BestSellers = () => {
  const featuredProduct = {
    name: 'The Signature Navy Blazer',
    description: 'A masterclass in proportions, hand-finished in our London atelier.',
    price: '$1,250',
    image: BestSellersImg
  };

  const products = [
    {
      name: 'Oxford Brogue',
      description: 'Goodyear-welted Italian leather.',
      image: 'https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=400&q=80'
    },
    {
      name: 'The City Briefcase',
      description: 'Tanned hide with solid brass hardware.',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&q=80'
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-[#F8F6F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#C4A564] text-xs sm:text-sm uppercase tracking-[0.3em] font-light mb-3">
            CURATED SELECTION
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900">
            Best Sellers
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Featured Product (Left) */}
          <div className="relative group">
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={featuredProduct.image}
                alt={featuredProduct.name}
                className="w-full h-[500px] sm:h-[600px] lg:h-[700px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Info Card Overlay */}
              <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 right-4 sm:right-6 lg:right-8 bg-white p-4 sm:p-6 lg:p-8 shadow-lg">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif text-gray-900 mb-2 sm:mb-3">
                  {featuredProduct.name}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                  {featuredProduct.description}
                </p>
                <p className="text-[#C4A564] text-lg sm:text-xl font-medium">
                  {featuredProduct.price}
                </p>
              </div>
            </div>
          </div>

          {/* Right Side Products */}
          <div className="flex flex-col gap-6 lg:gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="group flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-8 items-start sm:items-center p-4 sm:p-6 hover:bg-white/50 rounded-sm transition-colors duration-300"
              >
                {/* Product Image */}
                <div className="relative overflow-hidden w-full sm:w-40 lg:w-48 flex-shrink-0">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-40 sm:h-32 lg:h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-serif text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">
                    {product.description}
                  </p>
                  <button className="inline-flex items-center text-[#C4A564] text-xs sm:text-sm uppercase tracking-[0.2em] font-medium hover:text-gray-900 transition-colors duration-300 group/btn">
                    Discover
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 ml-2 transition-transform duration-300 group-hover/btn:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))}

            {/* Additional Content Area */}
            <div className="flex-1 flex items-center justify-center p-6 sm:p-8 lg:p-12 bg-white/30 rounded-sm">
              <div className="text-center">
                <p className="text-gray-600 text-sm sm:text-base mb-4">
                  Explore our complete collection of timeless pieces
                </p>
                <button className="inline-flex cursor-pointer items-center px-6 sm:px-8 py-3 border border-gray-900 text-gray-900 text-xs sm:text-sm uppercase tracking-[0.2em] hover:bg-gray-900 hover:text-white transition-all duration-300">
                  View All Products
                  <svg
                    className="w-3 h-3 sm:w-4 sm:h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
