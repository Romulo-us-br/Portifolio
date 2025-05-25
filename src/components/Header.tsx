import { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-cream-50/95 backdrop-blur-sm border-b border-stone-200">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Modified Logo */}
          <div className="flex items-center justify-center w-10 h-10 bg-stone-700 rounded-full hover:bg-stone-600 transition-colors duration-300">
            <span className="text-white font-medium text-lg">RB</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { label: "Início", id: "hero" },
              { label: "Sobre", id: "about" },
              { label: "Projetos", id: "projects" },
              { label: "Contato", id: "contact" }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="font-sans text-sm font-medium text-stone-700 hover:text-stone-900 transition-colors duration-300 relative group tracking-wide"
              >
                {item.label.toUpperCase()}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-stone-900 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-stone-900"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-sage-200 pt-4">
            <div className="flex flex-col space-y-3">
              {[
                { label: "Início", id: "hero" },
                { label: "Sobre", id: "about" },
                { label: "Projetos", id: "projects" },
                { label: "Contato", id: "contact" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sage-700 hover:text-sage-900 transition-colors duration-300 text-left font-inter font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
