import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setEmail('');
      }, 1000);
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-gray-900 mb-4">
            The Digital Curator
          </h2>

          {/* Subtitle */}
          <p className="text-gray-500 text-sm md:text-base mb-8 max-w-xl mx-auto">
            Receive our weekly editorial on tailoring, culture, and exclusive early access to drops.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
            {/* Email Input */}
            <div className="flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                disabled={isSubmitting || isSubmitted}
                className="w-full  px-5 py-4 bg-white border border-gray-200 text-gray-900 placeholder-gray-400  transition-all duration-300 disabled:opacity-50"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className="px-8 py-4 bg-gray-900 text-white font-medium text-sm tracking-wider uppercase hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed min-w-[140px]"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Joining...
                </span>
              ) : isSubmitted ? (
                'Joined!'
              ) : (
                'Join'
              )}
            </button>
          </form>

          {/* Success Message */}
          {isSubmitted && (
            <p className="mt-4 text-green-600 text-sm">
              Thank you for subscribing! Check your inbox for confirmation.
            </p>
          )}

          {/* Privacy Note */}
          <p className="mt-6 text-xs text-gray-400">
            By subscribing, you agree to our Privacy Policy and consent to receive updates.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
