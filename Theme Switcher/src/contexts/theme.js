import React, { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: "Light",
    darkTheme: () => {},
    lightTheme: () => {},
})

export const ThemeProvide = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}