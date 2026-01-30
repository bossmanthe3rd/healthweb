import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Jennifer Martinez",
    treatment: "Cardiac Surgery",
    rating: 5,
    text: "The entire team at MediCare was exceptional. From the moment I walked in, I felt cared for. Dr. Johnson performed my cardiac surgery with incredible skill, and the nursing staff made my recovery comfortable. I'm forever grateful.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
    date: "2 weeks ago",
  },
  {
    id: 2,
    name: "Robert Thompson",
    treatment: "Knee Replacement",
    rating: 5,
    text: "After years of knee pain, Dr. Chen gave me my life back. The surgery was smooth, and the physical therapy team helped me walk again in just weeks. Best decision I ever made choosing MediCare.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    date: "1 month ago",
  },
  {
    id: 3,
    name: "Sarah Williams",
    treatment: "Pediatric Care",
    rating: 5,
    text: "Dr. Williams is amazing with children. My son was so scared, but she made him feel completely at ease. The pediatric ward is colorful and welcoming. We've found our family's healthcare home.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2787&auto=format&fit=crop",
    date: "3 weeks ago",
  },
  {
    id: 4,
    name: "David Lee",
    treatment: "General Checkup",
    rating: 5,
    text: "I've been coming to MediCare for my annual checkups for 5 years now. The staff is always professional, appointments run on time, and the facilities are top-notch. Highly recommend!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop",
    date: "1 week ago",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      <div className="container-healthcare">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-semibold mb-2">Patient Stories</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Patients Say
          </h2>
          <p className="text-muted-foreground">
            Real experiences from our patients. Their stories inspire us to
            continue providing exceptional healthcare.
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <div className="bg-white rounded-3xl shadow-healthcare-lg p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              {/* Patient Image */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 md:w-32 md:h-32 rounded-2xl object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-primary rounded-full p-2">
                    <Quote className="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Rating */}
                <div className="flex justify-center md:justify-start gap-1 mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-healthcare-gold fill-healthcare-gold" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-foreground text-lg leading-relaxed mb-6">
                  "{testimonials[currentIndex].text}"
                </p>

                {/* Patient Info */}
                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].treatment} • {testimonials[currentIndex].date}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12"
              onClick={prevTestimonial}
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "bg-primary/20"
                  }`}
                  onClick={() => setCurrentIndex(index)}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              className="rounded-full w-12 h-12"
              onClick={nextTestimonial}
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-8 mt-16">
          <div className="flex items-center gap-3 bg-white rounded-xl px-6 py-4 shadow-healthcare">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
              <Star className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="font-bold text-2xl text-foreground">4.9/5</p>
              <p className="text-sm text-muted-foreground">Patient Rating</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white rounded-xl px-6 py-4 shadow-healthcare">
            <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
              <Star className="w-6 h-6 text-accent" />
            </div>
            <div>
              <p className="font-bold text-2xl text-foreground">15,000+</p>
              <p className="text-sm text-muted-foreground">Reviews</p>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-white rounded-xl px-6 py-4 shadow-healthcare">
            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
              <Star className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <p className="font-bold text-2xl text-foreground">98%</p>
              <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
