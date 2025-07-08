"use client"
import React from 'react';

const PrivacyPolicyPage = () => {
    return (
        <div className="min-h-screen bg-[#FDF2FA] py-8 md:py-16">
            <div className="max-w-4xl mx-auto px-4 md:px-8">
                {/* Header */}
                <div className="text-center mb-12">
                    <h1 className="text-3xl md:text-5xl font-bold text-mainColor mb-4">
                        Privacy Policy
                    </h1>
                    <div className="text-gray-600 text-sm">
                        <p>Effective Date: 01 Jul 2025</p>
                        <p>Last Updated: 08 Jul 2025</p>
                    </div>
                </div>

                {/* Content */}
                <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
                    <div className="prose prose-lg max-w-none">
                        <div className="mb-8">
                            <p className="text-gray-700 leading-relaxed">
                                Handsel Consultancy Limited ("we", "us", or "our") is committed to protecting and respecting your privacy.
                                This Privacy Policy explains how we collect, use, and protect your personal data in accordance with the
                                UK General Data Protection Regulation (UK GDPR), the Data Protection Act 2018, and other relevant laws.
                            </p>
                        </div>

                        {/* Section 1 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-mainColor mb-4 border-b-2 border-mainColor pb-2">
                                1. Who We Are
                            </h2>
                            <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                <p className="font-semibold text-gray-800 mb-2">Handsel Consultancy Limited</p>
                                <ul className="text-gray-700 space-y-1">
                                    <li>Registered in the United Kingdom</li>
                                    <li>Company Number: 05268671</li>
                                    <li>Registered Office: 43 Twycross Road, Wokingham, England, RG40 5PE</li>
                                    <li>Email: info@handselconsultancy.co.uk</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed">
                                We help organizations lead with confidence through world-class governance in the corporate, cyber, and AI arenas.
                                Whether you're navigating regulatory complexity, digital transformation, or emerging technologies—we deliver the
                                frameworks, insight, and oversight that drive performance and protect reputation.
                            </p>
                        </section>

                        {/* Section 2 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-mainColor mb-4 border-b-2 border-mainColor pb-2">
                                2. What Personal Data We Collect
                            </h2>
                            <p className="text-gray-700 mb-4">We may collect and process the following categories of personal data:</p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="bg-blue-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-gray-800 mb-2">Identity Data</h3>
                                    <p className="text-gray-700 text-sm">Name, title, company name</p>
                                </div>
                                <div className="bg-green-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-gray-800 mb-2">Contact Data</h3>
                                    <p className="text-gray-700 text-sm">Email address, phone number, address</p>
                                </div>
                                <div className="bg-purple-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-gray-800 mb-2">Technical Data</h3>
                                    <p className="text-gray-700 text-sm">IP address, browser type, cookies, usage data</p>
                                </div>
                                <div className="bg-orange-50 p-4 rounded-lg">
                                    <h3 className="font-semibold text-gray-800 mb-2">Marketing Data</h3>
                                    <p className="text-gray-700 text-sm">Your preferences in receiving communications</p>
                                </div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg mt-4">
                                <h3 className="font-semibold text-gray-800 mb-2">Other Information</h3>
                                <p className="text-gray-700 text-sm">Information you provide via our forms, emails, or communications</p>
                            </div>
                        </section>

                        {/* Section 3 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-mainColor mb-4 border-b-2 border-mainColor pb-2">
                                3. How We Collect Your Data
                            </h2>
                            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
                                <p className="text-gray-700 mb-3">We collect your personal data when you:</p>
                                <ul className="list-disc list-inside text-gray-700 space-y-2">
                                    <li>Visit our website (via cookies or tracking tools)</li>
                                    <li>Fill out a contact or enquiry form</li>
                                    <li>Email or call us directly</li>
                                    <li>Subscribe to our newsletter or marketing list</li>
                                    <li>Engage our services</li>
                                </ul>
                            </div>
                        </section>

                        {/* Section 4 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-mainColor mb-4 border-b-2 border-mainColor pb-2">
                                4. How We Use Your Data
                            </h2>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <span className="text-mainColor text-xl mr-3">✓</span>
                                        <span className="text-gray-700">Respond to your enquiries or requests</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-mainColor text-xl mr-3">✓</span>
                                        <span className="text-gray-700">Provide services you have requested</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-mainColor text-xl mr-3">✓</span>
                                        <span className="text-gray-700">Send updates, news, or marketing (only with your consent)</span>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-start">
                                        <span className="text-mainColor text-xl mr-3">✓</span>
                                        <span className="text-gray-700">Improve website functionality and user experience</span>
                                    </div>
                                    <div className="flex items-start">
                                        <span className="text-mainColor text-xl mr-3">✓</span>
                                        <span className="text-gray-700">Comply with legal obligations</span>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Section 5 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-mainColor mb-4 border-b-2 border-mainColor pb-2">
                                5. Legal Bases for Processing
                            </h2>
                            <p className="text-gray-700 mb-4">We rely on one or more of the following legal bases:</p>
                            <div className="space-y-4">
                                <div className="border-l-4 border-blue-500 pl-4">
                                    <h3 className="font-semibold text-gray-800">Consent</h3>
                                    <p className="text-gray-700 text-sm">Where you have given clear permission</p>
                                </div>
                                <div className="border-l-4 border-green-500 pl-4">
                                    <h3 className="font-semibold text-gray-800">Contract</h3>
                                    <p className="text-gray-700 text-sm">Where processing is necessary to fulfill a contract</p>
                                </div>
                                <div className="border-l-4 border-orange-500 pl-4">
                                    <h3 className="font-semibold text-gray-800">Legal Obligation</h3>
                                    <p className="text-gray-700 text-sm">For compliance with the law</p>
                                </div>
                                <div className="border-l-4 border-purple-500 pl-4">
                                    <h3 className="font-semibold text-gray-800">Legitimate Interest</h3>
                                    <p className="text-gray-700 text-sm">Where we have a business reason to use your data (e.g. website analytics, service improvement)</p>
                                </div>
                            </div>
                        </section>

                        {/* Section 6 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-mainColor mb-4 border-b-2 border-mainColor pb-2">
                                6. Data Sharing and Transfers
                            </h2>
                            <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-4">
                                <p className="font-semibold text-gray-800">We do not sell your data.</p>
                            </div>
                            <p className="text-gray-700 mb-4">We may share your personal data with:</p>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-gray-50 p-4 rounded-lg text-center">
                                    <div className="text-2xl mb-2">🔧</div>
                                    <h3 className="font-semibold text-gray-800 mb-2">Service Providers</h3>
                                    <p className="text-gray-700 text-sm">IT, website hosting, email platforms</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg text-center">
                                    <div className="text-2xl mb-2">⚖️</div>
                                    <h3 className="font-semibold text-gray-800 mb-2">Legal Authorities</h3>
                                    <p className="text-gray-700 text-sm">If required by law</p>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg text-center">
                                    <div className="text-2xl mb-2">👥</div>
                                    <h3 className="font-semibold text-gray-800 mb-2">Professional Advisers</h3>
                                    <p className="text-gray-700 text-sm">Accountants, lawyers</p>
                                </div>
                            </div>
                            <p className="text-gray-700 mt-4">
                                We ensure all third parties respect your data and comply with UK GDPR standards.
                            </p>
                        </section>

                        {/* Section 7 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-mainColor mb-4 border-b-2 border-mainColor pb-2">
                                7. International Transfers
                            </h2>
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <p className="text-gray-700">
                                    If any data is transferred outside the UK or EEA, we ensure appropriate safeguards are in place
                                    (e.g., Standard Contractual Clauses).
                                </p>
                            </div>
                        </section>

                        {/* Section 8 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-mainColor mb-4 border-b-2 border-mainColor pb-2">
                                8. How We Protect Your Data
                            </h2>
                            <p className="text-gray-700 mb-4">We implement appropriate technical and organisational security measures, including:</p>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="bg-green-50 p-4 rounded-lg text-center">
                                    <div className="text-2xl mb-2">🔒</div>
                                    <h3 className="font-semibold text-gray-800 mb-2">Secure Servers</h3>
                                    <p className="text-gray-700 text-sm">Data encryption</p>
                                </div>
                                <div className="bg-green-50 p-4 rounded-lg text-center">
                                    <div className="text-2xl mb-2">🛡️</div>
                                    <h3 className="font-semibold text-gray-800 mb-2">Access Controls</h3>
                                    <p className="text-gray-700 text-sm">Authentication systems</p>
                                </div>
                                <div className="bg-green-50 p-4 rounded-lg text-center">
                                    <div className="text-2xl mb-2">🔄</div>
                                    <h3 className="font-semibold text-gray-800 mb-2">Regular Reviews</h3>
                                    <p className="text-gray-700 text-sm">Security updates</p>
                                </div>
                            </div>
                        </section>

                        {/* Section 9 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-mainColor mb-4 border-b-2 border-mainColor pb-2">
                                9. Data Retention
                            </h2>
                            <div className="bg-yellow-50 p-4 rounded-lg">
                                <p className="text-gray-700">
                                    We retain your personal data only for as long as necessary to fulfill the purposes we collected it for,
                                    including legal or regulatory requirements.
                                </p>
                            </div>
                        </section>

                        {/* Section 10 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-mainColor mb-4 border-b-2 border-mainColor pb-2">
                                10. Your Rights Under UK GDPR
                            </h2>
                            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
                                <p className="text-gray-700 mb-4 font-semibold">You have the right to:</p>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <div className="flex items-center">
                                            <span className="text-mainColor mr-2">👁️</span>
                                            <span className="text-gray-700">Access your personal data</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="text-mainColor mr-2">✏️</span>
                                            <span className="text-gray-700">Request correction or deletion</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="text-mainColor mr-2">🚫</span>
                                            <span className="text-gray-700">Object to or restrict processing</span>
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-center">
                                            <span className="text-mainColor mr-2">↩️</span>
                                            <span className="text-gray-700">Withdraw consent at any time</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="text-mainColor mr-2">📦</span>
                                            <span className="text-gray-700">Request data portability</span>
                                        </div>
                                        <div className="flex items-center">
                                            <span className="text-mainColor mr-2">📝</span>
                                            <span className="text-gray-700">Lodge a complaint with the ICO</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 p-3 bg-white rounded border-l-4 border-mainColor">
                                    <p className="text-gray-700">
                                        To exercise any of these rights, contact us at:
                                        <a href="mailto:info@handselconsultancy.co.uk" className="text-mainColor hover:underline ml-1">
                                            info@handselconsultancy.co.uk
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </section>

                        {/* Section 11 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-mainColor mb-4 border-b-2 border-mainColor pb-2">
                                11. Cookies and Tracking
                            </h2>
                            <div className="bg-orange-50 p-4 rounded-lg">
                                <p className="text-gray-700 mb-3">
                                    We use cookies to enhance user experience and analyse traffic. You can manage your cookie preferences
                                    through our cookie consent banner and browser settings.
                                </p>
                                <p className="text-gray-700">
                                    See our <a href="/cookie-policy" className="text-mainColor hover:underline font-semibold">Cookie Policy</a> for full details.
                                </p>
                            </div>
                        </section>

                        {/* Section 12 */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-mainColor mb-4 border-b-2 border-mainColor pb-2">
                                12. Updates to This Policy
                            </h2>
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="text-gray-700">
                                    We may update this Privacy Policy from time to time. The latest version will always be available on this page.
                                    We recommend reviewing this policy periodically.
                                </p>
                            </div>
                        </section>

                        {/* Contact Section */}
                        <section className="mb-8">
                            <h2 className="text-2xl font-bold text-mainColor mb-4 border-b-2 border-mainColor pb-2">
                                Contact Us
                            </h2>
                            <div className="bg-gradient-to-r from-mainColor to-secondaryColor text-white p-6 rounded-lg">
                                <p className="mb-4">
                                    If you have any questions or concerns about this Privacy Policy or your personal data, contact:
                                </p>
                                <div className="bg-white bg-opacity-20 p-4 rounded">
                                    <p className="font-semibold mb-2">Handsel Consultancy Limited</p>
                                    <p>Email: <a href="mailto:info@handselconsultancy.co.uk" className="underline">info@handselconsultancy.co.uk</a></p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

                {/* Back to Top Button */}
                <div className="text-center mt-8">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="bg-mainColor hover:bg-opacity-90 text-white px-6 py-3 rounded-lg transition-colors"
                    >
                        Back to Top
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;