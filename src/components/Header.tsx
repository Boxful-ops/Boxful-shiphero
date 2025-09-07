import { BookOpen, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-card border-b shadow-card-custom">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
              <BookOpen className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Boxful x ShipHero</h1>
              <p className="text-sm text-muted-foreground">Portal de Operaciones</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Inicio
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Recursos
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors">
              Mi Progreso
            </a>
            <Button variant="outline" size="sm" className="ml-4">
              <User className="h-4 w-4 mr-2" />
              Mi Perfil
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;