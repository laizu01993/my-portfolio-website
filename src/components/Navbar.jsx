// import { NavLink } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const Navbar = () => {
//     const [open, setOpen] = useState(false);
//     const [scrolled, setScrolled] = useState(false);

//     // detect scroll
//     useEffect(() => {
//         const handleScroll = () => {
//             setScrolled(window.scrollY > 20);
//         };
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     const navLinks = (
//         <>
//             <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
//             <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
//             <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
//         </>
//     );

//     return (
//         <nav
//             className={`fixed top-0 w-full z-50 transition-all duration-300 bg-gray-400 rounded-lg
//       ${scrolled
//                     ? "bg-white/20 backdrop-blur-lg shadow-sm"
//                     : "bg-transparent"
//                 }`}
//         >
//             <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center ">

//                 {/* Name / Logo */}
//                 <h1 className="text-xl font-bold text-gray-700">
//                     Shahanara{" "}
//                     <span className="text-indigo-500">Aktar</span>
//                 </h1>

//                 {/* Desktop menu */}
//                 <div className="hidden md:flex gap-8 font-medium">
//                     {navLinks}
//                 </div>

//                 {/* Mobile menu button */}
//                 <button
//                     className="md:hidden text-2xl"
//                     onClick={() => setOpen(!open)}
//                 >
//                     ☰
//                 </button>
//             </div>

//             {/* Mobile menu animated */}
//             <AnimatePresence>
//                 {open && (
//                     <motion.div
//                         initial={{ y: -30, opacity: 0 }}
//                         animate={{ y: 0, opacity: 1 }}
//                         exit={{ y: -30, opacity: 0 }}
//                         transition={{ duration: 0.3 }}
//                         className="md:hidden absolute top-full right-10 w-1/3
//                        bg-gray-500 text-white rounded-md backdrop-blur-md
//                        shadow-md px-6 py-6 flex flex-col gap-4 font-medium"
//                     >
//                         {navLinks}
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </nav>
//     );
// };

// export default Navbar;

// import { AnimatePresence } from "framer-motion";
// import { useEffect, useState } from "react";
// import { FaSun, FaMoon } from "react-icons/fa";
// import { NavLink } from "react-router-dom";

// const Navbar = ({ darkMode, setDarkMode }) => {
//     const [open, setOpen] = useState(false);
//     const [scrolled, setScrolled] = useState(false);

//     // Detect scroll
//     useEffect(() => {
//         const handleScroll = () => setScrolled(window.scrollY > 20);
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     // Apply dark mode class to html
//     useEffect(() => {
//         const root = window.document.documentElement;
//         if (darkMode) {
//             root.classList.add("dark");
//         } else {
//             root.classList.remove("dark");
//         }
//     }, [darkMode]);

//     return (
//         <nav className={`fixed top-0 w-full z-50 transition-all duration-300
//             ${scrolled ? "bg-white/70 dark:bg-gray-900/80 backdrop-blur-md shadow-md" : "bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"}`}>
//             <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
//                 {/* Logo */}
//                 <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">
//                     Shahanara <span className="text-indigo-500">Aktar</span>
//                 </h1>

//                 {/* Desktop menu */}
//                 <div className="hidden md:flex gap-8 font-medium text-gray-700 dark:text-gray-200">
//                     <NavLink to="/">Home</NavLink>
//                     <a href="#projects">Projects</a>
//                     <a href="#contact">Contact</a>
//                     <a href="#aboutMe">About Me</a>

//                     {/* Dark/Light toggle */}
//                     <button
//                         onClick={() => setDarkMode(!darkMode)}
//                         className="ml-4 text-xl"
//                     >
//                         {darkMode ? <FaSun /> : <FaMoon />}
//                     </button>
//                 </div>

//                 {/* Mobile menu button */}
//                 <button
//                     className="md:hidden text-2xl text-gray-700 dark:text-gray-200"
//                     onClick={() => setOpen(!open)}
//                 >
//                     {open ? "✕" : "☰"}
//                 </button>
//             </div>

//             {/* Mobile menu (same with dark support) */}
//             <AnimatePresence>
//                 {open && (
//                     <motion.div
//                         initial={{ y: -20, opacity: 0, scale: 0.95 }}
//                         animate={{ y: 0, opacity: 1, scale: 1 }}
//                         exit={{ y: -20, opacity: 0, scale: 0.95 }}
//                         transition={{ duration: 0.25 }}
//                         className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg flex flex-col items-center gap-4 py-6 font-medium text-gray-800 dark:text-gray-200"
//                     >
//                         <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
//                         <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
//                         <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
//                         <a href="#aboutMe" onClick={() => setOpen(false)}>About Me</a>

//                         {/* Dark/Light toggle in mobile menu */}
//                         <button
//                             onClick={() => setDarkMode(!darkMode)}
//                             className="mt-2 text-xl"
//                         >
//                             {darkMode ? <FaSun /> : <FaMoon />}
//                         </button>
//                     </motion.div>
//                 )}
//             </AnimatePresence>

//             {/* Dark/Light toggle */}
//             <button
//                 onClick={() => setDarkMode(!darkMode)}
//                 className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-400 transition"
//             >
//                 {darkMode ? <FaSun /> : <FaMoon />}
//             </button>
//         </nav>
//     );
// };

// export default Navbar;


import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = ({ darkMode, setDarkMode }) => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // scroll effect
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = (
        <>
            <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
            <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
            <a href="#aboutMe" onClick={() => setOpen(false)}>About Me</a>
        </>
    );

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300
      ${scrolled ? "bg-white/70 dark:bg-gray-900/80 shadow-md backdrop-blur-md" : "bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm"}
    `}>
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <h1 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                    Shahanara <span className="text-indigo-500">Aktar</span>
                </h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-6 text-gray-700 dark:text-gray-200 font-medium">
                    {navLinks}

                    {/* Dark/Light Toggle */}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="ml-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-yellow-400 transition"
                    >
                        {darkMode ? <FaSun /> : <FaMoon />}
                    </button>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-2xl text-gray-700 dark:text-gray-200"
                    onClick={() => setOpen(!open)}
                >
                    {open ? "✕" : "☰"}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ y: -20, opacity: 0, scale: 0.95 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: -20, opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.25 }}
                        className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg flex flex-col items-center gap-4 py-6 font-medium text-gray-800 dark:text-gray-200"
                    >
                        {navLinks}

                        {/* Dark/Light Toggle Mobile */}
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
