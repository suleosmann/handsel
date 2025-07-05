"use client";
import Image from 'next/image'
import GraphicImage1 from '@/public/assets/glass-building.jpg'
import GraphicImage2 from '@/public/assets/clock-tower.jpg'
import GraphicImage3 from '@/public/assets/dashboard.jpg'
import GraphicImage4 from '@/public/assets/doctor.jpg'

const WhoWeWorkWithSection = () => {
    return (
        <div className="min-h-[80vh] lg:h-[80vh] bg-secondaryColor flex flex-col items-center font-gill-sans py-8 lg:py-0">
            <div className="text-[32px] md:text-[40px] lg:text-[48px] font-extrabold ml-4 md:ml-12 lg:ml-24 pt-8 md:pt-16 lg:pt-28 text-mainColor self-start">
                Who We Work with
            </div>
            <div className="w-[95vw] lg:w-[90vw] flex flex-col lg:flex-row justify-center lg:justify-between text-black mt-8 lg:mt-18 gap-8 lg:gap-4">
                <div className="flex flex-col items-center space-y-4 lg:space-y-8">
                    <div
                        className="border-4 rounded-2xl border-mainColor w-[280px] sm:w-[300px] lg:w-[316px] h-[280px] sm:h-[300px] lg:h-[315px] bg-cover bg-center bg-no-repeat shadow-[0_0_10px_theme(colors.mainColor),0_0_20px_theme(colors.mainColor)]"
                        style={{
                            backgroundImage: `url(${GraphicImage1.src})`
                        }}
                    >
                        {/* Your content here */}
                    </div>
                    <h2 className="text-white text-lg md:text-xl lg:text-2xl font-semibold mt-4 lg:mt-6 max-w-80 text-center lg:text-left">Corporates and listed companies</h2>
                </div>

                <div className="flex flex-col items-center space-y-4 lg:space-y-8">
                    <h2 className="text-white text-lg md:text-xl lg:text-2xl font-semibold mt-4 lg:mt-6 max-w-80 text-center lg:text-left order-2 lg:order-1">Government agencies and public institutions</h2>
                    <div
                        className="border-4 rounded-2xl border-mainColor w-[280px] sm:w-[300px] lg:w-[316px] h-[280px] sm:h-[300px] lg:h-[315px] bg-cover bg-center bg-no-repeat shadow-[0_0_10px_theme(colors.mainColor),0_0_20px_theme(colors.mainColor)] order-1 lg:order-2"
                        style={{
                            backgroundImage: `url(${GraphicImage2.src})`
                        }}
                    >
                        {/* Your content here */}
                    </div>
                </div>

                <div className="flex flex-col items-center space-y-4 lg:space-y-8">
                    <div
                        className="border-4 rounded-2xl border-mainColor w-[280px] sm:w-[300px] lg:w-[316px] h-[280px] sm:h-[300px] lg:h-[315px] bg-cover bg-center bg-no-repeat shadow-[0_0_10px_theme(colors.mainColor),0_0_20px_theme(colors.mainColor)]"
                        style={{
                            backgroundImage: `url(${GraphicImage3.src})`
                        }}
                    >
                        {/* Your content here */}
                    </div>
                    <h2 className="text-white text-lg md:text-xl lg:text-2xl font-semibold mt-4 lg:mt-6 max-w-80 text-center lg:text-left">Financial services and fintech firms</h2>
                </div>

                <div className="flex flex-col items-center space-y-4 lg:space-y-8">
                    <h2 className="text-white text-lg md:text-xl lg:text-2xl font-semibold mt-4 lg:mt-6 max-w-80 text-center lg:text-left order-2 lg:order-1">Healthcare, energy, and regulated industries</h2>
                    <div
                        className="border-4 rounded-2xl border-mainColor w-[280px] sm:w-[300px] lg:w-[316px] h-[280px] sm:h-[300px] lg:h-[315px] bg-cover bg-center bg-no-repeat shadow-[0_0_10px_theme(colors.mainColor),0_0_20px_theme(colors.mainColor)] order-1 lg:order-2"
                        style={{
                            backgroundImage: `url(${GraphicImage4.src})`
                        }}
                    >
                        {/* Your content here */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhoWeWorkWithSection;