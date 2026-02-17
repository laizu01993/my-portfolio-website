import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const hero = document.getElementById("hero");
            if (!hero) return;

            // Distance from top of viewport to bottom of hero
            const heroBottom = hero.getBoundingClientRect().bottom;

            // Show button only when hero bottom is completely above viewport
            setVisible(heroBottom <= 0);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    onClick={scrollToTop}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: [0, -6, 0] }}
                    exit={{ opacity: 0 }}
                    transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                    className="
            fixed bottom-6 right-6
            w-14 h-14 flex justify-center items-center
            rounded-full
            bg-gradient-to-br from-indigo-500 to-purple-500
            text-white shadow-2xl backdrop-blur-sm
            hover:scale-110 hover:shadow-3xl
            transition-transform duration-300 z-50
          "
                    aria-label="Scroll to top"
                >
                    <FaArrowUp size={20} />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
