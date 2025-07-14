"use client"
import React, { useEffect, useRef, useState } from 'react';

const GovernanceSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [cardVisible, setCardVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);

                    // Trigger card animation after title/subtitle
                    setTimeout(() => {
                        setCardVisible(true);
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

                {/* Email Card Container */}
                <div className="flex justify-center">
                    <div className={`bg-white rounded-lg border-2 border-mainColor p-6 text-center max-w-2xl w-full transition-all duration-700 ease-out hover:scale-105 hover:shadow-xl hover:border-mainColor/80 ${
                        cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}>
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">
                            Email
                        </h3>
                        <div className={`mb-4 transition-all duration-500 ease-out delay-200 ${
                            cardVisible ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-0 rotate-45'
                        }`}>
                            <svg className="w-12 h-12 mx-auto text-mainColor transition-all duration-300 ease-out hover:scale-110 hover:text-mainColor/80" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                            </svg>
                        </div>
                        <p className={`text-gray-600 transition-all duration-500 ease-out delay-400 ${
                            cardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}>
                            info@handselconsultancy.co.uk
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GovernanceSection;