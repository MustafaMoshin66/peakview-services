import { Globe } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          className="flex items-center space-x-2 hover:bg-crystal-light/10"
        >
          <Globe className="h-5 w-5 text-crystal-secondary hover:text-crystal-primary transition-colors" />
          <span className={`text-sm font-medium ${language === 'ar' ? 'font-arabic' : ''}`}>
            {language === 'en' ? 'English' : 'العربية'}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-32 bg-white/95 backdrop-blur-md border border-gray-200 shadow-lg"
      >
        <DropdownMenuItem 
          onClick={() => setLanguage('en')}
          className="hover:bg-crystal-light/20 focus:bg-crystal-light/20 cursor-pointer"
        >
          English
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setLanguage('ar')} 
          className="font-arabic hover:bg-crystal-light/20 focus:bg-crystal-light/20 cursor-pointer"
        >
          العربية
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};