import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Ticket, Play, Mail, ChevronDown, Volume2 } from "lucide-react";
import { useState, useEffect } from "react";
import ParticleBackground from "@/components/effects/ParticleBackground";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden dark-elegance">
      {/* Optimized Background - Mobile & Desktop */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/attached_assets/Koolwhip%2520flyer%2520aug%252022%25202024_1759799675614.jpeg" 
          alt="KoolWhip live performance" 
          className="w-full h-full object-cover object-center md:object-cover md:object-center" 
          data-testid="hero-background-image"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90"></div>
      </div>

      {/* Bold Mobile-First Content */}
      <div className={`relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto transition-all duration-2000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
        <div className="space-y-8 sm:space-y-10">
          {/* Stylish Band Name */}
          <h1 
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight"
          >
            <span className="text-rust-orange">K</span>
            <span className="text-rust-orange">o</span>
            <span className="text-rust-orange">o</span>
            <span className="text-rust-orange">l</span>
            <span className="text-rust-orange">W</span>
            <span className="text-rust-orange">h</span>
            <span className="text-rust-orange">i</span>
            <span className="text-rust-orange">p</span>
          </h1>
          
          {/* Location - Readable Size */}
          <p className="text-base sm:text-lg md:text-xl font-light text-white/80 tracking-wide uppercase">
            Marin County · California
          </p>
          
        </div>
        
        {/* Strong CTAs - 44px+ Touch Targets */}
        <div className={`mt-12 sm:mt-16 flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center transition-all duration-2000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Link href="/shows" className="w-full sm:w-auto">
            <button className="w-full sm:w-auto bg-rust-orange hover:bg-rust-orange/90 text-white font-semibold text-base sm:text-lg px-8 sm:px-10 py-4 rounded-lg uppercase tracking-wide transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105" data-testid="button-upcoming-events">
              Upcoming Events
            </button>
          </Link>
          
          <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white font-semibold text-base sm:text-lg px-8 sm:px-10 py-4 rounded-lg uppercase tracking-wide transition-all duration-300 backdrop-blur-sm" onClick={() => document.getElementById('mail-list-section')?.scrollIntoView({ behavior: 'smooth' })} data-testid="button-join-mail-list">
            Join Our Mail List
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <ChevronDown className="w-8 h-8" />
      </div>
    </section>
  );
}
