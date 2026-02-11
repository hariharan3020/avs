import React from 'react';
import { Send } from 'lucide-react';

const Enquiry = () => {
    return (
        <section id="enquiry" style={{ padding: '60px 0', background: '#f8fbff' }}>
            <div className="container">
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 className="hero-title" style={{
                        fontSize: '2.4rem',
                        color: 'var(--dark-blue)',
                        marginBottom: '15px'
                    }}>
                        Enquiry Form
                    </h2>
                    <div style={{ width: '80px', height: '4px', background: 'var(--primary-orange)', margin: '0 auto' }}></div>
                </div>

                {/* Form Card */}
                <div className="reveal active" style={{
                    maxWidth: '700px',
                    margin: '0 auto',
                    background: '#fff',
                    borderRadius: '20px',
                    padding: '40px 50px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.03)'
                }}>
                    <h3 style={{
                        color: 'var(--dark-blue)',
                        fontSize: '1.8rem',
                        fontWeight: '700',
                        marginBottom: '30px',
                        fontFamily: 'Outfit, sans-serif'
                    }}>
                        Send a Message
                    </h3>

                    <form style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                        {/* Full Name */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <label style={{ fontWeight: '800', fontSize: '0.9rem', color: 'var(--dark-blue)', textTransform: 'none' }}>Full Name</label>
                            <input
                                type="text"
                                placeholder="Dr. John Doe"
                                style={{
                                    padding: '15px 20px',
                                    borderRadius: '10px',
                                    border: '1px solid #eee',
                                    background: '#fcfcfc',
                                    fontSize: '1rem',
                                    outline: 'none',
                                    color: '#555'
                                }}
                            />
                        </div>

                        {/* Email Address */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <label style={{ fontWeight: '800', fontSize: '0.9rem', color: 'var(--dark-blue)', textTransform: 'none' }}>Email Address</label>
                            <input
                                type="email"
                                placeholder="john@example.com"
                                style={{
                                    padding: '15px 20px',
                                    borderRadius: '10px',
                                    border: '1px solid #eee',
                                    background: '#fcfcfc',
                                    fontSize: '1rem',
                                    outline: 'none',
                                    color: '#555'
                                }}
                            />
                        </div>

                        {/* Phone Number */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <label style={{ fontWeight: '800', fontSize: '0.9rem', color: 'var(--dark-blue)', textTransform: 'none' }}>Phone Number</label>
                            <input
                                type="tel"
                                placeholder="+91-0000000000"
                                style={{
                                    padding: '15px 20px',
                                    borderRadius: '10px',
                                    border: '1px solid #eee',
                                    background: '#fcfcfc',
                                    fontSize: '1rem',
                                    outline: 'none',
                                    color: '#555'
                                }}
                            />
                        </div>

                        {/* Message */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <label style={{ fontWeight: '800', fontSize: '0.9rem', color: 'var(--dark-blue)', textTransform: 'none' }}>Message</label>
                            <textarea
                                placeholder="How can we assist you?"
                                rows="5"
                                style={{
                                    padding: '15px 20px',
                                    borderRadius: '10px',
                                    border: '1px solid #eee',
                                    background: '#fcfcfc',
                                    fontSize: '1rem',
                                    outline: 'none',
                                    color: '#555',
                                    resize: 'none',
                                    fontFamily: 'inherit'
                                }}
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            style={{
                                background: 'var(--primary-orange)',
                                color: 'white',
                                border: 'none',
                                padding: '15px',
                                borderRadius: '10px',
                                fontSize: '0.95rem',
                                fontWeight: '800',
                                cursor: 'pointer',
                                transition: '0.3s',
                                marginTop: '5px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '10px',
                                textTransform: 'uppercase',
                                letterSpacing: '1px'
                            }}
                            onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
                            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
                        >
                            <Send size={20} /> SUBMIT ENQUIRY
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Enquiry;
