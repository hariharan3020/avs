import React from 'react';
import { Send } from 'lucide-react';

const Enquiry = () => {
    return (
        <section id="enquiry" style={{ padding: '50px 0', background: '#f8fbff' }}>
            <div className="container">
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                    <h2 className="hero-title" style={{
                        fontSize: '2rem',
                        color: 'var(--dark-blue)',
                        marginBottom: '8px'
                    }}>
                        Get In Touch
                    </h2>
                    <div style={{ width: '60px', height: '4px', background: 'var(--primary-orange)', margin: '0 auto' }}></div>
                </div>

                {/* Form Card - Two Column Layout */}
                <div className="reveal active" style={{
                    maxWidth: '1000px',
                    margin: '0 auto',
                    background: '#fff',
                    borderRadius: '20px',
                    padding: '35px 40px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.03)'
                }}>
                    <form style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                        {/* Left Column - Contact Fields */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                            {/* Full Name */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ fontWeight: '800', fontSize: '0.85rem', color: 'var(--dark-blue)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Dr. John Doe"
                                    style={{
                                        padding: '12px 16px',
                                        borderRadius: '10px',
                                        border: '1px solid #e0e0e0',
                                        background: '#fafafa',
                                        fontSize: '0.95rem',
                                        outline: 'none',
                                        color: '#333',
                                        transition: '0.3s'
                                    }}
                                />
                            </div>

                            {/* Email Address */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ fontWeight: '800', fontSize: '0.85rem', color: 'var(--dark-blue)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Email Address</label>
                                <input
                                    type="email"
                                    placeholder="john@example.com"
                                    style={{
                                        padding: '12px 16px',
                                        borderRadius: '10px',
                                        border: '1px solid #e0e0e0',
                                        background: '#fafafa',
                                        fontSize: '0.95rem',
                                        outline: 'none',
                                        color: '#333',
                                        transition: '0.3s'
                                    }}
                                />
                            </div>

                            {/* Phone Number */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                <label style={{ fontWeight: '800', fontSize: '0.85rem', color: 'var(--dark-blue)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Phone Number</label>
                                <input
                                    type="tel"
                                    placeholder="+91-0000000000"
                                    style={{
                                        padding: '12px 16px',
                                        borderRadius: '10px',
                                        border: '1px solid #e0e0e0',
                                        background: '#fafafa',
                                        fontSize: '0.95rem',
                                        outline: 'none',
                                        color: '#333',
                                        transition: '0.3s'
                                    }}
                                />
                            </div>
                        </div>

                        {/* Right Column - Message & Submit */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                            {/* Message */}
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', flex: 1 }}>
                                <label style={{ fontWeight: '800', fontSize: '0.85rem', color: 'var(--dark-blue)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Your Message</label>
                                <textarea
                                    placeholder="How can we assist you?"
                                    style={{
                                        padding: '12px 16px',
                                        borderRadius: '10px',
                                        border: '1px solid #e0e0e0',
                                        background: '#fafafa',
                                        fontSize: '0.95rem',
                                        outline: 'none',
                                        color: '#333',
                                        resize: 'none',
                                        fontFamily: 'inherit',
                                        flex: 1,
                                        minHeight: '140px',
                                        transition: '0.3s'
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
                                    padding: '14px',
                                    borderRadius: '10px',
                                    fontSize: '0.9rem',
                                    fontWeight: '800',
                                    cursor: 'pointer',
                                    transition: '0.3s',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '10px',
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    boxShadow: '0 4px 15px rgba(255, 115, 0, 0.2)'
                                }}
                                onMouseOver={(e) => {
                                    e.target.style.transform = 'translateY(-2px)';
                                    e.target.style.boxShadow = '0 6px 20px rgba(255, 115, 0, 0.3)';
                                }}
                                onMouseOut={(e) => {
                                    e.target.style.transform = 'translateY(0)';
                                    e.target.style.boxShadow = '0 4px 15px rgba(255, 115, 0, 0.2)';
                                }}
                            >
                                <Send size={18} /> SEND MESSAGE
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Enquiry;
