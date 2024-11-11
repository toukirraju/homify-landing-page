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
            />
            {children}
        </ThemeProvider>
    )
}

export default Providers
