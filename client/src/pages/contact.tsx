import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { InsertContactSubmission, InsertEmailSubscriber } from "@shared/schema";
import { Facebook, Instagram, Youtube, Music, Send, Gift } from "lucide-react";

export default function Contact() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [emailSignup, setEmailSignup] = useState("");
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactSubmission) => {
      return apiRequest('POST', '/api/contact', data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. We'll get back to you soon!",
      });
      setContactForm({ name: "", email: "", message: "" });
    },
    onError: () => {
      toast({
        title: "Oops!",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const emailMutation = useMutation({
    mutationFn: async (data: InsertEmailSubscriber) => {
      return apiRequest('POST', '/api/subscribe', data);
    },
    onSuccess: () => {
      toast({
        title: "Welcome to the Kool List!",
        description: "Check your email for exclusive content.",
      });
      setEmailSignup("");
    },
    onError: () => {
      toast({
        title: "Oops!",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(contactForm);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailSignup) {
      emailMutation.mutate({ email: emailSignup });
    }
  };

  const socialLinks = [
    { 
      name: "Instagram", 
      icon: Instagram, 
      url: "https://instagram.com/koolwhipband",
      gradient: "from-purple-400 to-pink-400 hover:from-purple-500 hover:to-pink-500"
    },
    { 
      name: "Facebook", 
      icon: Facebook, 
      url: "https://facebook.com/koolwhipband",
      gradient: "from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700"
    },
    { 
      name: "YouTube", 
      icon: Youtube, 
      url: "https://youtube.com/koolwhipband",
      gradient: "from-red-400 to-red-600 hover:from-red-500 hover:to-red-700"
    },
    { 
      name: "Spotify", 
      icon: Music, 
      url: "https://open.spotify.com/artist/koolwhip",
      gradient: "from-green-400 to-green-600 hover:from-green-500 hover:to-green-700"
    }
  ];

  return (
    <section className="pt-20 elegant-monochrome">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Compact Header */}
        <div className="text-center mb-6">
          <h1 className="luxury-typography text-3xl sm:text-4xl lg:text-5xl font-extralight tracking-[0.3em] uppercase text-white mb-3">
            Contact
          </h1>
          <div className="w-16 h-px bg-rust-orange mx-auto"></div>
        </div>
        
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="minimal-luxury p-6">
            <h2 className="luxury-typography text-xl text-white font-light tracking-wide mb-4">Send Us a Message</h2>
            <form onSubmit={handleContactSubmit} className="space-y-3">
              <Input
                placeholder="Your Name"
                value={contactForm.name}
                onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                className="ultra-minimal bg-transparent border-0 border-b border-white/20 text-white placeholder-white/50 rounded-none px-0 py-2 text-base luxury-typography font-light focus:border-rust-orange focus:ring-0"
                required
                data-testid="input-contact-name"
              />
              <Input
                type="email"
                placeholder="Email Address"
                value={contactForm.email}
                onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                className="ultra-minimal bg-transparent border-0 border-b border-white/20 text-white placeholder-white/50 rounded-none px-0 py-2 text-base luxury-typography font-light focus:border-rust-orange focus:ring-0"
                required
                data-testid="input-contact-email"
              />
              <Textarea
                placeholder="Your Message"
                rows={4}
                value={contactForm.message}
                onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                className="ultra-minimal bg-transparent border-0 border-b border-white/20 text-white placeholder-white/50 rounded-none px-0 py-2 text-base luxury-typography font-light focus:border-rust-orange focus:ring-0 resize-none"
                required
                data-testid="input-contact-message"
              />
              
              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={contactMutation.isPending}
                  className="bg-rust-orange hover:bg-rust-orange/90 text-white font-semibold text-sm px-8 py-2.5 rounded uppercase tracking-wide transition-all duration-300 disabled:opacity-50"
                  data-testid="button-send-message"
                >
                  {contactMutation.isPending ? "Sending..." : "Send Message"}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info */}
          <div className="minimal-luxury p-6">
            <h2 className="luxury-typography text-xl text-white font-light tracking-wide mb-4">Get In Touch</h2>
            <div className="space-y-4">
              <div>
                <h3 className="luxury-typography text-sm text-white/50 font-light tracking-wider uppercase mb-2">Email</h3>
                <p className="luxury-typography text-white/90 text-base font-light select-none pointer-events-none">mcdaniel-family@att.net</p>
              </div>
              <div>
                <h3 className="luxury-typography text-sm text-white/50 font-light tracking-wider uppercase mb-2">Phone</h3>
                <p className="luxury-typography text-white/90 text-base font-light select-none pointer-events-none">1 (415) 259 1828</p>
              </div>
              <div>
                <h3 className="luxury-typography text-sm text-white/50 font-light tracking-wider uppercase mb-2">Location</h3>
                <p className="luxury-typography text-white/90 text-base font-light">Marin County, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
