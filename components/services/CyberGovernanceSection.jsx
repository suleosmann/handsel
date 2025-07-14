"use client"
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import CyberImage from '@/public/assets/cyber-security.jpg';

const CyberGovernanceSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [contentVisible, setContentVisible] = useState(false);
    const [listItemsVisible, setListItemsVisible] = useState([false, false, false, false, false, false]);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);

                    // Trigger content animation after image
                    setTimeout(() => {
                        setContentVisible(true);
                    }, 400);

                    // Trigger list items stagger animation
                    setTimeout(() => {
                        listItemsVisible.forEach((_, index) => {
                            setTimeout(() => {
                                setListItemsVisible(prev => {
                                    const newState = [...prev];
                                    newState[index] = true;
                                    return newState;
                                });
                            }, index * 150);
                        });
                    }, 800);
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
        <div ref={sectionRef} className="flex flex-col lg:flex-row min-h-[30vh] lg:min-h-[50vh] font-gill-sans">
            {/* Left side - Content */}
            <div className="flex-1 bg-white p-6 md:p-8 lg:p-12 flex flex-col items-center justify-center font-[500] order-2 lg:order-1">
                <div className="max-w-2xl">
                    <p className={`text-gray-800 text-base lg:text-lg leading-relaxed mb-6 lg:mb-8 transition-all duration-1000 ease-out ${
                        contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}>
                        In the digital era, cyber governance is essential to protect value, ensure resilience, and maintain trust.
                    </p>

                    <div className={`space-y-4 mb-6 lg:mb-8 transition-all duration-800 ease-out delay-200 ${
                        contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}>
                        <ul className="space-y-3 text-gray-800">
                            <li className={`flex items-start ml-3 lg:ml-6 transition-all duration-600 ease-out hover:translate-x-2 hover:scale-105 ${
                                listItemsVisible[0] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                            }`}>
                                <span className={`text-black mr-3 text-lg transition-all duration-300 ease-out ${
                                    listItemsVisible[0] ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
                                }`}>•</span>
                                <span className="text-sm lg:text-base transition-all duration-300 ease-out hover:text-opacity-80">We guide organizations in developing governance structures that support effective cybersecurity oversight and digital risk management. Our approach includes:</span>
                            </li>
                            <li className={`flex items-start ml-3 lg:ml-6 transition-all duration-600 ease-out hover:translate-x-2 hover:scale-105 ${
                                listItemsVisible[1] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                            }`}>
                                <span className={`text-black mr-3 text-lg transition-all duration-300 ease-out ${
                                    listItemsVisible[1] ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
                                }`}>•</span>
                                <span className="text-sm lg:text-base transition-all duration-300 ease-out hover:text-opacity-80">Cybersecurity governance frameworks aligned with global standards (e.g., NIST, ISO/IEC 27001)</span>
                            </li>
                            <li className={`flex items-start ml-3 lg:ml-6 transition-all duration-600 ease-out hover:translate-x-2 hover:scale-105 ${
                                listItemsVisible[2] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                            }`}>
                                <span className={`text-black mr-3 text-lg transition-all duration-300 ease-out ${
                                    listItemsVisible[2] ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
                                }`}>•</span>
                                <span className="text-sm lg:text-base transition-all duration-300 ease-out hover:text-opacity-80">Board-level cyber risk reporting and oversight support</span>
                            </li>
                            <li className={`flex items-start ml-3 lg:ml-6 transition-all duration-600 ease-out hover:translate-x-2 hover:scale-105 ${
                                listItemsVisible[3] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                            }`}>
                                <span className={`text-black mr-3 text-lg transition-all duration-300 ease-out ${
                                    listItemsVisible[3] ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
                                }`}>•</span>
                                <span className="text-sm lg:text-base transition-all duration-300 ease-out hover:text-opacity-80">Policy development around data privacy, access control, and incident response</span>
                            </li>
                            <li className={`flex items-start ml-3 lg:ml-6 transition-all duration-600 ease-out hover:translate-x-2 hover:scale-105 ${
                                listItemsVisible[4] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                            }`}>
                                <span className={`text-black mr-3 text-lg transition-all duration-300 ease-out ${
                                    listItemsVisible[4] ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
                                }`}>•</span>
                                <span className="text-sm lg:text-base transition-all duration-300 ease-out hover:text-opacity-80">Integration of cybersecurity into enterprise risk management (ERM)</span>
                            </li>
                            <li className={`flex items-start ml-3 lg:ml-6 transition-all duration-600 ease-out hover:translate-x-2 hover:scale-105 ${
                                listItemsVisible[5] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                            }`}>
                                <span className={`text-black mr-3 text-lg transition-all duration-300 ease-out ${
                                    listItemsVisible[5] ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
                                }`}>•</span>
                                <span className="text-sm lg:text-base transition-all duration-300 ease-out hover:text-opacity-80">Culture and awareness programs to strengthen cyber resilience</span>
                            </li>
                        </ul>
                    </div>

                    <p className={`text-gray-800 text-sm lg:text-base leading-relaxed transition-all duration-1000 ease-out delay-600 ${
                        contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}>
                        Cyber governance isn't just an IT concern—it's a boardroom imperative. We help bridge the gap between technical controls and strategic oversight.
                    </p>
                </div>
            </div>

            {/* Right side - Image with overlay (reduced height) */}
            <div className="flex-1 relative min-h-[20vh] lg:min-h-[30vh] order-1 lg:order-2 overflow-hidden">
                <Image
                    src={CyberImage}
                    alt="Cybersecurity workstation"
                    fill
                    className={`object-cover transition-all duration-1200 ease-out hover:scale-105 ${
                        isVisible ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                    }`}
                />

                {/* MainColor overlay with opacity */}
                <div className={`absolute inset-0 bg-mainColor opacity-30 transition-opacity duration-1000 ease-out delay-300 ${
                    isVisible ? 'opacity-30' : 'opacity-0'
                }`}></div>

                {/* Title overlay */}
                <div className={`absolute bottom-6 lg:bottom-16 left-6 lg:left-20 transition-all duration-1000 ease-out delay-500 ${
                    isVisible ? 'opacity-100 translate-y-0 translate-x-0' : 'opacity-0 translate-y-8 -translate-x-8'
                }`}>
                    <div className="flex items-end text-left">
                        {/* Number 2 accent */}
                        <div className={`text-white text-6xl lg:text-8xl font-bold opacity-50 mr-4 lg:mr-6 transition-all duration-800 ease-out delay-700 ${
                            isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
                        }`}>
                            2
                        </div>
                        <h2 className={`text-white text-2xl md:text-3xl lg:text-5xl font-bold italic leading-tight transition-all duration-1000 ease-out delay-800 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                        }`}>
                            Cyber<br />Governance
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CyberGovernanceSection;