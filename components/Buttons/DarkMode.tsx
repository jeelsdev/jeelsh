"use client";

import { useState } from "react";
import Theme from "../Avatars/Theme";

const DarkMode = () => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            document.documentElement.classList.add("dark");
        } else {
            setTheme("light");
            document.documentElement.classList.remove("dark");
        }
    };

    return (
        <button
            className="dark-mode border-2 border-gray-700 p-2 rounded-md hover:bg-gray-700"
            onClick={toggleTheme}
        >
            <Theme />
        </button>
    )
}

export default DarkMode;
