import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import About from "@/pages/about";
import BandMembers from "@/pages/band-members";
import Shows from "@/pages/shows";
import Gallery from "@/pages/gallery";
import Social from "@/pages/social";
import Booking from "@/pages/booking";
import Contact from "@/pages/contact";
import Admin from "@/pages/admin";
import Navigation from "@/components/layout/navigation";
import Footer from "@/components/layout/footer";

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function Router() {
  return (
    <>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/band-members" component={BandMembers} />
        <Route path="/shows" component={Shows} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/social" component={Social} />
        <Route path="/booking" component={Booking} />
        <Route path="/admin" component={Admin} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="min-h-screen bg-dark-bg overflow-x-hidden">
          <Navigation />
          <Router />
          <Footer />
        </div>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
