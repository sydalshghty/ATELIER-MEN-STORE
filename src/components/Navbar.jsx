import { useState } from "react";
import { Search, ShoppingBag, User, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "HOME", href: "/" },
    { label: "SHOP", href: "#" },
    { label: "CONTACT US", href: "#" },
    { label: "ABOUT", href: "#" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full border-b border-gray-100 bg-white fixed top-0 left-0 z-999999">
      {/* Main Navbar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex-shrink-0" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <Link to={`/`} className="font-serif text-base font-bold tracking-wide text-black sm:text-lg">
            ATELIER MEN
          </Link>
        </div>

        {/* Desktop Navigation Links - Centered */}
        <div className="hidden items-center gap-8 lg:flex xl:gap-10">
          {navLinks.map((link) => (
            <Link
              to={link.href}
              key={link.label}
              className="text-xs font-medium tracking-[0.15em] text-gray-900 transition-colors hover:text-gray-500"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Side - Icons & Mobile Menu Button */}
        <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">
          {/* Search Icon - Hidden on smallest screens */}
          <button
            className="hidden text-gray-900 transition-colors hover:text-gray-500 sm:block cursor-pointer"
            aria-label="Search"
          >
            <Search className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} />
          </button>

          {/* Shopping Bag Icon */}
          <button
            className="text-gray-900 transition-colors hover:text-gray-500 cursor-pointer"
            aria-label="Shopping Bag"
          >
            <ShoppingBag className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} />
          </button>

          {/* User Icon - Hidden on smallest screens */}
          <button
            className="hidden text-gray-900 transition-colors hover:text-gray-500 sm:block cursor-pointer"
            aria-label="User Account"
          >
            <User className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} />
          </button>

          {/* Mobile Menu Button - Visible on small screens */}
          <button
            className="block text-gray-900 transition-colors hover:text-gray-500 lg:hidden cursor-pointer"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? (
              <X className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} />
            ) : (
              <Menu className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.5} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden ${isMenuOpen ? 'visible' : 'invisible'
          }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 cursor-pointer ${isMenuOpen ? 'opacity-100' : 'opacity-0'
            }`}
          onClick={toggleMenu}
        ></div>

        {/* Drawer */}
        <div
          className={`absolute right-0 top-0 h-full w-[400px] max-w-[80vw] bg-white shadow-xl transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
            <span className="font-serif text-lg font-bold tracking-wide">
              ATELIER MEN
            </span>
            <button
              onClick={toggleMenu}
              className="text-gray-900 transition-colors hover:text-gray-500 cursor-pointer"
              aria-label="Close Menu"
            >
              <X className="h-5 w-5" strokeWidth={1.5} />
            </button>
          </div>

          {/* Drawer Navigation Links */}
          <div className="flex flex-col px-6 py-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="mb-5 text-[14px] font-medium  text-gray-900 transition-colors hover:text-gray-500"
                onClick={toggleMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
