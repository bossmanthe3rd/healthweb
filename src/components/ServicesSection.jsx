import { useNavigate } from "react-router-dom";
import {
  Heart,
  Brain,
  Bone,
  Baby,
  Eye,
  Stethoscope,
  Activity,
  Microscope,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: Heart,
    name: "Cardiology",
    description: "Comprehensive heart care including diagnostics, treatment, and cardiac rehabilitation.",
    color: "bg-red-100 text-red-600",
    slug: "cardiology",
  },
  {
    icon: Brain,
    name: "Neurology",
    description: "Expert care for brain, spine, and nervous system disorders with advanced treatments.",
    color: "bg-purple-100 text-purple-600",
    slug: "neurology",
  },
  {
    icon: Bone,
    name: "Orthopedics",
    description: "Specialized care for bones, joints, and muscles including sports medicine.",
    color: "bg-blue-100 text-blue-600",
    slug: "orthopedics",
  },
  {
    icon: Baby,
    name: "Pediatrics",
    description: "Comprehensive healthcare for infants, children, and adolescents.",
    color: "bg-pink-100 text-pink-600",
    slug: "pediatrics",
  },
  {
    icon: Eye,
    name: "Ophthalmology",
    description: "Complete eye care services from routine exams to complex surgeries.",
    color: "bg-cyan-100 text-cyan-600",
    slug: "ophthalmology",
  },
  {
    icon: Stethoscope,
    name: "General Medicine",
    description: "Primary healthcare services for adults covering a wide range of conditions.",
    color: "bg-green-100 text-green-600",
    slug: "general-medicine",
  },
  {
    icon: Activity,
    name: "Emergency Care",
    description: "24/7 emergency services with rapid response and critical care specialists.",
    color: "bg-orange-100 text-orange-600",
    slug: "emergency",
  },
  {
    icon: Microscope,
    name: "Laboratory",
    description: "State-of-the-art diagnostic laboratory with quick and accurate results.",
    color: "bg-indigo-100 text-indigo-600",
    slug: "laboratory",
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container-healthcare">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-semibold mb-2">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive Healthcare Services
          </h2>
          <p className="text-muted-foreground">
            We offer a wide range of medical services to meet all your healthcare
            needs under one roof with the latest technology and expert care.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.name}
              className="card-healthcare group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => navigate(`/doctors?specialty=${service.slug}`)}
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl ${service.color} flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}
              >
                <service.icon className="w-7 h-7" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {service.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                {service.description}
              </p>

              {/* Learn More Link */}
              <div className="flex items-center text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More
                <ArrowRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
