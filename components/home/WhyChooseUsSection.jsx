"use client"
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import BusinessImage from '@/public/assets/business-meeting.jpg';

const WhyChooseUsSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [itemsVisible, setItemsVisible] = useState([false, false, false, false]);
    const sectionRef = useRef(null);
    const itemsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    // Trigger list items animation after header animation
                    setTimeout(() => {
                        itemsVisible.forEach((_, index) => {
                            setTimeout(() => {
                                setItemsVisible(prev => {
                                    const newState = [...prev];
                                    newState[index] = true;
                                    return newState;
                                });
                            }, index * 150); // Stagger each item by 150ms
                        });
                    }, 600); // Start after header animation
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="relative h-[70vh] overflow-hidden bg-white font-gill-sans">
            {/* Left side - Image */}
            <div className="absolute inset-0 w-full md:w-[60%]">
                <Image
                    src={BusinessImage}
                    alt="Professional business meeting"
                    fill
                    className={`object-cover transition-all duration-1000 ease-out ${
                        isVisible ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
                    }`}
                    priority
                />
            </div>

            {/* Gradient Overlay - starts from the middle of the image */}
            <div className={`absolute inset-0 bg-black/50 md:bg-transparent md:inset-y-0 md:left-[35%] md:right-0 md:bg-gradient-to-r md:from-transparent md:via-white/85 md:via-[25%] md:to-white md:to-[40%] transition-opacity duration-1000 ease-out delay-300 ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`} />

            {/* Content Container */}
            <div className="relative h-full flex">
                {/* Left side - Clear image area */}
                <div className="hidden md:block md:w-[45%]">
                    {/* This area shows the image clearly */}
                </div>

                {/* Right side - Content area */}
                <div className="w-full md:w-[55%] flex flex-col justify-center">
                    <div className="px-6 sm:px-12 md:pl-20 md:pr-12 max-w-3xl md:-mt-20">
                        <h2 className={`text-[36px] sm:text-[48px] md:text-[56px] font-bold mb-8 md:mb-16 text-white md:text-secondaryColor text-center md:mr-20 transition-all duration-1000 ease-out ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}>
                            Why Choose us
                        </h2>

                        <ul className="space-y-4 md:space-y-6 font-gill-sans text-[16px] sm:text-[18px]">
                            <li
                                ref={el => itemsRef.current[0] = el}
                                className={`flex items-start transition-all duration-700 ease-out transform hover:translate-x-2 hover:scale-105 ${
                                    itemsVisible[0] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                                }`}
                            >
                                <span className={`text-xl md:text-2xl mr-3 md:mr-4 mt-1 text-white md:text-black transition-all duration-300 ease-out ${
                                    itemsVisible[0] ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
                                }`}>•</span>
                                <div className="transition-all duration-300 ease-out hover:text-opacity-80">
                                    <span className="font-bold text-base sm:text-lg italic text-white md:text-black">Deep expertise</span>
                                    <span className="text-white md:text-black"> across legal, regulatory, risk, and technology domains</span>
                                </div>
                            </li>

                            <li
                                ref={el => itemsRef.current[1] = el}
                                className={`flex items-start transition-all duration-700 ease-out transform hover:translate-x-2 hover:scale-105 ${
                                    itemsVisible[1] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                                }`}
                            >
                                <span className={`text-xl md:text-2xl mr-3 md:mr-4 mt-1 text-white md:text-black transition-all duration-300 ease-out ${
                                    itemsVisible[1] ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
                                }`}>•</span>
                                <div className="transition-all duration-300 ease-out hover:text-opacity-80">
                                    <span className="font-bold text-base sm:text-lg italic text-white md:text-black">Tailored frameworks</span>
                                    <span className="text-white md:text-black"> that reflect your organization's size, sector, and goals</span>
                                </div>
                            </li>

                            <li
                                ref={el => itemsRef.current[2] = el}
                                className={`flex items-start transition-all duration-700 ease-out transform hover:translate-x-2 hover:scale-105 ${
                                    itemsVisible[2] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                                }`}
                            >
                                <span className={`text-xl md:text-2xl mr-3 md:mr-4 mt-1 text-white md:text-black transition-all duration-300 ease-out ${
                                    itemsVisible[2] ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
                                }`}>•</span>
                                <div className="transition-all duration-300 ease-out hover:text-opacity-80">
                                    <span className="font-bold text-base sm:text-lg italic text-white md:text-black">Strategic, actionable insights</span>
                                    <span className="text-white md:text-black"> for boards, executives, and compliance leaders</span>
                                </div>
                            </li>

                            <li
                                ref={el => itemsRef.current[3] = el}
                                className={`flex items-start transition-all duration-700 ease-out transform hover:translate-x-2 hover:scale-105 ${
                                    itemsVisible[3] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                                }`}
                            >
                                <span className={`text-xl md:text-2xl mr-3 md:mr-4 mt-1 text-white md:text-black transition-all duration-300 ease-out ${
                                    itemsVisible[3] ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
                                }`}>•</span>
                                <div className="transition-all duration-300 ease-out hover:text-opacity-80">
                                    <span className="font-bold text-base sm:text-lg italic text-white md:text-black">A proactive approach</span>
                                    <span className="text-white md:text-black"> that turns governance into a competitive advantage</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;