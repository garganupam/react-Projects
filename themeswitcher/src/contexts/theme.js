//differnt approach

import React, { createContext,useContext } from "react";

const ThemeContext=React.createContext({   //default value is put intto the context
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{}
})

export  const ThemeProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}