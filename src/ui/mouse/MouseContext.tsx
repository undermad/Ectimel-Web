import {createContext, useState} from "react";

type MouseThemeProviderProps = {
    children: React.ReactNode
}

type MouseThemeContextType = {
    hover: boolean | null,
    setHover: React.Dispatch<React.SetStateAction<boolean | null>>,
}

export const MouseThemeContext = createContext<MouseThemeContextType | null>(null)

export const MouseThemeContextProvider = ({children}: MouseThemeProviderProps) => {

    const [hover, setHover] = useState<boolean | null>(false);


    return <MouseThemeContext.Provider value={{hover, setHover}}>{children}</MouseThemeContext.Provider>
}