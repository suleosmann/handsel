"use client";
import { useEffect, useRef, useState } from 'react';

const AboutUsSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [contentVisible, setContentVisible] = useState(false);
    const [listItemsVisible, setListItemsVisible] = useState([false, false, false, false]);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);

                    // Trigger content animation
                    setTimeout(() => {
                        setContentVisible(true);
                    }, 200);

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
                    }, 400);
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
        <div ref={sectionRef} className="min-h-[30vh] bg-[#FDF2FA]  md:ml-64  px-4 py-16">
            <div className={`font-gill-sans w-full max-w-[800px] text-black transition-all duration-1000 ease-out ${
                contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}>
                <div className={`transition-all duration-800 ease-out delay-200 ${
                    contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}>
                    <h2 className="font-bold text-[32px] sm:text-[48px] mb-8 text-[#6B1E6B]">Why Choose us</h2>
                    <div className="space-y-4">
                        <div className={`flex items-start transition-all duration-600 ease-out ${
                            listItemsVisible[0] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                        }`}>
                            <span className={`text-black mr-3 text-xl font-bold transition-all duration-300 ease-out ${
                                listItemsVisible[0] ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
                            }`}>•</span>
                            <span className="text-[18px] leading-[28px]">
                                <span className="font-bold">Deep expertise</span> across legal, regulatory, risk, and technology domains
                            </span>
                        </div>
                        <div className={`flex items-start transition-all duration-600 ease-out ${
                            listItemsVisible[1] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                        }`}>
                            <span className={`text-black mr-3 text-xl font-bold transition-all duration-300 ease-out ${
                                listItemsVisible[1] ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
                            }`}>•</span>
                            <span className="text-[18px] leading-[28px]">
                                <span className="font-bold">Tailored frameworks</span> that reflect your organization's size, sector, and goals
                            </span>
                        </div>
                        <div className={`flex items-start transition-all duration-600 ease-out ${
                            listItemsVisible[2] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                        }`}>
                            <span className={`text-black mr-3 text-xl font-bold transition-all duration-300 ease-out ${
                                listItemsVisible[2] ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
                            }`}>•</span>
                            <span className="text-[18px] leading-[28px]">
                                <span className="font-bold">Strategic, actionable insights</span> for boards, executives, and compliance leaders
                            </span>
                        </div>
                        <div className={`flex items-start transition-all duration-600 ease-out ${
                            listItemsVisible[3] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                        }`}>
                            <span className={`text-black mr-3 text-xl font-bold transition-all duration-300 ease-out ${
                                listItemsVisible[3] ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
                            }`}>•</span>
                            <span className="text-[18px] leading-[28px]">
                                <span className="font-bold">A proactive approach</span> that turns governance into a competitive advantage
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsSection;