import { useState } from "react";
import { X, Play } from "lucide-react";

interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: "live" | "band" | "venue" | "art";
  type: "photo" | "video";
  thumbnail?: string; // Optional thumbnail for videos
}

const galleryItems: GalleryItem[] = [
  {
    id: "1",
    src: "/attached_assets/Gemini_Generated_Image_lv2da3lv2da3lv2d_1759816318105.png",
    alt: "KoolWhip band performance",
    category: "band",
    type: "photo"
  },
  {
    id: "2",
    src: "/attached_assets/IMG_2667_1759879579890.jpeg",
    alt: "KoolWhip band performance",
    category: "band",
    type: "photo"
  },
  {
    id: "3",
    src: "/attached_assets/imagejpeg_1_1759880459742.jpg",
    alt: "KoolWhip band performance",
    category: "band",
    type: "photo"
  },
  {
    id: "4",
    src: "/attached_assets/IMG_0923_1759953051837.jpg",
    alt: "KoolWhip band performance indoor",
    category: "band",
    type: "photo"
  },
  {
    id: "5",
    src: "/attached_assets/IMG_0226_1759953051837.jpg",
    alt: "KoolWhip outdoor performance",
    category: "live",
    type: "photo"
  },
  {
    id: "6",
    src: "/attached_assets/IMG_5835_1759953051837.JPEG",
    alt: "KoolWhip live show",
    category: "live",
    type: "photo"
  },
  {
    id: "7",
    src: "/attached_assets/Koolwhip_BigRock_June_2025_1752904488461.jpg",
    alt: "Live performance at Big Rock",
    category: "venue",
    type: "photo"
  },
  {
    id: "8",
    src: "/attached_assets/IMG_1079_1759954397488_1761266688681.jpeg",
    alt: "KoolWhip band members performing",
    category: "band",
    type: "photo"
  },
  {
    id: "9",
    src: "/attached_assets/IMG_2304_1755817064850.jpg",
    alt: "Indoor venue performance with brick walls",
    category: "venue",
    type: "photo"
  },
  {
    id: "10",
    src: "/attached_assets/IMG_2305_1755817064850.jpg",
    alt: "Live performance in brick venue",
    category: "live",
    type: "photo"
  },
  {
    id: "11",
    src: "/attached_assets/IMG_0623_1759954013469.JPG",
    alt: "Guitarist performance",
    category: "live",
    type: "photo"
  },
  {
    id: "12",
    src: "/attached_assets/IMG_0958_1759954013469.JPG",
    alt: "Band members photo booth",
    category: "band",
    type: "photo"
  },
  {
    id: "13",
    src: "/attached_assets/IMG_1055_1759952289361.jpeg",
    alt: "Performance with instruments",
    category: "live",
    type: "photo"
  },
  {
    id: "14",
    src: "/attached_assets/IMG_0083_1759953816181.JPG",
    alt: "Band on stage",
    category: "live",
    type: "photo"
  },
  {
    id: "15",
    src: "/attached_assets/IMG_0892_1759797185321.jpeg",
    alt: "Stage performance",
    category: "live",
    type: "photo"
  },
  {
    id: "16",
    src: "/attached_assets/IMG_0924_1759953816181.JPG",
    alt: "Band performing together",
    category: "band",
    type: "photo"
  },
  {
    id: "17",
    src: "/attached_assets/IMG_5833_1759954013469.JPG",
    alt: "KoolWhip live performance",
    category: "live",
    type: "photo"
  },
  {
    id: "18",
    src: "/attached_assets/IMG_1885_1759954013469.JPG",
    alt: "KoolWhip band members",
    category: "band",
    type: "photo"
  },
  {
    id: "19",
    src: "/attached_assets/IMG_9233_1759954249075.JPG",
    alt: "KoolWhip performance",
    category: "live",
    type: "photo"
  },
  {
    id: "20",
    src: "/attached_assets/IMG_9232_1759954249075.JPG",
    alt: "KoolWhip venue performance",
    category: "venue",
    type: "photo"
  },
  {
    id: "21",
    src: "/attached_assets/IMG_0348_1759954249075.jpeg",
    alt: "KoolWhip live performance",
    category: "live",
    type: "photo"
  },
  {
    id: "22",
    src: "/attached_assets/IMG_1079_1759954397488.jpeg",
    alt: "KoolWhip band members performing",
    category: "band",
    type: "photo"
  },
  {
    id: "23",
    src: "/attached_assets/IMG_0354_1759954249075.jpeg",
    alt: "Covered venue performance",
    category: "venue",
    type: "photo"
  },
  {
    id: "24",
    src: "/attached_assets/IMG_1078_1759954249075.jpeg",
    alt: "Group performance photo",
    category: "band",
    type: "photo"
  },
  {
    id: "25",
    src: "/attached_assets/IMG_3077_1755817064851.JPG",
    alt: "Outdoor band photo",
    category: "band",
    type: "photo"
  },
  {
    id: "26",
    src: "/attached_assets/IMG_4604_1759952536107.JPG",
    alt: "KoolWhip outdoor gathering",
    category: "band",
    type: "photo"
  },
  {
    id: "27",
    src: "/attached_assets/IMG_0271_1759953816181.JPG",
    alt: "KoolWhip band members",
    category: "band",
    type: "photo"
  },
  {
    id: "28",
    src: "/attached_assets/IMG_6219_1759953816181.jpeg",
    alt: "KoolWhip performance",
    category: "live",
    type: "photo"
  },
  {
    id: "29",
    src: "/attached_assets/IMG_3078_1755817064852.JPG",
    alt: "Band members at outdoor event",
    category: "band",
    type: "photo"
  },
  {
    id: "30",
    src: "/attached_assets/IMG_0012_1755816751996.jpg",
    alt: "KoolWhip live performance with full band",
    category: "live",
    type: "photo"
  },
  {
    id: "31", 
    src: "/attached_assets/IMG_0011_1755816751996.jpg",
    alt: "Band in costume with drums",
    category: "band",
    type: "photo"
  },
  {
    id: "32",
    src: "/attached_assets/IMG_0011%20%281%29_1755816751996.jpg",
    alt: "KoolWhip performing live",
    category: "live",
    type: "photo"
  },
  {
    id: "33",
    src: "/attached_assets/IMG_0007_1755816751996.jpg",
    alt: "Guitar duo performance",
    category: "live",
    type: "photo"
  },
  {
    id: "34",
    src: "/attached_assets/IMG_0003_1755816751996.jpg", 
    alt: "Lead vocalist performing",
    category: "live",
    type: "photo"
  },
  {
    id: "35",
    src: "/attached_assets/243111475_387076846225242_1167446371284241585_n_1755816751996.jpg",
    alt: "Band photo with instruments",
    category: "band",
    type: "photo"
  },
  {
    id: "36",
    src: "/attached_assets/IMG_4100_1755817064852.jpg",
    alt: "Acoustic outdoor performance",
    category: "live",
    type: "photo"
  },
  {
    id: "37",
    src: "/attached_assets/IMG_4211_1755817064852.jpg",
    alt: "Holiday performance with band",
    category: "band",
    type: "photo"
  },
  {
    id: "38",
    src: "/attached_assets/IMG_5821_1755817064853.jpg",
    alt: "Covered outdoor stage performance",
    category: "venue",
    type: "photo"
  },
  {
    id: "39",
    src: "/attached_assets/IMG_0069_1761245926782.jpeg",
    alt: "KoolWhip performance",
    category: "live",
    type: "photo"
  },
  {
    id: "40",
    src: "/attached_assets/IMG_0285_1761246740316.mp4",
    alt: "KoolWhip live performance video",
    category: "live",
    type: "video"
  },
  {
    id: "41",
    src: "/attached_assets/Koolwhip%20original%20artwork%20biggest%20size_1755817064854.jpg",
    alt: "KoolWhip updated artwork",
    category: "art",
    type: "photo"
  }
];

export default function Gallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  return (
    <div className="pt-24 min-h-screen elegant-monochrome">
      {/* Hero Section */}
      <section className="professional-spacing">
        <div className="container mx-auto px-8 max-w-5xl">
          <div className="text-center mb-20">
            <h1 className="luxury-typography text-5xl md:text-7xl font-extralight tracking-[0.3em] uppercase text-white mb-8">
              Gallery
            </h1>
            <div className="w-24 h-px bg-rust-orange mx-auto mb-12"></div>
            <p className="luxury-typography text-lg text-white/60 font-light tracking-[0.05em] leading-relaxed max-w-2xl mx-auto">
              Moments captured from live performances and behind the scenes
            </p>
          </div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="professional-spacing">
        <div className="container mx-auto px-8 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryItems.map((item, index) => (
              <div
                key={item.id}
                className="minimal-luxury sophisticated-hover cursor-pointer group relative"
                onClick={() => setSelectedItem(item)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  {item.type === "video" ? (
                    <>
                      <video
                        src={item.src}
                        className="w-full h-full object-cover brightness-110 contrast-105 transition-all duration-700"
                        style={{ filter: 'brightness(1.1) contrast(1.05)' }}
                        data-testid={`gallery-photo-${item.id}`}
                        muted
                        playsInline
                      />
                      {/* Play icon overlay for videos */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="bg-rust-orange/80 rounded-full p-4 group-hover:bg-rust-orange group-hover:scale-110 transition-all duration-300">
                          <Play className="w-8 h-8 text-white fill-white" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-all duration-700"
                      data-testid={`gallery-photo-${item.id}`}
                      onError={(e) => {
                        console.error(`Failed to load image: ${item.src}`);
                        e.currentTarget.style.backgroundColor = '#333';
                      }}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 elegant-monochrome bg-black/95 flex items-center justify-center p-4 sm:p-8"
          onClick={() => setSelectedItem(null)}
        >
          <button
            onClick={() => setSelectedItem(null)}
            className="absolute top-4 right-4 sm:top-8 sm:right-8 text-white/70 hover:text-rust-orange transition-colors duration-500 z-10"
          >
            <X className="w-8 h-8" />
          </button>
          
          {selectedItem.type === "video" ? (
            <video
              src={selectedItem.src}
              controls
              autoPlay
              className="max-w-[95vw] max-h-[95vh] w-auto h-auto"
              onClick={(e) => e.stopPropagation()}
              data-testid={`lightbox-video-${selectedItem.id}`}
            />
          ) : (
            <img
              src={selectedItem.src}
              alt={selectedItem.alt}
              className="max-w-[95vw] max-h-[95vh] w-auto h-auto object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          )}
        </div>
      )}
    </div>
  );
}
