"use client";
import Image from 'next/image'
import GraphicImage from '@/public/assets/graphic-1.jpg'

const AboutUsSection = () => {
    return (
        <div className="min-h-[50vh] lg:h-[50vh] bg-[#FDF2FA] flex flex-col lg:flex-row justify-center items-center px-4 lg:px-0 py-8 lg:py-0">
            <div className="mb-8 lg:mb-0">
                <div className="w-[300px] sm:w-[400px] lg:w-[522px] h-[300px] sm:h-[400px] lg:h-[563px] relative overflow-hidden">
                    <Image
                        src={GraphicImage}
                        alt="Background graphic"
                        fill
                        className="object-cover"
                    />
                    <div className="w-[50px] sm:w-[65px] lg:w-[77px] h-[150px] sm:h-[200px] lg:h-[265px] bg-mainColor absolute bottom-4 sm:bottom-8 lg:bottom-17 -right-3 sm:-right-4 lg:-right-6 z-10"></div>
                </div>
            </div>

            <div className="font-gill-sans text-[16px] sm:text-[17px] lg:text-[18px] leading-[26px] sm:leading-[28px] lg:leading-[30px] tracking-wide w-full max-w-[500px] lg:w-[551px] text-black lg:ml-36 lg:mt-24 font-medium">
                <div className="mb-6 lg:mb-8">
                    We help organizations lead with confidence through world-class governance in the corporate, cyber, and AI arenas. Whether you're navigating regulatory complexity, digital transformation, or emerging technologies—we deliver the frameworks, insight, and oversight that drive performance and protect reputation.
                </div>

                <div>
                    <div className="font-bold text-[16px] sm:text-[17px] lg:text-[18px] mb-3 lg:mb-4">Why Choose Us</div>
                    <div className="space-y-2">
                        <div className="flex items-start">
                            <span className="text-black mr-2 text-lg">•</span>
                            <span>Deep, cross-sector expertise in law, tech, risk, and ethics</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-black mr-2 text-lg">•</span>
                            <span>Practical, future-ready frameworks—not one-size-fits-all</span>
                        </div>
                        <div className="flex items-start">
                            <span className="text-black mr-2 text-lg">•</span>
                            <span>We turn governance into a strategic advantage</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsSection;