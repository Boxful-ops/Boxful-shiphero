import { Button } from "@/components/ui/button";
import { BookOpen, Play, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-shiphero.jpg";

const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="ShipHero Academy Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-primary-foreground" />
            </div>
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
            <Button size="lg" className="bg-gradient-hero hover:opacity-90 transition-opacity text-lg px-8">
              <Play className="h-5 w-5 mr-2" />
              Comenzar Ahora
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Ver Demo
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-8 max-w-lg">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">150+</div>
              <div className="text-sm text-muted-foreground">Recursos</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">50h+</div>
              <div className="text-sm text-muted-foreground">Contenido</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">2.5k+</div>
              <div className="text-sm text-muted-foreground">Estudiantes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;