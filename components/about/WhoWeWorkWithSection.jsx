"use client";

const WhoWeWorkWithSection = () => {
    const items = [
        "Corporates and listed companies",
        "Government agencies and public institutions",
        "Financial services and fintech firms",
        "Healthcare, energy, and regulated industries",
        "Tech startups scaling fast with AI or cybersecurity exposure"
    ];

    return (
        <div className="bg-secondaryColor font-gill-sans py-12 lg:py-16 mt-10">
            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                {/* Header */}
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-8 lg:mb-12">
                    Who we work with
                </h2>

                {/* Card Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 max-w-6xl">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`border border-mainColor rounded-lg p-6 lg:p-8 bg-transparent hover:bg-secondaryColor transition-all duration-300 ${
                                index === 4 ? 'md:col-span-1' : ''
                            }`}
                        >
                            <div className="flex items-center">
                                <div className="w-4 h-4 bg-mainColor rounded-full mr-4 flex-shrink-0"></div>
                                <span className="text-white text-lg lg:text-xl font-medium leading-relaxed">
                                    {item}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhoWeWorkWithSection;