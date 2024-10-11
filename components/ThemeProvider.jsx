'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext('light');

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children, initialTheme = 'light' }) => {
    const [theme, setTheme] = useState(initialTheme);

    useEffect(() => {
        // Apply theme class to the body element
        document.body.className = theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black';
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
