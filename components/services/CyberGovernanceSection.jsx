import React from 'react';
import Image from 'next/image';
import CyberImage from '@/public/assets/cyber-security.jpg';

const CyberGovernanceSection = () => {
    return (
        <div className="flex min-h-[70vh] font-gill-sans">
            {/* Left side - Content */}
            <div className="flex-1 bg-white p-12 flex flex-col items-center justify-center font-[500]">
                <div className="max-w-2xl">
                    <p className="text-gray-800 text-lg leading-relaxed mb-8">
                        In the digital era, cyber governance is essential to protect value, ensure resilience, and maintain trust.
                    </p>

                    <div className="space-y-4 mb-8">
                        <ul className="space-y-3 text-gray-800">
                            <li className="flex items-start ml-6">
                                <span className="text-black mr-3 text-lg">•</span>
                                <span>We guide organizations in developing governance structures that support effective cybersecurity oversight and digital risk management. Our approach includes:</span>
                            </li>
                            <li className="flex items-start ml-6">
                                <span className="text-black mr-3 text-lg">•</span>
                                <span>Cybersecurity governance frameworks aligned with global standards (e.g., NIST, ISO/IEC 27001)</span>
                            </li>
                            <li className="flex items-start ml-6">
                                <span className="text-black mr-3 text-lg">•</span>
                                <span>Board-level cyber risk reporting and oversight support</span>
                            </li>
                            <li className="flex items-start ml-6">
                                <span className="text-black mr-3 text-lg">•</span>
                                <span>Policy development around data privacy, access control, and incident response</span>
                            </li>
                            <li className="flex items-start ml-6">
                                <span className="text-black mr-3 text-lg">•</span>
                                <span>Integration of cybersecurity into enterprise risk management (ERM)</span>
                            </li>
                            <li className="flex items-start ml-6">
                                <span className="text-black mr-3 text-lg">•</span>
                                <span>Culture and awareness programs to strengthen cyber resilience</span>
                            </li>
                        </ul>
                    </div>

                    <p className="text-gray-800 text-base leading-relaxed">
                        Cyber governance isn't just an IT concern—it's a boardroom imperative. We help bridge the gap between technical controls and strategic oversight.
                    </p>
                </div>
            </div>

            {/* Right side - Image with overlay */}
            <div className="flex-1 relative">
                <Image
                    src={CyberImage}
                    alt="Cybersecurity workstation"
                    fill
                    className="object-cover"
                />
                {/* MainColor overlay with opacity */}
                <div className="absolute inset-0 bg-mainColor opacity-30"></div>

                {/* Title overlay */}
                <div className="absolute bottom-16 left-20">
                    <div className="relative text-left">
                        {/* Number 2 accent */}
                        <div className="absolute -top-8 -left-8 text-white text-8xl font-bold opacity-50">
                            2
                        </div>
                        <h2 className="text-white text-3xl md:text-5xl font-bold italic leading-tight ml-12">
                            Cyber<br />Governance
                        </h2>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CyberGovernanceSection;