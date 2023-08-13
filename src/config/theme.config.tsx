import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { FC } from "react";

type TheProp = {
    children: JSX.Element;
};

enum ThemePalette {
    BG = "#000000",
    LIME = "rgba(237,237,237,1)",
    ERROR_MAIN = "#f44336",
    BG_ERROR_MAIN = "rgba(244,67,54,0.1",
    SUCCES_MAIN = "#66bb6a",
    BG_SUCCESS_MAIN = "rgba(102,187,106,0.1)",
}

const theme = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: ThemePalette.BG,
        },
        primary: {
            main: ThemePalette.LIME,
        },
    },
    typography: {
        fontFamily: "Inter var",
    },

    components: {
        MuiButton: {
            defaultProps: {
                style: {
                    textTransform: "none",
                    borderRadius: ".5rem",
                },
            },
        },
        MuiAlert: {
            defaultProps: {
                style: {
                    borderRadius: ".8em",
                    fontSize: "1em",
                },
            },
            styleOverrides: {
                standardError: {
                    border: ` 1px solid ${ThemePalette.ERROR_MAIN}`,
                    background: ThemePalette.BG_ERROR_MAIN,
                },
                standardSuccess: {
                    border: ` 1px solid ${ThemePalette.SUCCES_MAIN}`,
                    background: ThemePalette.BG_SUCCESS_MAIN,
                },
            },
        },
    },
});

export const ThemeConfig: FC<TheProp> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </ThemeProvider>
    );
};
