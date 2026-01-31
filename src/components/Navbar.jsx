import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Clock, MapPin, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

const specialties = [
  { name: "Cardiology", slug: "cardiology" },
  { name: "Orthopedics", slug: "orthopedics" },
  { name: "Pediatrics", slug: "pediatrics" },
  { name: "Dermatology", slug: "dermatology" },
  { name: "Neurology", slug: "neurology" },
  { name: "Gynecology", slug: "gynecology" },
  { name: "Ophthalmology", slug: "ophthalmology" },
  { name: "ENT", slug: "ent" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Info Bar */}
      <div className="hidden lg:block bg-primary text-primary-foreground py-2">
        <div className="container-healthcare flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>Emergency: +91 98450 12345</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Open 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Yelankha, Bangalore</span>
            </div>
          </div>
          <Link
            to="/admin/login"
            className="flex items-center gap-2 hover:text-white/80 transition-colors"
          >
            <User className="w-4 h-4" />
            <span>Staff Login</span>
          </Link>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md"
          : "bg-white"
          }`}
      >
        <div className="container-healthcare">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3">
              <div className="w-12 h-12 bg-healthcare-gradient rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">V+</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Valens Hospital</h1>
                <p className="text-xs text-muted-foreground">Hospital & Research Center</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <Link to="/" className="nav-link">
                Home
              </Link>

              <DropdownMenu>
                <DropdownMenuTrigger className="nav-link flex items-center gap-1">
                  Book Appointment
                  <ChevronDown className="w-4 h-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="center" className="w-56 p-2">
                  {specialties.map((specialty) => (
                    <DropdownMenuItem
                      key={specialty.slug}
                      className="cursor-pointer rounded-lg"
                      onClick={() => navigate(`/doctors?specialty=${specialty.slug}`)}
                    >
                      {specialty.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link to="/enquire" className="nav-link">
                Enquire Now
              </Link>

              <Link to="/health-checkup" className="nav-link">
                Health Check Up
              </Link>

              <Link to="/about" className="nav-link">
                About
              </Link>

              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Button
                onClick={() => navigate("/doctors")}
                className="btn-healthcare"
              >
                Find a Doctor
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-border animate-slide-down">
            <div className="container-healthcare py-4 space-y-4">
              <Link
                to="/"
                className="block py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/doctors"
                className="block py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book Appointment
              </Link>
              <Link
                to="/enquire"
                className="block py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Enquire Now
              </Link>
              <Link
                to="/health-checkup"
                className="block py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Health Check Up
              </Link>
              <Link
                to="/about"
                className="block py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/admin/login"
                className="block py-2 text-muted-foreground hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Staff Login
              </Link>
              <Button
                onClick={() => {
                  navigate("/doctors");
                  setIsMobileMenuOpen(false);
                }}
                className="btn-healthcare w-full mt-4"
              >
                Find a Doctor
              </Button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
