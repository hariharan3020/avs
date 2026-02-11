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
        transition: 'all 0.4s ease'
    };

    return (
        <nav style={navStyle}>
            <div className="container flex items-center justify-between">
                {/* Logo Section */}
                <div className="flex items-center gap-3 mobile-logo-container" style={{ flexShrink: 0 }}>
                    <div style={{
                        backgroundColor: '#c08c0c',
                        padding: '6px 14px',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minWidth: 'fit-content'
                    }} className="mobile-logo-block">
                        <span style={{
                            color: '#0a1d37',
                            fontWeight: '900',
                            fontSize: '1.7rem',
                            lineHeight: '1',
                            letterSpacing: '-1px'
                        }} className="mobile-logo-text">AVS</span>
                    </div>
                    <div className="flex flex-col justify-center" style={{ lineHeight: '1.1', minWidth: 'max-content' }}>
                        <span style={{
                            color: '#0a1d37',
                            fontWeight: '900',
                            fontSize: '1.3rem',
                            fontFamily: 'Playfair Display, serif',
                            letterSpacing: '0px'
                        }} className="mobile-business-text">BUSINESS</span>
                        <span style={{
                            color: '#c08c0c',
                            fontWeight: '800',
                            fontSize: '0.75rem',
                            letterSpacing: '2px'
                        }} className="mobile-consultants-text">CONSULTANTS</span>
                    </div>
                </div>

                {/* Nav Links */}
                <div className="hidden-mobile flex items-center gap-6 nav-links-wrapper">
                    <a href="#" style={{ color: '#0a1d37', fontWeight: '800', fontSize: '0.95rem', textTransform: 'capitalize' }}>Home</a>
                    <a href="#about" style={{ color: '#0a1d37', fontWeight: '800', fontSize: '0.95rem', textTransform: 'capitalize' }}>About Us</a>
                    <a href="#services" style={{ color: '#0a1d37', fontWeight: '800', fontSize: '0.95rem', textTransform: 'capitalize' }}>Services</a>
                    <a href="#payment" style={{ color: '#0a1d37', fontWeight: '800', fontSize: '0.95rem', textTransform: 'capitalize' }}>Payment</a>
                    <a href="#feedback" style={{ color: '#0a1d37', fontWeight: '800', fontSize: '0.95rem', textTransform: 'capitalize' }}>Feedback</a>
                    <a href="#enquiry" style={{ color: '#0a1d37', fontWeight: '800', fontSize: '0.95rem', textTransform: 'capitalize' }}>Enquiry</a>
                    <a href="#enquiry" style={{
                        backgroundColor: '#ff7300',
                        color: 'white',
                        padding: '12px 25px',
                        borderRadius: '6px',
                        fontWeight: '800',
                        fontSize: '0.9rem',
                        textDecoration: 'none',
                        marginLeft: '10px'
                    }}>GET FREE CONSULTANT</a>
                </div>
                <div className="mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </div>

                <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'active' : ''}`}>
                    <a href="#" className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                    <a href="#about" className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
                    <a href="#services" className="mobile-menu-link" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
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
