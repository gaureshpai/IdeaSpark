'use client'
import React from 'react';
import { useTheme } from './ThemeProvider';

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white border rounded"
        >
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
    );
};

export default ThemeSwitcher;
