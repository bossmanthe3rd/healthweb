import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
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

const Enquire = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <div className="bg-gradient-to-r from-primary to-secondary py-16">
        <div className="container-healthcare">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Enquire Now
          </h1>
          <p className="text-white/80">
            Have questions? We're here to help. Send us a message and we'll respond within 24 hours.
          </p>
        </div>
      </div>

      <div className="container-healthcare py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Get in Touch</h2>
            <p className="text-muted-foreground">
              Our team is ready to answer your questions about our services,
              treatments, and facilities.
            </p>

            <div className="space-y-4">
              <div className="card-healthcare flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Phone</h4>
                  <p className="text-sm text-muted-foreground">Emergency: +1 (800) 123-4567</p>
                  <p className="text-sm text-muted-foreground">General: +1 (800) 123-4568</p>
                </div>
              </div>

              <div className="card-healthcare flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-sm text-muted-foreground">info@medicare.com</p>
                  <p className="text-sm text-muted-foreground">appointments@medicare.com</p>
                </div>
              </div>

              <div className="card-healthcare flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Location</h4>
                  <p className="text-sm text-muted-foreground">
                    123 Medical Center Drive,<br />
                    Healthcare City, HC 12345
                  </p>
                </div>
              </div>

              <div className="card-healthcare flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Working Hours</h4>
                  <p className="text-sm text-muted-foreground">Mon - Fri: 8:00 AM - 8:00 PM</p>
                  <p className="text-sm text-muted-foreground">Sat - Sun: 9:00 AM - 5:00 PM</p>
                  <p className="text-sm text-accent font-medium">Emergency: 24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            <div className="card-healthcare">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline">
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-foreground mb-6">
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="John Doe"
                          required
                          className="input-healthcare"
                        />
                      </div>
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
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (555) 000-0000"
                          className="input-healthcare"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="inquiryType">Inquiry Type *</Label>
                        <Select
                          value={formData.inquiryType}
                          onValueChange={(value) =>
                            setFormData((prev) => ({ ...prev, inquiryType: value }))
                          }
                        >
                          <SelectTrigger className="input-healthcare">
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="appointment">Appointment Query</SelectItem>
                            <SelectItem value="billing">Billing & Insurance</SelectItem>
                            <SelectItem value="feedback">Feedback</SelectItem>
                            <SelectItem value="complaint">Complaint</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Your Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="How can we help you?"
                        required
                        className="input-healthcare min-h-[150px]"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full btn-healthcare"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                      <Send className="w-4 h-4 ml-2" />
                    </Button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Enquire;
