"use client"
import React, { useState } from 'react';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        subject: "",
        email: "",
        phone: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState({ type: "", message: "" });

    const validateForm = () => {
        // Ensure all fields have at least some content and aren't just whitespace
        const requiredFields = ['fullName', 'subject', 'email', 'phone', 'message'];
        for (const field of requiredFields) {
            if (!formData[field] || !formData[field].trim()) {
                setSubmitStatus({
                    type: "error",
                    message: `${field === 'fullName' ? 'Full Name' : field.charAt(0).toUpperCase() + field.slice(1)} is required`
                });
                return false;
            }
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setSubmitStatus({
                type: "error",
                message: "Please enter a valid email address"
            });
            return false;
        }

        return true;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitStatus({ type: "", message: "" });

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);

        // Sanitize the data by trimming whitespace
        const sanitizedData = Object.keys(formData).reduce((acc, key) => ({
            ...acc,
            [key]: formData[key].trim()
        }), {});

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contact: sanitizedData,
                    recipientEmail: process.env.NEXT_RECIPIENT_EMAIL || "suleosman73@gmail.com"
                })
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => null);
                throw new Error(errorData?.message || 'Failed to send message');
            }

            setSubmitStatus({
                type: "success",
                message: "Message sent successfully!"
            });
            setFormData({
                fullName: "",
                subject: "",
                email: "",
                phone: "",
                message: ""
            });
        } catch (error) {
            console.error('Contact form submission error:', error);
            setSubmitStatus({
                type: "error",
                message: error.message || "Failed to send message. Please try again."
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="bg-[#FDF2FA] py-8 md:py-16">
            <div className="w-full px-4 md:px-0">
                {/* Main Heading */}
                <h1 className="text-center text-2xl md:text-4xl font-bold text-mainColor italic mb-8 md:mb-16">
                    Let's shape the future of Governance - Together.
                </h1>

                <div className="relative w-full">
                    {/* Desktop Layout */}
                    <div className="hidden md:flex md:relative md:w-full">
                        <div className="bg-white w-[60%] h-[816px] rounded-lg flex items-center justify-start pl-48">
                            <div className="max-w-md">
                                <p className="text-gray-800 text-lg leading-relaxed italic mb-6">
                                    Whether you're looking to strengthen your board practices, secure your digital infrastructure, or implement responsible AI oversight, our team is here to help.
                                </p>

                                <p className="text-gray-800 text-lg leading-relaxed italic mb-8">
                                    Reach out for a confidential consultation or to learn more about our services.
                                </p>

                                <div className="space-y-4">
                                    {/*<div className="flex items-center text-gray-800">*/}
                                    {/*    <span className="text-mainColor mr-3">📞</span>*/}
                                    {/*    <span>+44 7931 235632</span>*/}
                                    {/*</div>*/}
                                    <div className="flex items-center text-gray-800">
                                        <span className="text-mainColor mr-3">✉️</span>
                                        <span>info@handsongovernancy.co.uk</span>
                                    </div>
                                    {/*<div className="flex items-start text-gray-800">*/}
                                    {/*    <span className="text-mainColor mr-3 mt-1">📍</span>*/}
                                    {/*    <span>43 Twyeross Road, Wokingham Berkshire</span>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                        <div className="bg-secondaryColor w-[50%] top-[20%] h-[616px] absolute right-0 rounded-lg p-8">
                            {/* Status Message */}
                            {submitStatus.message && (
                                <div className={`mb-4 p-3 rounded ${
                                    submitStatus.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                                }`}>
                                    {submitStatus.message}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} noValidate>
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label className="block text-white text-sm mb-2">*Full Name</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            placeholder="Full Name"
                                            className="w-full p-3 rounded bg-gray-500 text-white placeholder-gray-300 border-none outline-none"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-white text-sm mb-2">*Subject</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="Subject"
                                            className="w-full p-3 rounded bg-gray-500 text-white placeholder-gray-300 border-none outline-none"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label className="block text-white text-sm mb-2">*Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Email"
                                            className="w-full p-3 rounded bg-gray-500 text-white placeholder-gray-300 border-none outline-none"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-white text-sm mb-2">*Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Phone Number"
                                            className="w-full p-3 rounded bg-gray-500 text-white placeholder-gray-300 border-none outline-none"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label className="block text-white text-sm mb-2">*Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Message"
                                        rows="6"
                                        className="w-full p-3 rounded bg-gray-500 text-white placeholder-gray-300 border-none outline-none resize-none"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-mainColor hover:bg-secondaryColor text-white font-medium py-3 px-6 rounded transition-colors disabled:opacity-50"
                                >
                                    {isSubmitting ? "Submitting..." : "Submit"}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="md:hidden space-y-6">
                        {/* Contact Info Section */}
                        <div className="bg-white rounded-lg p-6">
                            <p className="text-gray-800 text-base leading-relaxed italic mb-4">
                                Whether you're looking to strengthen your board practices, secure your digital infrastructure, or implement responsible AI oversight, our team is here to help.
                            </p>

                            <p className="text-gray-800 text-base leading-relaxed italic mb-6">
                                Reach out for a confidential consultation or to learn more about our services.
                            </p>

                            <div className="space-y-3">
                                <div className="flex items-center text-gray-800">
                                    <span className="text-mainColor mr-3">📞</span>
                                    <span className="text-sm">+44 7931 235632</span>
                                </div>
                                <div className="flex items-center text-gray-800">
                                    <span className="text-mainColor mr-3">✉️</span>
                                    <span className="text-sm">info@handsongovernancy.co.uk</span>
                                </div>
                                <div className="flex items-start text-gray-800">
                                    <span className="text-mainColor mr-3 mt-1">📍</span>
                                    <span className="text-sm">43 Twyeross Road, Wokingham Berkshire</span>
                                </div>
                            </div>
                        </div>

                        {/* Form Section */}
                        <div className="bg-secondaryColor rounded-lg p-6">
                            {/* Status Message */}
                            {submitStatus.message && (
                                <div className={`mb-4 p-3 rounded ${
                                    submitStatus.type === "success" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
                                }`}>
                                    {submitStatus.message}
                                </div>
                            )}

                            <form onSubmit={handleSubmit} noValidate>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label className="block text-white text-sm mb-2">*Full Name</label>
                                        <input
                                            type="text"
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            placeholder="Full Name"
                                            className="w-full p-3 rounded bg-gray-500 text-white placeholder-gray-300 border-none outline-none"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-white text-sm mb-2">*Subject</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="Subject"
                                            className="w-full p-3 rounded bg-gray-500 text-white placeholder-gray-300 border-none outline-none"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                                    <div>
                                        <label className="block text-white text-sm mb-2">*Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Email"
                                            className="w-full p-3 rounded bg-gray-500 text-white placeholder-gray-300 border-none outline-none"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-white text-sm mb-2">*Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            placeholder="Phone Number"
                                            className="w-full p-3 rounded bg-gray-500 text-white placeholder-gray-300 border-none outline-none"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label className="block text-white text-sm mb-2">*Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Message"
                                        rows="4"
                                        className="w-full p-3 rounded bg-gray-500 text-white placeholder-gray-300 border-none outline-none resize-none"
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-mainColor hover:bg-secondaryColor text-white font-medium py-3 px-6 rounded transition-colors disabled:opacity-50"
                                >
                                    {isSubmitting ? "Submitting..." : "Submit"}
                                </button>
                            </form>
                        </div>

                        {/* Bottom text for mobile */}
                        <div className="text-center">
                            <p className="text-gray-600 text-sm">
                                We look forward to hearing from you and helping you achieve your business objectives. Let's collaborate and drive success together!
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom text for desktop */}
                <div className="hidden md:flex justify-end mt-8">
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