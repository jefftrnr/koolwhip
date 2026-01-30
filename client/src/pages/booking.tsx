import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { InsertBookingRequest, InsertContactSubmission } from "@shared/schema";
import { Download, Phone, Mail, Check } from "lucide-react";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    eventType: "",
    eventDate: "",
    budgetRange: "",
    message: ""
  });

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const { toast } = useToast();

  const bookingMutation = useMutation({
    mutationFn: async (data: InsertBookingRequest) => {
      return apiRequest('POST', '/api/booking', data);
    },
    onSuccess: () => {
      toast({
        title: "Booking Request Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        organization: "",
        eventType: "",
        eventDate: "",
        budgetRange: "",
        message: ""
      });
    },
    onError: () => {
      toast({
        title: "Oops!",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    bookingMutation.mutate(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(contactForm);
  };

  return (
    <section className="pt-20 elegant-monochrome">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Compact Header */}
        <div className="text-center mb-6">
          <h1 className="luxury-typography text-3xl sm:text-4xl lg:text-5xl font-extralight tracking-[0.3em] uppercase text-white mb-3">
            Booking/Contact
          </h1>
          <div className="w-16 h-px bg-rust-orange mx-auto mb-2"></div>
          <p className="luxury-typography text-sm text-white/60 font-light tracking-[0.05em]">
            Bring authentic rock energy to your venue
          </p>
        </div>
        
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Booking Form */}
          <div className="minimal-luxury p-6">
            <h2 className="luxury-typography text-xl text-white font-light tracking-wide mb-4">Booking Request</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <Input
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="bg-white/5 border border-white/10 text-white/90 placeholder-white/40 rounded px-3 py-2 text-sm luxury-typography font-light focus:border-rust-orange/50 focus:bg-white/10 focus:ring-0 transition-all duration-300"
                required
                data-testid="input-name"
              />
              
              <Input
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="bg-white/5 border border-white/10 text-white/90 placeholder-white/40 rounded px-3 py-2 text-sm luxury-typography font-light focus:border-rust-orange/50 focus:bg-white/10 focus:ring-0 transition-all duration-300"
                required
                data-testid="input-email"
              />
              
              <Input
                placeholder="Venue or Organization"
                value={formData.organization}
                onChange={(e) => handleInputChange('organization', e.target.value)}
                className="bg-white/5 border border-white/10 text-white/90 placeholder-white/40 rounded px-3 py-2 text-sm luxury-typography font-light focus:border-rust-orange/50 focus:bg-white/10 focus:ring-0 transition-all duration-300"
                data-testid="input-organization"
              />
              
              <Select onValueChange={(value) => handleInputChange('eventType', value)}>
                <SelectTrigger className="bg-white/5 border border-white/10 text-white/90 rounded px-3 py-2 text-sm luxury-typography font-light focus:border-rust-orange/50 focus:bg-white/10 focus:ring-0 transition-all duration-300" data-testid="select-event-type">
                  <SelectValue placeholder="Event Type" />
                </SelectTrigger>
                <SelectContent className="elegant-monochrome border-white/10">
                  <SelectItem value="festival">Festival</SelectItem>
                  <SelectItem value="club">Club Show</SelectItem>
                  <SelectItem value="private">Private Event</SelectItem>
                  <SelectItem value="corporate">Corporate Event</SelectItem>
                </SelectContent>
              </Select>
              
              <Input
                type="date"
                value={formData.eventDate}
                onChange={(e) => handleInputChange('eventDate', e.target.value)}
                className="bg-white/5 border border-white/10 text-white/90 rounded px-3 py-2 text-sm luxury-typography font-light focus:border-rust-orange/50 focus:bg-white/10 focus:ring-0 transition-all duration-300"
                data-testid="input-date"
              />
              
              <Input
                placeholder="Budget Range (Optional)"
                value={formData.budgetRange}
                onChange={(e) => handleInputChange('budgetRange', e.target.value)}
                className="bg-white/5 border border-white/10 text-white/90 placeholder-white/40 rounded px-3 py-2 text-sm luxury-typography font-light focus:border-rust-orange/50 focus:bg-white/10 focus:ring-0 transition-all duration-300"
                data-testid="input-budget"
              />
              
              <Textarea
                placeholder="Tell us about your event..."
                rows={3}
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                className="bg-white/5 border border-white/10 text-white/90 placeholder-white/40 rounded px-3 py-2 text-sm luxury-typography font-light focus:border-rust-orange/50 focus:bg-white/10 focus:ring-0 resize-none transition-all duration-300"
                required
                data-testid="input-message"
              />
              
              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={bookingMutation.isPending}
                  className="bg-rust-orange hover:bg-rust-orange/90 text-white font-semibold text-sm px-8 py-2.5 rounded uppercase tracking-wide transition-all duration-300 disabled:opacity-50"
                  data-testid="button-submit-booking"
                >
                  {bookingMutation.isPending ? "Sending..." : "Send Booking Request"}
                </button>
              </div>
            </form>
          </div>
          
          {/* Contact Form and Info */}
          <div className="space-y-6">
            {/* Contact Info */}
            <div className="minimal-luxury p-6">
              <h2 className="luxury-typography text-xl text-white font-light tracking-wide mb-4">Contact Info</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="luxury-typography text-sm text-white/50 font-light tracking-wider uppercase mb-1">Email</h3>
                  <p className="luxury-typography text-white/90 text-base font-light select-none pointer-events-none">mcdaniel-family@att.net</p>
                </div>
                <div>
                  <h3 className="luxury-typography text-sm text-white/50 font-light tracking-wider uppercase mb-1">Phone</h3>
                  <p className="luxury-typography text-white/90 text-base font-light select-none pointer-events-none">1 (415) 259 1828</p>
                </div>
              </div>
            </div>

            {/* General Contact Form */}
            <div className="minimal-luxury p-6">
              <h2 className="luxury-typography text-xl text-white font-light tracking-wide mb-4">Send a Message</h2>
              <form onSubmit={handleContactSubmit} className="space-y-3">
                <Input
                  placeholder="Your Name"
                  value={contactForm.name}
                  onChange={(e) => setContactForm(prev => ({ ...prev, name: e.target.value }))}
                  className="bg-white/5 border border-white/10 text-white/90 placeholder-white/40 rounded px-3 py-2 text-sm luxury-typography font-light focus:border-rust-orange/50 focus:bg-white/10 focus:ring-0 transition-all duration-300"
                  required
                  data-testid="input-contact-name"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={contactForm.email}
                  onChange={(e) => setContactForm(prev => ({ ...prev, email: e.target.value }))}
                  className="bg-white/5 border border-white/10 text-white/90 placeholder-white/40 rounded px-3 py-2 text-sm luxury-typography font-light focus:border-rust-orange/50 focus:bg-white/10 focus:ring-0 transition-all duration-300"
                  required
                  data-testid="input-contact-email"
                />
                <Textarea
                  placeholder="Your Message"
                  rows={3}
                  value={contactForm.message}
                  onChange={(e) => setContactForm(prev => ({ ...prev, message: e.target.value }))}
                  className="bg-white/5 border border-white/10 text-white/90 placeholder-white/40 rounded px-3 py-2 text-sm luxury-typography font-light focus:border-rust-orange/50 focus:bg-white/10 focus:ring-0 resize-none transition-all duration-300"
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
          </div>
        </div>
      </div>
    </section>
  );
}
