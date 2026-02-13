import React, { useState } from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <section id="feedback" style={{ padding: '40px 0', background: '#222' }}>
            <div className="container">
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '25px' }}>
                    <h2 className="hero-title" style={{
                        fontSize: '2.1rem',
                        color: 'white',
                        textTransform: 'uppercase',
                        marginBottom: '10px',
                        letterSpacing: '2px'
                    }}>
                        Feedbacks
                    </h2>
                    <div style={{ width: '60px', height: '4px', background: 'var(--primary-orange)', margin: '0 auto' }}></div>
                </div>

                {/* Feedback Form Card */}
                <div className="reveal active" style={{
                    maxWidth: '650px',
                    margin: '0 auto',
                    background: '#2a2a2a',
                    borderRadius: '20px',
                    padding: '30px 35px',
                    border: '2px solid rgba(255, 115, 0, 0.3)',
                    boxShadow: '0 25px 50px rgba(0,0,0,0.3)'
                }}>
                    <h3 style={{
                        color: 'white',
                        fontSize: '1.4rem',
                        fontWeight: '700',
                        marginBottom: '25px',
                        fontFamily: 'Outfit, sans-serif'
                    }}>
                        Give Feedback
                    </h3>

                    <form style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                        {/* Name Input */}
                        <input
                            type="text"
                            placeholder="Enter Full Name"
                            style={{
                                padding: '12px 18px',
                                borderRadius: '12px',
                                border: 'none',
                                background: 'white',
                                fontSize: '0.95rem',
                                color: '#333',
                                outline: 'none',
                                width: '100%'
                            }}
                        />

                        {/* Feedback Textarea */}
                        <textarea
                            placeholder="Enter your feedback"
                            rows="4"
                            style={{
                                padding: '12px 18px',
                                borderRadius: '12px',
                                border: 'none',
                                background: 'white',
                                fontSize: '0.95rem',
                                color: '#333',
                                outline: 'none',
                                resize: 'none',
                                width: '100%'
                            }}
                        ></textarea>

                        {/* Star Rating Container */}
                        <div style={{
                            background: 'transparent',
                            borderRadius: '12px',
                            padding: '20px 12px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '15px'
                        }}>
                            {[...Array(5)].map((_, index) => {
                                const ratingValue = index + 1;
                                const isActive = ratingValue <= (hover || rating);
                                return (
                                    <label key={index} style={{ cursor: 'pointer' }}>
                                        <input
                                            type="radio"
                                            name="rating"
                                            style={{ display: 'none' }}
                                            value={ratingValue}
                                            onClick={() => setRating(ratingValue)}
                                        />
                                        <Star
                                            className="feedback-star"
                                            size={40}
                                            style={{
                                                cursor: 'pointer',
                                                transition: 'all 0.3s ease',
                                                transform: isActive ? 'scale(1.1)' : 'scale(1)',
                                                filter: isActive ? 'drop-shadow(0 0 8px rgba(255, 193, 7, 0.6))' : 'none'
                                            }}
                                            color={isActive ? "#ffc107" : "#555"}
                                            strokeWidth={2}
                                            onMouseEnter={() => setHover(ratingValue)}
                                            onMouseLeave={() => setHover(0)}
                                            fill={isActive ? "url(#starGradient)" : "transparent"}
                                        />
                                    </label>
                                );
                            })}
                            {/* SVG Gradient Definition */}
                            <svg width="0" height="0" style={{ position: 'absolute' }}>
                                <defs>
                                    <linearGradient id="starGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" style={{ stopColor: '#ffd700', stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: '#ffaa00', stopOpacity: 1 }} />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>


                        {/* Submit Button */}
                        <button
                            type="submit"
                            style={{
                                background: 'var(--primary-orange)',
                                color: 'white',
                                border: 'none',
                                padding: '12px',
                                borderRadius: '12px',
                                fontSize: '0.95rem',
                                fontWeight: '700',
                                cursor: 'pointer',
                                transition: '0.3s',
                                marginTop: '5px',
                                boxShadow: '0 10px 20px rgba(255, 115, 0, 0.2)'
                            }}
                            onMouseOver={(e) => e.target.style.transform = 'translateY(-3px)'}
                            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
                        >
                            Submit Feedback
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
