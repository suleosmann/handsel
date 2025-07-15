"use client";
import Image from 'next/image';
import HeroImage from '@/public/assets/contact-hero.jpg';

const HeroSection = () => {
    return (
        <section className="relative w-full overflow-hidden h-[50vh]">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={HeroImage}
                    alt="Team collaboration in modern office"
                    fill
                    className="object-cover object-center"
                    priority
                />

            </div>

            {/* Content Container */}
            <div className="relative z-10 flex items-end justify-start h-[80vh] px-8 sm:px-12 lg:px-16 pb-36">
                <div className="text-left sm:ml-42">
                    {/* Main Heading */}
                    <h1 className="font-gill-sans text-2xl sm:text-4xl italic font-semibold text-white leading-normal">
                        Talk to us!
                    </h1>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;