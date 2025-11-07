import React from 'react';
import { Award, Users, Shield, Target } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We uphold the highest ethical standards in all our professional dealings.',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for perfection in every case and continuously improve our expertise.',
    },
    {
      icon: Users,
      title: 'Client-Focused',
      description: 'Your success is our success. We prioritize your needs and goals above all else.',
    },
    {
      icon: Award,
      title: 'Results-Driven',
      description: 'We are committed to achieving the best possible outcomes for our clients.',
    },
  ];

  return (
    <div
      className="font-sans"
      style={{
        fontFamily: "'Poppins', system-ui, sans-serif",
        backgroundColor: 'var(--bg)',
        color: 'var(--text)',
      }}
    >
      {/* Hero Section */}
      <section className="relative py-20" style={{ backgroundColor: 'var(--accent)', color: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span style={{ color: 'var(--primary)' }}>MK Legal Partners</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'rgba(247,249,250,0.85)' }}>
              MK Legal Partners is a full-service law firm committed to excellence, integrity, and client-focused legal solutions across diverse practice areas.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{ color: 'var(--text)' }}>Our Story</h2>
              <p className="text-lg mb-6" style={{ color: 'var(--muted)' }}>
                Founded by Advocate and IP Attorney Madhu Khatri, MK Legal Partners offers comprehensive legal services with a specialized focus on Intellectual Property Rights, while upholding the highest standards of integrity and professionalism.
              </p>
              <p className="text-lg mb-6" style={{ color: 'var(--muted)' }}>
                Over the years, we have evolved into one of India’s most dynamic and rapidly expanding law firms, handling complex Legal and Intellectual Property matters across diverse industries and delivering remarkable outcomes for businesses and innovators alike.
              </p>
              <p className="text-lg" style={{ color: 'var(--muted)' }}>
                Today, our team of experienced advocates practices across multiple domains including Corporate Law, IPR, Mediation, Contract Drafting and Negotiation, Patent Law, and Trademark Law, Litigation. We continue to embody our founding principles of hard work, excellence, integrity, and client-centered service, which have established us as a trusted name in the legal community.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5668774/pexels-photo-5668774.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Law firm office"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--text)' }}>
              Our <span style={{ color: 'var(--primary)' }}>Core Values</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--muted)' }}>
              These fundamental principles guide everything we do and define
              who we are as a law firm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  style={{ backgroundColor: 'white' }}
                >
                  <Icon className="h-16 w-16 mx-auto mb-6" style={{ color: 'var(--primary)' }} />
                  <h3 className="text-xl font-bold mb-4" style={{ color: 'var(--text)' }}>{value.title}</h3>
                  <p style={{ color: 'var(--muted)' }}>{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--accent)', color: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5669619/pexels-photo-5669619.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Legal team meeting"
                className="rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">
                Our <span style={{ color: 'var(--primary)' }}>Mission</span>
              </h2>
              <p className="text-lg mb-6" style={{ color: 'rgba(247,249,250,0.85)' }}>
                To provide exceptional legal representation that combines deep expertise
                with personalized attention, ensuring every client receives the dedicated
                advocacy they deserve while maintaining the highest standards of
                professional integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      {/* <section className="py-20" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-12" style={{ color: 'var(--text)' }}>
            Recognition & <span style={{ color: 'var(--primary)' }}>Awards</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg" style={{ backgroundColor: '#ffffff' }}>
              <Award className="h-16 w-16 mx-auto mb-6" style={{ color: 'var(--primary)' }} />
              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text)' }}>Best Law Firm 2024</h3>
              <p style={{ color: 'var(--muted)' }}>Metropolitan Legal Awards</p>
            </div>
            <div className="p-8 rounded-lg" style={{ backgroundColor: '#ffffff' }}>
              <Award className="h-16 w-16 mx-auto mb-6" style={{ color: 'var(--primary)' }} />
              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text)' }}>Top 40 Under 40</h3>
              <p style={{ color: 'var(--muted)' }}>National Legal Review</p>
            </div>
            <div className="p-8 rounded-lg" style={{ backgroundColor: '#ffffff' }}>
              <Award className="h-16 w-16 mx-auto mb-6" style={{ color: 'var(--primary)' }} />
              <h3 className="text-xl font-bold mb-2" style={{ color: 'var(--text)' }}>Excellence in Service</h3>
              <p style={{ color: 'var(--muted)' }}>State Bar Association</p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default About;
