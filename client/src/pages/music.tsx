import { Music } from "lucide-react";
import { Link } from "wouter";

export default function MusicPage() {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-black via-black/95 to-black">
      {/* Hero */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Our Music
          </h1>
          <div className="w-24 h-px bg-rust-orange mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
            Rock, blues, mashups, and manic country guaranteed to launch a party on the spot
          </p>
        </div>
      </section>

      {/* Music Description */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 sm:p-10 md:p-12">
            <div className="flex items-start gap-6 mb-8">
              <Music className="w-10 h-10 sm:w-12 sm:h-12 text-rust-orange flex-shrink-0" />
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Our Sound</h2>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-4">
                  Known for unexpected mashups of rock, funk and pop, we also write our own tunes that range from power funk and blues to punk country hillbilly rock.
                </p>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed">
                  A typical set might launch with Hush, roll into Black DogHouse or Roxanne Dancing in the White Room, and pepper with Separate Metal Jacket and Sesame Biscuit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <div className="bg-gradient-to-r from-rust-orange/10 to-rust-orange/5 border border-rust-orange/20 rounded-xl p-8 sm:p-10 md:p-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Experience the Energy Live
            </h2>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-8 max-w-xl mx-auto">
              The authentic power of KoolWhip can only be experienced in person
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/shows">
                <button className="bg-rust-orange hover:bg-rust-orange/90 text-white font-semibold text-base sm:text-lg px-8 py-4 rounded-lg uppercase tracking-wide transition-all duration-300">
                  See Live Shows
                </button>
              </Link>
              <Link href="/videos">
                <button className="bg-white/10 hover:bg-white/20 border-2 border-white/30 text-white font-semibold text-base sm:text-lg px-8 py-4 rounded-lg uppercase tracking-wide transition-all duration-300">
                  Watch Videos
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}