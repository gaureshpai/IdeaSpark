import React from 'react';
import '@styles/Footer.css'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-white py-4">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm mt-2">
                    Project by: <strong>Gauresh, Jnanesh, Himanshu, Milan</strong>
                </p>
                <p className="text-sm mt-2">
                    Guided by: <strong> Dr. Antony PJ (HOD)</strong>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
