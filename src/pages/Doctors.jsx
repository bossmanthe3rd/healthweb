import { useState, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Star, Search, Filter, MapPin, Clock, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const allDoctors = [
  {
    id: 1,
    name: "Dr. Rishika Malhotra",
    specialty: "Cardiology",
    experience: "15+ Years",
    rating: 4.9,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1659353888906-adb3e0041693?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "dr-rishika-malhotra",
    education: "MD, AIIMS New Delhi",
    available: true,
    nextAvailable: "Today",
    location: "Block A, Floor 3",
  },
  {
    id: 2,
    name: "Dr. Rakesh Gupta",
    specialty: "Orthopedics",
    experience: "12+ Years",
    rating: 4.8,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop",
    slug: "dr-rakesh-gupta",
    education: "MS Ortho, CMC Vellore",
    available: true,
    nextAvailable: "Tomorrow",
    location: "Block B, Floor 2",
  },
  {
    id: 3,
    name: "Dr. Sunighda Chawla",
    specialty: "Pediatrics",
    experience: "10+ Years",
    rating: 4.9,
    reviews: 312,
    image: "https://plus.unsplash.com/premium_photo-1682089874677-3eee554feb19?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "dr-sunighda-chawla",
    education: "MD Pediatrics, PGIMER Chandigarh",
    available: true,
    nextAvailable: "Today",
    location: "Block C, Floor 1",
  },
  {
    id: 4,
    name: "Dr. Amit Verma",
    specialty: "Neurology",
    experience: "18+ Years",
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1659353887222-630895f23cc5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "dr-amit-verma",
    education: "DM Neurology, NIMHANS Bangalore",
    available: false,
    nextAvailable: "Next Week",
    location: "Block A, Floor 4",
  },
  {
    id: 5,
    name: "Dr. Neha Patel",
    specialty: "Dermatology",
    experience: "8+ Years",
    rating: 4.8,
    reviews: 198,
    image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?q=80&w=2076&auto=format&fit=crop",
    slug: "dr-neha-patel",
    education: "MD Dermatology, KMC Manipal",
    available: true,
    nextAvailable: "Today",
    location: "Block B, Floor 1",
  },
  {
    id: 6,
    name: "Dr. Sanjay Mehta",
    specialty: "Cardiology",
    experience: "20+ Years",
    rating: 4.9,
    reviews: 421,
    image: "https://images.unsplash.com/photo-1637059824899-a441006a6875?q=80&w=752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    slug: "dr-sanjay-mehta",
    education: "DM Cardiology, Sri Jayadeva Institute",
    available: true,
    nextAvailable: "Tomorrow",
    location: "Block A, Floor 3",
  },
  {
    id: 7,
    name: "Dr. Anaya Singh",
    specialty: "Gynecology",
    experience: "14+ Years",
    rating: 4.9,
    reviews: 287,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop",
    slug: "dr-anaya-singh",
    education: "MS OBG, Lady Hardinge Medical College",
    available: true,
    nextAvailable: "Today",
    location: "Block C, Floor 2",
  },
  {
    id: 8,
    name: "Dr. Rahul Nair",
    specialty: "ENT",
    experience: "11+ Years",
    rating: 4.7,
    reviews: 143,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2864&auto=format&fit=crop",
    slug: "dr-rahul-nair",
    education: "MS ENT, JIPMER Pondicherry",
    available: true,
    nextAvailable: "Tomorrow",
    location: "Block B, Floor 3",
  },
];

const specialties = [
  "All Specialties",
  "Cardiology",
  "Orthopedics",
  "Pediatrics",
  "Dermatology",
  "Neurology",
  "Gynecology",
  "Ophthalmology",
  "ENT",
];

const Doctors = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const initialSpecialty = searchParams.get("specialty") || "";

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState(
    initialSpecialty ? initialSpecialty.charAt(0).toUpperCase() + initialSpecialty.slice(1) : "All Specialties"
  );
  const [availabilityFilter, setAvailabilityFilter] = useState("all");

  const filteredDoctors = useMemo(() => {
    return allDoctors.filter((doctor) => {
      const matchesSearch =
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesSpecialty =
        selectedSpecialty === "All Specialties" ||
        doctor.specialty.toLowerCase() === selectedSpecialty.toLowerCase();

      const matchesAvailability =
        availabilityFilter === "all" ||
        (availabilityFilter === "available" && doctor.available);

      return matchesSearch && matchesSpecialty && matchesAvailability;
    });
  }, [searchTerm, selectedSpecialty, availabilityFilter]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="container-healthcare">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Find a Doctor
          </h1>
          <p className="text-white/80">
            Book an appointment with our experienced specialists
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-20 z-40 bg-white border-b border-border shadow-sm">
        <div className="container-healthcare py-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                placeholder="Search by doctor name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 input-healthcare"
              />
            </div>

            <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
              <SelectTrigger className="w-full md:w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Specialty" />
              </SelectTrigger>
              <SelectContent>
                {specialties.map((specialty) => (
                  <SelectItem key={specialty} value={specialty}>
                    {specialty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select value={availabilityFilter} onValueChange={setAvailabilityFilter}>
              <SelectTrigger className="w-full md:w-48">
                <Clock className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Availability" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Doctors</SelectItem>
                <SelectItem value="available">Available Today</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Doctors List */}
      <div className="container-healthcare py-8">
        <div className="flex items-center justify-between mb-6">
          <p className="text-muted-foreground">
            Showing {filteredDoctors.length} doctors
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDoctors.map((doctor) => (
            <div
              key={doctor.id}
              className="card-healthcare group cursor-pointer"
              onClick={() => navigate(`/doctor/${doctor.slug}`)}
            >
              <div className="flex gap-4">
                {/* Doctor Image */}
                <div className="relative flex-shrink-0">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-24 h-24 rounded-xl object-cover"
                  />
                  {doctor.available && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-white" />
                  )}
                </div>

                {/* Doctor Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="badge-specialty text-xs">{doctor.specialty}</span>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="w-4 h-4 text-healthcare-gold fill-healthcare-gold" />
                      <span className="font-medium">{doctor.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground truncate group-hover:text-primary transition-colors">
                    {doctor.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{doctor.education}</p>
                  <p className="text-sm text-muted-foreground">{doctor.experience} Experience</p>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    <span>{doctor.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4 text-accent" />
                    <span className="text-accent font-medium">{doctor.nextAvailable}</span>
                  </div>
                </div>
              </div>

              {/* Book Button */}
              <Button className="w-full mt-4 btn-healthcare-outline group-hover:bg-primary group-hover:text-white">
                Book Appointment
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg">
              No doctors found matching your criteria.
            </p>
            <Button
              variant="link"
              onClick={() => {
                setSearchTerm("");
                setSelectedSpecialty("All Specialties");
                setAvailabilityFilter("all");
              }}
              className="mt-2"
            >
              Clear filters
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Doctors;
