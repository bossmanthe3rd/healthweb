import { Heart, Users, Building2, Award } from "lucide-react";

const AboutSection = () => {
  const stats = [
    { icon: Users, value: "50,000+", label: "Happy Patients" },
    { icon: Heart, value: "150+", label: "Expert Doctors" },
    { icon: Building2, value: "30+", label: "Departments" },
    { icon: Award, value: "25+", label: "Years Experience" },
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-healthcare">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-healthcare h-48">
                  <img
                    src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2073&auto=format&fit=crop"
                    alt="Modern hospital facility"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-healthcare h-64">
                  <img
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop"
                    alt="Medical equipment"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-2xl overflow-hidden shadow-healthcare h-64">
                  <img
                    src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=2070&auto=format&fit=crop"
                    alt="Doctor consultation"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-healthcare h-48">
                  <img
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop"
                    alt="Laboratory"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-primary text-white rounded-2xl p-6 shadow-xl">
              <p className="text-4xl font-bold">25+</p>
              <p className="text-sm text-white/80">Years of Excellence</p>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <p className="text-primary font-semibold mb-2">About Valens Hospital</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Your Trusted Partner in Healthcare Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                At Valens Hospital, we combine cutting-edge medical technology with
                compassionate care to deliver exceptional healthcare services. Our
                state-of-the-art facilities and world-renowned specialists work together
                to ensure the best possible outcomes for every patient.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Our Mission</h4>
                  <p className="text-sm text-muted-foreground">
                    To provide accessible, high-quality healthcare while treating every
                    patient with dignity, respect, and compassion.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Our Vision</h4>
                  <p className="text-sm text-muted-foreground">
                    To be the leading healthcare provider, recognized for clinical
                    excellence, innovation, and patient-centered care.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Our Values</h4>
                  <p className="text-sm text-muted-foreground">
                    Excellence, Integrity, Compassion, Innovation, and Teamwork form
                    the foundation of everything we do.
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-xl bg-muted/50"
                >
                  <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
