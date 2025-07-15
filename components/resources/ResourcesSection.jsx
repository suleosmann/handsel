import React from 'react';
import Image from 'next/image';
import BlogImage from '@/public/assets/laptop.jpg';
import WhitepapersImage from '@/public/assets/writing.jpg';
import CaseStudiesImage from '@/public/assets/notes.jpg';
import WebinarsImage from '@/public/assets/zoom.jpg';

const ResourcesSection = () => {
    const resources = [
        {
            id: 1,
            title: "Blog",
            description: "Stay up-to-date with the latest industry trends, expert opinions, and actionable tips on our blog.",
            buttonText: "Discover",
            image: BlogImage,
            imageAlt: "Workspace with laptop and coffee"
        },
        {
            id: 2,
            title: "Whitepapers",
            description: "Dive deep into key topics and industry trends with our in-depth whitepapers and research reports.",
            buttonText: "Discover",
            image: WhitepapersImage,
            imageAlt: "Person writing on documents"
        },
        {
            id: 3,
            title: "Case Studies",
            description: "Discover how we've helped businesses like yours overcome challenges and achieve success with our case studies.",
            buttonText: "Discover",
            image: CaseStudiesImage,
            imageAlt: "Colorful sticky notes on wall"
        },
        {
            id: 4,
            title: "Webinars and Events",
            description: "Join our webinars and events to learn from industry experts, share best practices, and network with peers.",
            buttonText: "Discover",
            image: WebinarsImage,
            imageAlt: "Video conference call on laptop"
        }
    ];

    return (
        <div className="bg-[#fdf2f1] py-8 md:py-16 px-4 md:px-8">

            <div className="max-w-6xl mx-auto space-y-8 md:space-y-16">
                {resources.map((resource, index) => {
                    const isEven = index % 2 === 0;

                    return (
                        <div key={resource.id} className={`flex flex-col lg:flex-row items-center gap-6 md:gap-12 ${
                            isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                        }`}>
                            {/* Image Section */}
                            <div className="flex-1 w-full">
                                <div className="relative w-full max-w-[522px] mx-auto h-[200px] sm:h-[250px] md:h-[300px] lg:w-[522px] rounded-lg overflow-hidden border-2 border-pink-300">
                                    <Image
                                        src={resource.image}
                                        alt={resource.imageAlt}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Content Section */}
                            <div className={`flex-1 w-full text-center lg:text-left ${
                                isEven ? 'lg:text-left' : 'lg:text-right'
                            }`}>
                                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4">
                                    {resource.title}
                                </h2>
                                <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4 md:mb-6">
                                    {resource.description}
                                </p>
                                <button className={`inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-800 transition-colors ${
                                    isEven ? 'lg:justify-start' : 'lg:justify-end'
                                } justify-center`}>
                                    {resource.buttonText}
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ResourcesSection;