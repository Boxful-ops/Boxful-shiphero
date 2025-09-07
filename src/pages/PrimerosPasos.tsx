import { GraduationCap, ArrowLeft, Play, BookOpen, Settings, Package } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Header from "@/components/Header";
import { Link } from "react-router-dom";

const PrimerosPasos = () => {
  const tutorials = [
    {
      id: 1,
      title: "Configuración Inicial de ShipHero",
      description: "Aprende a configurar tu cuenta y los ajustes básicos para comenzar a usar ShipHero.",
      duration: "15 min",
      icon: Settings,
      completed: false,
    },
    {
      id: 2,
      title: "Navegación Básica",
      description: "Conoce la interfaz de ShipHero y cómo navegar entre las diferentes secciones.",
      duration: "10 min",
      icon: BookOpen,
      completed: false,
    },
    {
      id: 3,
      title: "Gestión de Inventario Básica",
      description: "Fundamentos para agregar productos, gestionar stock y realizar ajustes de inventario.",
      duration: "20 min",
      icon: Package,
      completed: false,
    },
    {
      id: 4,
      title: "Procesamiento de Pedidos Esenciales",
      description: "Aprende el flujo básico para procesar pedidos desde la recepción hasta el envío.",
      duration: "25 min",
      icon: Play,
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
                  <GraduationCap className="h-8 w-8 text-primary-foreground" />
                </div>
                <div>
                  <Badge className="bg-success text-success-foreground mb-2">
                    Inicial
                  </Badge>
                  <h1 className="text-4xl font-bold text-foreground">Primeros Pasos</h1>
                </div>
              </div>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Conoce los fundamentos de ShipHero. Configuración inicial, navegación básica, 
                gestión de inventario y procesamiento de pedidos esenciales para comenzar.
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

export default PrimerosPasos;
