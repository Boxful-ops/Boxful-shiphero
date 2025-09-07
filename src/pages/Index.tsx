import { GraduationCap, Target, Trophy, Zap } from "lucide-react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import CategoryCard from "@/components/CategoryCard";

const Index = () => {
  const categories = [
    {
      id: 1,
      title: "Primeros Pasos",
      description: "Conoce los fundamentos de ShipHero. Configuración inicial, navegación básica, gestión de inventario y procesamiento de pedidos esenciales para comenzar.",
      icon: GraduationCap,
      level: "beginner" as const,
    },
    {
      id: 2,
      title: "Dominando Operaciones",
      description: "Perfecciona flujos avanzados, automatiza procesos, genera reportes personalizados y optimiza operaciones de fulfillment para mayor eficiencia.",
      icon: Target,
      level: "intermediate" as const,
    },
    {
      id: 3,
      title: "Nivel Experto", 
      description: "Alcanza maestría total con configuraciones enterprise, integración de APIs avanzadas, análisis predictivo y arquitecturas complejas de operación.",
      icon: Trophy,
      level: "advanced" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <HeroSection />
      
      {/* Categories Section */}
      <section id="categories-section" className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Zap className="h-6 w-6 text-primary" />
              <span className="text-primary font-semibold">Rutas de Capacitación</span>
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">
            Domina ShipHero con Boxful
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Capacitación pensada para que cada miembro de Boxful desarrolle habilidades clave y aproveche al máximo la plataforma.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                title={category.title}
                description={category.description}
                icon={category.icon}
                level={category.level}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-hero rounded-3xl p-12 text-white">
              <h3 className="text-3xl font-bold mb-4">
                En Boxful te ayudamos a sacar el máximo provecho de tu operación de fulfillment
              </h3>
              <p className="text-xl opacity-90">
                Para que tu equipo sea más ágil, eficiente y autónomo.
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default Index;