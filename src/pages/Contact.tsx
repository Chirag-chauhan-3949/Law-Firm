import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle, X } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setShowSuccess(false);
    setShowError(false);

    // EmailJS configuration - Replace with your actual service details
    const serviceId = 'service_your_service_id'; // Replace with your EmailJS service ID
    const templateId = 'template_your_template_id'; // Replace with your EmailJS template ID
    const publicKey = 'your_public_key'; // Replace with your EmailJS public key

    // Prepare email template parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      phone: formData.phone,
      subject: formData.subject,
      message: formData.message,
      to_email: 'madhu.khatri14@outlook.com',
    };

    // Send email using EmailJS
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        setIsSubmitting(false);
        setShowSuccess(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        
        // Hide success message after 5 seconds
        setTimeout(() => setShowSuccess(false), 5000);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setIsSubmitting(false);
        setShowError(true);
        
        // Hide error message after 5 seconds
        setTimeout(() => setShowError(false), 5000);
      });
  };

  // 🟢 Updated contact info with new phone numbers and email
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['6375063727'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['madhu.khatri14@outlook.com'],
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
            Get in touch with our experienced legal team. We're here to help you protect, manage, and enforce your rights with confidence.
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

            {/* Success Message */}
            {showSuccess && (
              <div className="mb-6 p-4 rounded-lg flex items-center justify-between" style={{ backgroundColor: '#10b981', color: 'white' }}>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-3" />
                  <div>
                    <p className="font-semibold">Message Sent Successfully!</p>
                    <p className="text-sm">Thank you for contacting us. We'll respond within 24 hours.</p>
                  </div>
                </div>
                <button onClick={() => setShowSuccess(false)} className="ml-4">
                  <X className="h-5 w-5" />
                </button>
              </div>
            )}

            {/* Error Message */}
            {showError && (
              <div className="mb-6 p-4 rounded-lg flex items-center justify-between" style={{ backgroundColor: '#ef4444', color: 'white' }}>
                <div className="flex items-center">
                  <AlertCircle className="h-5 w-5 mr-3" />
                  <div>
                    <p className="font-semibold">Unable to Send Message</p>
                    <p className="text-sm">Please try again or call us directly at 6375063727.</p>
                  </div>
                </div>
                <button onClick={() => setShowError(false)} className="ml-4">
                  <X className="h-5 w-5" />
                </button>
              </div>
            )}

            {/* EmailJS Contact Form */}
            <form 
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2" style={{ color: 'var(--text)' }}>Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    value={formData.name} 
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200"
                    style={{ borderColor: 'var(--muted)', color: 'var(--text)' }}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2" style={{ color: 'var(--text)' }}>Email Address *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    value={formData.email} 
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200"
                    style={{ borderColor: 'var(--muted)', color: 'var(--text)' }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2" style={{ color: 'var(--text)' }}>Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200"
                    style={{ borderColor: 'var(--muted)', color: 'var(--text)' }}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2" style={{ color: 'var(--text)' }}>Practice Area *</label>
                  <select 
                    id="subject" 
                    name="subject" 
                    required 
                    value={formData.subject} 
                    onChange={handleChange}
                    className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:border-transparent transition-all duration-200"
                    style={{ borderColor: 'var(--muted)', color: 'var(--text)' }}
                  >
                    <option value="">Select a practice area</option>
                    {practiceAreas.map((area, i) => <option key={i} value={area}>{area}</option>)}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2" style={{ color: 'var(--text)' }}>Message *</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  rows={6} 
                  value={formData.message} 
                  onChange={handleChange}
                  className="w-full px-4 py-3 border rounded-lg resize-none focus:ring-2 focus:border-transparent transition-all duration-200"
                  style={{ borderColor: 'var(--muted)', color: 'var(--text)' }}
                />
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center px-8 py-4 font-semibold rounded-lg transition-all duration-200 group disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
                style={{ backgroundColor: 'var(--primary)', color: 'var(--bg)' }}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform duration-200" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Map & Office Info */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: 'var(--text)' }}>Visit Our Offices</h2>

            <div className="p-8 rounded-lg mb-6" style={{ backgroundColor: 'var(--bg)' }}>
              <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--text)' }}>Our Locations</h3>
              <ul className="space-y-3 text-sm" style={{ color: 'var(--muted)' }}>
                <li><strong>Jodhpur:</strong> 3 N 2 Kudi Bhagtasani Housing Board, Jodhpur, Raj. (342005)</li>
                <li><strong>Jaipur:</strong> 385, Shanti Nagar, Durgapura Railway Station, Jaipur - 302018</li>
                <li><strong>Mumbai:</strong> 53A Mittal Tower, 210 Nariman Point, Mumbai - 400021</li>
                
                <li><strong>Chhattisgarh:</strong> Street no. 2B, New Shanti Nagar, Raipur (CG)</li>
              </ul>
            </div>

            <div className="p-8 rounded-lg" style={{ backgroundColor: 'var(--accent)', color: 'var(--bg)' }}>
              <h3 className="text-xl font-bold mb-4">Why Choose Our Firm?</h3>
              <ul className="space-y-3">
                {['Free initial consultation', 'Client centric approach', 'Strategic legal advice', 'Transparent communications'].map((point, i) => (
                  <li key={i} className="flex items-center">
                    <div className="w-2 h-2 rounded-full mr-3" style={{ backgroundColor: 'var(--primary)' }}></div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--text)' }}>
            Get Legal Help Today
          </h2>
          <p className="text-xl mb-8" style={{ color: 'var(--muted)' }}>
            The sooner you contact us, the sooner we can start working on your case. Every day matters in legal proceedings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:6375063727"
              className="inline-flex items-center px-8 py-4 font-semibold rounded-lg transition-all duration-200 transform hover:scale-[1.05] active:scale-[0.95]"
              style={{ backgroundColor: 'var(--primary)', color: 'var(--bg)' }}
            >
              <Phone className="h-5 w-5 mr-2" /> Call Now: 6375063727
            </a>
            <a href="mailto:madhu.khatri14@outlook.com"
              className="inline-flex items-center px-8 py-4 font-semibold rounded-lg transition-all duration-200 transform hover:scale-[1.05] active:scale-[0.95]"
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
