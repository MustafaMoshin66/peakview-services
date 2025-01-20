import { Languages } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

export const LanguageSwitcher = () => {
  const { setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="hover:bg-crystal-light">
          <Languages className="h-5 w-5 text-crystal-secondary hover:text-crystal-primary transition-colors" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-32">
        <DropdownMenuItem onClick={() => setLanguage('en')}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage('ar')} className="font-arabic">
          العربية
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};