'use client'
import React from 'react'
import { ColorSchemeScript, ThemeProvider } from 'twr-theme'

const Providers = ({ children }: {
    children: React.ReactNode
}) => {
    return (
        <ThemeProvider
            config={{
                shades: ["25", "50", "100", "200", "300", "400", "500", "600", "700", "800", "900", '950', "dark", "light"],
                colorType: "rgb", // or "rgb"
                storage: "cookie", // or "localStorage"
            }}
        >
            <ColorSchemeScript
                storage="cookie"
                themeModeKey="theme-mode"
                themeLocalStorageKey="trio-theme"
                colorType="rgb"
                defaultTheme={{ "name": "default", "mode": "light", "shades": [{ "name": "primary", "color": "0 128 128", "shade": { "25": "245 252 252", "50": "237 250 250", "100": "218 242 242", "200": "168 224 224", "300": "122 204 204", "400": "50 166 166", "500": "0 128 128", "600": "0 115 109", "700": "0 94 83", "800": "0 77 61", "900": "0 56 41", "950": "0 36 23", "dark": "0 13 7", "light": "245 252 252" } }, { "name": "secondary", "color": "15 111 255", "shade": { "25": "247 253 255", "50": "242 251 255", "100": "232 247 255", "200": "196 233 255", "300": "158 215 255", "400": "87 168 255", "500": "15 111 255", "600": "11 95 230", "700": "8 72 191", "800": "6 53 153", "900": "3 35 115", "950": "1 20 74", "light": "247 253 255", "dark": "1 20 74" } }] }}
            />
            {children}
        </ThemeProvider>
    )
}

export default Providers
