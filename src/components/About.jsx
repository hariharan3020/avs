import React from 'react';
import {
    Users, RefreshCw, Lightbulb, CheckCircle2,
    Target, Share2, GraduationCap, Building2,
    Globe, Truck, Camera, Plane, Mic
} from 'lucide-react';

const About = () => {
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

    return (
        <section id="about" style={{ padding: '80px 0', background: '#f8fbff' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                {/* Section Heading */}
                <h2 className="hero-title" style={{ fontSize: '3.6rem', marginBottom: '15px', textTransform: 'uppercase' }}>
                    About Us
                </h2>
                <div style={{ width: '80px', height: '4px', background: 'var(--primary-orange)', margin: '0 auto 20px auto' }}></div>

                {/* Nature of Business */}
                <p style={{
                    color: 'var(--primary-orange)',
                    fontWeight: '800',
                    fontSize: '1.2rem',
                    textTransform: 'uppercase',
                    letterSpacing: '2px',
                    marginBottom: '60px'
                }}>
                    Nature of Business: Consultancy Services
                </p>

                {/* Main Card */}
                <div className="reveal active" style={{
                    maxWidth: '1000px',
                    margin: '0 auto 80px auto',
                    background: '#fff',
                    borderRadius: '20px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.05)',
                    padding: '50px 40px',
                    position: 'relative',
                    borderTop: '6px solid var(--primary-orange)'
                }}>
                    <h3 className="hero-title" style={{ fontSize: '2.4rem', marginBottom: '30px' }}>
                        AVS BUSINESS MANAGEMENT CONSULTANTS
                    </h3>
                    <p style={{
                        color: '#555',
                        fontSize: '1.2rem',
                        lineHeight: '1.8',
                        maxWidth: '850px',
                        margin: '0 auto'
                    }}>
                        At AVS BUSINESS MANAGEMENT CONSULTANTS, we specialize in driving business success with expert consulting,
                        mentorship, and strategic transformation. Whether you're a startup, a growing enterprise, or an established
                        business, we offer tailored solutions to help you optimize operations, realign resources, and scale new heights.
                    </p>
                </div>

                {/* Service Excellence Section */}
                <div style={{ marginTop: '100px' }}>
                    <h3 className="hero-title" style={{ fontSize: '2.2rem', marginBottom: '50px' }}>
                        Our Service Excellence
                    </h3>

                    <div className="grid grid-3" style={{ gap: '30px' }}>
                        {serviceExcellence.map((service, index) => (
                            <div key={index} className="reveal active" style={{
                                background: '#fff',
                                borderRadius: '25px',
                                padding: '40px',
                                textAlign: 'left',
                                boxShadow: '0 15px 35px rgba(0,0,0,0.05)',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '20px',
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

                {/* CTA Banner */}
                <div className="reveal active" style={{
                    marginTop: '80px',
                    background: 'var(--dark-blue)',
                    borderRadius: '25px',
                    padding: '60px 40px',
                    textAlign: 'center',
                    boxShadow: '0 20px 50px rgba(10, 29, 55, 0.2)'
                }}>
                    <p style={{
                        color: 'white',
                        fontSize: '1.1rem',
                        lineHeight: '1.6',
                        maxWidth: '900px',
                        margin: '0 auto 30px auto',
                        fontWeight: '400'
                    }}>
                        At AVS BUSINESS MANAGEMENT CONSULTANTS, we believe in innovation, excellence, and strategic growth to
                        help businesses thrive in a competitive landscape. Let's collaborate and take your business to the next level!
                    </p>
                    <p style={{
                        color: 'var(--primary-orange)',
                        fontSize: '1.4rem',
                        fontWeight: '800',
                        marginBottom: '40px',
                        fontFamily: 'Playfair Display, serif'
                    }}>
                        Contact us today to explore endless possibilities!
                    </p>
                    <a href="#enquiry" className="nav-btn-orange" style={{
                        padding: '15px 40px',
                        fontSize: '1rem'
                    }}>
                        GET IN TOUCH
                    </a>
                </div>
            </div>
        </section>
    );
};

export default About;
