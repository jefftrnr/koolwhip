import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/band-members", label: "Get to know us" },
    { href: "/shows", label: "Events" },
    { href: "/gallery", label: "Gallery" },
    { href: "/social", label: "Social" },
    { href: "/booking", label: "Booking" },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-700 ${
      isScrolled 
        ? 'minimal-luxury border-b border-white/5' 
        : 'ultra-minimal border-b border-white/2'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center space-x-2 sm:space-x-4 cursor-pointer group sophisticated-hover">
              <img 
                src="/attached_assets/IMG_1489_1752904713682.png" 
                alt="KoolWhip" 
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain opacity-90"
              />
              <div className="luxury-typography text-sm sm:text-lg text-white font-light tracking-[0.1em] uppercase group-hover:text-rust-orange transition-colors duration-500">
                KoolWhip
              </div>
            </div>
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 lg:space-x-12">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <button className={`luxury-typography font-light text-xs lg:text-sm tracking-[0.15em] uppercase transition-all duration-500 sophisticated-hover border-b pb-1 ${
                  location === item.href 
                    ? 'text-rust-orange border-rust-orange' 
                    : 'text-white/70 border-white/10 hover:text-rust-orange hover:border-rust-orange'
                }`}>
                  {item.label}
                </button>
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <button className="ultra-minimal text-white/70 hover:text-rust-orange transition-colors duration-500">
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="elegant-monochrome border-white/5">
              <div className="flex flex-col space-y-8 mt-16">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href}>
                    <button 
                      onClick={() => setIsOpen(false)}
                      className={`luxury-typography font-light text-sm tracking-[0.15em] uppercase transition-colors duration-500 border-b pb-2 ${
                        location === item.href 
                          ? 'text-rust-orange border-rust-orange' 
                          : 'text-white/70 border-white/10 hover:text-rust-orange hover:border-rust-orange'
                      }`}
                    >
                      {item.label}
                    </button>
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
