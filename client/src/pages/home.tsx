import Hero from "@/components/sections/hero";
import FanQuote from "@/components/sections/fan-quote";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useQuery, useMutation } from "@tanstack/react-query";
import type { Show, InsertEmailSubscriber } from "@shared/schema";
import { Calendar, Music, Users, Ticket, Mail } from "lucide-react";
import { useState } from "react";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  
  const { data: shows = [] } = useQuery<Show[]>({
    queryKey: ['/api/shows'],
  });

  const upcomingShows = shows;

  const subscribeMutation = useMutation({
    mutationFn: async (data: InsertEmailSubscriber) => {
      return apiRequest('POST', '/api/subscribe', data);
    },
    onSuccess: () => {
      toast({
        title: "Welcome!",
        description: "You're now on the KoolWhip mailing list.",
      });
      setEmail("");
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      subscribeMutation.mutate({ email });
    }
  };

  return (
    <div className="pt-16">
      <Hero />
      <FanQuote />
      
      {/* Photos Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-black/40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-lg bg-white/5 border border-white/10 hover:border-rust-orange/50 transition-all duration-300">
              <img 
                src="/attached_assets/IMG_1055_1759952289361.jpeg" 
                alt="KoolWhip performance" 
                className="w-full h-80 object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                data-testid="img-home-photo-1"
              />
            </div>
            <div className="group relative overflow-hidden rounded-lg bg-white/5 border border-white/10 hover:border-rust-orange/50 transition-all duration-300">
              <img 
                src="/attached_assets/IMG_2667_1759879579890.jpeg" 
                alt="KoolWhip band photo" 
                className="w-full h-80 object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                data-testid="img-home-photo-2"
              />
            </div>
            <div className="group relative overflow-hidden rounded-lg bg-white/5 border border-white/10 hover:border-rust-orange/50 transition-all duration-300">
              <img 
                src="/attached_assets/imagejpeg_1_1759880459742.jpg" 
                alt="KoolWhip live performance" 
                className="w-full h-80 object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                data-testid="img-home-photo-3"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mailing List Signup Section */}
      <section id="mail-list-section" className="py-16 sm:py-20 md:py-24 bg-black/60">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold tracking-tight mb-10">
              Join Our Mail List
            </h2>
            
            <form onSubmit={handleSubscribe} className="max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/10 border-2 border-white/20 text-white placeholder:text-white/50 px-5 py-4 text-base sm:text-lg rounded-lg focus:outline-none focus:border-rust-orange transition-colors duration-300"
                  required
                  data-testid="input-email-signup"
                />
                <button
                  type="submit"
                  disabled={subscribeMutation.isPending}
                  className="bg-rust-orange hover:bg-rust-orange/90 text-white font-semibold text-base sm:text-lg uppercase px-8 py-4 rounded-lg transition-all duration-300 disabled:opacity-50 whitespace-nowrap"
                  data-testid="button-subscribe"
                >
                  {subscribeMutation.isPending ? "Subscribing..." : "Join"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      
      {/* Shows Section - Clean & Readable */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-black/60 to-black/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold tracking-tight mb-2">
              Upcoming Shows
            </h2>
          </div>
          
          <div className="space-y-5 mb-10">
            {upcomingShows.length > 0 ? upcomingShows.map((show, index) => (
              <div 
                key={show.id} 
                className="bg-white/5 border border-white/10 rounded-xl p-5 sm:p-6 hover:bg-white/10 hover:border-rust-orange/50 transition-all duration-300 cursor-pointer" 
                onClick={() => show.ticketUrl && window.open(show.ticketUrl, '_blank')}
                data-testid={`show-${show.id}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl text-white font-semibold mb-2">{show.venue}</h3>
                    <p className="text-base sm:text-lg text-white/70 mb-3">{show.city}, {show.state}</p>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <p className="text-base sm:text-lg text-rust-orange font-medium">
                        {new Date(show.date + 'T12:00:00').toLocaleDateString('en-US', { 
                          weekday: 'short',
                          month: 'short', 
                          day: 'numeric'
                        })}
                      </p>
                      <span className="hidden sm:inline text-white/30">•</span>
                      <p className="text-base text-white/70">{show.time}</p>
                    </div>
                  </div>
                </div>
              </div>
            )) : (
              <div className="text-center py-16 bg-white/5 rounded-xl">
                <h3 className="text-2xl sm:text-3xl text-white font-semibold mb-4">No Upcoming Shows</h3>
                <p className="text-lg text-white/70 leading-relaxed max-w-md mx-auto">Wee're currently working on new dates. Sign up to be notified first.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Facebook Feed Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-black/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl text-white font-bold tracking-tight mb-2">
              Stay Connected
            </h2>
            <p className="text-lg text-white/70">Follow us on Facebook</p>
          </div>
          
          <div className="flex justify-center px-4">
            <iframe 
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100046508845013&tabs=timeline&width=800&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
              width="800" 
              height="500" 
              style={{border: "none", overflow: "hidden", marginLeft: "220px"}} 
              scrolling="no" 
              frameBorder="0" 
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              data-testid="facebook-feed"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
