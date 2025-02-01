import { Link, useLocation } from "react-router-dom";

export const Logo = () => {
  const location = useLocation();

  const handleLogoClick = () => {
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Link 
      to="/" 
      onClick={handleLogoClick}
      className="flex items-center space-x-6 relative logo-spotlight"
    >
      <img 
        src="/lovable-uploads/f707d378-8f0e-4adb-bf79-8964d18ae477.png" 
        alt="CrystalPeak Logo" 
        className="h-40 w-40 relative z-10 transition-transform hover:scale-105"
      />
    </Link>
  );
};
