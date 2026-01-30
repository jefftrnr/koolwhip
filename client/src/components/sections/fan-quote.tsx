export default function FanQuote() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-black/80 to-black/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="/attached_assets/IMG_2305_1755817064850.jpg"
              alt="Live performance at venue"
              className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-xl opacity-90 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-light text-white/95 leading-relaxed">
              "A local favorite, a crowd-pleaser with that special sauce"
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
