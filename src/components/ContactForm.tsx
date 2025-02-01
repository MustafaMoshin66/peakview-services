import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useToast } from "@/components/ui/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const ContactForm = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log("Form field updated:", name, value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    console.log("Form submitted:", formData);
    toast({
      title: t('messageSent'),
      description: t('messageSuccess'),
    });
  };

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      className="space-y-6 w-full max-w-md mx-auto"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      
      <div className="space-y-2">
        <Input
          type="text"
          name="name"
          placeholder={t('yourName')}
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <Input
          type="email"
          name="email"
          placeholder={t('yourEmail')}
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full"
        />
      </div>

      <div className="space-y-2">
        <Textarea
          name="message"
          placeholder={t('yourMessage')}
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full min-h-[150px]"
        />
      </div>

      <Button
        type="submit"
        className="w-full bg-crystal-primary hover:bg-crystal-secondary text-white"
      >
        {t('sendMessage')}
      </Button>
    </form>
  );
};