"use client"
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import OfficeImage from '@/public/assets/office-meeting.jpg';

const CorporateGovernanceSection = () => {
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
        <div ref={sectionRef} className="flex mt-56 flex-col lg:flex-row min-h-[30vh] lg:min-h-[50vh] font-gill-sans">
            {/* Left side - Image with overlay (reduced height) */}
            <div className="flex-[3] relative min-h-[20vh] lg:min-h-[30vh] overflow-hidden">
                <Image
                    src={OfficeImage}
                    alt="Corporate meeting room"
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
                <div className={`absolute bottom-6 lg:bottom-16 right-6 lg:right-20 transition-all duration-1000 ease-out delay-500 ${
                    isVisible ? 'opacity-100 translate-y-0 translate-x-0' : 'opacity-0 translate-y-8 translate-x-8'
                }`}>
                    <div className="relative text-right">
                        <h2 className={`text-white text-2xl md:text-3xl lg:text-5xl font-bold italic leading-tight mr-6 lg:mr-12 transition-all duration-1000 ease-out delay-700 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                        }`}>
                            Corporate<br />Governance
                        </h2>
                        {/* White accent bar positioned to the right of text */}
                        <div className={`absolute -top-2 lg:-top-4 -right-2 lg:-right-4 w-3 lg:w-6 h-20 lg:h-32 bg-[#FDF2FA] transition-all duration-800 ease-out delay-600 ${
                            isVisible ? 'opacity-100 scale-y-100 translate-x-0' : 'opacity-0 scale-y-0 translate-x-4'
                        }`}></div>
                    </div>
                </div>
            </div>

            {/* Right side - Content */}
            <div className="flex-[2] bg-[#FDF2FA] p-6 md:p-8 lg:p-12 flex flex-col justify-center font-[500]">
                <div className="max-w-2xl">
                    <p className={`text-gray-800 text-base lg:text-lg leading-relaxed mb-6 lg:mb-8 transition-all duration-1000 ease-out ${
                        contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}>
                        Strong corporate governance lays the foundation for long-term success and stakeholder confidence.
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
                                <span className="text-sm lg:text-base transition-all duration-300 ease-out hover:text-opacity-80">We help organizations build robust governance frameworks that support ethical leadership, transparent decision-making, and accountable performance. Our services include:</span>
                            </li>
                            <li className={`flex items-start ml-3 lg:ml-6 transition-all duration-600 ease-out hover:translate-x-2 hover:scale-105 ${
                                listItemsVisible[1] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                            }`}>
                                <span className={`text-black mr-3 text-lg transition-all duration-300 ease-out ${
                                    listItemsVisible[1] ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
                                }`}>•</span>
                                <span className="text-sm lg:text-base transition-all duration-300 ease-out hover:text-opacity-80">Board structure and effectiveness assessments</span>
                            </li>
                            <li className={`flex items-start ml-3 lg:ml-6 transition-all duration-600 ease-out hover:translate-x-2 hover:scale-105 ${
                                listItemsVisible[2] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                            }`}>
                                <span className={`text-black mr-3 text-lg transition-all duration-300 ease-out ${
                                    listItemsVisible[2] ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
                                }`}>•</span>
                                <span className="text-sm lg:text-base transition-all duration-300 ease-out hover:text-opacity-80">Governance policy design and implementation</span>
                            </li>
                            <li className={`flex items-start ml-3 lg:ml-6 transition-all duration-600 ease-out hover:translate-x-2 hover:scale-105 ${
                                listItemsVisible[3] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                            }`}>
                                <span className={`text-black mr-3 text-lg transition-all duration-300 ease-out ${
                                    listItemsVisible[3] ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
                                }`}>•</span>
                                <span className="text-sm lg:text-base transition-all duration-300 ease-out hover:text-opacity-80">Compliance with regulatory and shareholder expectations</span>
                            </li>
                            <li className={`flex items-start ml-3 lg:ml-6 transition-all duration-600 ease-out hover:translate-x-2 hover:scale-105 ${
                                listItemsVisible[4] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                            }`}>
                                <span className={`text-black mr-3 text-lg transition-all duration-300 ease-out ${
                                    listItemsVisible[4] ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
                                }`}>•</span>
                                <span className="text-sm lg:text-base transition-all duration-300 ease-out hover:text-opacity-80">ESG integration into governance practices</span>
                            </li>
                            <li className={`flex items-start ml-3 lg:ml-6 transition-all duration-600 ease-out hover:translate-x-2 hover:scale-105 ${
                                listItemsVisible[5] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                            }`}>
                                <span className={`text-black mr-3 text-lg transition-all duration-300 ease-out ${
                                    listItemsVisible[5] ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
                                }`}>•</span>
                                <span className="text-sm lg:text-base transition-all duration-300 ease-out hover:text-opacity-80">Risk management and oversight support</span>
                            </li>
                        </ul>
                    </div>

                    <p className={`text-gray-800 text-sm lg:text-base leading-relaxed transition-all duration-1000 ease-out delay-600 ${
                        contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}>
                        We partner with boards, executives, and governance committees to embed governance best practices tailored to your industry and regulatory environment.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CorporateGovernanceSection;