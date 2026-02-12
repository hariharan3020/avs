import React, { useState } from 'react';
import { Smartphone, Copy, Check, ShieldCheck } from 'lucide-react';

const Payment = () => {
    const [copied, setCopied] = useState(null);
    const paymentNumber = "+91-9840783021";

    const handleCopy = (id) => {
        navigator.clipboard.writeText(paymentNumber);
        setCopied(id);
        setTimeout(() => setCopied(null), 2000);
    };

    const paymentMethods = [
        { id: 'gpay', name: 'GOOGLE PAY', color: '#4285F4' },
        { id: 'phonepe', name: 'PHONEPE', color: '#5f259f' },
        { id: 'paytm', name: 'PAYTM', color: '#00baf2' }
    ];

    return (
        <section id="payment" style={{ padding: '60px 0', background: '#f8fbff' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                {/* Header Section */}
                <div style={{ marginBottom: '30px' }}>
                    <p style={{
                        color: 'var(--primary-orange)',
                        fontWeight: '800',
                        fontSize: '0.9rem',
                        letterSpacing: '3px',
                        marginBottom: '10px'
                    }}>
                        SECURE TRANSACTION
                    </p>
                    <h2 className="hero-title" style={{ fontSize: '2.1rem', marginBottom: '10px' }}>
                        Payment Information
                    </h2>
                    <div style={{ width: '60px', height: '4px', background: 'var(--primary-orange)', margin: '0 auto 20px auto' }}></div>
                    <p style={{
                        color: '#666',
                        maxWidth: '700px',
                        margin: '0 auto',
                        fontSize: '1rem',
                        lineHeight: '1.5'
                    }}>
                    </p>
                </div>

                {/* Main Payment Card */}
                <div className="reveal active" style={{
                    maxWidth: '750px',
                    margin: '0 auto',
                    background: '#fff',
                    borderRadius: '20px',
                    padding: '30px 35px',
                    boxShadow: '0 30px 70px rgba(0,0,0,0.04)',
                    textAlign: 'left'
                }}>
                    <div className="flex items-center gap-6" style={{ marginBottom: '25px', flexWrap: 'wrap' }}>
                        <div style={{
                            width: '48px',
                            height: '48px',
                            background: 'linear-gradient(135deg, #ff7300, #ff9100)',
                            borderRadius: '12px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 10px 20px rgba(255, 115, 0, 0.2)'
                        }}>
                            <Smartphone color="white" size={24} />
                        </div>
                        <div>
                            <h3 className="hero-title" style={{ fontSize: '1.5rem', marginBottom: '4px' }}>App Payments</h3>
                            <p style={{ color: '#888', fontSize: '0.9rem', fontWeight: '500' }}>Pay via GPay, PhonePe, or Paytm</p>
                        </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        {paymentMethods.map((method) => (
                            <div key={method.id} style={{
                                background: 'rgba(255, 115, 0, 0.03)',
                                border: '1px solid rgba(255, 115, 0, 0.1)',
                                borderRadius: '15px',
                                padding: '12px 20px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                flexWrap: 'wrap',
                                gap: '10px',
                                transition: '0.3s'
                            }}>
                                <div className="flex items-center gap-4">
                                    <div style={{
                                        width: '36px',
                                        height: '36px',
                                        background: 'white',
                                        borderRadius: '8px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        boxShadow: '0 4px 10px rgba(0,0,0,0.05)',
                                        fontWeight: '900',
                                        fontSize: '0.6rem',
                                        color: method.color
                                    }}>
                                        {method.name.split(' ')[0]}
                                    </div>
                                    <div>
                                        <p style={{
                                            fontSize: '0.8rem',
                                            fontWeight: '800',
                                            color: 'var(--primary-orange)',
                                            margin: 0,
                                            letterSpacing: '1px'
                                        }}>
                                            {method.name}
                                        </p>
                                        <p style={{
                                            fontSize: '1.2rem',
                                            fontWeight: '900',
                                            color: 'var(--dark-blue)',
                                            margin: 0
                                        }}>
                                            {paymentNumber}
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleCopy(method.id)}
                                    style={{
                                        background: 'white',
                                        border: 'none',
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '10px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        color: copied === method.id ? '#4CAF50' : '#888',
                                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                                        transition: '0.3s'
                                    }}
                                >
                                    {copied === method.id ? <Check size={18} /> : <Copy size={18} />}
                                </button>
                            </div>
                        ))}
                    </div>

                    <p style={{
                        marginTop: '30px',
                        textAlign: 'center',
                        color: '#666',
                        fontSize: '0.95rem',
                        fontWeight: '500',
                        opacity: 0.9
                    }}>
                        Once complete, share the acknowledgment via WhatsApp or Email.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Payment;
