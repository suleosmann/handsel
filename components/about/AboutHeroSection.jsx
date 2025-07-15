"use client";
import Image from 'next/image';
import HeroImage from '@/public/assets/about-hero.jpg';

const AboutHeroSection = () => {
    return (
        <section className="relative w-full h-[60vh] overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={HeroImage}
                    alt="Team collaboration in modern office"
                    fill
                    className="object-cover object-center"
                    priority
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30"></div>
            </div>
        </section>
    );
};

export default AboutHeroSection;
