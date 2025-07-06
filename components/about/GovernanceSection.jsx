"use client"
import React, { useEffect, useRef, useState } from 'react';

const GovernanceSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [cardsVisible, setCardsVisible] = useState([false, false, false]);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);

                    // Trigger cards animation after title/subtitle
                    setTimeout(() => {
                        cardsVisible.forEach((_, index) => {
                            setTimeout(() => {
                                setCardsVisible(prev => {
                                    const newState = [...prev];
                                    newState[index] = true;
                                    return newState;
                                });
                            }, index * 200); // Stagger each card by 200ms
                        });
                    }, 600);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={sectionRef} className="bg-pink-50 py-16 px-6 font-gill-sans">
            <div className="max-w-6xl mx-auto">
                {/* Title */}
                <h2 className={`text-5xl font-bold text-center text-mainColor mb-8 transition-all duration-1000 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                }`}>
                    Let's Talk Governance
                </h2>

                {/* Subtitle */}
                <p className={`text-center text-gray-700 text-lg mb-12 max-w-4xl mx-auto transition-all duration-1000 ease-out delay-300 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}>
                    Whether you're building from the ground up or refining existing frameworks, our consultants are ready to help.
                </p>

                {/* Cards Container */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Book a Consultation Card */}
                    <div className={`bg-white rounded-lg border-2 border-mainColor p-4 text-center transition-all duration-700 ease-out hover:scale-105 hover:shadow-xl hover:border-mainColor/80 ${
                        cardsVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}>
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                            Book a Consultation
                        </h3>
                        <div className={`mb-4 transition-all duration-500 ease-out delay-200 ${
                            cardsVisible[0] ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-0 rotate-45'
                        }`}>
                            <svg className="w-12 h-12 mx-auto text-mainColor transition-all duration-300 ease-out hover:scale-110 hover:text-mainColor/80" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                            </svg>
                        </div>
                        <p className={`text-gray-600 transition-all duration-500 ease-out delay-400 ${
                            cardsVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}>
                            43 Twycross Road, Wokingham Berkshire
                        </p>
                    </div>

                    {/* Call us Today Card */}
                    <div className={`bg-white rounded-lg border-2 border-mainColor p-4 text-center transition-all duration-700 ease-out hover:scale-105 hover:shadow-xl hover:border-mainColor/80 ${
                        cardsVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}>
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                            Call us Today!
                        </h3>
                        <div className={`mb-4 transition-all duration-500 ease-out delay-200 ${
                            cardsVisible[1] ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-0 rotate-45'
                        }`}>
                            <svg className="w-12 h-12 mx-auto text-mainColor transition-all duration-300 ease-out hover:scale-110 hover:text-mainColor/80" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                            </svg>
                        </div>
                        <p className={`text-gray-600 transition-all duration-500 ease-out delay-400 ${
                            cardsVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}>
                            +44 7981 235652
                        </p>
                    </div>

                    {/* Email Card */}
                    <div className={`bg-white rounded-lg border-2 border-mainColor p-4 text-center transition-all duration-700 ease-out hover:scale-105 hover:shadow-xl hover:border-mainColor/80 ${
                        cardsVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}>
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                            Email
                        </h3>
                        <div className={`mb-4 transition-all duration-500 ease-out delay-200 ${
                            cardsVisible[2] ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-0 rotate-45'
                        }`}>
                            <svg className="w-12 h-12 mx-auto text-mainColor transition-all duration-300 ease-out hover:scale-110 hover:text-mainColor/80" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                            </svg>
                        </div>
                        <p className={`text-gray-600 transition-all duration-500 ease-out delay-400 ${
                            cardsVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}>
                            info@handelconsultancy.co.uk
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GovernanceSection;