import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import menuData from './menuData';
import ThemeToggler from './ThemeToggler';

export default function Header() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState<number>(-1);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY >= 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubmenu = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <header
      className={`header top-0 left-0 z-40 flex w-full items-center transition-all ${
        sticky
          ? 'fixed z-[9999] bg-white/80 dark:bg-gray-dark/80 backdrop-blur-xs shadow-sticky transition'
          : 'absolute bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="relative -mx-4 flex items-center justify-between">
          {/* Logo */}
          <div className="w-60 max-w-full px-4 xl:mr-12">
            <Link to="/" className={`header-logo block w-full ${sticky ? 'py-5 lg:py-2' : 'py-8'}`}>
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
          </div>

          {/* Navigation & Controls */}
          <div className="flex w-full items-center justify-between px-4">
            <div>
              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setNavbarOpen(!navbarOpen)}
                aria-label="Toggle Mobile Menu"
                className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                <span className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? 'top-[7px] rotate-45' : ''}`} />
                <span className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? 'opacity-0' : ''}`} />
                <span className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${navbarOpen ? 'top-[-8px] -rotate-45' : ''}`} />
              </button>

              {/* Menu Links */}
              <nav
                className={`navbar absolute right-0 z-30 w-[250px] rounded border-[.5px] border-body-color/50 bg-white px-6 py-4 duration-300 dark:border-body-color/20 dark:bg-dark lg:visible lg:static lg:w-auto lg:border-none lg:!bg-transparent lg:p-0 lg:opacity-100 ${
                  navbarOpen ? 'visibility top-full opacity-100 shadow-lg' : 'invisible top-[120%] opacity-0'
                }`}
              >
                <ul className="block lg:flex lg:space-x-12">
                  {menuData.map((menuItem, index) => (
                    <li key={menuItem.id} className="group relative">
                      {menuItem.path ? (
                        <Link
                          to={menuItem.path}
                          className={`flex py-2 text-base lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
                            pathname === menuItem.path
                              ? 'text-primary dark:text-white font-semibold'
                              : 'text-dark hover:text-primary dark:text-white/70 dark:hover:text-white'
                          }`}
                        >
                          {menuItem.title}
                        </Link>
                      ) : (
                        <>
                          <button
                            onClick={() => handleSubmenu(index)}
                            className="flex cursor-pointer items-center justify-between py-2 text-base text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6"
                          >
                            {menuItem.title}
                            <span className="pl-3">
                              <svg width="15" height="14" viewBox="0 0 15 14">
                                <path
                                  d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70307 2.23789 4.39682 2.43477 4.19995C2.63164 4.00307 2.93789 4.00307 3.13477 4.19995L7.81602 8.77182L12.4973 4.1562C12.6941 3.95932 13.0004 3.95932 13.1973 4.1562C13.3941 4.35307 13.3941 4.65932 13.1973 4.8562L8.16601 9.79995C8.05664 9.90932 7.94727 9.97495 7.81602 9.97495Z"
                                  fill="currentColor"
                                />
                              </svg>
                            </span>
                          </button>

                          <div
                            className={`submenu relative top-full left-0 rounded-sm bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                              openIndex === index ? 'block' : 'hidden'
                            }`}
                          >
                            {menuItem.submenu?.map((submenuItem) => (
                              <Link
                                to={submenuItem.path || '#'}
                                key={submenuItem.id}
                                className="block rounded py-2.5 text-sm text-dark hover:text-primary dark:text-white/70 dark:hover:text-white lg:px-3"
                              >
                                {submenuItem.title}
                              </Link>
                            ))}
                          </div>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Auth CTA & Theme Switcher */}
            <div className="flex items-center justify-end pr-16 lg:pr-0">
              <Link
                to="/signin"
                className="hidden px-7 py-3 text-base font-medium text-dark hover:opacity-70 dark:text-white md:block"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="ease-in-out hover:bg-opacity-90 rounded-sm bg-primary px-8 py-3 text-base font-medium text-white shadow-btn transition duration-300 hover:shadow-btn-hover md:block md:px-9 lg:px-6 xl:px-9"
              >
                Sign Up
              </Link>
              <div className="ml-4">
                <ThemeToggler />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}