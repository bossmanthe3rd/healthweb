import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const packages = [
  {
    id: "basic",
    name: "Basic Health Check",
    price: 99,
    description: "Essential health screening for young adults",
    recommended: false,
    features: [
      "Complete Blood Count (CBC)",
      "Blood Sugar (Fasting)",
      "Lipid Profile",
      "Liver Function Test",
      "Kidney Function Test",
      "Urine Analysis",
      "Physical Examination",
      "Doctor Consultation",
    ],
    notIncluded: [
      "ECG",
      "Chest X-Ray",
      "Ultrasound",
      "Thyroid Profile",
    ],
  },
  {
    id: "comprehensive",
    name: "Comprehensive Health Check",
    price: 249,
    description: "Complete health assessment for adults 30+",
    recommended: true,
    features: [
      "Everything in Basic Package",
      "ECG (Electrocardiogram)",
      "Chest X-Ray",
      "Thyroid Profile (T3, T4, TSH)",
      "Vitamin D & B12 Levels",
      "HbA1c (Diabetes Marker)",
      "PSA for Men / Pap Smear for Women",
      "Eye Examination",
      "Dental Check-up",
      "Dietitian Consultation",
    ],
    notIncluded: [
      "Full Body Ultrasound",
      "Cardiac Stress Test",
    ],
  },
  {
    id: "executive",
    name: "Executive Health Check",
    price: 499,
    description: "Premium full-body assessment for executives",
    recommended: false,
    features: [
      "Everything in Comprehensive Package",
      "Full Body Ultrasound",
      "Cardiac Stress Test (TMT)",
      "2D Echocardiography",
      "CT Calcium Scoring",
      "Bone Density Scan (DEXA)",
      "Cancer Markers Panel",
      "Full Body MRI (Optional Add-on)",
      "Executive Lounge Access",
      "Priority Scheduling",
      "Detailed Report & Follow-up",
    ],
    notIncluded: [],
  },
];

const HealthCheckup = () => {
  const navigate = useNavigate();
  const [selectedPackage, setSelectedPackage] = useState(null);

  const handleBookPackage = (pkg) => {
    navigate("/doctors", { state: { fromHealthCheckup: true, package: pkg } });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-primary via-primary to-secondary py-20">
        <div className="container-healthcare text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Comprehensive Health Check-Up Packages
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Prevention is better than cure. Our health check-up packages are
            designed to detect potential health issues early and keep you in
            the best of health.
          </p>
        </div>
      </div>

      {/* Packages */}
      <div className="container-healthcare py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative card-healthcare flex flex-col ${
                pkg.recommended
                  ? "ring-2 ring-primary shadow-healthcare-lg"
                  : ""
              }`}
            >
              {pkg.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-white text-sm font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {pkg.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {pkg.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-primary">${pkg.price}</span>
                  <span className="text-muted-foreground">/package</span>
                </div>
              </div>

              <div className="flex-1">
                <h4 className="font-semibold text-sm text-foreground mb-3">
                  What's Included:
                </h4>
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {pkg.notIncluded.length > 0 && (
                  <>
                    <h4 className="font-semibold text-sm text-foreground mb-3">
                      Not Included:
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {pkg.notIncluded.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground/60">
                          <span className="w-4 h-4 flex items-center justify-center">—</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>

              <Button
                className={
                  pkg.recommended
                    ? "w-full btn-healthcare"
                    : "w-full btn-healthcare-outline"
                }
                onClick={() => handleBookPackage(pkg)}
              >
                Book This Package
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="card-healthcare text-center">
            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Check className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Same Day Reports</h3>
            <p className="text-sm text-muted-foreground">
              Get your test results within the same day with our advanced
              diagnostic facilities.
            </p>
          </div>

          <div className="card-healthcare text-center">
            <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Phone className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Expert Consultation</h3>
            <p className="text-sm text-muted-foreground">
              Discuss your results with our experienced physicians who will
              guide you on the next steps.
            </p>
          </div>

          <div className="card-healthcare text-center">
            <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
              <ArrowRight className="w-7 h-7 text-secondary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Follow-up Care</h3>
            <p className="text-sm text-muted-foreground">
              We provide comprehensive follow-up care and personalized health
              recommendations.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HealthCheckup;
