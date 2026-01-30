import { SocialFeed } from "@/components/social/social-feed";

export default function InstagramFeed() {
  return (
    <section className="py-16 bg-charcoal">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-silver">Latest Updates</h2>
          <p className="text-xl text-steel-gray">Stay connected with our journey</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <SocialFeed limit={3} />
        </div>
        
        <div className="text-center mt-8">
          <a 
            href="/social"
            className="inline-block bg-rust-orange hover:bg-electric-orange text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300"
          >
            View All Posts
          </a>
        </div>
      </div>
    </section>
  );
}
