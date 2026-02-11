import React from 'react';
import { Phone, MessageCircle, MapPin, Mail } from 'lucide-react';
import profileImg from '../assets/1768131924406.jpg';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="grid grid-2 items-center">
                    <div className="hero-content">
                        <p className="hero-tagline">AVS BUSINESS MANAGEMENT CONSULTANTS</p>
                        <h1 className="hero-title">Dr. Krishnan Sampath</h1>
                        <h2 className="hero-credentials">
                            PhD., MBA., MA., MPhil, SMP from IIMC, PGDMM
                        </h2>
                        <p className="hero-description">
                            (Professor of Practice, Writer, Author Business Coach, Mentor SME/Family Business,
                            Commercial Leadership Construction / CE Industry Life Fellow IIMM; Life Member AIMA & MMA,
                            Institute of Rail Transport, Institute of Supply Management Former Member MRICS, CILT)
                        </p>

                        <div className="floating-contact">
                            <a href="tel:+919840783021" className="contact-icon-btn">
                                <Phone size={24} />
                            </a>
                            <a href="https://wa.me/919840783021" className="contact-icon-btn">
                                <MessageCircle size={24} />
                            </a>
                            <a href="#location" className="contact-icon-btn">
                                <MapPin size={24} />
                            </a>
                            <a href="mailto:skrishphd@gmail.com" className="contact-icon-btn">
                                <Mail size={24} />
                            </a>
                        </div>
                    </div>

                    <div className="hero-image-container">
                        <div className="hero-image-circle">
                            <img src={profileImg} alt="Dr. Krishnan Sampath" />
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
