import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { FC } from "react";

type TheProp = {
    children: JSX.Element;
};

enum ThemePalette {
    BG = "#000000",
    LIME = "rgba(237,237,237,1)",
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
