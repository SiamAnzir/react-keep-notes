import React from "react";

export const themes = {
    light: {
        foreground: "#323232",
        background: "#FAFAFA",
        tabBackground: "#e5e5e5"
    },
    dark: {
        foreground: "#FAFAFA",
        background: "#323232",
        tabBackground: "#242424"
    }
};

export const ThemeContext = React.createContext(themes);