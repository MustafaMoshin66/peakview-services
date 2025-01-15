import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Mail, User, MessageSquare } from "lucide-react";

export const ContactForm = () => {
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
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8">
      <h3 className="text-2xl font-semibold text-crystal-accent mb-6 text-center">Get in Touch</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <User className="absolute left-3 top-3 h-5 w-5 text-crystal-secondary/50" />
          <Input
            placeholder="Your Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            required
            className="pl-10 bg-white/50 border-crystal-secondary/20 focus:border-crystal-primary transition-colors"
          />
        </div>
        <div className="relative">
          <Mail className="absolute left-3 top-3 h-5 w-5 text-crystal-secondary/50" />
          <Input
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
            className="pl-10 bg-white/50 border-crystal-secondary/20 focus:border-crystal-primary transition-colors"
          />
        </div>
        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-crystal-secondary/50" />
          <Textarea
            placeholder="Your Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
            className="pl-10 bg-white/50 border-crystal-secondary/20 focus:border-crystal-primary transition-colors min-h-[150px] resize-none"
          />
        </div>
        <Button 
          type="submit" 
          className="w-full bg-crystal-primary hover:bg-crystal-secondary text-white transition-colors duration-300 py-6"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
};