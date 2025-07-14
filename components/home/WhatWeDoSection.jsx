"use client";
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import ArchitectureImage from '@/public/assets/architecture-image.jpg';
import CorporateIcon from '@/public/assets/corporate-icon.png';
import CyberIcon from '@/public/assets/cyber-icon.png';
import AIIcon from '@/public/assets/ai-icon.png';

const WhatWeDoSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [cardsVisible, setCardsVisible] = useState([false, false, false]);
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.01 } // Changed from 0.1 to 0.01 for earlier trigger
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const cardObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = parseInt(entry.target.dataset.index);
                        setTimeout(() => {
                            setCardsVisible(prev => {
                                const newState = [...prev];
                                newState[index] = true;
                                return newState;
                            });
                        }, index * 200); // Stagger animation
                    }
                });
            },
            { threshold: 0.1 } // You can also reduce this if cards need earlier trigger
        );

        cardsRef.current.forEach((card) => {
            if (card) cardObserver.observe(card);
        });

        return () => cardObserver.disconnect();
    }, []);

    return (
        <div className="relative font-gill-sans">
            {/* Gradient Transition Section */}
            <div className="h-18 bg-gradient-to-r from-mainColor to-white"></div>

            {/* Overlapping White Section */}
            <div className="relative -mt-12">
                <div className="bg-white shadow-xl p-6 sm:p-8 md:p-12">
                    <div className="flex flex-col lg:flex-row justify-center lg:space-x-16 items-center space-y-8 lg:space-y-0">
                        {/* Left Content */}
                        <div className="w-full lg:w-[522px] lg:h-[150px]">
                            <p className="text-[16px] sm:text-[18px] text-black leading-[28px] sm:leading-[30px] text-center lg:text-left">
                                We help organizations lead with confidence through world-class
                                governance in the corporate, cyber, and AI arenas. Whether you're
                                navigating regulatory complexity, digital transformation, or emerging
                                technologies—we deliver the frameworks, insight, and oversight that
                                drive performance and protect reputation.
                            </p>
                        </div>

                        {/* Right Image - Responsive - REMOVED lg:-mb-28 */}
                        <div>
                            <div className="relative rounded-2xl overflow-hidden border-4 border-mainColor/20 shadow-lg max-w-sm mx-auto hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-out">
                                <Image
                                    src={ArchitectureImage}
                                    alt="Modern architecture representing governance"
                                    width={120}
                                    height={120}
                                    className="h-[220px] w-[220px] sm:h-[260px] sm:w-[260px] lg:h-[300px] lg:w-[300px] object-cover transition-transform duration-500 ease-out hover:scale-110"
                                />
                                {/* Fading border effect */}
                                <div className="absolute inset-0 border-2 border-mainColor/40 rounded-2xl"></div>
                                <div className="absolute inset-1 border border-mainColor/20 rounded-2xl"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Pink Section - Increased top padding for better spacing */}
            <div ref={sectionRef} className="bg-mainColor pt-24 pb-12 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                {/* What We Do Header */}
                <div className={`ml-0 sm:ml-8 md:ml-16 lg:ml-32 mb-8 md:mb-12 transition-all duration-1000 ease-out delay-200 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}>
                    <h2 className="text-2xl sm:text-3xl lg:text-[48px] font-extrabold text-white mb-4 text-center sm:text-left">
                        What We Do
                    </h2>
                </div>

                {/* Three Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8">
                    {/* Corporate Governance */}
                    <div
                        ref={el => cardsRef.current[0] = el}
                        data-index="0"
                        className={`text-white space-y-6 transition-all duration-700 ease-out hover:transform hover:scale-105 ${
                            cardsVisible[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                        }`}
                    >
                        <div className="w-12 h-12 sm:w-16 sm:h-16 mb-6 mx-auto md:mx-0 transition-transform duration-300 ease-out hover:scale-110 hover:rotate-6">
                            <Image
                                src={CorporateIcon}
                                alt="Corporate Governance Icon"
                                width={64}
                                height={64}
                                className="w-full h-full filter brightness-0"
                            />
                        </div>

                        <div className="font-semibold text-center md:text-left">
                            <h3 className="text-xl sm:text-2xl font-bold">Corporate Governance</h3>
                            <p className="text-xl sm:text-2xl mb-4 sm:mb-6">
                                Build a foundation of trust and accountability.
                            </p>
                            <p className="text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                                We guide boards and executives in aligning governance structures with strategy, ethics,
                                and stakeholder expectations. From compliance to ESG integration, we help you
                                lead transparently and effectively.
                            </p>
                            <button className="flex items-center text-white hover:text-white/80 transition-all duration-300 group mx-auto md:mx-0 hover:translate-x-2">
                                <span className="mr-2 font-medium">Discover</span>
                                <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300"
                                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Cyber Governance */}
                    <div
                        ref={el => cardsRef.current[1] = el}
                        data-index="1"
                        className={`text-white space-y-6 border-l border-r border-black px-4 md:px-8 transition-all duration-700 ease-out hover:transform hover:scale-105 ${
                            cardsVisible[1] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                        }`}
                    >
                        <div className="w-12 h-12 sm:w-16 sm:h-16 mb-6 mx-auto md:mx-0 transition-transform duration-300 ease-out hover:scale-110 hover:rotate-6">
                            <Image
                                src={CyberIcon}
                                alt="Cyber Governance Icon"
                                width={64}
                                height={64}
                                className="w-full h-full filter brightness-0"
                            />
                        </div>

                        <div className="font-semibold text-center md:text-left">
                            <h3 className="text-xl sm:text-2xl font-bold">Cyber Governance</h3>
                            <p className="text-xl sm:text-2xl mb-4 sm:mb-6">
                                Protect your digital assets and reputation.
                            </p>
                            <p className="text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 opacity-90">
                                In a world of rising cyber threats, we design cyber governance frameworks that bring
                                security to the boardroom. From risk oversight to policy development, we align
                                cybersecurity with business resilience.
                            </p>
                            <button className="flex items-center text-white hover:text-white/80 transition-all duration-300 group mx-auto md:mx-0 hover:translate-x-2">
                                <span className="mr-2 font-medium">Discover</span>
                                <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300"
                                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* AI Governance */}
                    <div
                        ref={el => cardsRef.current[2] = el}
                        data-index="2"
                        className={`text-white space-y-6 transition-all duration-700 ease-out hover:transform hover:scale-105 ${
                            cardsVisible[2] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                        }`}
                    >
                        <div className="w-12 h-12 sm:w-16 sm:h-16 mb-6 mx-auto md:mx-0 transition-transform duration-300 ease-out hover:scale-110 hover:rotate-6">
                            <Image
                                src={AIIcon}
                                alt="AI Governance Icon"
                                width={64}
                                height={64}
                                className="w-full h-full filter brightness-0"
                            />
                        </div>

                        <div className="font-semibold text-center md:text-left">
                            <h3 className="text-xl sm:text-2xl font-bold">AI Governance</h3>
                            <p className="text-xl sm:text-2xl mb-4 sm:mb-6">
                                Drive responsible and compliant AI adoption.
                            </p>
                            <p className="text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 opacity-90">
                                We help you harness the power of AI—ethically, safely, and at scale. Our AI
                                governance services address transparency, bias, accountability, and emerging regulations
                                like the EU AI Act.
                            </p>
                            <button className="flex items-center text-white hover:text-white/80 transition-all duration-300 group mx-auto md:mx-0 hover:translate-x-2">
                                <span className="mr-2 font-medium">Discover</span>
                                <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300"
                                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatWeDoSection;