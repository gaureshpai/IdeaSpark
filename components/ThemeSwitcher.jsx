'use client'
import React from 'react';
import { useTheme } from './ThemeProvider';

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className=
            {`p-3 rounded-lg border-2 transition-colors duration-300 
                ${theme === 'light' ? 
                'bg-gray-200 border-gray-300 hover:bg-gray-300 text-black' : 
                'bg-gray-800 border-gray-600 hover:bg-gray-700 text-black'
                }`}
        >
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
    );
};

export default ThemeSwitcher;
