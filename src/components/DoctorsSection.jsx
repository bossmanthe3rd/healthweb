import { useNavigate } from "react-router-dom";
import { Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const doctors = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    experience: "15+ Years",
    rating: 4.9,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop",
    slug: "sarah-johnson",
  },
  {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Orthopedics",
    experience: "12+ Years",
    rating: 4.8,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop",
    slug: "michael-chen",
  },
  {
    id: 3,
    name: "Dr. Emily Williams",
    specialty: "Pediatrics",
    experience: "10+ Years",
    rating: 4.9,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=2787&auto=format&fit=crop",
    slug: "emily-williams",
  },
  {
    id: 4,
    name: "Dr. James Anderson",
    specialty: "Neurology",
    experience: "18+ Years",
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2864&auto=format&fit=crop",
    slug: "james-anderson",
  },
];

const DoctorsSection = () => {
  const navigate = useNavigate();

  return (
    <section id="doctors" className="section-padding bg-muted/30">
      <div className="container-healthcare">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-semibold mb-2">Our Specialists</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our Expert Doctors
          </h2>
          <p className="text-muted-foreground">
            Our team of highly qualified and experienced doctors are dedicated to
            providing you with the best medical care possible.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor, index) => (
            <div
              key={doctor.id}
              className="card-healthcare group cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => navigate(`/doctor/${doctor.slug}`)}
            >
              {/* Doctor Image */}
              <div className="relative mb-4 rounded-xl overflow-hidden">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="w-4 h-4 text-healthcare-gold fill-healthcare-gold" />
                  <span className="text-sm font-medium">{doctor.rating}</span>
                </div>
              </div>

              {/* Doctor Info */}
              <div className="space-y-2">
                <span className="badge-specialty">{doctor.specialty}</span>
                <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                  {doctor.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {doctor.experience} Experience
                </p>
                <p className="text-xs text-muted-foreground">
                  {doctor.reviews} Patient Reviews
                </p>
              </div>

              {/* View Profile Button */}
              <Button
                variant="ghost"
                className="w-full mt-4 group-hover:bg-primary group-hover:text-white transition-all"
              >
                View Profile
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            onClick={() => navigate("/doctors")}
            className="btn-healthcare"
          >
            View All Doctors
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
