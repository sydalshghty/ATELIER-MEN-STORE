function RegisterPage(){
    return(
        <div className="min-h-screen bg-[#F9F7F2] flex flex-col items-center justify-center p-6 text-zinc-800">
      <div className="w-full max-w-sm space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-serif tracking-widest text-zinc-900">ATELIER MEN</h1>
          <p className="text-sm text-zinc-500 tracking-wide">Join the curated collective.</p>
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-4">
            <div>
              <label className="block text-[10px] font-bold tracking-widest text-zinc-500 mb-1">FULL NAME</label>
              <input type="text" className="w-full bg-transparent border-b border-zinc-300 py-2 focus:outline-none focus:border-zinc-800 placeholder-zinc-300" placeholder="ALEXANDER VANCE" />
            </div>
            <div>
              <label className="block text-[10px] font-bold tracking-widest text-zinc-500 mb-1">EMAIL ADDRESS</label>
              <input type="email" className="w-full bg-transparent border-b border-zinc-300 py-2 focus:outline-none focus:border-zinc-800 placeholder-zinc-300" placeholder="AVANCE@ATELIER.COM" />
            </div>
            <div>
              <label className="block text-[10px] font-bold tracking-widest text-zinc-500 mb-1">SECURITY KEY</label>
              <input type="password" className="w-full bg-transparent border-b border-zinc-300 py-2 focus:outline-none focus:border-zinc-800 placeholder-zinc-300" placeholder="••••••••••••" />
            </div>
            <div className="flex items-start gap-2 pt-2">
              <input type="checkbox" id="subscribe" className="mt-1 accent-zinc-800" />
              <label htmlFor="subscribe" className="text-[11px] text-zinc-500 leading-tight">
                Receive the 'Atelier Dispatch' featuring exclusive private collection access and seasonal editorials.
              </label>
            </div>
          </div>

          <button className="w-full bg-[#C5A069] text-white py-3 text-xs font-bold tracking-widest hover:bg-[#b08e5a] transition-colors">
            CREATE ACCOUNT
          </button>
        </form>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-zinc-200"></div>
          </div>
          <div className="relative flex justify-center text-[10px] font-bold tracking-widest text-zinc-400">
            <span className="bg-[#F9F7F2] px-2">DISCOVER VIA</span>
          </div>
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 border border-zinc-300 py-3 text-xs font-bold tracking-widest hover:bg-zinc-100 transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"/>
            </svg>
            GOOGLE
          </button>
          <button className="flex items-center justify-center gap-2 border border-zinc-300 py-3 text-xs font-bold tracking-widest hover:bg-zinc-100 transition-colors">
             <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98 1.15-2.01 2.3-3.32 2.3-1.32 0-1.74-.77-3.25-.77-1.52 0-2 .77-3.35.77-1.35 0-2.58-1.29-3.56-2.58-2.58-3.55-2.58-9.04 0-11.88 1.28-1.55 3.35-2.58 5.61-2.58 1.28 0 2.58.77 3.35.77.77 0 2.06-1.03 3.61-1.03 1.55 0 2.84.51 3.87 1.55-3.35 2.06-2.58 5.61-.26 7.15zM12.06 6.18c.26-1.55 1.55-2.84 2.84-3.09-1.29 1.55-3.09 2.58-2.84 3.09z"/>
            </svg>
            APPLE
          </button>
        </div>

        {/* Footer */}
        <div className="text-center text-xs text-zinc-600">
          ALREADY A MEMBER? <a href="#" className="font-bold text-[#C5A069]">SIGN IN</a>
        </div>

        <div className="text-center text-[9px] text-zinc-400 tracking-widest pt-4">
          BY REGISTERING, YOU AGREE TO OUR<br/> TERMS OF SERVICE & PRIVACY POLICY
        </div>
      </div>
    </div>
    )
}
export default RegisterPage;