import { Play, Video } from "lucide-react";

export default function VideosPage() {
  return (
    <div className="pt-24 min-h-screen bg-gradient-to-b from-black via-black/95 to-black">
      {/* Hero */}
      <section className="py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Live Videos
          </h1>
          <div className="w-24 h-px bg-rust-orange mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
            Watch KoolWhip in action at venues across the Bay Area
          </p>
        </div>
      </section>

      {/* Videos Coming Soon */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="bg-white/5 border border-white/10 rounded-xl p-8 sm:p-10 md:p-12 text-center">
            <Video className="w-16 h-16 sm:w-20 sm:h-20 text-rust-orange mx-auto mb-6" />
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Videos Coming Soon
            </h2>
            <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-xl mx-auto">
              We're curating our best live performance videos. Check back soon to see KoolWhip rock the stage!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
