import { Button } from "@/components/ui/button";
import { Play, TrendingUp } from "lucide-react";
import heroImage from "@/assets/fondo.png";

const HeroSection = () => {
  const scrollToCategories = () => {
    const categoriesSection = document.getElementById('categories-section');
    if (categoriesSection) {
      categoriesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover"
          poster={heroImage}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <source src="/hero-video.webm" type="video/webm" />
          {/* Fallback image if video doesn't load */}
          <img 
            src={heroImage} 
            alt="ShipHero Academy Hero" 
            className="w-full h-full object-cover"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 mb-6">
            <img 
              src="/logo.png" 
              alt="Boxful Logo" 
              className="w-8 h-8 object-contain"
            />
            <span className="text-primary font-semibold">Boxful x ShipHero</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Inicia en ShipHero con
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Boxful como Aliado
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Capacítate para operar con ShipHero de manera independiente. Recursos prácticos 
            y guías paso a paso para que domines la plataforma sin necesidad de asesoría constante.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-hero hover:opacity-90 transition-opacity text-lg px-8"
              onClick={scrollToCategories}
            >
              <Play className="h-5 w-5 mr-2" />
              Comenzar Ahora
            </Button>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default HeroSection;