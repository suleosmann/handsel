"use client"
import React from 'react';

const CookiePolicyPage = () => {
    return (
        <div className="min-h-screen bg-[#FDF2FA] py-8 md:py-16">
            <div className="max-w-4xl mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-5xl font-bold text-mainColor mb-4">
                        Cookie Policy
                    </h1>
                    <div className="text-gray-600 text-sm">
                        <p>Effective Date: 01 Jul 2025</p>
                    </div>
                </div>

                {/* Content */}
                <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
                    <div className="prose prose-lg max-w-none">
                        <div className="mb-8">
                            <p className="text-gray-700 leading-relaxed">
                                This Cookie Policy explains how Handsel Consultancy Limited ("we", "us", or "our") uses cookies and similar
                                technologies when you visit our website www.handselconsultancy.co.uk.
                            </p>
                            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mt-4 rounded">
                                <p className="text-gray-700">
                                    By continuing to browse our website, you consent to our use of cookies, unless you have disabled them
                                    via your browser settings or our cookie consent tool.
                                </p>
                            </div>
                        </div>

                        {/* Section 1 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-mainColor mb-4 border-b-2 border-mainColor pb-2">
                                1. What Are Cookies?
                            </h2>
                            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg">
                                <div className="flex items-start">
                                    <span className="text-4xl mr-4">🍪</span>
                                    <div>
                                        <p className="text-gray-700 leading-relaxed">
                                            Cookies are small text files placed on your device (computer, phone, tablet) when you visit a website.
                                            They help the site function correctly and provide information to the site owners to improve services
                                            and user experience.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 2 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-mainColor mb-4 border-b-2 border-mainColor pb-2">
                                2. Types of Cookies We Use
                            </h2>
                            <p className="text-gray-700 mb-6">We use the following categories of cookies:</p>

                            <div className="space-y-6">
                                {/* Strictly Necessary */}
                                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg">
                                    <div className="flex items-center mb-3">
                                        <span className="text-2xl mr-3">🔒</span>
                                        <h3 className="text-xl font-bold text-gray-800">Strictly Necessary Cookies</h3>
                                    </div>
                                    <p className="text-gray-700 mb-3">
                                        These are essential for website functionality, such as page navigation and secure access to areas of the site.
                                    </p>
                                    <div className="bg-white p-3 rounded border-l-4 border-red-400">
                                        <p className="text-sm text-gray-600 font-semibold">
                                            The site cannot function properly without these cookies.
                                        </p>
                                    </div>
                                </div>

                                {/* Performance/Analytics */}
                                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-lg">
                                    <div className="flex items-center mb-3">
                                        <span className="text-2xl mr-3">📊</span>
                                        <h3 className="text-xl font-bold text-gray-800">Performance/Analytics Cookies</h3>
                                    </div>
                                    <p className="text-gray-700 mb-3">
                                        These help us understand how visitors interact with our website by collecting anonymous data
                                        (e.g., number of visitors, popular pages).
                                    </p>
                                    <div className="bg-white p-3 rounded border-l-4 border-blue-400">
                                        <p className="text-sm text-gray-600">
                                            This helps us improve performance and usability.
                                        </p>
                                    </div>
                                </div>

                                {/* Functional */}
                                <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg">
                                    <div className="flex items-center mb-3">
                                        <span className="text-2xl mr-3">⚙️</span>
                                        <h3 className="text-xl font-bold text-gray-800">Functional Cookies</h3>
                                    </div>
                                    <p className="text-gray-700 mb-3">
                                        These remember your preferences (like language or location) to enhance your experience.
                                    </p>
                                </div>

                                {/* Marketing/Targeting */}
                                <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-lg">
                                    <div className="flex items-center mb-3">
                                        <span className="text-2xl mr-3">🎯</span>
                                        <h3 className="text-xl font-bold text-gray-800">Marketing/Targeting Cookies</h3>
                                    </div>
                                    <p className="text-gray-700 mb-3">
                                        These may be set by us or third parties to display relevant ads and track user engagement across websites.
                                    </p>
                                    <div className="bg-white p-3 rounded border-l-4 border-purple-400">
                                        <p className="text-sm text-gray-600 font-semibold text-purple-800">
                                            These cookies are only used with your explicit consent.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 3 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-mainColor mb-4 border-b-2 border-mainColor pb-2">
                                3. Third-Party Cookies
                            </h2>
                            <div className="bg-gray-50 p-6 rounded-lg">
                                <p className="text-gray-700 mb-4">
                                    Some cookies may be set by third-party services integrated into our website (e.g., Google, Facebook, LinkedIn).
                                    These providers may use their own cookies and privacy practices.
                                </p>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <a
                                        href="https://policies.google.com/privacy"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center group"
                                    >
                                        <div className="text-2xl mb-2">🔍</div>
                                        <h3 className="font-semibold text-gray-800 group-hover:text-mainColor">Google</h3>
                                        <p className="text-sm text-gray-600">Privacy & Terms</p>
                                    </a>
                                    <a
                                        href="https://www.meta.com/privacy/policy/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center group"
                                    >
                                        <div className="text-2xl mb-2">📘</div>
                                        <h3 className="font-semibold text-gray-800 group-hover:text-mainColor">Meta</h3>
                                        <p className="text-sm text-gray-600">Privacy Policy</p>
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/legal/privacy-policy"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center group"
                                    >
                                        <div className="text-2xl mb-2">💼</div>
                                        <h3 className="font-semibold text-gray-800 group-hover:text-mainColor">LinkedIn</h3>
                                        <p className="text-sm text-gray-600">Privacy Policy</p>
                                    </a>
                                </div>
                            </div>
                        </section>

                        {/* Section 4 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-mainColor mb-4 border-b-2 border-mainColor pb-2">
                                4. Managing Cookie Preferences
                            </h2>
                            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg mb-6">
                                <p className="text-gray-700 mb-4">
                                    When you first visit our website, you will see a cookie consent banner where you can choose to:
                                </p>
                                <div className="grid md:grid-cols-3 gap-4">
                                    <div className="bg-white p-4 rounded-lg text-center">
                                        <div className="text-2xl mb-2">✅</div>
                                        <h3 className="font-semibold text-gray-800 mb-2">Accept All</h3>
                                        <p className="text-sm text-gray-600">Allow all cookie types</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg text-center">
                                        <div className="text-2xl mb-2">❌</div>
                                        <h3 className="font-semibold text-gray-800 mb-2">Reject Non-Essential</h3>
                                        <p className="text-sm text-gray-600">Only necessary cookies</p>
                                    </div>
                                    <div className="bg-white p-4 rounded-lg text-center">
                                        <div className="text-2xl mb-2">⚙️</div>
                                        <h3 className="font-semibold text-gray-800 mb-2">Manage Preferences</h3>
                                        <p className="text-sm text-gray-600">Choose specific categories</p>
                                    </div>
                                </div>
                            </div>

                            <h3 className="text-xl font-semibold text-gray-800 mb-4">Browser Settings</h3>
                            <p className="text-gray-700 mb-4">You can also control cookies through your browser settings:</p>

                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-white border border-gray-200 p-4 rounded-lg">
                                    <div className="flex items-center mb-3">
                                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                                            <span className="text-white text-xs font-bold">C</span>
                                        </div>
                                        <h4 className="font-semibold text-gray-800">Chrome</h4>
                                    </div>
                                    <p className="text-sm text-gray-600">Settings → Privacy and Security → Cookies</p>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded-lg">
                                    <div className="flex items-center mb-3">
                                        <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                                            <span className="text-white text-xs font-bold">F</span>
                                        </div>
                                        <h4 className="font-semibold text-gray-800">Firefox</h4>
                                    </div>
                                    <p className="text-sm text-gray-600">Preferences → Privacy & Security</p>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded-lg">
                                    <div className="flex items-center mb-3">
                                        <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center mr-3">
                                            <span className="text-white text-xs font-bold">S</span>
                                        </div>
                                        <h4 className="font-semibold text-gray-800">Safari</h4>
                                    </div>
                                    <p className="text-sm text-gray-600">Preferences → Privacy</p>
                                </div>

                                <div className="bg-white border border-gray-200 p-4 rounded-lg">
                                    <div className="flex items-center mb-3">
                                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                                            <span className="text-white text-xs font-bold">E</span>
                                        </div>
                                        <h4 className="font-semibold text-gray-800">Edge</h4>
                                    </div>
                                    <p className="text-sm text-gray-600">Settings → Cookies and site permissions</p>
                                </div>
                            </div>
                        </section>

                        {/* Section 5 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-mainColor mb-4 border-b-2 border-mainColor pb-2">
                                5. Cookie Duration
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-lg">
                                    <div className="flex items-center mb-3">
                                        <span className="text-2xl mr-3">⏱️</span>
                                        <h3 className="text-xl font-bold text-gray-800">Session Cookies</h3>
                                    </div>
                                    <p className="text-gray-700">
                                        Deleted when you close your browser
                                    </p>
                                </div>

                                <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
                                    <div className="flex items-center mb-3">
                                        <span className="text-2xl mr-3">🔄</span>
                                        <h3 className="text-xl font-bold text-gray-800">Persistent Cookies</h3>
                                    </div>
                                    <p className="text-gray-700">
                                        Remain on your device until they expire or are manually deleted
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 6 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-mainColor mb-4 border-b-2 border-mainColor pb-2">
                                6. Changes to This Cookie Policy
                            </h2>
                            <div className="bg-indigo-50 p-6 rounded-lg">
                                <div className="flex items-start">
                                    <span className="text-2xl mr-3">📝</span>
                                    <div>
                                        <p className="text-gray-700 leading-relaxed">
                                            We may update this Cookie Policy to reflect changes in our use of cookies or legal requirements.
                                            The most recent version will always be available on our website.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 7 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-mainColor mb-4 border-b-2 border-mainColor pb-2">
                                7. Contact Us
                            </h2>
                            <div className="bg-gradient-to-r from-mainColor to-secondaryColor text-white p-6 rounded-lg">
                                <div className="flex items-start">
                                    <span className="text-3xl mr-4">📧</span>
                                    <div>
                                        <p className="mb-4">
                                            If you have questions about this Cookie Policy or our use of cookies:
                                        </p>
                                        <div className="bg-white bg-opacity-20 p-4 rounded">
                                            <p className="font-semibold mb-2">Handsel Consultancy Limited</p>
                                            <p className="mb-1">
                                                Email: <a href="mailto:info@handselconsultancy.co.uk" className="underline hover:no-underline">info@handselconsultancy.co.uk</a>
                                            </p>
                                            <p>
                                                Website: <a href="https://handselconsultancy.co.uk" className="underline hover:no-underline">https://handselconsultancy.co.uk</a>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Additional Information */}
                        <section className="mb-8">
                            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 p-6 rounded-lg">
                                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                                    <span className="text-2xl mr-2">💡</span>
                                    Need Help with Your Cookie Settings?
                                </h3>
                                <p className="text-gray-700 mb-4">
                                    You can change your cookie preferences at any time by clicking the "Cookie Settings" button
                                    that appears at the bottom of our website, or by clearing your browser's cookies and revisiting our site.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Manage Preferences</span>
                                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">GDPR Compliant</span>
                                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Your Choice</span>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                {/* Related Links */}
                <div className="mt-8 text-center">
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-4">Related Policies</h3>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="/privacy-policy"
                                className="bg-mainColor hover:bg-opacity-90 text-white px-6 py-3 rounded-lg transition-colors"
                            >
                                Privacy Policy
                            </a>
                            <button
                                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                                className="border-2 border-mainColor text-mainColor hover:bg-mainColor hover:text-white px-6 py-3 rounded-lg transition-colors"
                            >
                                Back to Top
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CookiePolicyPage;