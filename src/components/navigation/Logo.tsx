import { Link } from "react-router-dom";

export const Logo = () => (
  <Link to="/" className="flex items-center space-x-3 relative logo-spotlight">
    <div className="relative flex items-center justify-center overflow-hidden" style={{ width: '5rem', height: '5rem' }}>
      <img 
        src="/lovable-uploads/f707d378-8f0e-4adb-bf79-8964d18ae477.png" 
        alt="CrystalPeak Logo" 
        className="absolute h-[300%] w-[300%] max-w-none z-10 transition-transform hover:scale-105"
      />
    </div>
  </Link>
);
