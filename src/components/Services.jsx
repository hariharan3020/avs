import React from 'react';

// Importing images from assets
import bgConsulting from '../assets/Our Services/Business Consulting.jpg';
import mentor from '../assets/Our Services/Mentor.jpg';
import constructPMC from '../assets/Our Services/Construction Project Management Services.jpg';
import contentContr from '../assets/Our Services/Content Contributor.jpg';
import cxoPlacement from '../assets/Our Services/CxO Placement.jpg';
import digitalMarketing from '../assets/Our Services/Digital Marketing.jpg';
import eximDisputes from '../assets/Our Services/EXIM Trade Disputes Management.jpg';
import fundRaising from '../assets/Our Services/Fund Raising.jpg';
import orgTransformation from '../assets/Our Services/Organizational Transformation.png';
import photography from '../assets/Our Services/Photography & Videography.jpg';
import privateEquity from '../assets/Our Services/Private Equity.jpg';
import resourcesRealignment from '../assets/Our Services/Resources Realignment.jpg';
import airportServices from '../assets/Our Services/Airport-to-Airport Spiritual Services.jpg';
import visitingFaculty from '../assets/Our Services/Visiting Faculty.jpg';

const serviceData = [
    { img: bgConsulting, title: "Business Consulting" },
    { img: orgTransformation, title: "Business Organizational Transformation" },
    { img: resourcesRealignment, title: "Resources Realignment" },
    { img: privateEquity, title: "Private Equity" },
    { img: fundRaising, title: "Fund Raising" },
    { img: cxoPlacement, title: "CxO Placement" },
    { img: digitalMarketing, title: "Digital Marketing" },
    { img: contentContr, title: "Content Contributor" },
    { img: mentor, title: "Mentor" },
    { img: constructPMC, title: "Construction Project Management Services" },
    { img: eximDisputes, title: "EXIM Trade Disputes Management" },
    { img: photography, title: "Photography & Videography" },
    { img: airportServices, title: "Airport-to-Airport Spiritual Services" },
    { img: visitingFaculty, title: "Visiting Faculty" }
];

const Services = () => {
    return (
        <section id="services" style={{ padding: '40px 0', background: '#f8fbff' }}>
            <div className="container">
                {/* Header Section from Screenshot */}
                <div style={{ textAlign: 'center', marginBottom: '25px' }}>
                    <p style={{
                        color: 'var(--primary-orange)',
                        fontWeight: '800',
                        fontSize: '0.9rem',
                        letterSpacing: '3px',
                    }}>
                        OUR EXPERTISE
                    </p>
                    <h2 className="hero-title" style={{ fontSize: '2.1rem', marginBottom: '10px' }}>
                        Services
                    </h2>
                    <div style={{ width: '60px', height: '4px', background: 'var(--primary-orange)', margin: '0 auto 20px auto' }}></div>
                    <p style={{
                        color: '#666',
                        maxWidth: '850px',
                        margin: '0 auto',
                        fontSize: '1rem',
                        lineHeight: '1.6'
                    }}>
                        Transforming complex business challenges into clear, actionable growth strategies through our diverse range
                        of specialized consulting services.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-4" style={{ gap: '20px' }}>
                    {serviceData.map((service, index) => (
                        <div key={index} className="reveal active" style={{
                            background: '#fff',
                            borderRadius: '15px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                            transition: 'var(--transition)',
                            cursor: 'pointer'
                        }}>
                            {/* Image Container */}
                            <div style={{
                                height: '180px',
                                width: '100%',
                                overflow: 'hidden',
                                position: 'relative'
                            }}>
                                <img
                                    src={service.img}
                                    alt={service.title}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s ease'
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />
                                {/* Bottom Accent line on image */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '5px',
                                    background: 'var(--primary-orange)'
                                }}></div>
                            </div>

                            {/* Title Container */}
                            <div style={{ padding: '20px 15px', textAlign: 'center' }}>
                                <h4 className="font-serif" style={{
                                    fontSize: '1rem',
                                    color: 'var(--dark-blue)',
                                    fontWeight: '800',
                                    lineHeight: '1.4',
                                    marginBottom: '0'
                                }}>
                                    {service.title}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
