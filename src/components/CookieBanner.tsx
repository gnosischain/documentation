import React, { useState, useEffect } from 'react';

const CookieBanner: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const hasAccepted = localStorage.getItem('cookies-accepted');
        if (!hasAccepted) {
            setIsVisible(true);
        }
    }, []);

     const handleAccept = () => {
         localStorage.setItem('cookies-accepted', 'true');
         setIsVisible(false);
         
         window.dispatchEvent(new StorageEvent('storage', {
             key: 'cookies-accepted',
             newValue: 'true'
         }));
     };

    const handleReject = () => {
        localStorage.setItem('cookies-accepted', 'rejected');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div style={{
            position: 'fixed',
            bottom: '2rem',
            left: '2rem',
            backgroundColor: '#000',
            color: 'white',
            padding: '2rem',
            borderRadius: '8px',
            maxWidth: '400px',
            zIndex: 9999,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)'
        }}>
            <h3 style={{
                fontSize: '1.5rem',
                fontWeight: 'bold',
                margin: '0 0 1rem 0'
            }}>
                Cookie Settings
            </h3>

            <span style={{
                fontSize: '0.9rem',
                lineHeight: '1.5',
                marginBottom: '1.5rem',
                color: '#e0e0e0',
            }}>
                We use tracking technologies to collect data relating to you to perform analytics. By clicking on Accept you consent to this and to the sharing of this data with our partners. You can change your mind at any time. To read more about our practices, please see our{' '}
                <a
                    href="https://www.gnosis.io/legal/cookie-policy"
                    style={{
                        color: '#4ade80',
                        textDecoration: 'none',
                        display: 'inline',
                        padding: '0'
                    }}
                >
                    Cookie Policy
                </a>.
            </span>

            <div style={{
                display: 'flex',
                marginTop: '1rem',
                gap: '0.5rem'
            }}>
                <button
                    onClick={handleReject}
                    style={{
                        backgroundColor: '#666',
                        color: 'white',
                        border: 'none',
                        padding: '0.7rem 1.5rem',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        cursor: 'pointer',
                        borderRadius: '4px'
                    }}
                >
                    Reject
                </button>
                <button
                    onClick={handleAccept}
                    style={{
                        backgroundColor: 'white',
                        color: 'black',
                        border: 'none',
                        padding: '0.7rem 1.5rem',
                        fontSize: '0.9rem',
                        fontWeight: '500',
                        cursor: 'pointer',
                        borderRadius: '4px'
                    }}
                >
                    Accept
                </button>
            </div>
        </div>
    );
};

export default CookieBanner;
