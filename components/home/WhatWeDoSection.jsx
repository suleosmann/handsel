"use client";
import Image from 'next/image';
import ArchitectureImage from '@/public/assets/architecture-image.jpg';
import CorporateIcon from '@/public/assets/corporate-icon.png';
import CyberIcon from '@/public/assets/cyber-icon.png';
import AIIcon from '@/public/assets/ai-icon.png';

const WhatWeDoSection = () => {
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

                        {/* Right Image - Responsive */}
                        <div className="lg:-mb-28">
                            <div className="relative rounded-2xl overflow-hidden border-4 border-mainColor/20 shadow-lg max-w-sm mx-auto">
                                <Image
                                    src={ArchitectureImage}
                                    alt="Modern architecture representing governance"
                                    width={120}
                                    height={120}
                                    className="h-[280px] w-[280px] sm:h-[350px] sm:w-[350px] lg:h-[420px] lg:w-[420px] object-cover"
                                />
                                {/* Fading border effect */}
                                <div className="absolute inset-0 border-2 border-mainColor/40 rounded-2xl"></div>
                                <div className="absolute inset-1 border border-mainColor/20 rounded-2xl"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Pink Section - Adjusted top margin for overlap */}
            <div className="bg-mainColor pt-16 pb-12 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                {/* What We Do Header */}
                <div className="ml-0 sm:ml-8 md:ml-16 lg:ml-32 mb-8 md:mb-12">
                    <h2 className="text-2xl sm:text-3xl lg:text-[48px] font-extrabold text-white mb-4 text-center sm:text-left">
                        What We Do
                    </h2>
                </div>

                {/* Three Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8">
                    {/* Corporate Governance */}
                    <div className="text-white space-y-6">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 mb-6 mx-auto md:mx-0">
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
                            <button className="flex items-center text-white hover:text-white/80 transition-colors group mx-auto md:mx-0">
                                <span className="mr-2 font-medium">Discover</span>
                                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Cyber Governance */}
                    <div className="text-white space-y-6 border-l border-r border-black px-4 md:px-8">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 mb-6 mx-auto md:mx-0">
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
                            <button className="flex items-center text-white hover:text-white/80 transition-colors group mx-auto md:mx-0">
                                <span className="mr-2 font-medium">Discover</span>
                                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                                     fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                          d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* AI Governance */}
                    <div className="text-white space-y-6">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 mb-6 mx-auto md:mx-0">
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
                            <button className="flex items-center text-white hover:text-white/80 transition-colors group mx-auto md:mx-0">
                                <span className="mr-2 font-medium">Discover</span>
                                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
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