import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Find a Doctor", href: "/doctors" },
    { name: "Book Appointment", href: "/doctors" },
    { name: "Health Check Up", href: "/health-checkup" },
    { name: "Our Services", href: "/#services" },
    { name: "Patient Testimonials", href: "/#testimonials" },
    { name: "Contact Us", href: "/contact" },
  ];

  const specialties = [
    { name: "Cardiology", href: "/doctors?specialty=cardiology" },
    { name: "Orthopedics", href: "/doctors?specialty=orthopedics" },
    { name: "Pediatrics", href: "/doctors?specialty=pediatrics" },
    { name: "Dermatology", href: "/doctors?specialty=dermatology" },
    { name: "Neurology", href: "/doctors?specialty=neurology" },
    { name: "Gynecology", href: "/doctors?specialty=gynecology" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-healthcare-navy text-white">
      {/* Main Footer */}
      <div className="container-healthcare py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Column */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                <span className="text-secondary font-bold text-xl">M+</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">MediCare</h3>
                <p className="text-sm text-white/60">Hospital & Research Center</p>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Providing world-class healthcare services with compassion and excellence.
              Our team of qualified doctors and state-of-the-art facilities ensure
              the best medical care for you and your family.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-white/70 hover:text-secondary transition-colors flex items-center gap-2 group text-sm"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Specialties</h4>
            <ul className="space-y-3">
              {specialties.map((specialty) => (
                <li key={specialty.name}>
                  <Link
                    to={specialty.href}
                    className="text-white/70 hover:text-secondary transition-colors flex items-center gap-2 group text-sm"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 -ml-6 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                    {specialty.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  123 Medical Center Drive,
                  <br />
                  Healthcare City, HC 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary flex-shrink-0" />
                <div className="text-sm">
                  <p className="text-white/70">Emergency: +1 (800) 123-4567</p>
                  <p className="text-white/70">Reception: +1 (800) 123-4568</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-white/70 text-sm">info@medicare.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-white/70 text-sm">Open 24/7 for Emergency</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-healthcare py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} MediCare Hospital. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-white/50 hover:text-secondary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-white/50 hover:text-secondary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-white/50 hover:text-secondary transition-colors">
              HIPAA Compliance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
