
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";

const sections = ["home", "aboutMe", "skills", "projects", "contact"];

const Navbar = ({ darkMode, setDarkMode }) => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
            sections.forEach((section) => {
                const el = document.getElementById(section);
                if (el) {
                    const offsetTop = el.offsetTop - 120;
                    const offsetHeight = el.offsetHeight;
                    if (window.scrollY >= offsetTop && window.scrollY < offsetTop + offsetHeight) {
                        setActiveSection(section);
                    }
                }
            });
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/60 dark:bg-gray-900/70 backdrop-blur-lg shadow-md border-b border-gray-200 dark:border-gray-800"
                    : "bg-white/40 dark:bg-gray-900/40 backdrop-blur-md"
                }`}
        >
            <div
                className={`max-w-7xl mx-auto px-4 flex justify-between items-center transition-all duration-300 ${scrolled ? "py-3" : "py-5"
                    }`}
            >
                {/* Logo */}
                <h1 className="text-2xl font-bold tracking-wide text-gray-800 dark:text-gray-200">
                    Shahanara <span className="text-indigo-500">Aktar</span>
                </h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8 text-sm md:text-base">
                    {sections.map((section) => {
                        const label =
                            section === "home"
                                ? "Home"
                                : section === "aboutMe"
                                    ? "About"
                                    : section.charAt(0).toUpperCase() + section.slice(1);
                        const isActive = activeSection === section;
                        return (
                            <a
                                key={section}
                                href={`#${section}`}
                                className={`relative inline-block font-medium transition-colors duration-300 ${isActive
                                        ? "text-indigo-600 dark:text-indigo-400"
                                        : "text-gray-700 dark:text-gray-200 hover:text-indigo-500"
                                    }`}
                            >
                                {label}
                                <span
                                    className={`absolute left-0 -bottom-1 h-0.5 w-full bg-indigo-500 origin-left transition-transform duration-300 ${isActive ? "scale-x-100" : "scale-x-0 hover:scale-x-100"
                                        }`}
                                />
                            </a>
                        );
                    })}

                    {/* Animated Dark Mode Toggle for Desktop */}
                    <motion.button
                        onClick={() => setDarkMode(!darkMode)}
                        className="ml-4 relative w-14 h-7 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center p-1 cursor-pointer"
                        layout
                    >
                        <motion.div
                            layout
                            transition={{ type: "spring", stiffness: 700, damping: 30 }}
                            className={`w-5 h-5 rounded-full bg-yellow-400 dark:bg-indigo-500 shadow-md`}
                            style={{
                                x: darkMode ? 28 : 0,
                            }}
                        />
                        <div className="absolute inset-0 flex justify-between items-center px-1 text-xs text-gray-600 dark:text-gray-300">
                            <FaMoon className="text-sm" />
                            <FaSun className="text-sm" />
                        </div>
                    </motion.button>
                </div>

                {/* Mobile Hamburger + Toggle */}
                <div className="flex md:hidden items-center gap-2">
                    {/* Animated Mobile Dark Mode Toggle */}
                    <motion.button
                        onClick={() => setDarkMode(!darkMode)}
                        className="relative w-12 h-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center p-1 cursor-pointer"
                        layout
                    >
                        <motion.div
                            layout
                            transition={{ type: "spring", stiffness: 700, damping: 30 }}
                            className="w-4 h-4 rounded-full bg-yellow-400 dark:bg-indigo-500 shadow-md"
                            style={{ x: darkMode ? 24 : 0 }}
                        />
                        <div className="absolute inset-0 flex justify-between items-center px-1 text-xs text-gray-600 dark:text-gray-300">
                            <FaMoon className="text-sm" />
                            <FaSun className="text-sm" />
                        </div>
                    </motion.button>

                    {/* Hamburger */}
                    <button
                        className="text-2xl text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-700 rounded-md p-1"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? "✕" : <TiThMenu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 backdrop-blur-lg shadow-xl flex flex-col items-center gap-6 py-8 font-medium text-gray-800 dark:text-gray-200"
                    >
                        {sections.map((section) => {
                            const label =
                                section === "home"
                                    ? "Home"
                                    : section === "aboutMe"
                                        ? "About"
                                        : section.charAt(0).toUpperCase() + section.slice(1);
                            return (
                                <a
                                    key={section}
                                    href={`#${section}`}
                                    onClick={() => setOpen(false)}
                                    className="transition-colors duration-300 hover:text-indigo-500"
                                >
                                    {label}
                                </a>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;