export default function SocialPage() {
  return (
    <div className="min-h-screen elegant-monochrome pt-24">
      <section className="py-16 sm:py-20 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="luxury-typography text-5xl md:text-7xl font-extralight tracking-[0.3em] uppercase text-white mb-8">
              Social
            </h1>
            <div className="w-24 h-px bg-rust-orange mx-auto mb-12"></div>
            <p className="luxury-typography text-lg text-white/60 font-light tracking-[0.05em] leading-relaxed">
              Stay connected with KoolWhip's latest updates, shows, and behind-the-scenes moments
            </p>
          </div>

          <div className="flex justify-center px-4">
            <iframe 
              src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fprofile.php%3Fid%3D100046508845013&tabs=timeline&width=800&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
              width="800" 
              height="500" 
              style={{border: "none", overflow: "hidden"}} 
              className="lg:ml-[220px]"
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