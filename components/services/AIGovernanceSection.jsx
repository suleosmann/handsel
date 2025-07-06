"use client"
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import FiberOpticImage from '@/public/assets/ai-governance.jpg';

const AIGovernanceSection = () => {
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
        <div ref={sectionRef} className="flex flex-col lg:flex-row min-h-[50vh] font-gill-sans">
            {/* Left side - Image with overlay */}
            <div className="flex-[2] relative min-h-[40vh] lg:min-h-[50vh] overflow-hidden">
                <Image
                    src={FiberOpticImage}
                    alt="Fiber optic cables"
                    fill
                    className={`object-cover transition-all duration-1200 ease-out hover:scale-105 ${
                        isVisible ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
                    }`}
                />

                {/* Title overlay */}
                <div className={`absolute bottom-6 lg:bottom-12 left-6 lg:left-50 transition-all duration-1000 ease-out delay-500 ${
                    isVisible ? 'opacity-100 translate-y-0 translate-x-0' : 'opacity-0 translate-y-8 -translate-x-8'
                }`}>
                    <div className="relative text-left">
                        {/* Number 3 accent */}
                        <div className={`absolute -bottom-2 lg:-bottom-4 -left-4 lg:-left-8 text-white text-6xl lg:text-9xl font-bold opacity-70 transition-all duration-800 ease-out delay-700 ${
                            isVisible ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
                        }`}>
                            3
                        </div>
                        <h2 className={`text-white text-2xl md:text-3xl lg:text-5xl font-bold italic leading-tight ml-8 lg:ml-16 transition-all duration-1000 ease-out delay-800 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                        }`}>
                            AI<br />Governance
                        </h2>
                    </div>
                </div>
            </div>

            {/* Right side - Content */}
            <div className="flex-[3] bg-[#F2CCE5] p-6 md:p-8 lg:p-12 flex flex-col justify-center font-[500]">
                <div className="max-w-3xl">
                    <p className={`text-gray-800 text-base lg:text-lg leading-relaxed mb-6 transition-all duration-1000 ease-out ${
                        contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}>
                        Responsible AI begins with the right governance structures to ensure fairness, accountability, and compliance.
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
                                <span className="text-sm lg:text-base transition-all duration-300 ease-out hover:text-opacity-80">As organizations adopt AI across operations, products, and decision-making, we support responsible innovation through effective AI governance, including:</span>
                            </li>
                            <li className={`flex items-start ml-3 lg:ml-6 transition-all duration-600 ease-out hover:translate-x-2 hover:scale-105 ${
                                listItemsVisible[1] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                            }`}>
                                <span className={`text-black mr-3 text-lg transition-all duration-300 ease-out ${
                                    listItemsVisible[1] ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
                                }`}>•</span>
                                <span className="text-sm lg:text-base transition-all duration-300 ease-out hover:text-opacity-80">Development of AI ethics principles and governance charters</span>
                            </li>
                            <li className={`flex items-start ml-3 lg:ml-6 transition-all duration-600 ease-out hover:translate-x-2 hover:scale-105 ${
                                listItemsVisible[2] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                            }`}>
                                <span className={`text-black mr-3 text-lg transition-all duration-300 ease-out ${
                                    listItemsVisible[2] ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
                                }`}>•</span>
                                <span className="text-sm lg:text-base transition-all duration-300 ease-out hover:text-opacity-80">AI risk assessment frameworks (bias, transparency, explainability)</span>
                            </li>
                            <li className={`flex items-start ml-3 lg:ml-6 transition-all duration-600 ease-out hover:translate-x-2 hover:scale-105 ${
                                listItemsVisible[3] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                            }`}>
                                <span className={`text-black mr-3 text-lg transition-all duration-300 ease-out ${
                                    listItemsVisible[3] ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
                                }`}>•</span>
                                <span className="text-sm lg:text-base transition-all duration-300 ease-out hover:text-opacity-80">Regulatory compliance (e.g., EU AI Act, U.S. Algorithmic Accountability Act)</span>
                            </li>
                            <li className={`flex items-start ml-3 lg:ml-6 transition-all duration-600 ease-out hover:translate-x-2 hover:scale-105 ${
                                listItemsVisible[4] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                            }`}>
                                <span className={`text-black mr-3 text-lg transition-all duration-300 ease-out ${
                                    listItemsVisible[4] ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
                                }`}>•</span>
                                <span className="text-sm lg:text-base transition-all duration-300 ease-out hover:text-opacity-80">Lifecycle governance: from model development to deployment and monitoring</span>
                            </li>
                            <li className={`flex items-start ml-3 lg:ml-6 transition-all duration-600 ease-out hover:translate-x-2 hover:scale-105 ${
                                listItemsVisible[5] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-6'
                            }`}>
                                <span className={`text-black mr-3 text-lg transition-all duration-300 ease-out ${
                                    listItemsVisible[5] ? 'scale-100 rotate-0' : 'scale-0 rotate-45'
                                }`}>•</span>
                                <span className="text-sm lg:text-base transition-all duration-300 ease-out hover:text-opacity-80">Cross-functional training for leadership, legal, and technical teams</span>
                            </li>
                        </ul>
                    </div>

                    <p className={`text-gray-800 text-sm lg:text-base leading-relaxed transition-all duration-1000 ease-out delay-600 ${
                        contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                    }`}>
                        We help organizations harness AI's potential while managing its risks—safely, ethically, and with public trust.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AIGovernanceSection;