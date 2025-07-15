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
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-mainColor mb-8 lg:mb-12">
                    Who We Work With
                </h2>

                {/* Bullet List */}
                <ul className="max-w-4xl space-y-4 text-white text-lg sm:text-xl lg:text-2xl font-semibold">
                    {items.map((item, index) => (
                        <li key={index} className="flex items-start">
                            <span className="text-mainColor mr-3 text-2xl">•</span>
                            <span className="leading-relaxed">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default WhoWeWorkWithSection;