// import { Palette, PaletteColor } from "@mui/material/styles/createPalette";

declare module "@mui/material/syles/createPalette" {
    interface PaletteColor {
        [key: number]: string;
    }

    interface Palette {
        tertiary: PaletteColor;
    }
}
