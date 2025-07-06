"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import GraphicImage1 from '@/public/assets/glass-building.jpg';
import GraphicImage2 from '@/public/assets/clock-tower.jpg';
import GraphicImage3 from '@/public/assets/dashboard.jpg';
import GraphicImage4 from '@/public/assets/doctor.jpg';
import GraphicImage5 from '@/public/assets/man-in-office.jpg';

const WhoWeWorkWithSection = () => {
    const [translateX, setTranslateX] = useState(0);

    const items = [
        {
            image: GraphicImage1,
            title: "Corporates and listed companies",
            imageFirst: true
        },
        {
            image: GraphicImage2,
            title: "Government agencies and public institutions",
            imageFirst: false
        },
        {
            image: GraphicImage3,
            title: "Financial services and fintech firms",
            imageFirst: true
        },
        {
            image: GraphicImage4,
            title: "Healthcare, energy, and regulated industries",
            imageFirst: false
        },
        {
            image: GraphicImage5,
            title: "Tech startups scaling fast with AI or cybersecurity exposure",
            imageFirst: true
        }
    ];

    // Create infinite loop by duplicating items
    const infiniteItems = [...items, ...items];
    const itemWidth = 450; // Increased width for better spacing and full width usage

    useEffect(() => {
        const interval = setInterval(() => {
            setTranslateX(prev => {
                const newTranslateX = prev - itemWidth;
                // Reset seamlessly when we've moved through one complete set
                if (Math.abs(newTranslateX) >= itemWidth * items.length) {
                    return -itemWidth; // Start from second item to maintain seamless loop
                }
                return newTranslateX;
            });
        }, 3000); // Move every 3 seconds

        return () => clearInterval(interval);
    }, [items.length]);

    return (
        <div className="min-h-[80vh] lg:h-[80vh] bg-secondaryColor flex flex-col items-center font-gill-sans py-8 lg:py-0 overflow-hidden">
            <div className="text-[32px] md:text-[40px] lg:text-[48px] font-extrabold ml-4 md:ml-12 lg:ml-24 pt-8 md:pt-16 lg:pt-28 text-mainColor self-start">
                Who We Work with
            </div>

            {/* Desktop Sliding Carousel */}
            <div className="hidden lg:block w-full mt-18 overflow-hidden">
                <div className="flex justify-center">
                    <div className="w-[95vw] max-w-[1400px] overflow-hidden"> {/* Use almost full width */}
                        <div
                            className="flex text-black transition-transform duration-1000 ease-in-out"
                            style={{
                                transform: `translateX(${translateX}px)`,
                                width: `${infiniteItems.length * itemWidth}px`
                            }}
                        >
                            {infiniteItems.map((item, index) => (
                                <div key={index} className="flex flex-col items-center space-y-8 flex-shrink-0 px-8" style={{ width: `${itemWidth}px` }}>
                                    {item.imageFirst ? (
                                        <>
                                            <div
                                                className="border-4 rounded-2xl border-mainColor w-[316px] h-[315px] bg-cover bg-center bg-no-repeat shadow-[0_0_10px_theme(colors.mainColor),0_0_20px_theme(colors.mainColor)] hover:scale-105 transition-transform duration-300"
                                                style={{
                                                    backgroundImage: `url(${item.image.src})`
                                                }}
                                            />
                                            <h2 className="text-white text-2xl font-semibold mt-6 max-w-80 text-center">{item.title}</h2>
                                        </>
                                    ) : (
                                        <>
                                            <h2 className="text-white text-2xl font-semibold mt-6 max-w-80 text-center">{item.title}</h2>
                                            <div
                                                className="border-4 rounded-2xl border-mainColor w-[316px] h-[315px] bg-cover bg-center bg-no-repeat shadow-[0_0_10px_theme(colors.mainColor),0_0_20px_theme(colors.mainColor)] hover:scale-105 transition-transform duration-300"
                                                style={{
                                                    backgroundImage: `url(${item.image.src})`
                                                }}
                                            />
                                        </>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile/Tablet Static View */}
            <div className="lg:hidden w-[95vw] flex flex-col justify-center text-black mt-8 gap-8">
                {items.map((item, index) => (
                    <div key={index} className="flex flex-col items-center space-y-4">
                        {item.imageFirst ? (
                            <>
                                <div
                                    className="border-4 rounded-2xl border-mainColor w-[280px] sm:w-[300px] h-[280px] sm:h-[300px] bg-cover bg-center bg-no-repeat shadow-[0_0_10px_theme(colors.mainColor),0_0_20px_theme(colors.mainColor)]"
                                    style={{
                                        backgroundImage: `url(${item.image.src})`
                                    }}
                                />
                                <h2 className="text-white text-lg md:text-xl font-semibold mt-4 max-w-80 text-center">{item.title}</h2>
                            </>
                        ) : (
                            <>
                                <h2 className="text-white text-lg md:text-xl font-semibold mt-4 max-w-80 text-center order-2">{item.title}</h2>
                                <div
                                    className="border-4 rounded-2xl border-mainColor w-[280px] sm:w-[300px] h-[280px] sm:h-[300px] bg-cover bg-center bg-no-repeat shadow-[0_0_10px_theme(colors.mainColor),0_0_20px_theme(colors.mainColor)] order-1"
                                    style={{
                                        backgroundImage: `url(${item.image.src})`
                                    }}
                                />
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhoWeWorkWithSection;