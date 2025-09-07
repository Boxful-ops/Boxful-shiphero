import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PrimerosPasos from "./pages/PrimerosPasos";
import DominandoOperaciones from "./pages/DominandoOperaciones";
import NivelExperto from "./pages/NivelExperto";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/Boxful-shiphero">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/primeros-pasos" element={<PrimerosPasos />} />
          <Route path="/dominando-operaciones" element={<DominandoOperaciones />} />
          <Route path="/nivel-experto" element={<NivelExperto />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
