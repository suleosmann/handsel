import React from 'react';
import Image from 'next/image';
import OfficeImage from '@/public/assets/office-meeting.jpg';

const CorporateGovernanceSection = () => {
    return (
        <div className="flex flex-col lg:flex-row min-h-[50vh] lg:min-h-[70vh] font-gill-sans">
            {/* Left side - Image with overlay (wider) */}
            <div className="flex-[3] relative min-h-[40vh] lg:min-h-[70vh]">
                <Image
                    src={OfficeImage}
                    alt="Corporate meeting room"
                    fill
                    className="object-cover"
                />
                {/* MainColor overlay with opacity */}
                <div className="absolute inset-0 bg-mainColor opacity-30"></div>

                {/* Title overlay */}
                <div className="absolute bottom-6 lg:bottom-16 right-6 lg:right-20">
                    <div className="relative text-right">
                        <h2 className="text-white text-2xl md:text-3xl lg:text-5xl font-bold italic leading-tight mr-6 lg:mr-12">
                            Corporate<br />Governance
                        </h2>
                        {/* White accent bar positioned to the right of text */}
                        <div className="absolute -top-2 lg:-top-4 -right-2 lg:-right-4 w-3 lg:w-6 h-20 lg:h-32 bg-white"></div>
                    </div>
                </div>
            </div>

            {/* Right side - Content (narrower) */}
            <div className="flex-[2] bg-white p-6 md:p-8 lg:p-12 flex flex-col justify-center font-[500]">
                <div className="max-w-2xl">
                    <p className="text-gray-800 text-base lg:text-lg leading-relaxed mb-6 lg:mb-8">
                        Strong corporate governance lays the foundation for long-term success and stakeholder confidence.
                    </p>

                    <div className="space-y-4 mb-6 lg:mb-8">
                        <ul className="space-y-3 text-gray-800">
                            <li className="flex items-start ml-3 lg:ml-6">
                                <span className="text-black mr-3 text-lg">•</span>
                                <span className="text-sm lg:text-base">We help organizations build robust governance frameworks that support ethical leadership, transparent decision-making, and accountable performance. Our services include:</span>
                            </li>
                            <li className="flex items-start ml-3 lg:ml-6">
                                <span className="text-black mr-3 text-lg">•</span>
                                <span className="text-sm lg:text-base">Board structure and effectiveness assessments</span>
                            </li>
                            <li className="flex items-start ml-3 lg:ml-6">
                                <span className="text-black mr-3 text-lg">•</span>
                                <span className="text-sm lg:text-base">Governance policy design and implementation</span>
                            </li>
                            <li className="flex items-start ml-3 lg:ml-6">
                                <span className="text-black mr-3 text-lg">•</span>
                                <span className="text-sm lg:text-base">Compliance with regulatory and shareholder expectations</span>
                            </li>
                            <li className="flex items-start ml-3 lg:ml-6">
                                <span className="text-black mr-3 text-lg">•</span>
                                <span className="text-sm lg:text-base">ESG integration into governance practices</span>
                            </li>
                            <li className="flex items-start ml-3 lg:ml-6">
                                <span className="text-black mr-3 text-lg">•</span>
                                <span className="text-sm lg:text-base">Risk management and oversight support</span>
                            </li>
                        </ul>
                    </div>

                    <p className="text-gray-800 text-sm lg:text-base leading-relaxed">
                        We partner with boards, executives, and governance committees to embed governance best practices tailored to your industry and regulatory environment.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CorporateGovernanceSection;