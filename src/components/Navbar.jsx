// import { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";
// import { FaSun, FaMoon } from "react-icons/fa";
// import { TiThMenu } from "react-icons/ti";

// const Navbar = ({ darkMode, setDarkMode }) => {
//     const [open, setOpen] = useState(false);
//     const [scrolled, setScrolled] = useState(false);

//     // scroll effect
//     useEffect(() => {
//         const handleScroll = () => setScrolled(window.scrollY > 20);
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     const navLinks = (
//         <>
//             <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
//             <a href="#aboutMe" onClick={() => setOpen(false)}>About</a>
//             <a href="#skills" onClick={() => setOpen(false)}>Skills</a>
//             <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
//             <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

//         </>
//     );

//     return (
//         <nav className={`fixed top-0 w-full z-50 transition-all duration-300
//       ${scrolled ? "bg-white/70 dark:bg-gray-900/80 shadow-md backdrop-blur-md" : "bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"}
//     `}>
//             <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
//                 {/* Logo */}
//                 <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">
//                     Shahanara <span className="text-indigo-500">Aktar</span>
//                 </h1>

//                 {/* Desktop Menu */}
//                 <div className="hidden md:flex items-center gap-6 text-gray-700 dark:text-gray-200 font-medium">
//                     {navLinks}

//                     {/* Dark/Light Toggle */}
//                     <button
//                         onClick={() => setDarkMode(!darkMode)}
//                         className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-400 transition"
//                     >
//                         {darkMode ? <FaSun /> : <FaMoon />}
//                     </button>
//                 </div>

//                 {/* Mobile Hamburger */}
//                 <button
//                     className="md:hidden text-2xl text-gray-700 dark:text-gray-200 border rounded-md p-1"
//                     onClick={() => setOpen(!open)}
//                 >
//                     {open ? "✕" : <TiThMenu />}
//                 </button>
//             </div>

//             {/* Mobile Menu */}
//             <AnimatePresence>
//                 {open && (
//                     <motion.div
//                         initial={{ y: -20, opacity: 0, scale: 0.95 }}
//                         animate={{ y: 0, opacity: 1, scale: 1 }}
//                         exit={{ y: -20, opacity: 0, scale: 0.95 }}
//                         transition={{ duration: 0.25 }}
//                         className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg flex flex-col items-center gap-4 py-6 font-medium text-gray-800 dark:text-gray-200"
//                     >
//                         {navLinks}

//                         {/* Dark/Light Toggle Mobile */}
//                         <button
//                             onClick={() => setDarkMode(!darkMode)}
//                             className="mt-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-400 transition"
//                         >
//                             {darkMode ? <FaSun /> : <FaMoon />}
//                         </button>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </nav>
//     );
// };

// export default Navbar;

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";

const sections = ["home", "aboutMe", "skills", "projects", "contact"];

const Navbar = ({ darkMode, setDarkMode }) => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    // Scroll effect + scrollspy
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);

            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop - 120;
                    const offsetHeight = element.offsetHeight;

                    if (
                        window.scrollY >= offsetTop &&
                        window.scrollY < offsetTop + offsetHeight
                    ) {
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

                                {/* Premium Underline */}
                                <span
                                    className={`absolute left-0 -bottom-1 h-[2px] w-full bg-indigo-500 origin-left transition-transform duration-300 ${isActive
                                            ? "scale-x-100"
                                            : "scale-x-0 hover:scale-x-100"
                                        }`}
                                />
                            </a>
                        );
                    })}

                    {/* Dark Mode Toggle */}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-400 transition"
                    >
                        {darkMode ? <FaSun /> : <FaMoon />}
                    </button>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-2xl text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-700 rounded-md p-1"
                    onClick={() => setOpen(!open)}
                >
                    {open ? "✕" : <TiThMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="md:hidden absolute top-full left-0 w-full 
            bg-white dark:bg-gray-900 
            border-t border-gray-200 dark:border-gray-800
            backdrop-blur-lg shadow-xl 
            flex flex-col items-center gap-6 py-8 
            font-medium text-gray-800 dark:text-gray-200"
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

                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="mt-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-400 transition"
                        >
                            {darkMode ? <FaSun /> : <FaMoon />}
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;