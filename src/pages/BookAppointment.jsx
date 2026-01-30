import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Calendar,
  Clock,
  MapPin,
  User,
  Mail,
  Phone,
  FileText,
  CheckCircle,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const BookAppointment = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { doctor, date, time } = location.state || {};

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dateOfBirth: "",
    gender: "",
    reason: "",
    symptoms: "",
    insurance: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!doctor) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container-healthcare py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">No appointment details found</h1>
          <Button onClick={() => navigate("/doctors")}>Find a Doctor</Button>
        </div>
        <Footer />
      </div>
    );
  }

  const appointmentDate = new Date(date);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container-healthcare py-20">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-accent" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Appointment Request Submitted!
            </h1>
            <p className="text-muted-foreground mb-8">
              Your appointment request has been successfully submitted. Please wait for admin approval.
              You will receive a notification once your appointment is confirmed.
            </p>

            <div className="card-healthcare text-left mb-8">
              <h2 className="font-semibold text-lg mb-4">Appointment Summary</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <User className="w-5 h-5 text-primary" />
                  <span className="text-foreground">{doctor.name}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-foreground">
                    {appointmentDate.toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-foreground">{time}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-foreground">{doctor.location}</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-amber-50 rounded-lg border border-amber-200">
                <p className="text-sm text-amber-800">
                  <strong>Status:</strong> Pending Approval
                </p>
                <p className="text-sm text-amber-700 mt-1">
                  Our team will review your request and send you a confirmation email with payment details once approved.
                </p>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <Button onClick={() => navigate("/")} variant="outline">
                Return to Home
              </Button>
              <Button onClick={() => navigate("/doctors")} className="btn-healthcare">
                Book Another Appointment
              </Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container-healthcare py-8">
        <Button
          variant="ghost"
          onClick={() => navigate(-1)}
          className="mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <div className="card-healthcare">
              <h1 className="text-2xl font-bold text-foreground mb-6">
                Book Your Appointment
              </h1>

              {/* Progress Steps */}
              <div className="flex items-center gap-4 mb-8">
                {[1, 2].map((s) => (
                  <div key={s} className="flex items-center gap-2">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                        step >= s
                          ? "bg-primary text-white"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {s}
                    </div>
                    <span
                      className={`text-sm ${
                        step >= s ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {s === 1 ? "Personal Info" : "Medical Details"}
                    </span>
                    {s < 2 && <div className="w-12 h-0.5 bg-muted" />}
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name *</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="John"
                          required
                          className="input-healthcare"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name *</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Doe"
                          required
                          className="input-healthcare"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="john@example.com"
                          required
                          className="input-healthcare"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 000-0000"
                          required
                          className="input-healthcare"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                        <Input
                          id="dateOfBirth"
                          name="dateOfBirth"
                          type="date"
                          value={formData.dateOfBirth}
                          onChange={handleInputChange}
                          required
                          className="input-healthcare"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="gender">Gender *</Label>
                        <Select
                          value={formData.gender}
                          onValueChange={(value) =>
                            setFormData((prev) => ({ ...prev, gender: value }))
                          }
                        >
                          <SelectTrigger className="input-healthcare">
                            <SelectValue placeholder="Select gender" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                            <SelectItem value="prefer-not">Prefer not to say</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <Button
                      type="button"
                      className="w-full btn-healthcare"
                      onClick={() => setStep(2)}
                    >
                      Continue to Medical Details
                    </Button>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="reason">Reason for Visit *</Label>
                      <Select
                        value={formData.reason}
                        onValueChange={(value) =>
                          setFormData((prev) => ({ ...prev, reason: value }))
                        }
                      >
                        <SelectTrigger className="input-healthcare">
                          <SelectValue placeholder="Select reason" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="checkup">General Checkup</SelectItem>
                          <SelectItem value="followup">Follow-up Visit</SelectItem>
                          <SelectItem value="new-concern">New Health Concern</SelectItem>
                          <SelectItem value="consultation">Specialist Consultation</SelectItem>
                          <SelectItem value="second-opinion">Second Opinion</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="symptoms">Describe Your Symptoms</Label>
                      <Textarea
                        id="symptoms"
                        name="symptoms"
                        value={formData.symptoms}
                        onChange={handleInputChange}
                        placeholder="Please describe your symptoms or concerns in detail..."
                        className="input-healthcare min-h-[120px]"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="insurance">Insurance Provider (Optional)</Label>
                      <Input
                        id="insurance"
                        name="insurance"
                        value={formData.insurance}
                        onChange={handleInputChange}
                        placeholder="Enter your insurance provider"
                        className="input-healthcare"
                      />
                    </div>

                    <div className="flex gap-4">
                      <Button
                        type="button"
                        variant="outline"
                        className="flex-1"
                        onClick={() => setStep(1)}
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        className="flex-1 btn-healthcare"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit Appointment Request"}
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Appointment Summary Sidebar */}
          <div className="space-y-6">
            <div className="card-healthcare">
              <h2 className="font-semibold text-lg mb-4">Appointment Summary</h2>

              <div className="flex items-center gap-4 mb-4 pb-4 border-b border-border">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-16 h-16 rounded-xl object-cover"
                />
                <div>
                  <h3 className="font-semibold text-foreground">{doctor.name}</h3>
                  <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="text-foreground">
                    {appointmentDate.toLocaleDateString("en-US", {
                      weekday: "long",
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-foreground">{time}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-foreground">{doctor.location}</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Consultation Fee</span>
                  <span className="text-xl font-bold text-primary">
                    ${doctor.consultationFee}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  * Payment will be collected after appointment confirmation
                </p>
              </div>
            </div>

            <div className="card-healthcare bg-primary/5 border-primary/20">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground text-sm">What to Bring</h3>
                  <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                    <li>• Valid ID proof</li>
                    <li>• Insurance card (if applicable)</li>
                    <li>• Previous medical records</li>
                    <li>• List of current medications</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BookAppointment;
