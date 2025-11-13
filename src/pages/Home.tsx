import React from "react";
import Link from "next/link";
import { ArrowRight, Shield, Users, Award, Clock, Scale, FileText, Globe } from "lucide-react";

const pic1 = "/images/Picture1.png";
const pic2 = "/images/Picture2.png";
const pic3 = "/images/Picture3.png";
const pic4 = "/images/Picture4.png";
const pic6 = "/images/Picture6.png";
// const pic7 = "/images/Picture7.png";
const pic8 = "/images/Picture8.png";
// const pic9 = "/images/Picture9.png";
const pic10 = "/images/Picture10.png";

const Home: React.FC = () => {
  const clientList = [
    { id: 1, name: "Acme Corp", img: pic1 },
    { id: 2, name: "Beta Ltd", img: pic2 },
    { id: 3, name: "Gamma Inc", img: pic3 },
    { id: 4, name: "Delta Co", img: pic4 },
    { id: 6, name: "Zeta", img: pic6 },
    // { id: 7, name: "Zeta", img: pic7 },
    { id: 8, name: "Zeta", img: pic8 },
    // { id: 9, name: "Zeta", img: pic9 },
    { id: 10, name: "Zeta", img: pic10 },
  ];
  const stats = [
    { number: "15+", label: "Years of Experience" },
    { number: "5", label: "Expert Attorneys" },
  ];

  const services = [
    {
      icon: Shield,
      title: "Trademarks",
      description: "Comprehensive trademark registration, prosecution, and enforcement services to protect your brand.",
    },
    {
      icon: Users,
      title: "Patents",
      description: "Expert patent drafting, filing, and prosecution services for inventions and innovations.",
    },
    {
      icon: Award,
      title: "Copyright",
      description: "Complete copyright protection services for creative works, software, and digital content.",
    },
    {
      icon: Clock,
      title: "IP Litigation",
      description: "Aggressive representation in intellectual property disputes and enforcement actions.",
    },
    // ✅ New items:
    {
      icon: Scale,
      title: "Arbitration",
      description: "Efficient resolution of disputes through arbitration for fair and timely outcomes.",
    },
    {
      icon: FileText,
      title: "Contract Drafting",
      description: "Professional drafting of contracts and agreements tailored to your legal needs.",
    },
    {
      icon: Globe,
      title: "Cyber & Technology Laws",
      description: "Legal expertise in cyber laws, technology contracts, and digital rights protection.",
    },
  ];


  return (
    <div className="font-sans" style={{ backgroundColor: "var(--bg)", color: "var(--text)" }}>
      {/* Hero Section */}
      <section
        className="relative"
        style={{
          background:
            "linear-gradient(135deg, rgba(15,23,36,0.92) 0%, rgba(15,23,36,0.92) 100%)",
          color: "var(--bg)",
        }}
      >
        <div className="absolute inset-0" style={{ backgroundColor: "var(--accent)", opacity: 0.55 }}></div>
        <div
          className="relative min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/5669602/pexels-photo-5669602.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)",
          }}
        >
          <div className="absolute inset-0" style={{ backgroundColor: "var(--accent)", opacity: 0.72 }}></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ color: "var(--bg)" }}>
                Excellence in
                <span className="block" style={{ color: "var(--primary)" }}>
                  Legal Services
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-8" style={{ color: "rgba(247,249,250,0.88)" }}>
                MK Legal Partners provides exceptional legal services across a wide range of sectors, ensuring strategic, result-oriented, and client-focused solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center px-8 py-4 font-semibold rounded-lg hover:opacity-90 transition-colors duration-200 group"
                  style={{ backgroundColor: "var(--primary)", color: "var(--bg)" }}
                >
                  Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  href="/practice-areas"
                  className="inline-flex items-center px-8 py-4 border-2 font-semibold rounded-lg hover:bg-[rgba(255,255,255,0.95)] hover:text-black transition-colors duration-200"
                  style={{ borderColor: "rgba(255,255,255,0.9)", color: "var(--bg)", backgroundColor: "transparent" }}
                >
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2" style={{ color: "var(--text)" }}>
                  {stat.number}
                </div>
                <div className="font-medium" style={{ color: "var(--muted)" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--text)" }}>
              Our <span style={{ color: "var(--primary)" }}>Practice Areas</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: "var(--muted)" }}>
              We provide comprehensive legal services across multiple practice
              areas, delivering expert representation tailored to your unique
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group p-8 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
                  style={{ backgroundColor: "rgba(255,255,255,0.9)", border: "1px solid rgba(11,18,32,0.04)" }}
                >
                  <Icon className="h-12 w-12 mb-6" style={{ color: "var(--primary)" }} />
                  <h3 className="text-xl font-bold mb-4" style={{ color: "var(--text)" }}>{service.title}</h3>
                  <p style={{ color: "var(--muted)" }}>
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20" style={{ backgroundColor: "var(--accent)", color: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Choose{" "}
                <span style={{ color: "var(--primary)" }}>MK Legal Partners?</span>
              </h2>
              <p className="text-xl mb-6" style={{ color: "rgba(247,249,250,0.95)" }}>
               At MK Legal Partners, our team of dedicated advocates brings together expertise, integrity, and a commitment to achieving excellence in every matter we handle. We combine legal acumen with practical insight to deliver effective solutions tailored to our clients' needs.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full mr-4" style={{ backgroundColor: "var(--primary)" }}></div>
                  <span>Over 15+ years of trusted legal experience</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full mr-4" style={{ backgroundColor: "var(--primary)" }}></div>
                  <span>Expert team of attorneys in multiple practice areas</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full mr-4" style={{ backgroundColor: "var(--primary)" }}></div>
                  <span>Client-focused and result-driven approach</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full mr-4" style={{ backgroundColor: "var(--primary)" }}></div>
                  <span>Strategic solutions tailored to every case</span>
                </li>
              </ul>
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 font-semibold rounded-lg hover:opacity-90 transition-colors duration-200 group"
                style={{ backgroundColor: "var(--primary)", color: "var(--bg)" }}
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5668882/pexels-photo-5668882.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Legal consultation"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Our Clients Section */}
      <section className="py-20" style={{ backgroundColor: "var(--bg)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--text)" }}>
              Our <span style={{ color: "var(--primary)" }}>Trusted Clients</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: "var(--muted)" }}>
              We are proud to serve leading companies and innovators across
              various industries.
            </p>
          </div>

          {/* Client Slider */}
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {/* duplicate array once for seamless scroll */}
              {[0, 1].map((repIdx) => (
                <div key={repIdx} className="flex min-w-full">
                  {clientList.map((client) => (
                    <div
                      key={`${repIdx}-${client.id}`}
                      className="flex-shrink-0 mx-4"
                    >
                      {/* fixed-size box, no inner padding, centers content */}
                      <div className="bg-white rounded-lg transition-colors duration-300 flex items-center justify-center h-28 w-52 overflow-hidden" style={{ border: "1px solid rgba(11,18,32,0.04)" }}>
                        <img
                          src={client.img}
                          alt={client.name}
                          className="block h-auto max-h-20 max-w-full object-contain"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: "var(--primary)", color: "var(--bg)" }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: "var(--bg)" }}>
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8" style={{ color: "rgba(11,18,32,0.85)" }}>
            Contact us today for a free consultation and let us help you achieve
            justice you deserve.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 font-semibold rounded-lg hover:opacity-90 transition-colors duration-200 group"
            style={{ backgroundColor: "var(--accent)", color: "var(--bg)" }}
          >
            Schedule Your Free Consultation
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
