"use client";
import Image from 'next/image';
import GraphicImage1 from '@/public/assets/glass-building.jpg';
import GraphicImage2 from '@/public/assets/clock-tower.jpg';
import GraphicImage3 from '@/public/assets/dashboard.jpg';
import GraphicImage4 from '@/public/assets/doctor.jpg';
import GraphicImage5 from '@/public/assets/man-in-office.jpg';

const WhoWeWorkWithSection = () => {
    const items = [
        {
            image: GraphicImage1,
            title: "Corporates and listed companies"
        },
        {
            image: GraphicImage2,
            title: "Government agencies and public institutions"
        },
        {
            image: GraphicImage3,
            title: "Financial services and fintech firms"
        },
        {
            image: GraphicImage4,
            title: "Healthcare, energy, and regulated industries"
        },
        {
            image: GraphicImage5,
            title: "Tech startups scaling fast with AI or cybersecurity exposure"
        }
    ];

    return (
        <div className="bg-secondaryColor font-gill-sans py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                {/* Header */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-mainColor mb-8 lg:mb-12">
                    Who We Work With
                </h2>

                {/* Grid Container - Two columns on larger screens */}
                <div className="max-w-6xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="group flex flex-col sm:flex-row items-center sm:items-start bg-white/10 backdrop-blur-sm rounded-xl p-6 lg:p-8 hover:bg-white/20 transition-all duration-300 hover:scale-[1.02] border border-mainColor/20 hover:border-mainColor/40 gap-6"
                            >
                                {/* Image */}
                                <div className="flex-shrink-0">
                                    <div className="relative w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-lg overflow-hidden border-2 border-mainColor shadow-[0_0_8px_theme(colors.mainColor)] group-hover:shadow-[0_0_15px_theme(colors.mainColor)] transition-all duration-300 group-hover:scale-105">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="flex-1 text-center sm:text-left">
                                    <h3 className="text-white text-lg sm:text-xl lg:text-2xl font-semibold leading-relaxed">
                                        {item.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoWeWorkWithSection;