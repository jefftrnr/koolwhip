import { Facebook, Instagram, Youtube, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Mail, href: "mailto:contact@koolwhip.com", label: "Email" },
  ];

  return (
    <footer className="glass-card border-t border-rust-orange/10 mt-16">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <img 
                src="/attached_assets/IMG_1489_1752904713682.png" 
                alt="KoolWhip Logo" 
                className="w-20 h-20 object-contain"
              />
              <div className="font-fredoka text-3xl text-rust-orange tracking-tight">
                KoolWhip
              </div>
            </div>
            <p className="text-silver/70 text-sm leading-relaxed max-w-md">
              Authentic power funk, rock and pop from Marin County. Experience the raw energy 
              that can only be felt live.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="font-fredoka text-lg text-rust-orange">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/band-members", label: "Get to know us" },
                { href: "/shows", label: "Events" },
                { href: "/gallery", label: "Gallery" },
                { href: "/social", label: "Social" },
                { href: "/booking", label: "Booking" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-silver/70 hover:text-rust-orange transition-colors duration-300 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Social & Contact */}
          <div className="space-y-6">
            <h3 className="font-fredoka text-lg text-rust-orange">Stay Connected</h3>
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-rust-orange/15 rounded-lg flex items-center justify-center hover:bg-rust-orange/25 transition-all duration-300 hover-lift"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-rust-orange" />
                </a>
              ))}
            </div>
            <div className="space-y-3">
              <p className="text-silver/70 text-sm">
                Book us for your venue
              </p>
              <Button className="btn-secondary text-sm px-4 py-2">
                Get in Touch
              </Button>
            </div>
          </div>

          {/* Venmo QR Code */}
          <div className="space-y-4 flex flex-col items-center md:items-end">
            <h3 className="font-fredoka text-lg text-rust-orange">Support Us</h3>
            <img 
              src="/attached_assets/koolwhip QR code band pic bigger_1759954490998.JPG" 
              alt="Venmo QR Code" 
              className="w-48 h-auto"
              data-testid="img-venmo-qr"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-rust-orange/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-silver/60 text-sm">
              © 2025 KoolWhip. All rights reserved.
            </p>
            <p className="text-silver/60 text-sm">
              Marin County, CA
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}