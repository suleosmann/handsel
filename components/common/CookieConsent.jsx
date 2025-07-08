"use client"
import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showPreferences, setShowPreferences] = useState(false);
    const [preferences, setPreferences] = useState({
        necessary: true, // Always true, can't be disabled
        analytics: false,
        functional: false,
        marketing: false
    });

    useEffect(() => {
        // Check if user has already made a choice
        const consent = localStorage.getItem('cookieConsent');
        if (!consent) {
            setIsVisible(true);
        } else {
            // Load saved preferences
            try {
                const savedPreferences = JSON.parse(consent);
                setPreferences(savedPreferences);
            } catch (error) {
                console.error('Error parsing cookie preferences:', error);
                setIsVisible(true);
            }
        }
    }, []);

    const handleAcceptAll = () => {
        const allAccepted = {
            necessary: true,
            analytics: true,
            functional: true,
            marketing: true
        };
        setPreferences(allAccepted);
        localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
        setIsVisible(false);

        // Initialize analytics and other services here
        initializeServices(allAccepted);
    };

    const handleRejectNonEssential = () => {
        const onlyNecessary = {
            necessary: true,
            analytics: false,
            functional: false,
            marketing: false
        };
        setPreferences(onlyNecessary);
        localStorage.setItem('cookieConsent', JSON.stringify(onlyNecessary));
        setIsVisible(false);

        // Only initialize necessary services
        initializeServices(onlyNecessary);
    };

    const handleSavePreferences = () => {
        localStorage.setItem('cookieConsent', JSON.stringify(preferences));
        setIsVisible(false);
        setShowPreferences(false);

        // Initialize services based on preferences
        initializeServices(preferences);
    };

    const handlePreferenceChange = (type) => {
        if (type === 'necessary') return; // Can't disable necessary cookies

        setPreferences(prev => ({
            ...prev,
            [type]: !prev[type]
        }));
    };

    const initializeServices = (cookiePreferences) => {
        // Initialize your analytics, marketing tools, etc. based on preferences
        if (cookiePreferences.analytics) {
            // Initialize Google Analytics, etc.
            console.log('Analytics cookies enabled');
        }

        if (cookiePreferences.marketing) {
            // Initialize marketing tools
            console.log('Marketing cookies enabled');
        }

        if (cookiePreferences.functional) {
            // Initialize functional cookies
            console.log('Functional cookies enabled');
        }
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4">
            <div className="bg-white rounded-t-lg shadow-2xl max-w-4xl mx-auto border-t-4 border-mainColor">
                {!showPreferences ? (
                    // Main consent popup
                    <div className="p-6 md:p-8">
                        <div className="flex items-start mb-4">
                            <span className="text-2xl mr-3">🍪</span>
                            <h2 className="text-xl md:text-2xl font-bold text-gray-800 leading-tight">
                                We value your privacy
                            </h2>
                        </div>

                        <p className="text-gray-700 mb-4 leading-relaxed">
                            We use cookies to enhance your browsing experience, serve personalized content,
                            and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                        </p>

                        <p className="text-sm text-gray-600 mb-6">
                            You can manage your preferences or learn more in our{' '}
                            <a
                                href="/privacy-policy"
                                className="text-blue-600 hover:text-blue-800 underline"
                                target="_blank"
                            >
                                Privacy Policy
                            </a>{' '}
                            and{' '}
                            <a
                                href="/cookie-policy"
                                className="text-blue-600 hover:text-blue-800 underline"
                                target="_blank"
                            >
                                Cookie Policy
                            </a>.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3">
                            <button
                                onClick={handleAcceptAll}
                                className="bg-mainColor hover:bg-opacity-90 text-white font-medium py-3 px-6 rounded transition-colors flex-1"
                            >
                                Accept All
                            </button>

                            <button
                                onClick={handleRejectNonEssential}
                                className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-3 px-6 rounded transition-colors flex-1"
                            >
                                Reject Non-Essential
                            </button>

                            <button
                                onClick={() => setShowPreferences(true)}
                                className="border-2 border-mainColor text-mainColor hover:bg-mainColor hover:text-white font-medium py-3 px-6 rounded transition-colors flex-1"
                            >
                                Manage Preferences
                            </button>
                        </div>
                    </div>
                ) : (
                    // Preferences popup
                    <div className="p-6 md:p-8">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl md:text-2xl font-bold text-gray-800">
                                Cookie Preferences
                            </h2>
                            <button
                                onClick={() => setShowPreferences(false)}
                                className="text-gray-500 hover:text-gray-700 text-2xl"
                                aria-label="Close preferences"
                            >
                                ×
                            </button>
                        </div>

                        <div className="space-y-6">
                            {/* Necessary Cookies */}
                            <div className="border-b border-gray-200 pb-4">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-semibold text-gray-800">Strictly Necessary</h3>
                                    <div className="relative">
                                        <input
                                            type="checkbox"
                                            checked={preferences.necessary}
                                            disabled={true}
                                            className="sr-only"
                                        />
                                        <div className="w-12 h-6 bg-mainColor rounded-full shadow-inner"></div>
                                        <div className="absolute top-0.5 right-0.5 w-5 h-5 bg-white rounded-full shadow transform transition-transform"></div>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600">
                                    These cookies are essential for the website to function and cannot be disabled.
                                </p>
                            </div>

                            {/* Analytics Cookies */}
                            <div className="border-b border-gray-200 pb-4">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-semibold text-gray-800">Performance & Analytics</h3>
                                    <button
                                        onClick={() => handlePreferenceChange('analytics')}
                                        className="relative"
                                    >
                                        <div className={`w-12 h-6 rounded-full shadow-inner transition-colors ${
                                            preferences.analytics ? 'bg-mainColor' : 'bg-gray-300'
                                        }`}></div>
                                        <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                                            preferences.analytics ? 'translate-x-6' : 'translate-x-0.5'
                                        }`}></div>
                                    </button>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Help us understand how visitors interact with our website to improve performance.
                                </p>
                            </div>

                            {/* Functional Cookies */}
                            <div className="border-b border-gray-200 pb-4">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-semibold text-gray-800">Functional</h3>
                                    <button
                                        onClick={() => handlePreferenceChange('functional')}
                                        className="relative"
                                    >
                                        <div className={`w-12 h-6 rounded-full shadow-inner transition-colors ${
                                            preferences.functional ? 'bg-mainColor' : 'bg-gray-300'
                                        }`}></div>
                                        <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                                            preferences.functional ? 'translate-x-6' : 'translate-x-0.5'
                                        }`}></div>
                                    </button>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Remember your preferences and enhance your experience.
                                </p>
                            </div>

                            {/* Marketing Cookies */}
                            <div className="pb-4">
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-semibold text-gray-800">Marketing & Targeting</h3>
                                    <button
                                        onClick={() => handlePreferenceChange('marketing')}
                                        className="relative"
                                    >
                                        <div className={`w-12 h-6 rounded-full shadow-inner transition-colors ${
                                            preferences.marketing ? 'bg-mainColor' : 'bg-gray-300'
                                        }`}></div>
                                        <div className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                                            preferences.marketing ? 'translate-x-6' : 'translate-x-0.5'
                                        }`}></div>
                                    </button>
                                </div>
                                <p className="text-sm text-gray-600">
                                    Display relevant ads and track engagement across websites.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 mt-6">
                            <button
                                onClick={handleSavePreferences}
                                className="bg-mainColor hover:bg-opacity-90 text-white font-medium py-3 px-6 rounded transition-colors flex-1"
                            >
                                Save Preferences
                            </button>

                            <button
                                onClick={handleAcceptAll}
                                className="border-2 border-mainColor text-mainColor hover:bg-mainColor hover:text-white font-medium py-3 px-6 rounded transition-colors flex-1"
                            >
                                Accept All
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CookieConsent;