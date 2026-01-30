import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X, Gift } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { InsertEmailSubscriber } from "@shared/schema";

interface EmailSignupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EmailSignupModal({ isOpen, onClose }: EmailSignupModalProps) {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const subscribeMutation = useMutation({
    mutationFn: async (data: InsertEmailSubscriber) => {
      return apiRequest('POST', '/api/subscribe', data);
    },
    onSuccess: () => {
      toast({
        title: "Welcome to the Kool List!",
        description: "Check your email for your free track download.",
      });
      setEmail("");
      onClose();
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
    if (email) {
      subscribeMutation.mutate({ email });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-cream border-bubblegum max-w-md">
        <DialogHeader>
          <div className="flex justify-between items-start">
            <DialogTitle className="font-fredoka text-3xl text-royal-purple">
              Join the Kool List
            </DialogTitle>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={onClose}
              className="text-chocolate hover:text-royal-purple"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="text-center">
          <p className="text-chocolate mb-6">Get a free unreleased track when you join our mailing list!</p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border-royal-purple/20 rounded-2xl focus:ring-electric-blue"
              required
            />
            <Button 
              type="submit" 
              disabled={subscribeMutation.isPending}
              className="w-full bg-bubblegum hover:bg-bubblegum/80 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
            >
              <Gift className="w-5 h-5 mr-2" />
              {subscribeMutation.isPending ? "Signing up..." : "Get My Free Track"}
            </Button>
          </form>
          
          <p className="text-sm text-chocolate/70 mt-4">No spam, just pure funk delivered to your inbox.</p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
