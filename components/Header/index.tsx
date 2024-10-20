"use client";

import { Data } from "@/lib/data";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const variants = {
    initial: {
        scale: 0,
        opacity: 0,
    },
    animate: {
        scale: 1.05, 
        opacity: 1,
        transition: {
          type: "tween",
          duration: 0.5, 
          ease: "circOut", 
        },
    },
    exit: {
        scale: 0,
        opacity: 0,
        transition: {
          type: "tween",
          duration: 0.5, 
          ease: "circIn", 
        },
    },
};

const Header = () => {
    const pathname = usePathname();
    const [welcomes, setWelcomes] = useState<string[]>([]);
    const [isVisible, setIsVisible] = useState<boolean>(true);
    const [welcomeIndex, setWelcomeIndex] = useState<number>(0);
    
    useEffect(() => {
        if (pathname === "/") {
            setWelcomes(Data.Hello);
        }
    }, [pathname]);
    
    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false);
            setWelcomeIndex((prevIndex) =>
              prevIndex === welcomes.length - 1 ? 0 : prevIndex + 1
            );
            setIsVisible(true);
        }, 2000);

        return () => clearInterval(interval);
    }, [welcomes]);

    return (
        <header className="text-center py-20 px-5">
            <AnimatePresence>
                <div className="h-[3rem]">
                    {isVisible && (
                        <motion.h1
                            key={welcomeIndex}
                            variants={variants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="text-4xl font-bold"
                        >
                            {welcomes[welcomeIndex]}
                        </motion.h1>
                    )}
                </div>
            </AnimatePresence>
        </header>
    )
}

export default Header;