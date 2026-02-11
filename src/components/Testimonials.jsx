import React, { useState } from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <section id="feedback" style={{ padding: '60px 0', background: '#222' }}>
            <div className="container">
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 className="hero-title" style={{
                        fontSize: '2.4rem',
                        color: 'white',
                        textTransform: 'uppercase',
                        marginBottom: '20px',
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
                    padding: '35px 40px',
                    border: '2px solid rgba(255, 115, 0, 0.3)',
                    boxShadow: '0 25px 50px rgba(0,0,0,0.3)'
                }}>
                    <h3 style={{
                        color: 'white',
                        fontSize: '1.6rem',
                        fontWeight: '700',
                        marginBottom: '35px',
                        fontFamily: 'Outfit, sans-serif'
                    }}>
                        Give Feedback
                    </h3>

                    <form style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                        {/* Star Rating Container */}
                        <div style={{
                            background: 'white',
                            borderRadius: '12px',
                            padding: '15px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            gap: '10px'
                        }}>
                            {[...Array(5)].map((_, index) => {
                                const ratingValue = index + 1;
                                return (
                                    <label key={index}>
                                        <input
                                            type="radio"
                                            name="rating"
                                            style={{ display: 'none' }}
                                            value={ratingValue}
                                            onClick={() => setRating(ratingValue)}
                                        />
                                        <Star
                                            className="feedback-star"
                                            size={32}
                                            style={{ cursor: 'pointer', transition: '0.2s' }}
                                            color={(ratingValue <= (hover || rating)) ? "#ffc107" : "#e4e5e9"}
                                            onMouseEnter={() => setHover(ratingValue)}
                                            onMouseLeave={() => setHover(0)}
                                            fill={(ratingValue <= (hover || rating)) ? "#ffc107" : "transparent"}
                                        />
                                    </label>
                                );
                            })}
                        </div>

                        {/* Name Input */}
                        <input
                            type="text"
                            placeholder="Enter Full Name"
                            style={{
                                padding: '15px 20px',
                                borderRadius: '12px',
                                border: 'none',
                                background: 'white',
                                fontSize: '1rem',
                                color: '#333',
                                outline: 'none'
                            }}
                        />

                        {/* Feedback Textarea */}
                        <textarea
                            placeholder="Enter your feedback"
                            rows="5"
                            style={{
                                padding: '15px 20px',
                                borderRadius: '12px',
                                border: 'none',
                                background: 'white',
                                fontSize: '1rem',
                                color: '#333',
                                outline: 'none',
                                resize: 'none'
                            }}
                        ></textarea>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            style={{
                                background: 'var(--primary-orange)',
                                color: 'white',
                                border: 'none',
                                padding: '15px',
                                borderRadius: '12px',
                                fontSize: '1.1rem',
                                fontWeight: '700',
                                cursor: 'pointer',
                                transition: '0.3s',
                                marginTop: '10px',
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
