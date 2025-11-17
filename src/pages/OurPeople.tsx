import React, { useState } from 'react';
import { Award, BookOpen, Users } from 'lucide-react';

const madhuKhatri = "/images/ourPeople/Madhu_Khatri.jpeg";
const chitrasundar = "/images/ourPeople/Chitra_Sundar.jpeg";
const adityabhagwani = "/images/ourPeople/Aditya_Bhagwani.jpg";
const kushagraagarwal = "/images/ourPeople/Kushagra_Agarwal.jpeg";
const kaminijoshi = "/images/ourPeople/kamini_joshi.jpeg";

const OurPeople: React.FC = () => {
  const attorneys = [
    {
      name: 'Madhu Khatri',
      title: 'Founding Partner',
      education: 'LL.B.; Registered Trademark Attorney',
      image: `${madhuKhatri}?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop`,
      bio: `With 6 years of experience as an IP and commercial lawyer, Madhu is passionate about helping clients protect, manage, and enforce their intellectual property rights across diverse sectors and markets. She is the founding partner of MK Legal Partners and a Registered Trademark Attorney, providing expert advice and solutions across all areas of intellectual property law. Madhu has practiced before the Delhi High Court and has extensive experience in handling complex and high-stakes IP matters for renowned companies across the pharmaceutical, IT, banking, food, manufacturing, and machinery sectors. She is also practicing before the Rajasthan High Court, where she handles commercial & arbitration matters, as well as other civil litigation, providing strategic guidance and effective resolution of complex disputes.`,
    },
    {
      name: 'Chitra Sundar',
      title: 'Of Counsel — Patent Agent (Mumbai)',
      education: 'B.Tech (Rubber & Plastics Tech.) – Madras Institute of Technology; LL.B. – School of Excellence in Law, Chennai; Registered Patent Agent',
      image: `${chitrasundar}?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop`,
      bio: `Chitra is a qualified lawyer with over 13 years of experience, specializing in IP prosecution and litigation, arbitration, and general civil and commercial litigation. She holds a B.Tech in Rubber and Plastics Technology from the Madras Institute of Technology and a law degree from the School of Excellence in Law, Chennai. She is also a Registered Patent Agent with specialized expertise in patent law. She began her practice at the Madras High Court and is currently practicing before the Bombay High Court and subordinate courts. Over the years, Chitra has developed extensive experience in managing complex patent filings, IP enforcement, licensing, and disputes, providing clients with practical, strategic, and technically informed solutions. Her unique combination of a strong technical background and legal expertise enables her to effectively bridge the gap between innovation and law, assisting clients in protecting, managing, and enforcing their intellectual property across diverse industries.`,
    },
    {
      name: 'Adv. Kamini Joshi',
      title: 'Partner',
      // education: 'LL.B., Rajasthan University',
      image: `${kaminijoshi}?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop`,
      bio: `Adv. Kamini Joshi practices before the Hon'ble Rajasthan High Court and handles a diverse range of cases, including Public Interest Litigations (PILs), Service Matters, Civil Disputes, and Criminal Matters. She is known for her diligent advocacy, analytical approach, and dedication to upholding justice.`,
    },
    {
      name: 'Kushagra Agarwal',
      title: 'Partner — Jaipur',
      // education: 'LL.B., Rajasthan University',
      image: `${kushagraagarwal}?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop`,
      bio: `Kushagra Agarwal brings significant expertise in corporate and business laws, offering comprehensive legal solutions tailored to the dynamic requirements of modern businesses. His practice includes drafting and vetting complex agreements and contracts, conducting due diligence, in-depth legal research, and legal risk management. With a focus on providing commercially sound and strategic advice, he assists clients in navigating corporate and regulatory challenges with clarity and precision.`,
    },
    {
      name: 'Aditya Bhagwani',
      title: 'Of Counsel — Raipur (Chhattisgarh)',
      // education: 'LL.B., Hidayatullah National Law University',
      image: `${adityabhagwani}?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop`,
      bio: `Aditya practices before the High Court of Bilaspur, Raipur District Court, and other courts across Chhattisgarh. He has extensive experience in representing clients in commercial matters, civil disputes, family law cases, and company law matters. His approach combines strong courtroom advocacy with practical legal solutions, ensuring effective representation before judicial and quasi-judicial forums.`,
    },
    
    // {
    //   name: 'Adv. Grahita Agarwal',
    //   title: 'Advocate | Supreme Court of India',
    //   education: 'LL.M., Osmania University',
    //   image: `${Grahitaagarwal}?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop`,
    //   bio: `Adv. Grahita Agarwal is a legal professional practicing before the Hon'ble Supreme Court of India, handling a broad range of matters including Arbitration, Land Laws, Civil and Criminal Litigation, Family Law, Company Law, Consumer Law, and Intellectual Property Rights (IPR). She has extensive experience in drafting and filing Special Leave Petitions (SLPs), Writ Petitions, and Civil & Criminal Appeals, representing clients before the Supreme Court and the Delhi High Court. Her practice is grounded in professionalism, integrity, and diligence, ensuring each client receives attentive, precise, and effective representation before the apex court.`,
    // },
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span style={{ color: 'var(--primary)' }}>Legal Team</span>
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'rgba(247,249,250,0.85)' }}>
            Meet our experienced attorneys who bring legal excellence, technical depth, and client-first advocacy to every matter.
          </p>
        </div>
      </section>

      {/* Team Stats */}
      <section className="py-16" style={{ backgroundColor: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <Users className="h-16 w-16 mx-auto mb-4" style={{ color: 'var(--primary)' }} />
            <div className="text-4xl font-bold mb-2" style={{ color: 'var(--text)' }}>5</div>
            <div className="font-medium" style={{ color: 'var(--muted)' }}>Expert Attorneys</div>
          </div>
          <div>
            <BookOpen className="h-16 w-16 mx-auto mb-4" style={{ color: 'var(--primary)' }} />
            <div className="text-4xl font-bold mb-2" style={{ color: 'var(--text)' }}>15+</div>
            <div className="font-medium" style={{ color: 'var(--muted)' }}>Years of Experience</div>
          </div>
          <div>
            <Award className="h-16 w-16 mx-auto mb-4" style={{ color: 'var(--primary)' }} />
            <div className="text-4xl font-bold mb-2" style={{ color: 'var(--text)' }}>Excellence</div>
            <div className="font-medium" style={{ color: 'var(--muted)' }}>in Legal Services</div>
          </div>
        </div>
      </section>

      {/* Attorneys Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {attorneys.map((attorney, index) => {
            const [expanded, setExpanded] = useState(false);
            return (
              <div
                key={index}
                className="rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                style={{ backgroundColor: 'var(--bg)' }}
              >
                <div className="w-full h-96 flex items-center justify-center bg-white rounded-xl">
                  <img src={attorney.image} alt={attorney.name} className="max-h-full max-w-full object-contain" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--text)' }}>{attorney.name}</h3>
                  <p className="font-semibold mb-2" style={{ color: 'var(--primary)' }}>{attorney.title}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-1" style={{ color: 'var(--text)' }}>Education:</h4>
                    <p className="text-sm" style={{ color: 'var(--muted)' }}>{attorney.education}</p>
                  </div>

                  <p
                    className={`text-sm mb-2 transition-all duration-300 ease-in-out ${expanded ? '' : 'line-clamp-5'}`}
                    style={{ color: 'var(--muted)', whiteSpace: 'pre-line' }}
                  >
                    {attorney.bio}
                  </p>

                  <button
                    onClick={() => setExpanded(!expanded)}
                    className="text-sm font-semibold hover:underline focus:outline-none"
                    style={{ color: 'var(--primary)' }}
                  >
                    {expanded ? 'Read Less' : 'Read More'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default OurPeople;
