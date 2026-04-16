import { Cloud, Apple, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function RegisterPage() {
  const [type, setType] = useState("password")
  return (
    <div className="min-h-screen bg-[#F7F5F2] flex flex-col items-center justify-center p-6 sm:p-12 font-['Montserrat'] text-[#333]">
      <div className="w-full max-w-xl flex flex-col items-center">

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-['Playfair_Display'] tracking-widest text-[#1a1a1a] mb-2 uppercase">
            Atelier Men
          </h1>
          <div className="w-[40%] h-px bg-[#C4A46B] mx-auto mb-6"></div>
          <p className="text-[#888] text-sm md:text-base font-light tracking-wide">
            Join the curated collective.
          </p>
        </div>

        {/* Form */}
        <form className="w-full space-y-8" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-[10px] md:text-xs tracking-[0.15em] text-[#888] uppercase mb-2 font-medium">
              Full Name
            </label>
            <input
              required
              type="text"
              placeholder="ALEXANDER VANCE"
              className="w-full bg-white border-none py-4 px-6 text-sm tracking-widest placeholder:text-[#D1D1D1] focus:ring-1 focus:ring-[#C4A46B] outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-[10px] md:text-xs tracking-[0.15em] text-[#888] uppercase mb-2 font-medium">
              Email Address
            </label>
            <input
              required
              type="email"
              placeholder="AVANCE@ATELIER.COM"
              className="w-full bg-white border-none py-4 px-6 text-sm tracking-widest placeholder:text-[#D1D1D1] focus:ring-1 focus:ring-[#C4A46B] outline-none transition-all"
            />
          </div>

          <div>
            <label className="block text-[10px] md:text-xs tracking-[0.15em] text-[#888] uppercase mb-2 font-medium">
              Security Key
            </label>
            <div className='w-full flex justify-between items-center bg-white py-4 px-6'>
              <input
                required
                type={type}
                placeholder="•••••••••••••"
                className="w-full bg-white border-none text-lg tracking-widest placeholder:text-[#D1D1D1] outline-none transition-all"
              />
              {type === "password" ?
                <EyeOff className='w-6 cursor-pointer text-[#888]' onClick={() => setType("text")} />
                :
                <Eye className='w-6 cursor-pointer text-[#888]' onClick={() => setType("password")} />
              }
            </div>
          </div>

          {/* Newsletter Checkbox */}
          <div className="flex items-center space-x-3 py-2 ">
            <input
              id="newsletter"
              type="checkbox"
              className="mt-1 w-4 h-4 border-[#D1D1D1] text-[#C4A46B] focus:ring-[#C4A46B] rounded-none"
            />
            <label htmlFor="newsletter" className="text-[10px] md:text-xs text-[#888] leading-relaxed font-light">
              Receive the 'Atelier Dispatch' featuring exclusive private collection access and seasonal editorials.
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#C4A46B] cursor-pointer text-white py-5 px-6 text-xs md:text-sm tracking-[0.25em] font-medium uppercase hover:bg-[#B3935A] transition-colors"
          >
            Create Account
          </button>
        </form>

        {/* Divider */}
        <div className="w-full flex items-center my-10">
          <div className="grow h-px bg-[#E5E5E5]"></div>
          <span className="px-4 text-[9px] md:text-[10px] tracking-[0.2em] text-[#D1D1D1] uppercase font-medium">
            Discover Via
          </span>
          <div className="grow h-px bg-[#E5E5E5]"></div>
        </div>

        {/* Social Login */}
        <div className="w-full grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center space-x-3 bg-white py-4 px-4 hover:bg-gray-50 transition-colors">
            <Cloud className="w-4 h-4 text-[#333]" />
            <span className="text-[10px] tracking-[0.15em] text-[#333] uppercase font-medium">Google</span>
          </button>
          <button className="flex items-center justify-center space-x-3 bg-white py-4 px-4 hover:bg-gray-50 transition-colors">
            <Apple className="w-4 h-4 text-[#333]" />
            <span className="text-[10px] tracking-[0.15em] text-[#333] uppercase font-medium">Apple</span>
          </button>
        </div>

        {/* Sign In Link */}
        <div className="mt-12 text-[10px] md:text-xs tracking-[0.15em] font-medium">
          <span className="text-[#888] uppercase">Already a member? </span>
          <Link to={`/login`} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className='cursor-pointer'>
            <button className="text-[#C4A46B] uppercase hover:underline cursor-pointer">Sign In</button>
          </Link>
        </div>

        {/* Footer Link */}
        <div className="mt-16 text-center">
          <div className="text-[9px] tracking-widest text-[#B1B1B1] uppercase font-light leading-relaxed">
            By registering, you agree to our
            <div className="mt-1">
              <span className="border-b border-[#D1D1D1] pb-px hover:text-[#888] cursor-pointer transition-colors">
                Terms of Service & Privacy Policy
              </span>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
export default RegisterPage;