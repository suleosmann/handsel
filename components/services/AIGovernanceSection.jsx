import React from 'react';
import Image from 'next/image';
import FiberOpticImage from '@/public/assets/ai-governance.jpg';

const AIGovernanceSection = () => {
    return (
        <div className="flex flex-col lg:flex-row min-h-[50vh] font-gill-sans">
            {/* Left side - Image with overlay */}
            <div className="flex-[2] relative min-h-[40vh] lg:min-h-[50vh]">
                <Image
                    src={FiberOpticImage}
                    alt="Fiber optic cables"
                    fill
                    className="object-cover"
                />

                {/* Title overlay */}
                <div className="absolute bottom-6 lg:bottom-12 left-6 lg:left-50">
                    <div className="relative text-left">
                        {/* Number 3 accent */}
                        <div className="absolute -bottom-2 lg:-bottom-4 -left-4 lg:-left-8 text-white text-6xl lg:text-9xl font-bold opacity-70">
                            3
                        </div>
                        <h2 className="text-white text-2xl md:text-3xl lg:text-5xl font-bold italic leading-tight ml-8 lg:ml-16">
                            AI<br />Governance
                        </h2>
                    </div>
                </div>
            </div>

            {/* Right side - Content */}
            <div className="flex-[3] bg-[#F2CCE5] p-6 md:p-8 lg:p-12 flex flex-col justify-center font-[500]">
                <div className="max-w-3xl">
                    <p className="text-gray-800 text-base lg:text-lg leading-relaxed mb-6">
                        Responsible AI begins with the right governance structures to ensure fairness, accountability, and compliance.
                    </p>

                    <div className="space-y-4 mb-6 lg:mb-8">
                        <ul className="space-y-3 text-gray-800">
                            <li className="flex items-start ml-3 lg:ml-6">
                                <span className="text-black mr-3 text-lg">•</span>
                                <span className="text-sm lg:text-base">As organizations adopt AI across operations, products, and decision-making, we support responsible innovation through effective AI governance, including:</span>
                            </li>
                            <li className="flex items-start ml-3 lg:ml-6">
                                <span className="text-black mr-3 text-lg">•</span>
                                <span className="text-sm lg:text-base">Development of AI ethics principles and governance charters</span>
                            </li>
                            <li className="flex items-start ml-3 lg:ml-6">
                                <span className="text-black mr-3 text-lg">•</span>
                                <span className="text-sm lg:text-base">AI risk assessment frameworks (bias, transparency, explainability)</span>
                            </li>
                            <li className="flex items-start ml-3 lg:ml-6">
                                <span className="text-black mr-3 text-lg">•</span>
                                <span className="text-sm lg:text-base">Regulatory compliance (e.g., EU AI Act, U.S. Algorithmic Accountability Act)</span>
                            </li>
                            <li className="flex items-start ml-3 lg:ml-6">
                                <span className="text-black mr-3 text-lg">•</span>
                                <span className="text-sm lg:text-base">Lifecycle governance: from model development to deployment and monitoring</span>
                            </li>
                            <li className="flex items-start ml-3 lg:ml-6">
                                <span className="text-black mr-3 text-lg">•</span>
                                <span className="text-sm lg:text-base">Cross-functional training for leadership, legal, and technical teams</span>
                            </li>
                        </ul>
                    </div>

                    <p className="text-gray-800 text-sm lg:text-base leading-relaxed">
                        We help organizations harness AI's potential while managing its risks—safely, ethically, and with public trust.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AIGovernanceSection;