import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="bg-card border-b shadow-card-custom fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-center relative">
          <div className="flex items-center space-x-3">
            <img 
              src="/logo.png" 
              alt="Boxful Logo" 
              className="w-10 h-10 object-contain"
            />
            <h1 className="text-xl font-bold text-foreground">Boxful x ShipHero</h1>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="absolute right-0"
          >
            <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;