import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Menu, X, Phone, Mail, MapPin, Scale } from 'lucide-react';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Practice Areas', href: '/practice-areas' },
    { name: 'Our People', href: '/our-people' },
    { name: 'Contact Us', href: '/contact' },
  ];

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundColor: 'var(--bg)',
        color: 'var(--text)',
        fontFamily:
          "'Poppins', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial",
      }}
    >
      {/* Header */}
      <header
        className="sticky top-0 z-50"
        style={{ backgroundColor: 'var(--accent)', color: 'var(--bg)' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-3"
              style={{ color: 'var(--bg)' }}
            >
              <Scale className="h-8 w-8" style={{ color: 'var(--primary)' }} />
              <div>
                <h1
                  className="text-2xl font-semibold"
                  style={{ color: 'var(--bg)' }}
                >
                  MK Legal Partners
                </h1>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-[var(--primary)]"
                  style={
                    router.pathname === item.href
                      ? {
                          color: 'var(--primary)',
                          borderBottom: '2px solid var(--primary)',
                        }
                      : { color: 'var(--bg)', opacity: 0.95 }
                  }
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md hover:bg-[rgba(255,255,255,0.04)] transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              style={{ color: 'var(--bg)' }}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden" style={{ backgroundColor: 'rgba(15,23,36,0.96)' }}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium transition-colors duration-200 hover:text-[var(--primary)]"
                  style={
                    router.pathname === item.href
                      ? { color: 'var(--primary)' }
                      : { color: 'var(--bg)' }
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer style={{ backgroundColor: 'var(--accent)', color: 'var(--bg)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* About Section */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Scale className="h-8 w-8" style={{ color: 'var(--primary)' }} />
                <div>
                  <h3 className="text-xl font-semibold" style={{ color: 'var(--bg)' }}>
                   MK Legal Partners
                  </h3>
                </div>
              </div>
              <p className="text-[var(--muted)] mb-4">
                Providing exceptional legal services with integrity,
                dedication, and a results-driven approach with an unwavering commitment
                to client success.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--bg)' }}>
                Quick Links
              </h4>
              <ul className="space-y-2">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="transition-colors duration-200"
                      style={{ color: 'var(--muted)' }}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{ color: 'var(--bg)' }}>
                Contact Info
              </h4>
              <div className="space-y-3 text-[var(--muted)]">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" style={{ color: 'var(--primary)' }} />
                  <span>6375063727</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" style={{ color: 'var(--primary)' }} />
                  <span>madhu.khatri14@outlook.com</span>
                </div>

                <div className="flex items-start space-x-2 mt-4">
                  <MapPin className="h-4 w-4 flex-shrink-0" style={{ color: 'var(--primary)' }} />
                  <div className="text-sm leading-relaxed">
                    <div className="mb-2">
                      <strong style={{ color: 'var(--bg)' }}>Jodhpur:</strong>{' '}
                      <span style={{ color: 'var(--muted)' }}>
                        3 N 2 Kudi Bhagtasani Housing Board, Jodhpur, Raj. (342005)
                      </span>
                    </div>
                    <div className="mb-2">
                      <strong style={{ color: 'var(--bg)' }}>Jaipur:</strong>{' '}
                      <span style={{ color: 'var(--muted)' }}>
                        385, Shanti Nagar, Durgapura Railway Station, Jaipur - 302018
                      </span>
                    </div>
                    <div className="mb-2">
                      <strong style={{ color: 'var(--bg)' }}>Mumbai:</strong>{' '}
                      <span style={{ color: 'var(--muted)' }}>
                        53A Mittal Tower, 210 Nariman Point, Mumbai - 400021
                      </span>
                    </div>
                    
                    <div>
                      <strong style={{ color: 'var(--bg)' }}>Chhattisgarh:</strong>{' '}
                      <span style={{ color: 'var(--muted)' }}>
                        Street no. 2B, New Shanti Nagar, Raipur (CG)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div
            className="border-t mt-8 pt-8 text-center"
            style={{ borderColor: 'rgba(255,255,255,0.06)' }}
          >
            <p className="text-[var(--muted)]">
              &copy; 2025 MK Legal Partners. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
