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
import {
    Users, RefreshCw, Lightbulb, CheckCircle2,
    Target, Share2, GraduationCap, Building2,
    Globe, Truck, Camera, Plane, Mic
} from 'lucide-react';
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

const serviceExcellence = [
    {
        icon: <Users size={24} />,
        title: "Business Consulting & Mentorship",
        features: [
            "Personalized coaching and strategic guidance for entrepreneurs and businesses.",
            "Leadership development and corporate mentorship for long-term growth."
        ]
    },
    {
        icon: <RefreshCw size={24} />,
        title: "Organization Transformation & Resources Realignment",
        features: [
            "Restructuring for maximum efficiency and profitability.",
            "Workforce and operational realignment for peak performance."
        ]
    },
    {
        icon: <Lightbulb size={24} />,
        title: "New Business Development & Private Equity",
        features: [
            "Identifying new business opportunities and investment avenues.",
            "Private equity and venture capital advisory for funding and expansion."
        ]
    },
    {
        icon: <Target size={24} />,
        title: "Fund Raising & CxO Placement",
        features: [
            "Connecting businesses with the right investors.",
            "Executive search and leadership hiring for top management roles."
        ]
    },
    {
        icon: <Share2 size={24} />,
        title: "Digital Marketing & Content Creation",
        features: [
            "High-impact digital marketing strategies for brand visibility.",
            "Engaging content creation for social media, blogs, and websites."
        ]
    },
    {
        icon: <GraduationCap size={24} />,
        title: "Training as a Business",
        features: [
            "Corporate training programs and skill development workshops.",
            "Specialized training for leadership, business growth, and industry insights."
        ]
    },
    {
        icon: <Building2 size={24} />,
        title: "Construction Business Opportunities & PMC Services",
        features: [
            "Connecting businesses with lucrative construction projects.",
            "Project Management Consultancy (PMC) services for seamless execution."
        ]
    },
    {
        icon: <Globe size={24} />,
        title: "Sourcing from China & Strategic Sourcing",
        features: [
            "Expert guidance on sourcing high-quality products from China.",
            "Cost-effective strategic sourcing for various industries."
        ]
    },
    {
        icon: <Truck size={24} />,
        title: "Logistics Services & EXIM Trade Disputes Management",
        features: [
            "End-to-end logistics solutions for smooth operations.",
            "Resolving trade disputes and ensuring hassle-free import/export transactions."
        ]
    },
    {
        icon: <Camera size={24} />,
        title: "Divine Event Management & Photo/Video Services",
        features: [
            "Organizing spiritual and divine events with perfection.",
            "Professional photography and videography services for all occasions."
        ]
    },
    {
        icon: <Plane size={24} />,
        title: "Airport-to-Airport Spiritual Services",
        features: [
            "Exclusive spiritual travel services for devotees and pilgrims.",
            "Hassle-free arrangements from departure to destination."
        ]
    },
    {
        icon: <Mic size={24} />,
        title: "Visiting Faculty & Corporate Training",
        features: [
            "Expert faculty for academic institutions and corporate training programs.",
            "Industry-focused insights to enhance learning and professional growth."
        ]
    }
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

                {/* Service Excellence Section */}
                <div style={{ marginTop: '80px' }}>
                    <h3 className="hero-title" style={{ fontSize: 'clamp(1.5rem, 4vw, 2.1rem)', marginBottom: '40px', textAlign: 'center' }}>
                        Our Service Excellence
                    </h3>

                    <div className="grid grid-3" style={{ gap: '30px' }}>
                        {serviceExcellence.map((service, index) => (
                            <div key={index} className="reveal active" style={{
                                background: '#fff',
                                borderRadius: '25px',
                                padding: '25px',
                                textAlign: 'left',
                                boxShadow: '0 15px 35px rgba(0,0,0,0.05)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '15px',
                                height: '100%'
                            }}>
                                {/* Icon Container */}
                                <div style={{
                                    width: '50px',
                                    height: '50px',
                                    backgroundColor: 'var(--dark-blue)',
                                    color: 'white',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0
                                }}>
                                    {service.icon}
                                </div>

                                {/* Title */}
                                <h4 className="font-serif" style={{
                                    fontSize: '1.25rem',
                                    color: 'var(--dark-blue)',
                                    lineHeight: '1.3',
                                    fontWeight: '800',
                                    minHeight: '3.4rem'
                                }}>
                                    {service.title}
                                </h4>

                                {/* Features List */}
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                                    {service.features.map((feature, fIndex) => (
                                        <div key={fIndex} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                            <CheckCircle2 size={18} style={{ color: 'var(--primary-orange)', flexShrink: 0, marginTop: '2px' }} />
                                            <p style={{ color: '#666', fontSize: '0.9rem', lineHeight: '1.4' }}>
                                                {feature}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
