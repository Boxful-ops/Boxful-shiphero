import { GraduationCap, Target, Trophy, Zap } from "lucide-react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryCard from "@/components/CategoryCard";

const Index = () => {
  const categories = [
    {
      id: 1,
      title: "Fundamentos Básicos",
      description: "Aprende los conceptos esenciales de ShipHero. Configuración inicial, navegación del dashboard, gestión básica de inventario y procesamiento de pedidos simples.",
      icon: GraduationCap,
      tutorialCount: 45,
      duration: "12h",
      students: 1200,
      level: "beginner" as const,
    },
    {
      id: 2,
      title: "Técnicas Intermedias",
      description: "Domina flujos de trabajo avanzados, automatizaciones, reportes personalizados, integración con APIs y optimización de procesos de fulfillment.",
      icon: Target,
      tutorialCount: 68,
      duration: "25h",
      students: 850,
      level: "intermediate" as const,
    },
    {
      id: 3,
      title: "Maestría Avanzada", 
      description: "Conviértete en experto con configuraciones enterprise, desarrollo de webhooks, análisis predictivo y arquitecturas de integración complejas.",
      icon: Trophy,
      tutorialCount: 37,
      duration: "18h", 
      students: 420,
      level: "advanced" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      
      {/* Categories Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Zap className="h-6 w-6 text-primary" />
              <span className="text-primary font-semibold">Rutas de Aprendizaje</span>
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Elige Tu Nivel de Experiencia
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Progresa a tu ritmo con contenido estructurado diseñado para cada etapa 
              de tu journey en ShipHero.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                title={category.title}
                description={category.description}
                icon={category.icon}
                tutorialCount={category.tutorialCount}
                duration={category.duration}
                students={category.students}
                level={category.level}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto">
                <GraduationCap className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Aprendizaje Progresivo</h3>
              <p className="text-muted-foreground">
                Curriculum diseñado para llevarte desde principiante hasta experto en ShipHero.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto">
                <Target className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Casos Prácticos</h3>
              <p className="text-muted-foreground">
                Ejemplos del mundo real y ejercicios hands-on para aplicar lo aprendido.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto">
                <Trophy className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Certificaciones</h3>
              <p className="text-muted-foreground">
                Obtén credenciales verificadas que demuestren tu expertise en ShipHero.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;