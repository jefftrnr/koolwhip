import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X, ChevronDown } from "lucide-react";

interface Member {
  name: string;
  role: string;
  photo: string;
  paragraphs: string[];
}

export default function BandMembers() {
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);

  const members: Member[] = [
    {
      name: "Sally Dominguez",
      role: "Vocals / Frontwoman",
      photo: "/attached_assets/Gemini_Generated_Image_5lh1ga5lh1ga5lh1_1759813890615.png",
      paragraphs: [
        "Sally Dominguez is a Marin County-based powerhouse singer, frontwoman of the band Koolwhip, as well as an internationally recognized inventor, engineer, author, and global keynote speaker. She is known for her eclectic career, which bridges creative arts, engineering innovation, motorsports journalism, and thought leadership in resilience and innovation strategies. Sally's impact is impressive, making her a unique and influential figure in both creative and technical disciplines.",
        "Sally Dominguez is a dynamic vocalist and songwriter whose soulful voice and infectious energy have made her a staple of Marin County's vibrant music scene. An Australian-born singer-songwriter and performer whose Marin County music career took root after relocating to the Bay Area in the early 2010s, Sally channels her adventurous spirit into performances that blend funk, rock, pop mashups, and heartfelt originals, captivating audiences at local festivals, wine bars, and intimate venues.",
        "At the forefront of her musical journey is Koolwhip, the high-octane Bay Area funk-rock ensemble formed in 2014, blending energetic rock, blues, mashups, and power funk with hillbilly rock. Formed by Marin locals, Koolwhip delivers groove-driven sets that fuse classic covers with innovative twists and Sally's own compositions, earning them a devoted following for their dance-floor anthems. Sally fronts Koolwhip alongside bandmates Brian McDaniel, Jeff Turner, Jim Lehmann, and Steve Michel.",
        "Complementing her work with Koolwhip, Sally shines in the acoustic realm as half of Sal-n-Rich, the charming duo she shares with guitarist Richard Benyon. Specializing in nostalgic takes on 1980s hits, Sal-n-Rich brings a warm, unplugged intimacy to events like the Schurig Center for Brain Injury Recovery's BAM Gala and sunset sessions at Zinz Wine Bar. Their chemistry is born from shared love of melody and storytelling and offers a softer counterpoint to Koolwhip's high-energy shows.",
        "Sally's creative talents extend far beyond the stage, where she has built an illustrious career as a futurist, award-winning inventor, and innovation catalyst. She is a multi-award-winning inventor and product designer with at least seven international product awards, including the prestigious Australian Design Award and a Top 10 Green Building Products (USA) accolade. Her innovative creations, such as the Rainwater HOG modular tank, have also earned Spark Design Award honors and are held in permanent collections at the Powerhouse Museum (Sydney) and the Victoria & Albert Museum (London). As an entrepreneur, she was named one of Advanced Manufacturers.",
        "Sally has a parallel career in automotive innovation and journalism. She is well-known for her expert judging roles on Australia's 'Wheels Car of the Year' and ABC TV's 'The New Inventors.' Her expertise in vehicle dynamics and sustainable technologies made her a respected voice in motorsport media, including serving as a judge for international car design competitions.",
        "She authored the bestselling 'EPIC Resilience,' a strategy-rich book that offers a framework for developing creative resilience and a growth mindset, particularly vital in rapidly changing global environments. The book's EPIC model is adopted by Fortune 500 companies and used to foster a culture of resilient innovation.",
        "Sally's 'Adventurous Thinking' system, now integrated into curricula at Stanford University and employed by organizations like NASA, IKEA, SONY, and Citi, modernizes design thinking with disruptive tools and a focus on creative problem-solving. She is an acclaimed global speaker, frequently leading masterclasses and strategic workshops for leading corporations, government bodies, and educational institutions around the world. Her keynote topics span Moonshot Thinking, Innovation, and Resilience.",
        "Whether harmonizing under Marin's redwoods or reimagining the future from her drawing board, Sally Dominguez continues to prove that true innovation—and unforgettable music—stems from bold, resilient minds and unbound creative freedom."
      ]
    },
    {
      name: "Jeff Turner",
      role: "Bass Guitar",
      photo: "/attached_assets/Gemini_Generated_Image_2mz7uf2mz7uf2mz7_1759813472865.png",
      paragraphs: [
        "Jeff Turner is a versatile and exciting bassist based in Marin County, California, renowned in the Bay Area's funk rock, vibrant instrumental surf and blues rock scenes. With a playing style that seamlessly blends exciting percussive, melodic, harmony rich bass lines with masterful upright grooves, Turner is a cornerstone of several influential bands, contributing to hundreds of live performances, international tours, and a string of acclaimed recordings. His work often fuses classic surf aesthetics with modern improvisational flair.",
        "Jeff's emergence in the mid-1990s aligns with the huge 'Third Wave' of surf revival, inspired by Bay Area pioneers like The Mermen and The Aqua Velvets. As a bassist, he quickly distinguished himself with a wide dynamic range, capable of delivering stealthy, sideways-knocking riffs in rock and surf contexts or steady, purposeful lines in jazz-bluegrass hybrids. Jeff is a go-to player for regional venues, from Sweetwater Music Hall in Mill Valley to Sonoma County stages, where his inventive approach and groove mastery have made him indispensable.",
        "In Koolwhip (2014–present), this high-octane funk rock party band out of Corte Madera, Turner handles 'epic bass' duties, steering electric lines through rock, blues, funk, mashups, manic country and originals designed to 'launch a party on the spot.' Koolwhip thrives on Turner's masterful grooves across genres, from funky nibblet rhythms to thoughtfully improvised solos. Turner's surprising melodies and riffs 'sneak up and knock you sideways,' making him one of the favorite bassmen in Marin.",
        "P B & Jam: Live music experts and party starters! PB&JAM is a premium band specializing in R&B, Blues and jazz for festivals, weddings, special celebrations, corporate events, and private parties at a sensible price. Consisting of Peter Bellak, Jim Lehmann, Dick Bay, Sandy Geller and our own Jeff Turner, PB&Jam infuse every event with energy and fun, and they always fill the dance floors.",
        "Pollo Del Mar (1993–2012, reunited 2020–present): Turner joined this San Francisco-born instrumental surf powerhouse early on, providing the 'powerhouse rhythm section' backbone alongside drummer Jeremy Rexford (and earlier, Chris Thomas). Co-led by guitarists Ferenc Dobronyi and Jono Jones, Pollo Del Mar blended reverb-soaked Fender twang with atmospheric feedback, prog-rock layers, and spaghetti western flair. Turner appeared on all four studio albums, including the genre-bending The Devil and the Deep Blue Sea (1999).",
        "Frankie and the Pool Boys (2007–present): Originally a side project of Pollo Del Mar members, this instrumental surf combo evolved into a standalone force with Turner on bass, alongside Ferenc Dobronyi (guitar/leader), Jono Jones (guitar), Karen Dobronyi (keyboards), and rotating drummers like Dusty Watson and Jonathan Rodriguez. Emphasizing melody, grooves, and fun—without 'dumb lyrics'—the band draws from first-wave beach music while incorporating exotica, psychedelia, and global influences."
      ]
    },
    {
      name: "Jim Lehmann",
      role: "Drums / Percussion",
      photo: "/attached_assets/IMG_0892_1759797185321.jpeg",
      paragraphs: [
        "Jim Lehmann is a versatile drummer and percussionist based in Marin County, California, known for his rhythmic precision and ability to drive diverse ensembles across genres like funk, reggae, roots rock, polka, swampy-tonk, and world music. With decades of experience in the Bay Area's vibrant live music scene, Lehmann has become a staple collaborator for local acts, blending technical skill with an infectious energy that elevates dance floors and stages alike. His career highlights a deep commitment to community-driven performances, from intimate café gigs to lively festivals.",
        "Alongside vocalist Sally Dominguez, bassist Jeff Turner, and guitarists Bobby Reed and Brian McDaniel, Lehmann co-founded Koolwhip in 2014. A high-octane Marin band channeling funk rock, classic rock and dance hits, he's dubbed the 'gatekeeper' on drums. Koolwhip gives Jim the freedom to be extra playful, dividing time and sound into creative rhythms, always storing the beat deep in the pocket.",
        "Around 2014, he also joined the roots rock outfit Miracle Mule after connecting with singer Amy Wolgamott during a Koolwhip rehearsal. Joining forces with guitarist Geoff Mack, bassist Mark Petrella, and the core lineup, Lehmann helped solidify the group's signature 'swampy-tonk' sound—a fusion of country, blues, and rock that earned them a devoted following in Sonoma and Marin counties. Miracle Mule celebrated their 10th anniversary in 2019 with Lehmann anchoring the rhythm section alongside percussionist Brian Dettor, keyboards/sax player Dick Bay, and others.",
        "Jim has performed with several musicians at the Cotati Accordion Festival, the San Francisco Festa Italiano and serves as the house drummer and percussionist for open mic nights at San Rafael's Belrose Theater, an historic venue serving as a hub for folks of all ages to learn, perform, and express themselves for decades."
      ]
    },
    {
      name: "Steve Michel",
      role: "Lead Guitar",
      photo: "/attached_assets/Gemini_Generated_Image_a0783oa0783oa078_1759813657830.png",
      paragraphs: [
        "Steve Michel is a versatile guitarist whose fiery riffs and soulful solos have defined the Marin County music scene for over three decades. A longtime resident of the North Bay, Steve's career is marked by high-energy performances at many local hotspots like George's, Uncle Charlies, and many Marin County festivals, blending blues-rock grit with funk grooves and innovative leads that keep crowds on their feet. Steve lends his six-string prowess from redwood-backed stages to sold-out venues.",
        "As a guitarist in Koolwhip, the Marin-based funk-rock powerhouse band formed in 2014, Steve delivers lead lines alongside vocalist Sally Dominguez, bassist Jeff Turner, drummer Jim Lehmann and rhythm guitarist Brian McDaniel. The band's infectious mashups and originals have headlined corporate, private, and local events like the Corte Madera Oktoberfest and various fundraisers, earning raves for their dance-floor alchemy and Steve's dynamic interplay that elevates every set.",
        "He's mild mannered in appearance, but get the straight-jacket ready when he solos. He's like the quiet neighbor who keeps to himself. Dangerous. Stealthy. Unpredictable EXCEPT when he solos - that's predictably ON!"
      ]
    },
    {
      name: "Brian McDaniel",
      role: "Rhythm Guitar",
      photo: "/attached_assets/Gemini_Generated_Image_t2tz0ut2tz0ut2tz_1759816019272.png",
      paragraphs: [
        "Brian McDaniel is a rhythm guitarist whose blues-infused, funky riffs and playful, inventive style have entertained and maybe bemused Marin County's funk and rock scene for over 15 years. Hailing from San Rafael in Marin County, California, Brian blends funk rock, post punk and sometimes roots reggae influences with experimental flair. Rumors are true, he makes his own picks (example: titanium, cow hoof, coconut shell, tagua nut, old spatula, street signs) to add texture to his playing.",
        "Brian co-founded Koolwhip, the high-energy Marin County funk-rock band, in 2014 with a few very talented Marin musicians who are now long-time, dear friends. As part of the band's rhythmic backbone, Brian helps drive the ensemble—featuring powerhouse vocalist Sally Dominguez, bassist Jeff Turner, drummer Jim Lehmann, and guitarist Steve Michel, through infectious un-covers, mashups and originals that fuse funk, rock, punk country hillbilly rock, soul and pop. Koolwhip's electrifying sets have lit up venues and events all around the Bay Area, but mostly embracing Marin's vibrant, community-rooted scene. Exploring his musical connection with a drive to give it his all, it has been said (probably only by Sally) that Brian embodies the 'maker musician' ethos, crafting performances that resonate with groove, soul and heart."
      ]
    },
  ];

  return (
    <div className="min-h-screen elegant-monochrome">
      {/* Minimalist Hero */}
      <section className="relative min-h-screen flex items-start justify-center overflow-hidden pt-20 sm:pt-24 md:pt-28">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src="/attached_assets/IMG_4604_1759952536107.JPG" 
            alt="KoolWhip Band" 
            className="w-full h-full object-cover object-center opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black"></div>
        </div>
        <div className="relative z-10 px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center text-white mb-4 sm:mb-8 md:mb-10 mt-2 sm:mt-4 md:mt-6">
            <h1 className="luxury-typography text-3xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-extralight tracking-[0.25em] sm:tracking-[0.3em] md:tracking-[0.4em] uppercase mb-3 sm:mb-5 md:mb-6 opacity-90">
              KoolWhip
            </h1>
            <div className="w-20 sm:w-24 md:w-32 h-px bg-gradient-to-r from-transparent via-rust-orange to-transparent mx-auto"></div>
          </div>
        
          {/* Member Grid - Layered on Background */}
          <div className="container mx-auto max-w-7xl pb-16 sm:pb-24 md:pb-32">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-8 md:gap-12 lg:gap-16">
              {members.map((member, index) => (
                <button
                  key={member.name}
                  onClick={() => setSelectedMember(member)}
                  className="group cursor-pointer relative"
                  style={{ animationDelay: `${index * 100}ms` }}
                  data-testid={`button-member-${member.name.toLowerCase().replace(' ', '-')}`}
                >
                  {/* Photo Container */}
                  <div className="relative overflow-hidden aspect-[3/4] mb-4 sm:mb-6">
                    {/* Border Frame */}
                    <div className="absolute inset-0 border border-white/10 group-hover:border-rust-orange/50 transition-all duration-700 z-10"></div>
                    
                    {/* Image */}
                    <div className="absolute inset-1 sm:inset-2">
                      <img 
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all duration-700"
                        data-testid={`img-member-${member.name.toLowerCase().replace(' ', '-')}`}
                        onError={(e) => {
                          console.error(`Failed to load band member photo: ${member.photo}`);
                          e.currentTarget.style.backgroundColor = '#333';
                        }}
                      />
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700"></div>
                    
                    {/* Hover Glow */}
                    <div className="absolute inset-0 bg-rust-orange/0 group-hover:bg-rust-orange/5 transition-all duration-700"></div>
                    
                    {/* Click Indicator */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 border border-white/50 rounded-full flex items-center justify-center backdrop-blur-sm bg-black/30">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Info */}
                  <div className="text-center space-y-0.5 sm:space-y-1 md:space-y-2">
                    <h3 className="luxury-typography text-xs sm:text-base md:text-lg lg:text-xl text-white font-extralight tracking-[0.12em] sm:tracking-[0.15em] md:tracking-[0.2em] uppercase group-hover:text-rust-orange transition-colors duration-500">
                      {member.name.split(' ')[0]}
                    </h3>
                    <h3 className="luxury-typography text-xs sm:text-base md:text-lg lg:text-xl text-white font-extralight tracking-[0.12em] sm:tracking-[0.15em] md:tracking-[0.2em] uppercase group-hover:text-rust-orange transition-colors duration-500">
                      {member.name.split(' ')[1]}
                    </h3>
                    <div className="w-6 sm:w-8 h-px bg-white/20 group-hover:bg-rust-orange/50 mx-auto transition-colors duration-500"></div>
                    <p className="luxury-typography text-[10px] sm:text-xs md:text-sm text-white/40 font-light tracking-[0.12em] sm:tracking-[0.15em] md:tracking-[0.2em] uppercase group-hover:text-white/60 transition-colors duration-500">
                      {member.role.split('/')[0].trim()}
                    </p>
                  </div>
                </button>
              ))}
            </div>
            
            {/* Click instruction */}
            <div className="text-center mt-8 sm:mt-12 md:mt-16">
              <p className="luxury-typography text-xs sm:text-sm md:text-base text-white/50 font-light tracking-[0.12em] sm:tracking-[0.15em] uppercase">
                Click on any of us to learn more!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="professional-spacing">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start">
            <div className="order-2 lg:order-1 lg:sticky lg:top-8 lg:self-start space-y-6 sm:space-y-8">
              <img 
                src="/attached_assets/Gemini_Generated_Image_lv2da3lv2da3lv2d_1759816318105.png" 
                alt="KoolWhip band performance" 
                className="w-full h-auto opacity-90 sophisticated-hover rounded-lg"
                data-testid="img-band-photo"
              />
              <img 
                src="/attached_assets/IMG_2667_1759879579890.jpeg" 
                alt="KoolWhip band performance" 
                className="w-full h-auto opacity-90 sophisticated-hover rounded-lg"
                data-testid="img-band-photo-2"
              />
              <img 
                src="/attached_assets/imagejpeg_1_1759880459742.jpg" 
                alt="KoolWhip band performance" 
                className="w-full h-auto opacity-90 sophisticated-hover rounded-lg"
                data-testid="img-band-photo-3"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <p className="luxury-typography text-base sm:text-lg text-white/80 font-light leading-relaxed tracking-[0.02em]">
                  Koolwhip delivers rock, blues, mashups, some manic country and a lot of fun guaranteed to launch a party on the spot! Fronted by Aussie diva Sally Dominguez with epic bass by surf band meister Jeff Turner, the renowned Jim Lehmann on drums, Steve Michel tearing up lead guitar and Brian McDaniel holding it together on rhythm, Koolwhip are a local favorite, a crowd-pleaser with that special sauce. Marin-based, we gig around the Bay Area.
                </p>
                <p className="luxury-typography text-base sm:text-lg text-white/80 font-light leading-relaxed tracking-[0.02em]">
                  Known for our unexpected mashups of rock, funk and pop, we also write our own tunes that range from power funk and blues to punk country hillbilly rock. A typical set might launch with Hush, roll into Black DogHouse or Roxanne Dancing in the White Room, and pepper with Separate Metal Jacket (who knew Journey and Metallica were besties?) and Sesame Biscuit, thus hooking you on our infectious music.
                </p>
                <p className="luxury-typography text-base sm:text-lg text-white/80 font-light leading-relaxed tracking-[0.02em]">
                  We are a bunch of Marin locals – well OK, Sally is a blow-in from Australia but she lives here now. We've played together since 2014, connecting with joy as a band and with our audiences! All of us play with other bands…but everybody secretly knows that Koolwhip is the best.
                </p>
                <p className="luxury-typography text-base sm:text-lg text-white/80 font-light leading-relaxed tracking-[0.02em]">
                  Drummer Jim is our beatkeeper and gatemaster…..and when he's not plumbin' he's drummin'! 'Nuff said! He's significant and well known around Marin venues. Steve Michel is on Lead guitar. He's mild mannered in appearance, but get the straight-jacket ready when he solos. He's like the quiet neighbor who keeps to himself. Dangerous. Stealthy. Unpredictable EXCEPT when he solos - that's predictably ON!
                </p>
                <p className="luxury-typography text-base sm:text-lg text-white/80 font-light leading-relaxed tracking-[0.02em]">
                  Jeff steers his electric bass through the funk / rock / jazz / blues /surf landscape with masterful purpose and groove, most recently for P B & Jam, Frankie and the Pool Boys, Pollo Del Mar and as an upright bassist for Rick Hatfield and The Jumpin' Bobcats. Be warned: Jeff's bass riffs will sneak up and knock you sideways….into Brian, percussive and explosive on rhythm guitar.
                </p>
                <p className="luxury-typography text-base sm:text-lg text-white/80 font-light leading-relaxed tracking-[0.02em]">
                  Take a close look at Brian – tonight could be the night he is playing with his homemade Titanium pick. Or is it the coconut shell one? Brian is a maker musician playing rhythm guitar with lots of unexpected twists and turns.
                </p>
                <p className="luxury-typography text-base sm:text-lg text-white/80 font-light leading-relaxed tracking-[0.02em]">
                  Sally makes lots of turns too…whether it's off-road rallying, tearing up the dance floor or just turning it up to Eleven for the heck of it. A raspy belter with a heart o' gold, Sally will do her utmost to ensure that her Aussie accent doesn't get in the way of a good song.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Member Profile Modal */}
      <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-black via-[#0a0a0a] to-black border border-white/10 text-white p-0">
          <DialogHeader className="sr-only">
            <DialogTitle>{selectedMember?.name}</DialogTitle>
          </DialogHeader>
          
          <button
            onClick={() => setSelectedMember(null)}
            className="absolute right-6 top-6 z-50 w-10 h-10 flex items-center justify-center border border-white/20 hover:border-rust-orange/50 bg-black/50 backdrop-blur-sm transition-all duration-300 group"
            data-testid="button-close-modal"
          >
            <X className="h-4 w-4 text-white/70 group-hover:text-rust-orange transition-colors duration-300" />
            <span className="sr-only">Close</span>
          </button>
          
          {selectedMember && (
            <div className="p-8 md:p-12 lg:p-16 space-y-12">
              {/* Header Section */}
              <div className="flex flex-col lg:flex-row gap-12 items-start">
                {/* Photo */}
                <div className="w-full lg:w-80 flex-shrink-0">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <div className="absolute inset-0 border border-white/10"></div>
                    <div className="absolute inset-2">
                      <img 
                        src={selectedMember.photo}
                        alt={selectedMember.name}
                        className="w-full h-full object-cover opacity-90"
                        data-testid={`img-modal-${selectedMember.name.toLowerCase().replace(' ', '-')}`}
                      />
                    </div>
                  </div>
                </div>
                
                {/* Title Info */}
                <div className="flex-1 pt-4">
                  <h2 className="luxury-typography text-4xl md:text-5xl lg:text-6xl font-extralight tracking-[0.2em] uppercase text-white mb-6 leading-tight">
                    {selectedMember.name}
                  </h2>
                  <div className="w-24 h-px bg-gradient-to-r from-rust-orange to-transparent mb-6"></div>
                  <p className="luxury-typography text-sm md:text-base text-rust-orange font-light tracking-[0.25em] uppercase mb-8">
                    {selectedMember.role}
                  </p>
                </div>
              </div>
              
              {/* Bio Section */}
              <div className="space-y-6 border-l border-white/5 pl-8">
                {selectedMember.paragraphs.map((paragraph, index) => (
                  <p 
                    key={index} 
                    className="luxury-typography text-sm md:text-base text-white/70 font-light leading-relaxed tracking-[0.02em]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
