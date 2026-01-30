import {
  Shield,
  Award,
  Clock,
  HeartHandshake,
  Microscope,
  UserCheck,
  CheckCircle,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "JCI Accredited",
    description: "International quality standards and patient safety protocols.",
  },
  {
    icon: Award,
    title: "Award Winning Care",
    description: "Recognized for excellence in healthcare delivery.",
  },
  {
    icon: Clock,
    title: "24/7 Emergency",
    description: "Round-the-clock emergency services with rapid response.",
  },
  {
    icon: HeartHandshake,
    title: "Compassionate Care",
    description: "Patient-centered approach with empathy and respect.",
  },
  {
    icon: Microscope,
    title: "Advanced Technology",
    description: "State-of-the-art medical equipment and facilities.",
  },
  {
    icon: UserCheck,
    title: "Expert Team",
    description: "Highly qualified doctors and trained support staff.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
      </div>

      <div className="container-healthcare relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <p className="text-primary font-semibold mb-2">Why Choose Us</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Experience Healthcare Excellence Like Never Before
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                At MediCare Hospital, we combine world-class medical expertise with
                compassionate care. Our commitment to excellence has made us the
                preferred healthcare destination for families across the region.
              </p>
            </div>

            {/* Features List */}
            <div className="space-y-4">
              {[
                "Over 25 years of trusted healthcare",
                "150+ specialized doctors and surgeons",
                "State-of-the-art diagnostic facilities",
                "Internationally trained medical staff",
                "Affordable healthcare packages",
                "Seamless digital patient experience",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-4">
              <div className="px-4 py-2 bg-muted rounded-lg flex items-center gap-2">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/220px-Good_Food_Display_-_NCI_Visuals_Online.jpg"
                  alt="Certification"
                  className="w-8 h-8 rounded object-cover"
                />
                <span className="text-sm font-medium text-foreground">JCI Accredited</span>
              </div>
              <div className="px-4 py-2 bg-muted rounded-lg flex items-center gap-2">
                <Shield className="w-8 h-8 text-primary" />
                <span className="text-sm font-medium text-foreground">HIPAA Compliant</span>
              </div>
              <div className="px-4 py-2 bg-muted rounded-lg flex items-center gap-2">
                <Award className="w-8 h-8 text-healthcare-gold" />
                <span className="text-sm font-medium text-foreground">ISO Certified</span>
              </div>
            </div>
          </div>

          {/* Right - Features Grid */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`card-healthcare ${
                  index % 3 === 0 ? "col-span-2 sm:col-span-1" : ""
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
