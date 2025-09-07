import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { LucideIcon, Play, Clock, Users } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  tutorialCount: number;
  duration: string;
  students: number;
  level: "beginner" | "intermediate" | "advanced";
}

const levelStyles = {
  beginner: "bg-success text-success-foreground",
  intermediate: "bg-warning text-warning-foreground", 
  advanced: "bg-destructive text-destructive-foreground"
};

const levelText = {
  beginner: "Básico",
  intermediate: "Intermedio",
  advanced: "Avanzado"
};

const CategoryCard = ({ 
  title, 
  description, 
  icon: Icon, 
  tutorialCount, 
  duration, 
  students, 
  level 
}: CategoryCardProps) => {
  return (
    <Card className="group hover:shadow-hover transition-all duration-300 cursor-pointer border-0 shadow-card-custom bg-gradient-card">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Icon className="h-6 w-6 text-primary-foreground" />
          </div>
          <Badge className={levelStyles[level]}>
            {levelText[level]}
          </Badge>
        </div>
        <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center space-x-1">
            <Play className="h-4 w-4" />
            <span>{tutorialCount} tutoriales</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Users className="h-4 w-4" />
            <span>{students}</span>
          </div>
        </div>
        
        <Button className="w-full bg-gradient-hero hover:opacity-90 transition-opacity">
          <Play className="h-4 w-4 mr-2" />
          Comenzar Aprendizaje
        </Button>
      </CardContent>
    </Card>
  );
};

export default CategoryCard;