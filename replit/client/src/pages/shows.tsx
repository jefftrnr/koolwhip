import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import type { Show } from "@shared/schema";
import { MapPin, Calendar, Clock, ExternalLink } from "lucide-react";

export default function Shows() {
  const { data: shows = [], isLoading } = useQuery<Show[]>({
    queryKey: ['/api/shows'],
  });

  if (isLoading) {
    return (
      <div className="pt-20 pb-16 bg-gradient-to-b from-deep-purple to-royal-purple text-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-bubblegum mx-auto mb-4"></div>
          <p className="text-cream">Loading shows...</p>
        </div>
      </div>
    );
  }

  return (
    <section className="pt-24 min-h-screen elegant-monochrome">
      <div className="container mx-auto px-8 max-w-5xl">
        <div className="professional-spacing">
          <div className="text-center mb-20">
            <h1 className="luxury-typography text-5xl md:text-7xl font-extralight tracking-[0.3em] uppercase text-white mb-8">
              Events
            </h1>
            <div className="w-24 h-px bg-rust-orange mx-auto"></div>
          </div>

          <div className="space-y-8 mb-24">
            {shows.map((show, index) => (
              <div 
                key={show.id} 
                className="relative minimal-luxury p-8 md:p-10 sophisticated-hover group border border-white/5 hover:border-rust-orange/30 cursor-pointer overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => show.ticketUrl && window.open(show.ticketUrl, '_blank')}
                data-testid={`event-${show.id}`}
              >
                {/* Accent bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-rust-orange/50 to-rust-orange/10 group-hover:from-rust-orange group-hover:to-rust-orange/30 transition-all duration-500"></div>
                
                {/* Click indicator */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <ExternalLink className="w-5 h-5 text-rust-orange/70" />
                </div>

                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                  {/* Left: Venue Info */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="luxury-typography text-3xl md:text-4xl text-white font-light tracking-wide mb-3 group-hover:text-rust-orange/90 transition-colors duration-300">
                        {show.venue}
                      </h3>
                      {show.isFestival && (
                        <span className="inline-block bg-rust-orange/20 text-rust-orange px-3 py-1 rounded-full text-xs font-medium tracking-wider uppercase">
                          Festival
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center gap-2 text-white/60">
                      <MapPin className="w-4 h-4 text-rust-orange/60" />
                      <p className="luxury-typography text-base font-light tracking-[0.05em]">
                        {show.city}, {show.state}
                      </p>
                    </div>
                  </div>

                  {/* Right: Date & Time */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-rust-orange/60 flex-shrink-0" />
                      <p className="luxury-typography text-rust-orange text-lg md:text-xl font-light tracking-wide">
                        {new Date(show.date + 'T12:00:00').toLocaleDateString('en-US', { 
                          weekday: 'long',
                          month: 'long', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Clock className="w-5 h-5 text-rust-orange/60 flex-shrink-0" />
                      <p className="luxury-typography text-white/70 text-base font-light tracking-wide">
                        {show.time}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {shows.length === 0 && (
            <div className="text-center py-24">
              <div className="minimal-luxury p-12 max-w-2xl mx-auto">
                <h3 className="luxury-typography text-2xl text-white font-light tracking-wide mb-4">No Shows Scheduled</h3>
                <p className="luxury-typography text-white/60 text-sm font-light tracking-[0.1em] leading-relaxed">Check back for upcoming dates</p>
              </div>
            </div>
          )}

          <div className="text-center">
            <button className="ultra-minimal luxury-typography text-white/70 font-light text-sm tracking-[0.2em] uppercase sophisticated-hover border-b border-white/10 pb-2 hover:border-rust-orange hover:text-rust-orange transition-all duration-700">
              Request Show
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
