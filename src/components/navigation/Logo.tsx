import { Link } from "react-router-dom";

export const Logo = () => (
  <Link to="/" className="flex items-center space-x-3 relative logo-spotlight">
    <img 
      src="/lovable-uploads/f707d378-8f0e-4adb-bf79-8964d18ae477.png" 
      alt="CrystalPeak Logo" 
      className="h-30 w-30 relative z-10 transition-transform hover:scale-105"
    />
  </Link>
);
