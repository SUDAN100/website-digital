
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-200">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-600 flex items-center justify-center gap-1">
          © {new Date().getFullYear()} Sudan Yadav. All rights reserved. Made with 
          <Heart className="h-4 w-4 text-red-500 fill-current" /> in Nepal
        </p>
      </div>
    </footer>
  );
};

export default Footer;
