import { Trophy, ArrowLeft, Play, Database, Code, TrendingUp, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import { Link } from "react-router-dom";

const NivelExperto = () => {
  const tutorials = [
    {
      id: 1,
      title: "Configuraciones Enterprise",
      description: "Implementa configuraciones avanzadas para operaciones de gran escala y múltiples ubicaciones.",
      duration: "45 min",
      icon: Database,
      completed: false,
    },
    {
      id: 2,
      title: "Integración de APIs Avanzadas",
      description: "Conecta ShipHero con sistemas externos usando APIs y webhooks para automatización completa.",
      duration: "50 min",
      icon: Code,
      completed: false,
    },
    {
      id: 3,
      title: "Análisis Predictivo",
      description: "Utiliza datos históricos para predecir demanda y optimizar inventario de manera proactiva.",
      duration: "40 min",
      icon: TrendingUp,
      completed: false,
    },
    {
      id: 4,
      title: "Arquitecturas Complejas de Operación",
      description: "Diseña y gestiona flujos de trabajo complejos para operaciones multi-canal y multi-región.",
      duration: "55 min",
      icon: Network,
      completed: false,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <Link to="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver al inicio
              </Link>
              
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-hero rounded-xl flex items-center justify-center">
                  <Trophy className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <Badge className="bg-destructive text-destructive-foreground mb-2">
                    Experto
                  </Badge>
                  <h1 className="text-4xl font-bold text-foreground">Nivel Experto</h1>
                </div>
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Alcanza maestría total con configuraciones enterprise, integración de APIs avanzadas, 
                análisis predictivo y arquitecturas complejas de operación.
              </p>
            </div>
          </div>
        </section>

        {/* Tutorials Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-foreground mb-8">Tutoriales Disponibles</h2>
              
              <div className="space-y-6">
                {tutorials.map((tutorial) => (
                  <Card key={tutorial.id} className="group hover:shadow-hover transition-all duration-300 cursor-pointer border-0 shadow-card-custom bg-gradient-card">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                            <tutorial.icon className="h-6 w-6 text-primary-foreground" />
                          </div>
                          <div>
                            <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                              {tutorial.title}
                            </CardTitle>
                            <p className="text-sm text-muted-foreground">{tutorial.duration}</p>
                          </div>
                        </div>
                        <Button className="bg-gradient-hero hover:opacity-90 transition-opacity">
                          <Play className="h-4 w-4 mr-2" />
                          Comenzar
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground leading-relaxed">
                        {tutorial.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default NivelExperto;
