// components/Layout.jsx
import React from 'react';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* Add any common layout elements here */}
            {children}
        </div>
    );
};

export default Layout;
