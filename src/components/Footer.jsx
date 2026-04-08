import { Mail, Globe, MessageCircle, Phone, MapPin, BookOpen } from 'lucide-react';
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Brand Column */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl lg:text-3xl font-serif font-bold tracking-wider mb-4">
              ATELIER MEN
            </h2>
            <div className="space-y-2">
              <p className="text-gray-400 text-xs lg:text-sm">
                © 2024 ATELIER MEN.
              </p>
              <p className="text-gray-400 text-xs lg:text-sm">
                THE DIGITAL CURATOR.
              </p>
            </div>
          </div>

          {/* Collections Column */}
          <div className="lg:col-span-1">
            <h3 className="text-xs lg:text-sm font-medium tracking-widest text-amber-500/80 uppercase mb-6">
              Collections
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-xs lg:text-sm transition-colors duration-200">
                  NEW SEASON
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-xs lg:text-sm transition-colors duration-200">
                  READY TO WEAR
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-xs lg:text-sm transition-colors duration-200">
                  ACCESSORIES
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div className="lg:col-span-1">
            <h3 className="text-xs lg:text-sm font-medium tracking-widest text-amber-500/80 uppercase mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-xs lg:text-sm transition-colors duration-200">
                  PRIVACY POLICY
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-xs lg:text-sm transition-colors duration-200">
                  TERMS OF SERVICE
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-xs lg:text-sm transition-colors duration-200">
                  SHIPPING & RETURNS
                </a>
              </li>
            </ul>
          </div>

          {/* Connect Column */}
          <div className="lg:col-span-1">
            <h3 className="text-xs lg:text-sm font-medium tracking-widest text-amber-500/80 uppercase mb-6">
              Connect
            </h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-xs lg:text-sm transition-colors duration-200 flex items-center gap-3">
                  <Mail className="w-4 h-4" />
                  <span>GMAIL</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-xs lg:text-sm transition-colors duration-200 flex items-center gap-3">
                  <FaLinkedin className="w-4 h-4" />
                  <span>LINKEDIN</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-xs lg:text-sm transition-colors duration-200 flex items-center gap-3">
                  <FaFacebookSquare className="w-4 h-4" />
                  <span>FACEBOOK</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-xs lg:text-sm transition-colors duration-200 flex items-center gap-3">
                  <FaXTwitter className="w-4 h-4" />
                  <span>TWITTER (X)</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-xs lg:text-sm transition-colors duration-200 flex items-center gap-3">
                  <FaInstagram className="w-4 h-4" />
                  <span>INSTAGRAM</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white text-xs lg:text-sm transition-colors duration-200 flex items-center gap-3">
                  <FaWhatsapp className="w-4 h-4" />
                  <span>WHATSAPP</span>
                </a>
              </li>
              <li>
                <a href="tel:+442012345678" className="text-gray-400 hover:text-white text-xs lg:text-sm transition-colors duration-200 flex items-center gap-3">
                  <Phone className="w-4 h-4" />
                  <span>+44 20 1234 5678</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Border */}
        <div className="mt-12 lg:mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs">
              © 2024 Atelier Men. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors duration-200">
                Privacy
              </a>
              <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors duration-200">
                Terms
              </a>
              <a href="#" className="text-gray-500 hover:text-white text-xs transition-colors duration-200">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
