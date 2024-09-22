import { createTheme, ThemeProvider } from "@mui/material";
import { createContext, useMemo, useState } from "react";
import { Lexend_Deca, Poppins } from "next/font/google";
import { Work_Sans } from "next/font/google";

export const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font--poppins',
  subsets: ["latin"]
})

export const worksans = Work_Sans({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', "900"],
  variable: '--font--workspace',
  subsets: ["latin"]
})

export const Lexend = Lexend_Deca({
    weight: ['400'],
    variable: '--font--lexend',
    subsets: ["latin"]
})
export const ThemeContext = createContext()

export const ThemeContextProvider = ({ children }) => {

    const [mode, setMode] = useState("light")
    const theme = useMemo(() => createTheme({
        palette: {
            mode: mode,
        },
        typography: {
            fontFamily: 'Poppins, Work Sans, Arial, sans-serif',
            h1: {
                fontFamily: "Poppins !important",
                fontSize: "2.865rem", //2.875
                fontWeight: 600
            },
            h2: {
                fontFamily: "Poppins !important",
                fontWeight: 600
                                
            },
            h3: {
                fontFamily: 'Work Sans !important',
                fontWeight: 600
            },
            h4: {
                fontFamily: "Poppins !important",
                fontWeight: 400
            },
            h5: {
                fontFamily: 'Work Sans !important',
                fontWeight: 400
            },
            h6: {
                fontFamily: 'Work Sans !important',
                fontWeight: 500
            },
            subtitle1: {
                fontFamily: 'Work Sans !important',
                fontWeight: 400
            },
            subtitle2: {
                fontFamily:'Work Sans !important',
                fontWeight: 400,
              
            },
            body1: {
                color: "#2F2F2F",
                fontFamily:'Work Sans !important',
                fontSize: "18px", //20
                fontWeight: 400,
            },
            body2: {
                color: "#556070",
                fontFamily: 'Work Sans !important',
                fontSize: "14px",
                fontWeight: 400,
            },
            button: {
                lineHeight: 1.75,
                fontWeight: 500,
                fontFamily: 'Work Sans !important',
                textTransform: "unset"
            }

        },
    components: {
        MuiDrawer:{
        styleOverrides: {
            paper: {
                background: mode === "dark" && "#000000",
                
            }
        }
        }
    }

    }), [mode])

    const toggleTheme = () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"))
    }

    return (
        <ThemeContext.Provider value={{ toggleTheme }}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    )
}

