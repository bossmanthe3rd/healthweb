import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Star,
  MapPin,
  Clock,
  GraduationCap,
  Award,
  Calendar,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const doctorsData = {
  "sarah-johnson": {
    id: 1,
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    experience: "15+ Years",
    rating: 4.9,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop",
    education: ["MD, Harvard Medical School", "Fellowship in Cardiology, Mayo Clinic"],
    certifications: ["American Board of Internal Medicine", "Cardiovascular Disease Certification"],
    languages: ["English", "Spanish"],
    about: "Dr. Sarah Johnson is a board-certified cardiologist with over 15 years of experience in diagnosing and treating heart conditions. She specializes in preventive cardiology, heart failure management, and interventional procedures. Dr. Johnson is known for her patient-centered approach and commitment to helping patients achieve optimal heart health.",
    specializations: ["Preventive Cardiology", "Heart Failure", "Coronary Artery Disease", "Echocardiography", "Cardiac Rehabilitation"],
    location: "Building A, Floor 3, Room 301",
    consultationFee: 150,
    availableDays: ["Monday", "Tuesday", "Wednesday", "Friday"],
    timeSlots: ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM"],
  },
  "michael-chen": {
    id: 2,
    name: "Dr. Michael Chen",
    specialty: "Orthopedics",
    experience: "12+ Years",
    rating: 4.8,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop",
    education: ["MD, Stanford University", "Orthopedic Surgery Residency, UCSF"],
    certifications: ["American Board of Orthopedic Surgery", "Sports Medicine Certification"],
    languages: ["English", "Mandarin"],
    about: "Dr. Michael Chen is a fellowship-trained orthopedic surgeon specializing in sports medicine and joint replacement surgery. With over 12 years of experience, he has helped thousands of patients return to active lifestyles through both surgical and non-surgical treatments.",
    specializations: ["Joint Replacement", "Sports Injuries", "Arthroscopy", "Fracture Care", "Spine Surgery"],
    location: "Building B, Floor 2, Room 205",
    consultationFee: 175,
    availableDays: ["Monday", "Wednesday", "Thursday", "Saturday"],
    timeSlots: ["8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM"],
  },
  "emily-williams": {
    id: 3,
    name: "Dr. Emily Williams",
    specialty: "Pediatrics",
    experience: "10+ Years",
    rating: 4.9,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=2787&auto=format&fit=crop",
    education: ["MD, Johns Hopkins University", "Pediatric Residency, Children's Hospital of Philadelphia"],
    certifications: ["American Board of Pediatrics", "Pediatric Advanced Life Support"],
    languages: ["English", "French"],
    about: "Dr. Emily Williams is a compassionate pediatrician dedicated to the health and well-being of children from infancy through adolescence. Her warm approach and expertise make her a favorite among both children and parents.",
    specializations: ["General Pediatrics", "Developmental Pediatrics", "Adolescent Medicine", "Vaccinations", "Nutrition Counseling"],
    location: "Building C, Floor 1, Room 102",
    consultationFee: 125,
    availableDays: ["Tuesday", "Wednesday", "Thursday", "Friday"],
    timeSlots: ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM"],
  },
};

const DoctorProfile = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const doctor = doctorsData[slug];

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentWeekStart, setCurrentWeekStart] = useState(new Date());

  if (!doctor) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container-healthcare py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Doctor not found</h1>
          <Button onClick={() => navigate("/doctors")}>Back to Doctors</Button>
        </div>
        <Footer />
      </div>
    );
  }

  // Generate week dates
  const getWeekDates = () => {
    const dates = [];
    const start = new Date(currentWeekStart);
    for (let i = 0; i < 7; i++) {
      const date = new Date(start);
      date.setDate(start.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const weekDates = getWeekDates();

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", { weekday: "short", day: "numeric" });
  };

  const isAvailableDay = (date) => {
    const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
    return doctor.availableDays.includes(dayName);
  };

  const handlePrevWeek = () => {
    const newStart = new Date(currentWeekStart);
    newStart.setDate(newStart.getDate() - 7);
    setCurrentWeekStart(newStart);
  };

  const handleNextWeek = () => {
    const newStart = new Date(currentWeekStart);
    newStart.setDate(newStart.getDate() + 7);
    setCurrentWeekStart(newStart);
  };

  const handleBookAppointment = () => {
    if (selectedDate && selectedTime) {
      navigate("/book-appointment", {
        state: {
          doctor,
          date: selectedDate.toISOString(),
          time: selectedTime,
        },
      });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <div className="bg-muted/50 border-b border-border">
        <div className="container-healthcare py-3">
          <div className="flex items-center gap-2 text-sm">
            <button onClick={() => navigate("/")} className="text-muted-foreground hover:text-primary">
              Home
            </button>
            <span className="text-muted-foreground">/</span>
            <button onClick={() => navigate("/doctors")} className="text-muted-foreground hover:text-primary">
              Doctors
            </button>
            <span className="text-muted-foreground">/</span>
            <span className="text-foreground">{doctor.name}</span>
          </div>
        </div>
      </div>

      <div className="container-healthcare py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Doctor Info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Card */}
            <div className="card-healthcare">
              <div className="flex flex-col md:flex-row gap-6">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-40 h-40 rounded-2xl object-cover"
                />
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <Badge className="badge-specialty">{doctor.specialty}</Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-healthcare-gold fill-healthcare-gold" />
                      <span className="font-semibold">{doctor.rating}</span>
                      <span className="text-muted-foreground">({doctor.reviews} reviews)</span>
                    </div>
                  </div>
                  <h1 className="text-2xl font-bold text-foreground mb-2">{doctor.name}</h1>
                  <p className="text-muted-foreground mb-4">{doctor.experience} Experience</p>

                  <div className="flex flex-wrap gap-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{doctor.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>Available {doctor.availableDays.join(", ")}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* About */}
            <div className="card-healthcare">
              <h2 className="text-lg font-semibold mb-4">About</h2>
              <p className="text-muted-foreground leading-relaxed">{doctor.about}</p>
            </div>

            {/* Education & Certifications */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card-healthcare">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  Education
                </h2>
                <ul className="space-y-2">
                  {doctor.education.map((edu, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{edu}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-healthcare">
                <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Certifications
                </h2>
                <ul className="space-y-2">
                  {doctor.certifications.map((cert, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                      <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span>{cert}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Specializations */}
            <div className="card-healthcare">
              <h2 className="text-lg font-semibold mb-4">Specializations</h2>
              <div className="flex flex-wrap gap-2">
                {doctor.specializations.map((spec, idx) => (
                  <Badge key={idx} variant="secondary" className="px-3 py-1">
                    {spec}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Booking */}
          <div className="space-y-6">
            {/* Consultation Fee */}
            <div className="card-healthcare">
              <div className="flex items-center justify-between mb-4">
                <span className="text-muted-foreground">Consultation Fee</span>
                <span className="text-2xl font-bold text-primary">${doctor.consultationFee}</span>
              </div>
              <Button className="w-full btn-healthcare" size="lg">
                <Phone className="w-4 h-4 mr-2" />
                Call for Appointment
              </Button>
            </div>

            {/* Calendar */}
            <div className="card-healthcare">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-primary" />
                  Select Date & Time
                </h2>
              </div>

              {/* Week Navigation */}
              <div className="flex items-center justify-between mb-4">
                <Button variant="outline" size="icon" onClick={handlePrevWeek}>
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <span className="text-sm font-medium">
                  {currentWeekStart.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
                </span>
                <Button variant="outline" size="icon" onClick={handleNextWeek}>
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Date Selection */}
              <div className="grid grid-cols-7 gap-1 mb-4">
                {weekDates.map((date, idx) => {
                  const available = isAvailableDay(date);
                  const isSelected = selectedDate?.toDateString() === date.toDateString();
                  const isPast = date < new Date(new Date().setHours(0, 0, 0, 0));

                  return (
                    <button
                      key={idx}
                      disabled={!available || isPast}
                      onClick={() => {
                        setSelectedDate(date);
                        setSelectedTime(null);
                      }}
                      className={`p-2 rounded-lg text-center text-xs transition-all ${
                        isSelected
                          ? "bg-primary text-white"
                          : available && !isPast
                          ? "bg-muted hover:bg-primary/10"
                          : "bg-muted/50 text-muted-foreground cursor-not-allowed"
                      }`}
                    >
                      <div className="font-medium">{date.toLocaleDateString("en-US", { weekday: "short" })}</div>
                      <div className="text-lg font-bold">{date.getDate()}</div>
                    </button>
                  );
                })}
              </div>

              {/* Time Slots */}
              {selectedDate && (
                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-foreground">Available Time Slots</h3>
                  <div className="grid grid-cols-3 gap-2">
                    {doctor.timeSlots.map((time, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedTime(time)}
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                          selectedTime === time
                            ? "bg-primary text-white"
                            : "bg-muted hover:bg-primary/10"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Book Button */}
              <Button
                className="w-full btn-healthcare mt-6"
                size="lg"
                disabled={!selectedDate || !selectedTime}
                onClick={handleBookAppointment}
              >
                Book Appointment
              </Button>

              {selectedDate && selectedTime && (
                <p className="text-center text-sm text-muted-foreground mt-2">
                  {selectedDate.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })} at {selectedTime}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DoctorProfile;
