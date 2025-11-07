import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    alert('Thank you for your message. We will contact you soon!');
  };

  // 🟢 Updated contact info with real office locations
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['Main: (555) 123-4567', 'Emergency: (555) 123-4568'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@khatrilaw.com', 'consultations@khatrilaw.com'],
    },
    // {
    //   icon: MapPin,
    //   title: 'Offices',
    //   details: [
    //     'JODHPUR: 3 N 2 Kudi Bhagtasani Housing Board, Jodhpur, Raj. (342005), Chamber No. __ Rajasthan High Court.',
    //     'JAIPUR: 385, Shanti Nagar, Durgapura Railway Station, Jaipur - 302018',
    //     'MUMBAI: 53A Mittal Tower, 210 Nariman Point, Mumbai - 400021',
    //     'DELHI: (Address to be provided)',
    //     'CHHATTISGARH: Street no. 2B, New Shanti Nagar, Raipur (CG)',
    //   ],
    // },
    {
      icon: Clock,
      title: 'Office Hours',
      details: ['Mon-Fri: 8:00 AM - 6:00 PM', 'Sat: 9:00 AM - 2:00 PM'],
    },
  ];

  const practiceAreas = [
    'Trademarks', 'Designs', 'Patents', 'Copyright',
    'Alternate Dispute Resolution', 'Contracts and Agreements Drafting',
    'IPR Evaluation and Portfolio Management', 'Legal Consultancy and Advisory',
    'Litigation', 'Media and Entertainment', 'Fashion Laws',
    'Cyber Laws / Technology Law', 'Pro Bono', 'Other',
  ];

  return (
    <div className="font-sans" style={{ fontFamily: "'Poppins', system-ui, sans-serif", backgroundColor: 'var(--bg)', color: 'var(--text)' }}>
      {/* Hero Section */}
      <section className="relative py-20" style={{ backgroundColor: 'var(--accent)', color: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contact <span style={{ color: 'var(--primary)' }}>MK Legal Partners</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'rgba(247,249,250,0.85)' }}>
            Get in touch with our experienced legal team. We’re here to help you protect, manage, and enforce your rights with confidence.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <div key={index} className="text-center p-6 rounded-lg shadow-lg" style={{ backgroundColor: '#fff' }}>
                <Icon className="h-12 w-12 mx-auto mb-4" style={{ color: 'var(--primary)' }} />
                <h3 className="text-xl font-bold mb-3" style={{ color: 'var(--text)' }}>{info.title}</h3>
                <div className="space-y-1 text-sm">
                  {info.details.map((detail, i) => (
                    <p key={i} style={{ color: 'var(--muted)' }}>{detail}</p>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20" style={{ backgroundColor: '#fff' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text)' }}>Schedule a Free Consultation</h2>
            <p className="mb-8" style={{ color: 'var(--muted)' }}>
              Fill out the form below and we'll contact you within 24 hours to discuss your legal needs.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'var(--text)' }}>Full Name *</label>
                  <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent"
                    style={{ borderColor: 'var(--muted)', color: 'var(--text)' }}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--text)' }}>Email Address *</label>
                  <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent"
                    style={{ borderColor: 'var(--muted)', color: 'var(--text)' }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2" style={{ color: 'var(--text)' }}>Phone Number</label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent"
                    style={{ borderColor: 'var(--muted)', color: 'var(--text)' }}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2" style={{ color: 'var(--text)' }}>Practice Area *</label>
                  <select id="subject" name="subject" required value={formData.subject} onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent"
                    style={{ borderColor: 'var(--muted)', color: 'var(--text)' }}
                  >
                    <option value="">Select a practice area</option>
                    {practiceAreas.map((area, i) => <option key={i} value={area}>{area}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--text)' }}>Message *</label>
                <textarea id="message" name="message" required rows={6} value={formData.message} onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg resize-none focus:ring-2 focus:border-transparent"
                  style={{ borderColor: 'var(--muted)', color: 'var(--text)' }}
                />
              </div>

              <button type="submit"
                className="w-full flex items-center justify-center px-8 py-4 font-semibold rounded-lg transition-colors duration-200 group"
                style={{ backgroundColor: 'var(--primary)', color: 'var(--bg)' }}
              >
                <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                Send Message
              </button>
            </form>
          </div>

          {/* Map & Office Info */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text)' }}>Visit Our Offices</h2>

            <div className="p-8 rounded-lg mb-6" style={{ backgroundColor: 'var(--bg)' }}>
              <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--text)' }}>Our Locations</h3>
              <ul className="space-y-3 text-sm" style={{ color: 'var(--muted)' }}>
                <li><strong>Jodhpur:</strong> 3 N 2 Kudi Bhagtasani Housing Board, Jodhpur, Raj. (342005), Chamber No. __ Rajasthan High Court</li>
                <li><strong>Jaipur:</strong> 385, Shanti Nagar, Durgapura Railway Station, Jaipur - 302018</li>
                <li><strong>Mumbai:</strong> 53A Mittal Tower, 210 Nariman Point, Mumbai - 400021</li>
                
                <li><strong>Chhattisgarh:</strong> Street no. 2B, New Shanti Nagar, Raipur (CG)</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--accent)', color: 'var(--bg)' }}>
              <h3 className="text-xl font-bold mb-4">Why Choose Our Firm?</h3>
              <ul className="space-y-3">
                {['Free initial consultation', 'No fee unless we win', 'Extensive combined experience', 'Available 24/7 for emergencies', 'Multilingual staff available'].map((point, i) => (
                  <li key={i} className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: 'var(--primary)' }}></div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                <p className="text-sm" style={{ color: 'rgba(247,249,250,0.85)' }}>
                  <strong>Emergency Contact:</strong><br />
                  For urgent matters outside office hours, call our emergency line at (555) 123-4568.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
            Don't Wait – Get Legal Help Today
          </h2>
          <p className="text-xl mb-8" style={{ color: 'var(--muted)' }}>
            The sooner you contact us, the sooner we can start working on your case. Every day matters in legal proceedings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:(555)123-4567"
              className="inline-flex items-center px-8 py-4 font-semibold rounded-lg transition-colors duration-200"
              style={{ backgroundColor: 'var(--primary)', color: 'var(--bg)' }}
            >
              <Phone className="h-5 w-5 mr-2" /> Call Now: (555) 123-4567
            </a>
            <a href="mailto:info@khatrilaw.com"
              className="inline-flex items-center px-8 py-4 font-semibold rounded-lg transition-colors duration-200"
              style={{ backgroundColor: 'var(--accent)', color: 'var(--bg)' }}
            >
              <Mail className="h-5 w-5 mr-2" /> Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
