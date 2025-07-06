"use client";
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import GraphicImage from '@/public/assets/graphic-1.jpg';

const AboutUsSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [contentVisible, setContentVisible] = useState(false);
    const [listItemsVisible, setListItemsVisible] = useState([false, false, false]);
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
                            }, index * 200);
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
        <div ref={sectionRef} className="min-h-[50vh] lg:h-[50vh] bg-[#FDF2FA] flex flex-col lg:flex-row justify-center items-center px-4 lg:px-0 py-8 lg:py-0">
            <div className="mb-8 lg:mb-0">
                <div className={`w-[300px] sm:w-[400px] lg:w-[522px] h-[300px] sm:h-[400px] lg:h-[563px] relative overflow-hidden transition-all duration-1000 ease-out ${
                    isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-12 scale-95'
                }`}>
                    <Image
                        src={GraphicImage}
                        alt="Background graphic"
                        fill
                        className="object-cover transition-transform duration-700 ease-out hover:scale-105"
                    />
                    <div className={`w-[50px] sm:w-[65px] lg:w-[77px] h-[150px] sm:h-[200px] lg:h-[265px] bg-mainColor absolute bottom-4 sm:bottom-8 lg:bottom-17 -right-3 sm:-right-4 lg:-right-6 z-10 transition-all duration-800 ease-out delay-300 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}></div>
                </div>
            </div>

            <div className={`font-gill-sans text-[16px] sm:text-[17px] lg:text-[18px] leading-[26px] sm:leading-[28px] lg:leading-[30px] tracking-wide w-full max-w-[500px] lg:w-[551px] text-black lg:ml-36 lg:mt-24 font-medium transition-all duration-1000 ease-out ${
                contentVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}>
                <div className={`mb-6 lg:mb-8 transition-all duration-800 ease-out delay-200 ${
                    contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}>
                    We help organizations lead with confidence through world-class governance in the corporate, cyber, and AI arenas. Whether you're navigating regulatory complexity, digital transformation, or emerging technologies—we deliver the frameworks, insight, and oversight that drive performance and protect reputation.
                </div>

                <div className={`transition-all duration-800 ease-out delay-400 ${
                    contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}>
                    <div className="font-bold text-[16px] sm:text-[17px] lg:text-[18px] mb-3 lg:mb-4">Why Choose Us</div>
                    <div className="space-y-2">
                        <div className={`flex items-start transition-all duration-600 ease-out hover:translate-x-2 hover:scale-105 ${
                            listItemsVisible[0] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                        }`}>
                            <span className={`text-black mr-2 text-lg transition-all duration-300 ease-out ${
                                listItemsVisible[0] ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
                            }`}>•</span>
                            <span className="transition-all duration-300 ease-out hover:text-opacity-80">Deep, cross-sector expertise in law, tech, risk, and ethics</span>
                        </div>
                        <div className={`flex items-start transition-all duration-600 ease-out hover:translate-x-2 hover:scale-105 ${
                            listItemsVisible[1] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                        }`}>
                            <span className={`text-black mr-2 text-lg transition-all duration-300 ease-out ${
                                listItemsVisible[1] ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
                            }`}>•</span>
                            <span className="transition-all duration-300 ease-out hover:text-opacity-80">Practical, future-ready frameworks—not one-size-fits-all</span>
                        </div>
                        <div className={`flex items-start transition-all duration-600 ease-out hover:translate-x-2 hover:scale-105 ${
                            listItemsVisible[2] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                        }`}>
                            <span className={`text-black mr-2 text-lg transition-all duration-300 ease-out ${
                                listItemsVisible[2] ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
                            }`}>•</span>
                            <span className="transition-all duration-300 ease-out hover:text-opacity-80">We turn governance into a strategic advantage</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsSection;