import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, User, MessageSquare } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const ContactForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    toast({
      title: t('messageSent'),
      description: t('messageSuccess'),
    });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8">
      <form onSubmit={handleSubmit} className="space-y-6" netlify>
        <div className="relative">
          <User className="absolute left-3 top-3 h-5 w-5 text-crystal-secondary/50" />
          <Input
            placeholder={t('yourName')}
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="pl-10 border-crystal-secondary/20 focus:border-crystal-primary transition-colors rounded-lg"
          />
        </div>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-5 w-5 text-crystal-secondary/50" />
          <Input
            type="email"
            placeholder={t('yourEmail')}
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="pl-10 border-crystal-secondary/20 focus:border-crystal-primary transition-colors rounded-lg"
          />
        </div>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-crystal-secondary/50" />
          <Textarea
            placeholder={t('yourMessage')}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            className="pl-10 border-crystal-secondary/20 focus:border-crystal-primary transition-colors min-h-[150px] resize-none rounded-lg"
          />
        </div>
        <Button 
          type="submit" 
          className="w-full bg-crystal-primary hover:bg-crystal-secondary text-white transition-colors duration-300 py-6 rounded-lg shadow-lg hover:shadow-xl"
        >
          {t('sendMessage')}
        </Button>
      </form>
    </div>
  );
};
