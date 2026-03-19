import react from "react";
import Navbar from "../components/NavBar";
import AboutHero from "../components/AboutHero";
import Footer from "../components/Footer";
import ContactUs from "../components/ContactForm";
import ServicePageContent from "../components/ServiceDetailsContent";
import { useParams } from "react-router-dom";

export default function ServiceDetailsPage(){
  const {slug}=useParams();

  return (

    <>
    
    
      <style>{`
                    @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@500;600;700&family=Open+Sans:wght@300;400;600;700&display=swap');
                    
                    /* Smooth scrolling for anchor links */
                    html { scroll-behavior: smooth; }
                    
                    /* Custom scrollbar for a polished look */
                    ::-webkit-scrollbar { width: 8px; }
                    ::-webkit-scrollbar-track { background: #0a0a0a; }
                    ::-webkit-scrollbar-thumb { background: #333; border-radius: 4px; }
                    ::-webkit-scrollbar-thumb:hover { background: #EAB308; }
            
                    /* Custom Animations */
                    @keyframes revealUp {
                      from { opacity: 0; transform: translateY(40px); }
                      to { opacity: 1; transform: translateY(0); }
                    }
                    .animate-reveal {
                      opacity: 0;
                      animation: revealUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                    }
                    
                    @keyframes bgZoom {
                      0% { transform: scale(1); }
                      50% { transform: scale(1.05); }
                      100% { transform: scale(1); }
                    }
                    .animate-bg-zoom {
                      animation: bgZoom 20s ease-in-out infinite;
                    }
                  `}</style>
            <div className="bg-neutral-950  font-['Open_Sans'] text-white selection:bg-yellow-500 selection:text-black">
                <Navbar />
                <AboutHero title= {slug}/>
            </div>
            <div>
                <ServicePageContent slug={slug}/>
                <ContactUs/>
                <Footer/>
            </div>
    </>


   );
}
