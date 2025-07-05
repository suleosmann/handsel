import React from 'react';
import Image from 'next/image';
import BusinessImage from '@/public/assets/business-meeting.jpg';

const WhyChooseUsSection = () => {
    return (
        <section className="relative h-[70vh] overflow-hidden bg-white font-gill-sans">
            {/* Left side - Image */}
            <div className="absolute inset-0 w-full md:w-[60%]">
                <Image
                    src={BusinessImage}
                    alt="Professional business meeting"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Gradient Overlay - starts from the middle of the image */}
            <div className="absolute inset-0 bg-black/50 md:bg-transparent md:inset-y-0 md:left-[35%] md:right-0 md:bg-gradient-to-r md:from-transparent md:via-white/85 md:via-[25%] md:to-white md:to-[40%]" />

            {/* Content Container */}
            <div className="relative h-full flex">
                {/* Left side - Clear image area */}
                <div className="hidden md:block md:w-[45%]">
                    {/* This area shows the image clearly */}
                </div>

                {/* Right side - Content area */}
                <div className="w-full md:w-[55%] flex flex-col justify-center">
                    <div className="px-6 sm:px-12 md:pl-20 md:pr-12 max-w-3xl md:-mt-20">
                        <h2 className="text-[36px] sm:text-[48px] md:text-[56px] font-bold mb-8 md:mb-16 text-white md:text-secondaryColor text-center md:mr-20">Why Choose us</h2>

                        <ul className="space-y-4 md:space-y-6 font-gill-sans text-[16px] sm:text-[18px]">
                            <li className="flex items-start">
                                <span className="text-xl md:text-2xl mr-3 md:mr-4 mt-1 text-white md:text-black">•</span>
                                <div>
                                    <span className="font-bold text-base sm:text-lg italic text-white md:text-black">Deep expertise</span>
                                    <span className="text-white md:text-black"> across legal, regulatory, risk, and technology domains</span>
                                </div>
                            </li>

                            <li className="flex items-start">
                                <span className="text-xl md:text-2xl mr-3 md:mr-4 mt-1 text-white md:text-black">•</span>
                                <div>
                                    <span className="font-bold text-base sm:text-lg italic text-white md:text-black">Tailored frameworks</span>
                                    <span className="text-white md:text-black"> that reflect your organization's size, sector, and goals</span>
                                </div>
                            </li>

                            <li className="flex items-start">
                                <span className="text-xl md:text-2xl mr-3 md:mr-4 mt-1 text-white md:text-black">•</span>
                                <div>
                                    <span className="font-bold text-base sm:text-lg italic text-white md:text-black">Strategic, actionable insights</span>
                                    <span className="text-white md:text-black"> for boards, executives, and compliance leaders</span>
                                </div>
                            </li>

                            <li className="flex items-start">
                                <span className="text-xl md:text-2xl mr-3 md:mr-4 mt-1 text-white md:text-black">•</span>
                                <div>
                                    <span className="font-bold text-base sm:text-lg italic text-white md:text-black">A proactive approach</span>
                                    <span className="text-white md:text-black"> that turns governance into a competitive advantage</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
            <div className="h-18 bg-gradient-to-r from-white to-mainColor"></div>
        </section>
    );
};

export default WhyChooseUsSection;