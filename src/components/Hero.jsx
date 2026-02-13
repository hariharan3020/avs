import React from 'react';
import { Phone, MapPin, Mail, FileText } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import profileImg from '../assets/1768131924406.jpg';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="grid grid-2 items-center">
                    <div className="hero-content">
                        <p className="hero-tagline" style={{
                            fontSize: 'clamp(0.7rem, 2vw, 0.9rem)',
                            padding: '0 10px',
                            wordWrap: 'break-word',
                            maxWidth: '100%'
                        }}>AVS BUSINESS MANAGEMENT CONSULTANTS</p>
                        <h1 className="hero-title" style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}>Prof (Dr) Krishnan Sampath</h1>
                        <p style={{
                            color: 'var(--gold)',
                            fontSize: 'clamp(0.85rem, 2.5vw, 1.1rem)',
                            fontWeight: '800',
                            marginTop: '-5px',
                            marginBottom: '10px',
                            textTransform: 'uppercase',
                            letterSpacing: 'clamp(1px, 0.5vw, 3px)'
                        }}>"THE BUSINESS DOCTOR"</p>
                        <h2 className="hero-credentials" style={{ fontSize: 'clamp(0.95rem, 2.5vw, 1.2rem)', marginBottom: '10px', marginTop: '0' }}>
                            PhD., MBA., MA., MPhil, SMP from IIMC, PGDMM
                        </h2>
                        <p className="hero-description" style={{ fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', marginBottom: '15px', lineHeight: '1.5' }}>
                            (Professor of Practice, Writer, Author Business Coach, Mentor SME/Family Business,
                            Commercial Leadership Construction / CE Industry Life Fellow IIMM; Life Member AIMA & MMA,
                            Institute of Rail Transport, Institute of Supply Management Former Member MRICS, CILT)
                        </p>

                        <div className="floating-contact">
                            <a href="tel:+919840783021" className="contact-icon-btn" title="Call Me">
                                <Phone size={24} />
                            </a>
                            <a href="https://wa.me/919840783021" className="contact-icon-btn" title="WhatsApp">
                                <FontAwesomeIcon icon={faWhatsapp} size="lg" style={{ fontSize: '24px' }} />
                            </a>
                            <a href="mailto:skrishphd@gmail.com" className="contact-icon-btn" title="Email Me">
                                <Mail size={24} />
                            </a>
                            <a href="https://maps.app.goo.gl/CqxrJtfhfAFz5UzR8" target="_blank" rel="noopener noreferrer" className="contact-icon-btn" title="Location">
                                <MapPin size={24} />
                            </a>
                            <a href="/Resume_KRISHNAN_SAMPATH.pdf" download="Prof_Dr_Krishnan_Sampath_CV.pdf" className="nav-btn-orange" style={{
                                marginLeft: 'clamp(0px, 2vw, 10px)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                textTransform: 'uppercase',
                                fontSize: 'clamp(0.7rem, 1.8vw, 0.8rem)',
                                padding: 'clamp(10px, 2.5vw, 12px) clamp(18px, 4vw, 25px)'
                            }}>
                                <FileText size={18} /> DOWNLOAD CV
                            </a>
                        </div>
                    </div>

                    <div className="hero-image-container">
                        <div className="hero-image-circle">
                            <img src={profileImg} alt="Prof (Dr) Krishnan Sampath" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Wave Background Shape */}
            <div className="hero-wave">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,117.3C960,107,1056,149,1152,154.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
            </div>
        </section>
    );
};

export default Hero;
