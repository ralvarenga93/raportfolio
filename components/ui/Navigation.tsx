"use client";

import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMobileMenuOpen(false); // Close mobile menu after navigation
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="text-xl md:text-2xl font-bold text-foreground hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            aria-label="Home"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleNavClick(e as any, "#home");
              }
            }}
          >
            Roger Alvarenga
          </a>
          <ul className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              return (
                <li key={item.name}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`text-sm font-medium transition-colors hover:text-gray-600 dark:hover:text-gray-300 ${
                      activeSection === sectionId
                        ? "text-foreground border-b-2 border-foreground"
                        : "text-gray-600 dark:text-gray-400"
                    }`}
                    aria-label={`Navigate to ${item.name} section`}
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleNavClick(e as any, item.href);
                      }
                    }}
                  >
                    {item.name}
                  </a>
                </li>
              );
            })}
          </ul>
          {/* Mobile menu button */}
          <button
            className="md:hidden text-foreground p-2 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
            onClick={toggleMobileMenu}
            tabIndex={0}
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            )}
          </button>
        </div>
        {/* Mobile menu dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-700">
            <ul className="py-4 space-y-2">
              {navItems.map((item) => {
                const sectionId = item.href.substring(1);
                return (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.href)}
                      className={`block px-4 py-3 text-base font-medium transition-colors min-h-[44px] flex items-center ${
                        activeSection === sectionId
                          ? "text-foreground bg-gray-100 dark:bg-gray-800"
                          : "text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                      }`}
                      aria-label={`Navigate to ${item.name} section`}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          handleNavClick(e as any, item.href);
                        }
                      }}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

