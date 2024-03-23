import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-white py-4">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm">&copy; {currentYear} Gauresh G Pai. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
