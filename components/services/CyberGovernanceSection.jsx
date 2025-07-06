import React from 'react';
import Image from 'next/image';
import CyberImage from '@/public/assets/cyber-security.jpg';

const CyberGovernanceSection = () => {
    return (
        <div className="flex flex-col lg:flex-row min-h-[50vh] lg:min-h-[70vh] font-gill-sans">
            {/* Left side - Content */}
            <div className="flex-1 bg-white p-6 md:p-8 lg:p-12 flex flex-col items-center justify-center font-[500] order-2 lg:order-1">
                <div className="max-w-2xl">
                    <p className="text-gray-800 text-base lg:text-lg leading-relaxed mb-6 lg:mb-8">
                        In the digital era, cyber governance is essential to protect value, ensure resilience, and maintain trust.
                    </p>

                    <div className="space-y-4 mb-6 lg:mb-8">
                        <ul className="space-y-3 text-gray-800">
                            <li className="flex items-start ml-3 lg:ml-6">
                                <span className="text-black mr-3 text-lg">•</span>
                                <span className="text-sm lg:text-base">We guide organizations in developing governance structures that support effective cybersecurity oversight and digital risk management. Our approach includes:</span>
                            </li>
                            <li className="flex items-start ml-3 lg:ml-6">
                                <span className="text-black mr-3 text-lg">•</span>
                                <span className="text-sm lg:text-base">Cybersecurity governance frameworks aligned with global standards (e.g., NIST, ISO/IEC 27001)</span>
                            </li>
                            <li className="flex items-start ml-3 lg:ml-6">
                                <span className="text-black mr-3 text-lg">•</span>
                                <span className="text-sm lg:text-base">Board-level cyber risk reporting and oversight support</span>
                            </li>
                            <li className="flex items-start ml-3 lg:ml-6">
                                <span className="text-black mr-3 text-lg">•</span>
                                <span className="text-sm lg:text-base">Policy development around data privacy, access control, and incident response</span>
                            </li>
                            <li className="flex items-start ml-3 lg:ml-6">
                                <span className="text-black mr-3 text-lg">•</span>
                                <span className="text-sm lg:text-base">Integration of cybersecurity into enterprise risk management (ERM)</span>
                            </li>
                            <li className="flex items-start ml-3 lg:ml-6">
                                <span className="text-black mr-3 text-lg">•</span>
                                <span className="text-sm lg:text-base">Culture and awareness programs to strengthen cyber resilience</span>
                            </li>
                        </ul>
                    </div>

                    <p className="text-gray-800 text-sm lg:text-base leading-relaxed">
                        Cyber governance isn't just an IT concern—it's a boardroom imperative. We help bridge the gap between technical controls and strategic oversight.
                    </p>
                </div>
            </div>

            {/* Right side - Image with overlay */}
            <div className="flex-1 relative min-h-[40vh] lg:min-h-[70vh] order-1 lg:order-2">
                <Image
                    src={CyberImage}
                    alt="Cybersecurity workstation"
                    fill
                    className="object-cover"
                />
                {/* MainColor overlay with opacity */}
                <div className="absolute inset-0 bg-mainColor opacity-30"></div>

                {/* Title overlay */}
                <div className="absolute bottom-6 lg:bottom-16 left-6 lg:left-20">
                    <div className="flex items-end text-left">
                        {/* Number 2 accent */}
                        <div className="text-white text-6xl lg:text-8xl font-bold opacity-50 mr-4 lg:mr-6">
                            2
                        </div>
                        <h2 className="text-white text-2xl md:text-3xl lg:text-5xl font-bold italic leading-tight">
                            Cyber<br />Governance
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CyberGovernanceSection;