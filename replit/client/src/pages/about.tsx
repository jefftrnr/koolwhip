import { Badge } from "@/components/ui/badge";

export default function About() {
  return (
    <div className="pt-24 min-h-screen elegant-monochrome">
      {/* Hero Section */}
      <section className="professional-spacing">
        <div className="container mx-auto px-8 max-w-5xl">
          <div className="text-center mb-20">
            <h1 className="luxury-typography text-5xl md:text-7xl font-extralight tracking-[0.3em] uppercase text-white mb-8">
              About
            </h1>
            <div className="w-24 h-px bg-rust-orange mx-auto"></div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="professional-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="/attached_assets/IMG_4211_1755817064852.jpg" 
                alt="KoolWhip band holiday performance" 
                className="w-full h-auto opacity-90 sophisticated-hover"
                data-testid="img-band-photo"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div className="space-y-6">
                <p className="luxury-typography text-lg text-white/80 font-light leading-relaxed tracking-[0.02em]">
                  Koolwhip delivers rock, blues, mashups, some manic country and a lot of fun guaranteed to launch a party on the spot! Fronted by Aussie diva Sally Dominguez with epic bass by surf band meister Jeff Turner, the renowned Jim Lehmann on drums, Steve Michel tearing up lead guitar and Brian McDaniel holding it together on rhythm, Koolwhip are a local favorite, a crowd-pleaser with that special sauce. Marin-based, we gig around the Bay Area.
                </p>
                <p className="luxury-typography text-lg text-white/80 font-light leading-relaxed tracking-[0.02em]">
                  Known for our unexpected mashups of rock, funk and pop, we also write our own tunes that range from power funk and blues to punk country hillbilly rock. A typical set might launch with Hush, roll into Black DogHouse or Roxanne Dancing in the White Room, and pepper with Separate Metal Jacket (who knew Journey and Metallica were besties?) and Sesame Biscuit, thus hooking you on our infectious music.
                </p>
                <p className="luxury-typography text-lg text-white/80 font-light leading-relaxed tracking-[0.02em]">
                  We are a bunch of Marin locals – well OK, Sally is a blow-in from Australia but she lives here now. We've played together since 2014, connecting with joy as a band and with our audiences! All of us play with other bands…but everybody secretly knows that Koolwhip is the best.
                </p>
                <p className="luxury-typography text-lg text-white/80 font-light leading-relaxed tracking-[0.02em]">
                  Drummer Jim is our beatkeeper and gatemaster…..and when he's not plumbin' he's drummin'! 'Nuff said! He's significant and well known around Marin venues. Steve Michel is on Lead guitar. He's mild mannered in appearance, but get the straight-jacket ready when he solos. He's like the quiet neighbor who keeps to himself. Dangerous. Stealthy. Unpredictable EXCEPT when he solos - that's predictably ON!
                </p>
                <p className="luxury-typography text-lg text-white/80 font-light leading-relaxed tracking-[0.02em]">
                  Jeff steers his electric bass through the funk / rock / jazz / blues /surf landscape with masterful purpose and groove, most recently for P B & Jam, Frankie and the Pool Boys, Pollo Del Mar and as an upright bassist for Rick Hatfield and The Jumpin' Bobcats. Be warned: Jeff's bass riffs will sneak up and knock you sideways….into Brian, percussive and explosive on rhythm guitar.
                </p>
                <p className="luxury-typography text-lg text-white/80 font-light leading-relaxed tracking-[0.02em]">
                  Take a close look at Brian – tonight could be the night he is playing with his homemade Titanium pick. Or is it the coconut shell one? Brian is a maker musician playing rhythm guitar with lots of unexpected twists and turns.
                </p>
                <p className="luxury-typography text-lg text-white/80 font-light leading-relaxed tracking-[0.02em]">
                  Sally makes lots of turns too…whether it's off-road rallying, tearing up the dance floor or just turning it up to Eleven for the heck of it. A raspy belter with a heart o' gold, Sally will do her utmost to ensure that her Aussie accent doesn't get in the way of a good song.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="professional-spacing">
        <div className="container mx-auto px-8 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="luxury-typography text-3xl md:text-4xl font-extralight tracking-[0.2em] uppercase text-white mb-4">
              Timeline
            </h2>
            <div className="w-16 h-px bg-rust-orange mx-auto"></div>
          </div>
          
          <div className="space-y-12">
            <div className="minimal-luxury p-8 sophisticated-hover border-l border-rust-orange/20">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
                <div className="space-y-2">
                  <h3 className="luxury-typography text-xl text-white font-light tracking-wide">Formation</h3>
                  <p className="luxury-typography text-sm text-white/60 font-light tracking-[0.1em]">Band established in Marin County</p>
                </div>
                <span className="luxury-typography text-rust-orange text-lg font-light tracking-wide">2014</span>
              </div>
            </div>
            
            <div className="minimal-luxury p-8 sophisticated-hover border-l border-rust-orange/20">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between space-y-4 md:space-y-0">
                <div className="space-y-2">
                  <h3 className="luxury-typography text-xl text-white font-light tracking-wide">Bay Area Favorite</h3>
                  <p className="luxury-typography text-sm text-white/60 font-light tracking-[0.1em]">Building reputation as a local crowd-pleaser with that special sauce</p>
                </div>
                <span className="luxury-typography text-rust-orange text-lg font-light tracking-wide">2014-Present</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
