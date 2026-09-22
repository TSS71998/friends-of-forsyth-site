import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24 border-t border-body-color/10 dark:border-white/10">
      <div className="container mx-auto px-4">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
            <div className="mb-12 max-w-[360px] lg:mb-16">
              <Link to="/" className="mb-8 inline-block">
                <img
                  src="/images/logo/logo-2.svg"
                  alt="logo"
                  className="w-full dark:hidden"
                />
                <img
                  src="/images/logo/logo.svg"
                  alt="logo"
                  className="hidden w-full dark:block"
                />
              </Link>
              <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                Startup and SaaS landing page boilerplate rebuilt with React, TypeScript, and Vite.
              </p>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-xl font-bold text-black dark:text-white">Quick Links</h2>
              <ul>
                <li className="mb-4">
                  <Link to="/about" className="text-base text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                    About
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/pricing" className="text-base text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                    Pricing
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/blog" className="text-base text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Terms & Policy */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-3/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-xl font-bold text-black dark:text-white">Terms</h2>
              <ul>
                <li className="mb-4">
                  <Link to="/privacy" className="text-base text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/terms" className="text-base text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                    Terms of Service
                  </Link>
                </li>
                <li className="mb-4">
                  <Link to="/support" className="text-base text-body-color hover:text-primary dark:text-body-color-dark dark:hover:text-primary">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="w-full px-4 md:w-1/2 lg:w-3/12 xl:w-3/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-10 text-xl font-bold text-black dark:text-white">Support & Contact</h2>
              <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
                Reach out anytime for questions or custom integrations.
              </p>
              <Link to="/contact" className="inline-block rounded-sm bg-primary px-6 py-2.5 text-base font-medium text-white hover:bg-primary/90">
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]" />
        <div className="py-8">
          <p className="text-center text-base text-body-color dark:text-body-color-dark">
            © {new Date().getFullYear()} Startup. Rebuilt for React + Vite.
          </p>
        </div>
      </div>
    </footer>
  );
}