"use client";

import { useEffect, useState } from "react";
import Theme from "../Avatars/Theme";

const DarkMode = ({ cls }: { cls : string }) => {
    const [activeTheme, setActiveTheme] = useState("system");
    
    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (!theme){
            applySystemTheme();
            setActiveTheme("system");
        }else {
            handleThemeChange(theme);
            setActiveTheme(theme);
        }

        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        const handleSystemThemeChange = () => {
            if(!theme || theme === "system") {
                applySystemTheme();
            }
        }

        mediaQuery.addEventListener("change", handleSystemThemeChange);
        return () => {
            mediaQuery.removeEventListener("change", handleSystemThemeChange);
        }
    }, []);

    function applySystemTheme() {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark").matches;
        if (systemTheme) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }

    const handleThemeChange = (newTheme: string) => {
        if (newTheme === "system") {
            applySystemTheme();
        } else if (newTheme === "dark") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }

    return (
        <button
            className={`dark-mode ${cls}`}
            onClick={() => handleThemeChange(activeTheme === "dark" ? "light" : "dark")}
        >
            <Theme />
        </button>
    )
}

export default DarkMode;
