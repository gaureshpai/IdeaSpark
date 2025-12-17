'use client'

import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext('light');

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children, initialTheme = 'light' }) => {
    const [theme, setTheme] = useState(initialTheme);

    useEffect(() => {
        const root = document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
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
