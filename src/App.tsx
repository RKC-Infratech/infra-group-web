import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";
import Manufacturing from "./pages/Manufacturing";
import News from "./pages/News";
import RKCInfratech from "./pages/RKCInfratech";
import ImagineringBridges from "./pages/ImagineringBridges";
import RiyareMicroConstruct from "./pages/RiyareMicroConstruct";
import RKChoubeyFamilyOffice from "./pages/RKChoubeyFamilyOffice";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import AdminPortal from "./pages/AdminPortal";
import ScrollToTop from "@/components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/manufacturing" element={<Manufacturing />} />
              <Route path="/news" element={<News />} />
              <Route path="/rkc-infratech" element={<RKCInfratech />} />
              <Route path="/imagineering-bridges" element={<ImagineringBridges />} />
              <Route path="/riyare-micro-construct" element={<RiyareMicroConstruct />} />
              <Route path="/rkchoubey-family-office" element={<RKChoubeyFamilyOffice />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/admin" element={<AdminPortal />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
