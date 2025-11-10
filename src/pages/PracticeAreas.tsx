import React from 'react';
import {
  Shield, Palette, Lightbulb, Copyright, Scale,
  FileText, Briefcase, Users, Gavel, Monitor,
  Palette as PaletteIcon, Globe, Heart
} from 'lucide-react';

const PracticeAreas: React.FC = () => {
  const practiceAreas = [
    {
      icon: Shield,
      title: 'Trademarks',
      subtitle: 'Area Of Practice | MK Legal Partners',
      description:
        'Comprehensive trademark services including search & clearance, registration, opposition, and enforcement to secure and grow your brand.',
      features: [
        'Trademark Search & Clearance',
        'Registration & Filing',
        'Opposition & Cancellation',
        'Enforcement & Litigation',
        'Brand Protection Strategy',
      ],
      color: '#3B82F6',
    },
    {
      icon: PaletteIcon,
      title: 'Designs',
      subtitle: 'Area Of Practice | MK Legal Partners',
      description:
        'Industrial and product design protection services covering registration, prosecution and cross-border enforcement of design rights.',
      features: [
        'Design Registration',
        'Design Search',
        'Design Prosecution',
        'Design Infringement',
        'International Design Filing',
      ],
      color: '#8B5CF6',
    },
    {
      icon: Lightbulb,
      title: 'Patents',
      subtitle: 'Area Of Practice | MK Legal Partners',
      description:
        'Patent drafting, filing, prosecution and portfolio services for inventions — from prosecution to licensing and commercialization.',
      features: [
        'Patent Drafting & Filing',
        'Patent Prosecution',
        'Patent Search & Analysis',
        'Patent Portfolio Management',
        'Patent Licensing',
      ],
      color: '#F59E0B',
    },
    {
      icon: Copyright,
      title: 'Copyright',
      subtitle: 'Area Of Practice | MK Legal Partners',
      description:
        'Copyright protection for creative works, software and digital content including registration, enforcement and takedowns.',
      features: [
        'Copyright Registration',
        'Copyright Infringement',
        'DMCA Takedowns',
        'Software Copyright',
        'Creative Works Protection',
      ],
      color: '#10B981',
    },
    {
      icon: Scale,
      title: 'Alternate Dispute Resolution',
      subtitle: 'Area Of Practice | MK Legal Partners',
      description:
        'Efficient conflict resolution through mediation, arbitration and negotiated settlements for IP and commercial disputes.',
      features: [
        'IP Mediation',
        'IP Arbitration',
        'Settlement Negotiations',
        'Domain Disputes',
        'Licensing Disputes',
      ],
      color: '#EF4444',
    },
    {
      icon: FileText,
      title: 'Contracts and Agreements Drafting',
      subtitle: 'Area Of Practice | MK Legal Partners',
      description:
        'Drafting and negotiation of IP-related contracts, licensing agreements and commercial arrangements to protect client interests.',
      features: [
        'Licensing Agreements',
        'Assignment Agreements',
        'Non-Disclosure Agreements',
        'Technology Transfer',
        'Joint Venture Agreements',
      ],
      color: '#6366F1',
    },
    {
      icon: Briefcase,
      title: 'IPR Evaluation and Portfolio Management',
      subtitle: 'Area Of Practice | MK Legal Partners',
      description:
        'Strategic IP audits, valuation and portfolio management to maximize commercial potential and reduce risk.',
      features: [
        'IP Audit & Valuation',
        'Portfolio Strategy',
        'IP Due Diligence',
        'IP Asset Management',
        'Competitive Intelligence',
      ],
      color: '#84CC16',
    },
    {
      icon: Users,
      title: 'Legal Consultancy and Advisory',
      subtitle: 'Area Of Practice | MK Legal Partners',
      description:
        'We offer strategic legal guidance to help businesses make informed decisions, manage risks, and ensure compliance in commercial and intellectual property matters.',
      features: [
        'IP Strategy Consulting',
        'Legal Opinions',
        'IP Policy Development',
        'Compliance Advisory',
        'Risk Assessment',
      ],
      color: '#06B6D4',
    },
    {
      icon: Gavel,
      title: 'Litigation',
      subtitle: 'Area Of Practice | MK Legal Partners',
      description:
        'Representation in IP litigation, enforcement actions and appellate proceedings before courts and tribunals.',
      features: [
        'IP Infringement Litigation',
        'Enforcement Actions',
        'Opposition Proceedings',
        'Appeals',
        'Injunctive Relief',
      ],
      color: '#DC2626',
    },
    {
      icon: Monitor,
      title: 'Media and Entertainment',
      subtitle: 'Area Of Practice | MK Legal Partners',
      description:
        'Specialized legal services for media and entertainment including content protection, licensing and rights management.',
      features: [
        'Content Licensing',
        'Entertainment Contracts',
        'Media Rights',
        'Celebrity Rights',
        'Digital Content Protection',
      ],
      color: '#7C3AED',
    },
    {
      icon: PaletteIcon,
      title: 'Fashion Laws',
      subtitle: 'Area Of Practice | MK Legal Partners',
      description:
        'Advising fashion designers and brands on design protection, anti-counterfeiting and licensing strategies.',
      features: [
        'Fashion Design Protection',
        'Brand Enforcement',
        'Counterfeiting Issues',
        'Fashion Licensing',
        'Trade Dress Protection',
      ],
      color: '#EC4899',
    },
    {
      icon: Globe,
      title: 'Cyber Laws / Technology Law',
      subtitle: 'Area Of Practice | MK Legal Partners',
      description:
        'Counsel on cyber law, data protection, technology contracts and digital rights compliance for tech-enabled businesses.',
      features: [
        'Data Protection',
        'Cyber Crime',
        'Technology Contracts',
        'Digital Rights',
        'IT Law Compliance',
      ],
      color: '#0891B2',
    },
    {
      icon: Heart,
      title: 'Pro Bono',
      subtitle: 'Area Of Practice | MK Legal Partners',
      description:
        'Committed to community service through pro bono representation for deserving causes and individuals.',
      features: [
        'Community Service',
        'NGO Support',
        'Educational Institutions',
        'Startup Assistance',
        'Social Impact Projects',
      ],
      color: '#F97316',
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
              Our <span style={{ color: 'var(--primary)' }}>Practice Areas</span>
            </h1>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: 'rgba(247,249,250,0.85)' }}>
              Comprehensive legal services across multiple practice areas,
              delivering expert representation tailored to your unique needs.
            </p>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-20" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                  style={{ 
                    backgroundColor: '#fff',
                    border: '1px solid rgba(0,0,0,0.05)'
                  }}
                >
                  {/* Gradient Header */}
                  <div 
                    className="h-2 w-full"
                    style={{ backgroundColor: area.color }}
                  ></div>
                  
                  <div className="p-8">
                    {/* Icon Circle */}
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
                      style={{ 
                        backgroundColor: `${area.color}15`,
                        color: area.color
                      }}
                    >
                      <Icon className="h-8 w-8" />
                    </div>

                    {/* Content */}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--text)' }}>
                        {area.title}
                      </h3>
                      <div className="text-sm mb-4" style={{ color: 'var(--muted)' }}>
                        {area.subtitle}
                      </div>
                      <p className="text-sm leading-relaxed" style={{ color: 'var(--muted)' }}>
                        {area.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm mb-3" style={{ color: 'var(--text)' }}>
                        Our Services Include:
                      </h4>
                      <div className="space-y-2">
                        {area.features.map((feature, featureIndex) => (
                          <div
                            key={featureIndex}
                            className="flex items-center text-sm"
                            style={{ color: 'var(--muted)' }}
                          >
                            <div 
                              className="w-1.5 h-1.5 rounded-full mr-2 flex-shrink-0"
                              style={{ backgroundColor: area.color }}
                            ></div>
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Hover Effect Overlay */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"
                      style={{ backgroundColor: area.color }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20" style={{ backgroundColor: 'var(--primary)', color: 'var(--bg)' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Need Legal Assistance?
          </h2>
          <p className="text-xl mb-8" style={{ color: 'rgba(11,18,32,0.85)' }}>
            Our experienced attorneys are ready to help you navigate your legal challenges.
            Contact us today for a consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:6375063727"
              className="inline-flex items-center px-8 py-4 font-semibold rounded-lg hover:opacity-90 transition-colors duration-200"
              style={{ backgroundColor: 'var(--accent)', color: 'var(--bg)' }}
            >
              Call 6375063727
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 font-semibold rounded-lg transition-colors duration-200"
              style={{ borderColor: 'var(--bg)', color: 'var(--bg)' }}
            >
              Schedule Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PracticeAreas;
