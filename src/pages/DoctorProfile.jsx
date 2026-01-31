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
  "dr-rishika-malhotra": {
    id: 1,
    name: "Dr. Rishika Malhotra",
    specialty: "Cardiology",
    experience: "15+ Years",
    rating: 4.9,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1659353888906-adb3e0041693?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    education: ["MD, AIIMS New Delhi", "Fellowship in Cardiology, Narayana Health"],
    certifications: ["Cardiological Society of India", "Interventional Cardiology Certification"],
    languages: ["English", "Hindi", "Punjabi"],
    about: "Dr. Rishika Malhotra is a renowned cardiologist with over 15 years of experience in diagnosing and treating complex heart conditions. She specializes in preventive cardiology and interventional procedures.",
    specializations: ["Preventive Cardiology", "Heart Failure", "Coronary Artery Disease", "Echocardiography", "Cardiac Rehabilitation"],
    location: "Block A, Floor 3, Room 301",
    consultationFee: 1500,
    availableDays: ["Monday", "Tuesday", "Wednesday", "Friday"],
    timeSlots: ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM"],
  },
  "dr-rakesh-gupta": {
    id: 2,
    name: "Dr. Rakesh Gupta",
    specialty: "Orthopedics",
    experience: "12+ Years",
    rating: 4.8,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=2070&auto=format&fit=crop",
    education: ["MS Ortho, CMC Vellore", "Fellowship in Joint Replacement, Apollo Hospitals"],
    certifications: ["Indian Orthopaedic Association", "Sports Medicine Certification"],
    languages: ["English", "Hindi", "Kannada"],
    about: "Dr. Rakesh Gupta is a leading orthopedic surgeon specializing in joint replacements and sports injuries. He uses minimally invasive techniques for faster recovery.",
    specializations: ["Joint Replacement", "Sports Injuries", "Arthroscopy", "Fracture Care", "Spine Surgery"],
    location: "Block B, Floor 2, Room 205",
    consultationFee: 1200,
    availableDays: ["Monday", "Wednesday", "Thursday", "Saturday"],
    timeSlots: ["8:00 AM", "8:30 AM", "9:00 AM", "9:30 AM", "10:00 AM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM"],
  },
  "dr-sunighda-chawla": {
    id: 3,
    name: "Dr. Sunighda Chawla",
    specialty: "Pediatrics",
    experience: "10+ Years",
    rating: 4.9,
    reviews: 312,
    image: "https://plus.unsplash.com/premium_photo-1682089874677-3eee554feb19?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    education: ["MD Pediatrics, PGIMER Chandigarh", "Neonatology Fellowship, Rainbow Children's Hospital"],
    certifications: ["Indian Academy of Pediatrics", "Neonatal Advanced Life Support"],
    languages: ["English", "Hindi"],
    about: "Dr. Sunighda Chawla provides comprehensive care for children from newborns to adolescents. Her gentle approach makes her a favorite among young patients.",
    specializations: ["General Pediatrics", "Developmental Pediatrics", "Adolescent Medicine", "Vaccinations", "Nutrition Counseling"],
    location: "Block C, Floor 1, Room 102",
    consultationFee: 1000,
    availableDays: ["Tuesday", "Wednesday", "Thursday", "Friday"],
    timeSlots: ["9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM"],
  },
  "dr-amit-verma": {
    id: 4,
    name: "Dr. Amit Verma",
    specialty: "Neurology",
    experience: "18+ Years",
    rating: 4.7,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1659353887222-630895f23cc5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    education: ["DM Neurology, NIMHANS Bangalore", "Fellowship in Stroke Medicine"],
    certifications: ["Indian Academy of Neurology", "Stroke Specialist"],
    languages: ["English", "Hindi", "Tamil"],
    about: "Dr. Amit Verma is a distinguished neurologist with expertise in stroke management, epilepsy, and headache disorders.",
    specializations: ["Stroke Management", "Epilepsy", "Headache & Migraine", "Neuropathy", "Movement Disorders"],
    location: "Block A, Floor 4, Room 405",
    consultationFee: 2000,
    availableDays: ["Monday", "Thursday"],
    timeSlots: ["10:00 AM", "11:00 AM", "12:00 PM"],
  },
  "dr-neha-patel": {
    id: 5,
    name: "Dr. Neha Patel",
    specialty: "Dermatology",
    experience: "8+ Years",
    rating: 4.8,
    reviews: 198,
    image: "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?q=80&w=2076&auto=format&fit=crop",
    education: ["MD Dermatology, KMC Manipal"],
    certifications: ["Indian Association of Dermatologists", "Cosmetic Dermatology"],
    languages: ["English", "Hindi", "Gujarati"],
    about: "Dr. Neha Patel offers advanced dermatological care and cosmetic treatments for healthy, glowing skin.",
    specializations: ["Acne Treatment", "Anti-aging", "Laser Therapy", "Hair Loss", "Skin Allergies"],
    location: "Block B, Floor 1, Room 105",
    consultationFee: 1200,
    availableDays: ["Monday", "Wednesday", "Friday"],
    timeSlots: ["10:00 AM", "11:00 AM", "2:00 PM", "4:00 PM"],
  },
  "dr-sanjay-mehta": {
    id: 6,
    name: "Dr. Sanjay Mehta",
    specialty: "Cardiology",
    experience: "20+ Years",
    rating: 4.9,
    reviews: 421,
    image: "https://images.unsplash.com/photo-1637059824899-a441006a6875?q=80&w=752&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    education: ["DM Cardiology, Sri Jayadeva Institute"],
    certifications: ["Interventional Cardiology"],
    languages: ["English", "Kannada"],
    about: "Dr. Sanjay Mehta is a senior cardiologist known for his expertise in complex angioplasties and heart valve interventions.",
    specializations: ["Angioplasty", "Pacemaker Implantation", "Valve Replacement"],
    location: "Block A, Floor 3, Room 304",
    consultationFee: 1800,
    availableDays: ["Tuesday", "Thursday", "Saturday"],
    timeSlots: ["9:00 AM", "11:00 AM", "1:00 PM"],
  },
  "dr-anaya-singh": {
    id: 7,
    name: "Dr. Anaya Singh",
    specialty: "Gynecology",
    experience: "14+ Years",
    rating: 4.9,
    reviews: 287,
    image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=2070&auto=format&fit=crop",
    education: ["MS OBG, Lady Hardinge Medical College"],
    certifications: ["FOGSI Member", "Infertility Specialist"],
    languages: ["English", "Hindi"],
    about: "Dr. Anaya Singh specializes in high-risk pregnancies and laparoscopic gynecological surgeries.",
    specializations: ["High-risk Pregnancy", "Laparoscopy", "Infertility", "PCOS Management"],
    location: "Block C, Floor 2, Room 202",
    consultationFee: 1400,
    availableDays: ["Monday", "Wednesday", "Friday"],
    timeSlots: ["10:00 AM", "12:00 PM", "3:00 PM"],
  },
  "dr-rahul-nair": {
    id: 8,
    name: "Dr. Rahul Nair",
    specialty: "ENT",
    experience: "11+ Years",
    rating: 4.7,
    reviews: 143,
    image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=2864&auto=format&fit=crop",
    education: ["MS ENT, JIPMER Pondicherry"],
    certifications: ["Head and Neck Surgery"],
    languages: ["English", "Malayalam"],
    about: "Dr. Rahul Nair offers comprehensive care for ear, nose, and throat disorders with a focus on endoscopic sinus surgery.",
    specializations: ["Sinus Surgery", "Hearing Loss", "Vertigo", "Throat Disorders"],
    location: "Block B, Floor 3, Room 305",
    consultationFee: 1100,
    availableDays: ["Tuesday", "Thursday", "Saturday"],
    timeSlots: ["9:00 AM", "11:00 AM", "4:00 PM"],
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
                <span className="text-2xl font-bold text-primary">₹{doctor.consultationFee}</span>
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
                      className={`p-2 rounded-lg text-center text-xs transition-all ${isSelected
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
                        className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${selectedTime === time
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
