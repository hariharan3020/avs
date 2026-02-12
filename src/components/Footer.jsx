import React from 'react';
import { Share2, Linkedin, Mail, Globe, ArrowUp } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer style={{ background: '#0a1d37', color: 'white', position: 'relative' }}>

            {/* Main Footer Content */}
            <div className="container" style={{ padding: '40px 0 20px 0' }}>
                <div className="grid grid-3" style={{ gap: '40px', maxWidth: '1200px', margin: '0 auto' }}>
                    {/* Brand Info */}
                    <div>
                        <div style={{ marginBottom: '15px' }}>
                            <span style={{ fontSize: '1.6rem', fontWeight: '900', color: 'var(--primary-orange)' }}>AVS</span>
                            <div style={{ fontSize: '0.65rem', letterSpacing: '2px', opacity: 0.8, textTransform: 'uppercase' }}>Business Management Consultants</div>
                            <div style={{ fontSize: '0.75rem', fontWeight: '800', color: 'var(--gold)', marginTop: '4px', letterSpacing: '1px' }}>"THE BUSINESS DOCTOR"</div>
                        </div>
                        <p style={{ opacity: 0.7, lineHeight: '1.8', fontSize: '0.95rem', marginBottom: '30px' }}>
                            Transforming businesses with strategy, leadership & execution excellence.
                            Global expertise led by Prof (Dr) Krishnan Sampath.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/in/krishsam/" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: '0.3s', textDecoration: 'none', color: 'white' }} onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'} onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}>
                                <Linkedin size={18} />
                            </a>
                            <a href="https://wa.me/9840783021" target="_blank" rel="noopener noreferrer" style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: '0.3s', textDecoration: 'none', color: 'white' }} onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.15)'} onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}>
                                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Access */}
                    <div>
                        <h4 style={{ fontSize: '1rem', fontWeight: '800', marginBottom: '20px', color: 'var(--primary-orange)' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                            <li><a href="#" style={{ color: 'white', opacity: 0.7, textDecoration: 'none', fontSize: '0.95rem', transition: '0.3s' }} onMouseOver={(e) => e.target.style.opacity = 1} onMouseOut={(e) => e.target.style.opacity = 0.7}>Home</a></li>
                            <li><a href="#about" style={{ color: 'white', opacity: 0.7, textDecoration: 'none', fontSize: '0.95rem', transition: '0.3s' }} onMouseOver={(e) => e.target.style.opacity = 1} onMouseOut={(e) => e.target.style.opacity = 0.7}>About Us</a></li>
                            <li><a href="#services" style={{ color: 'white', opacity: 0.7, textDecoration: 'none', fontSize: '0.95rem', transition: '0.3s' }} onMouseOver={(e) => e.target.style.opacity = 1} onMouseOut={(e) => e.target.style.opacity = 0.7}>Our Services</a></li>
                            <li><a href="#media" style={{ color: 'white', opacity: 0.7, textDecoration: 'none', fontSize: '0.95rem', transition: '0.3s' }} onMouseOver={(e) => e.target.style.opacity = 1} onMouseOut={(e) => e.target.style.opacity = 0.7}>Media & Resources</a></li>
                            <li><a href="#payment" style={{ color: 'white', opacity: 0.7, textDecoration: 'none', fontSize: '0.95rem', transition: '0.3s' }} onMouseOver={(e) => e.target.style.opacity = 1} onMouseOut={(e) => e.target.style.opacity = 0.7}>Book Consultation</a></li>
                            <li><a href="#enquiry" style={{ color: 'white', opacity: 0.7, textDecoration: 'none', fontSize: '0.95rem', transition: '0.3s' }} onMouseOver={(e) => e.target.style.opacity = 1} onMouseOut={(e) => e.target.style.opacity = 0.7}>Contact</a></li>
                        </ul>
                    </div>

                    {/* Insights Hub */}
                    <div>
                        <h4 style={{ fontSize: '1rem', fontWeight: '800', marginBottom: '20px', color: 'var(--primary-orange)' }}>Business Insights</h4>
                        <p style={{ opacity: 0.7, fontSize: '0.85rem', marginBottom: '15px', lineHeight: '1.5' }}>
                            Join our network for exclusive corporate insights and leadership strategies.
                        </p>
                        <div style={{ position: 'relative' }}>
                            <input
                                type="email"
                                placeholder="Email Address"
                                style={{
                                    width: '100%',
                                    padding: '15px 20px',
                                    borderRadius: '12px',
                                    border: 'none',
                                    background: 'rgba(255,255,255,0.05)',
                                    color: 'white',
                                    outline: 'none'
                                }}
                            />
                            <button style={{
                                position: 'absolute',
                                right: '5px',
                                top: '5px',
                                bottom: '5px',
                                background: 'var(--primary-orange)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '8px',
                                padding: '0 20px',
                                fontWeight: '800',
                                fontSize: '0.8rem',
                                cursor: 'pointer'
                            }}>
                                JOIN
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright */}
                <div style={{
                    marginTop: '35px',
                    paddingTop: '20px',
                    borderTop: '1px solid rgba(255,255,255,0.05)',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    gap: '20px'
                }}>
                    <p style={{ opacity: 0.5, fontSize: '0.85rem' }}>
                        © {currentYear} AVS Business Management Consultants. All rights reserved.
                    </p>
                    <div style={{ display: 'flex', gap: '30px' }}>
                        <span style={{ opacity: 0.5, fontSize: '0.85rem' }}>Privacy Policy</span>
                        <span style={{ opacity: 0.5, fontSize: '0.85rem' }}>Terms of Service</span>
                        <div
                            onClick={scrollToTop}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                                opacity: 0.7,
                                fontSize: '0.85rem',
                                cursor: 'pointer',
                                color: 'var(--primary-orange)'
                            }}
                        >
                            <ArrowUp size={16} /> BACK TO TOP
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
