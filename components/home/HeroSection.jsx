"use client";
import Image from 'next/image';
import HeroImage from '@/public/assets/hero-image.jpg';

const HeroSection = () => {
    return (
        <section className="relative w-full overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={HeroImage}
                    alt="Team collaboration in modern office"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Overlay for better text readability */}
                <div className="absolute inset-0 bg-black/30"></div>
            </div>

            {/* Content Container */}
            <div className="relative z-10 flex items-end justify-start h-[80vh] px-8 sm:px-12 lg:px-16 pb-24">
                <div className="text-left">
                    {/* Main Heading */}
                    <h1 className="font-gill-sans text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-normal">
                        Governance. <span className="italic">Secured.</span> <span className="italic">Smarter.</span>
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;