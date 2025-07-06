"use client"
import React from 'react';

const ContactSection = () => {
    return (
        <div className="bg-[#FDF2FA] py-16">
            <div className="w-full">
                {/* Main Heading */}
                <h1 className="text-center text-4xl font-bold text-mainColor italic mb-16">
                    Let's shape the future of Governance - Together.
                </h1>

                <div className="relative w-full">
                    <div className="bg-white w-[60%] h-[816px] rounded-lg flex items-center justify-start pl-48">
                        <div className="max-w-md">
                            <p className="text-gray-800 text-lg leading-relaxed italic mb-6">
                                Whether you're looking to strengthen your board practices, secure your digital infrastructure, or implement responsible AI oversight, our team is here to help.
                            </p>

                            <p className="text-gray-800 text-lg leading-relaxed italic mb-8">
                                Reach out for a confidential consultation or to learn more about our services.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center text-gray-800">
                                    <span className="text-mainColor mr-3">📞</span>
                                    <span>+44 7931 235632</span>
                                </div>
                                <div className="flex items-center text-gray-800">
                                    <span className="text-mainColor mr-3">✉️</span>
                                    <span>info@handsongovernancy.co.uk</span>
                                </div>
                                <div className="flex items-start text-gray-800">
                                    <span className="text-mainColor mr-3 mt-1">📍</span>
                                    <span>43 Twyeross Road, Wokingham Berkshire</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-secondaryColor w-[50%] top-[20%] h-[616px] absolute right-0 rounded-lg p-8">
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-white text-sm mb-2">*Full Name</label>
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full p-3 rounded bg-gray-500 text-white placeholder-gray-300 border-none outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-white text-sm mb-2">*Subject</label>
                                <input
                                    type="text"
                                    placeholder="Subject"
                                    className="w-full p-3 rounded bg-gray-500 text-white placeholder-gray-300 border-none outline-none"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-white text-sm mb-2">*Email</label>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full p-3 rounded bg-gray-500 text-white placeholder-gray-300 border-none outline-none"
                                />
                            </div>
                            <div>
                                <label className="block text-white text-sm mb-2">*Phone Number</label>
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    className="w-full p-3 rounded bg-gray-500 text-white placeholder-gray-300 border-none outline-none"
                                />
                            </div>
                        </div>

                        <div className="mb-6">
                            <label className="block text-white text-sm mb-2">*Message</label>
                            <textarea
                                placeholder="Message"
                                rows="6"
                                className="w-full p-3 rounded bg-gray-500 text-white placeholder-gray-300 border-none outline-none resize-none"
                            ></textarea>
                        </div>

                        <button className="w-full bg-mainColor hover:bg-secondaryColor text-white font-medium py-3 px-6 rounded transition-colors">
                            Submit
                        </button>
                    </div>
                </div>

                {/* Bottom text under the secondary color section */}
                <div className="flex justify-end mt-8">
                    <div className="w-[50%] text-center">
                        <p className="text-gray-600 text-sm">
                            We look forward to hearing from you and helping you achieve your business objectives. Let's collaborate and drive success together!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;