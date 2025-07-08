// utils/cookieUtils.js
"use client"
import { useState, useEffect } from 'react';

export const useCookieConsent = () => {
    const [consent, setConsent] = useState(null);

    useEffect(() => {
        const savedConsent = localStorage.getItem('cookieConsent');
        if (savedConsent) {
            try {
                setConsent(JSON.parse(savedConsent));
            } catch (error) {
                console.error('Error parsing cookie consent:', error);
                setConsent(null);
            }
        }
    }, []);

    const hasConsent = (type) => {
        return consent && consent[type] === true;
    };

    const updateConsent = (newConsent) => {
        setConsent(newConsent);
        localStorage.setItem('cookieConsent', JSON.stringify(newConsent));
    };

    return {
        consent,
        hasConsent,
        updateConsent
    };
};

// Google Analytics initialization (example)
export const initializeGoogleAnalytics = (trackingId) => {
    if (typeof window !== 'undefined') {
        // Load Google Analytics script
        const script = document.createElement('script');
        script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
        script.async = true;
        document.head.appendChild(script);

        // Initialize gtag
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', trackingId);
    }
};

// Cookie management functions
export const setCookie = (name, value, days = 365) => {
    if (typeof window !== 'undefined') {
        const expires = new Date();
        expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`;
    }
};

export const getCookie = (name) => {
    if (typeof window !== 'undefined') {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
    }
    return null;
};

export const deleteCookie = (name) => {
    if (typeof window !== 'undefined') {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }
};