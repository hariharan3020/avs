import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const navStyle = {
        position: 'fixed',
        width: '100%',
        top: 0,
        left: 0,
        zIndex: 1000,
        padding: '12px 0',
        background: isScrolled ? 'rgba(255, 255, 255, 0.98)' : '#eff4f8',
        boxShadow: isScrolled ? '0 4px 15px rgba(0,0,0,0.05)' : 'none',
        transition: 'background-color 0.4s ease, box-shadow 0.4s ease, padding 0.4s ease, transform 0.4s ease',
        transform: 'translate3d(0, 0, 0)',
        willChange: 'background-color, box-shadow'
    };

    return (
        <nav style={navStyle} className={isScrolled ? 'scrolled' : ''}>
            <div className="container flex items-center justify-between" style={{ flexWrap: 'nowrap' }}>
                {/* Logo Section */}
                <div className="flex flex-col" style={{ flexShrink: 1, minWidth: 0, overflow: 'hidden' }}>
                    <div className="flex items-center gap-3 mobile-logo-container">
                        <div style={{
                            backgroundColor: '#c08c0c',
                            padding: '4px 10px',
                            borderRadius: '4px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                        }} className="mobile-logo-block">
                            <span style={{
                                color: '#0a1d37',
                                fontWeight: '900',
                                fontSize: 'clamp(1.2rem, 4vw, 1.7rem)',
                                lineHeight: '1',
                                letterSpacing: '-1px'
                            }} className="mobile-logo-text">AVS</span>
                        </div>
                        <div className="flex flex-col justify-center" style={{ lineHeight: '1.1', minWidth: 0, overflow: 'hidden' }}>
                            <span style={{
                                color: '#0a1d37',
                                fontWeight: '900',
                                fontSize: 'clamp(0.9rem, 3vw, 1.3rem)',
                                fontFamily: 'Playfair Display, serif',
                                letterSpacing: '0px',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis'
                            }} className="mobile-business-text">BUSINESS</span>
                            <span style={{
                                color: '#c08c0c',
                                fontWeight: '800',
                                fontSize: 'clamp(0.5rem, 2vw, 0.75rem)',
                                letterSpacing: '1px'
                            }} className="mobile-consultants-text">CONSULTANTS</span>
                        </div>
                    </div>
                    <div style={{
                        color: 'var(--primary-orange)',
                        fontSize: '0.75rem',
                        fontWeight: '900',
                        letterSpacing: '2px',
                        marginTop: '4px',
                        textTransform: 'uppercase',
                        textAlign: 'center',
                        width: '100%',
                        borderTop: '1px solid rgba(192, 140, 12, 0.2)',
                        paddingTop: '2px'
                    }}>The Business Doctor</div>
                </div>

                {/* Nav Links */}
                <div className="hidden-mobile flex items-center gap-6 nav-links-wrapper">
                    <a href="#">Home</a>
                    <a href="#about">About Us</a>
                    <a href="#services">Services</a>
                    <a href="#media">Media</a>
                    <a href="#payment">Payment</a>
                    <a href="#feedback">Feedback</a>
                    <a href="#enquiry">Enquiry</a>
                    <a href="#enquiry" className="nav-btn-orange" style={{ marginLeft: '10px' }}>GET FREE CONSULTANT</a>
                </div>
                <div className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </div>

                <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
                    <a href="#" className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                    <a href="#about" className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
                    <a href="#services" className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
                    <a href="#media" className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>Media</a>
                    <a href="#payment" className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>Payment</a>
                    <a href="#feedback" className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>Feedback</a>
                    <a href="#enquiry" className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>Enquiry</a>
                    <a href="#enquiry" className="nav-btn-orange" style={{ marginTop: '20px' }} onClick={() => setIsMobileMenuOpen(false)}>GET FREE CONSULTANT</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
