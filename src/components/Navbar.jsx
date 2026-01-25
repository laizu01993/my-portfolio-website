import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // detect scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = (
        <>
            <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
            <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
        </>
    );

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300
      ${scrolled
                    ? "bg-white/60 backdrop-blur-md shadow-sm"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-11/12 mx-auto px-4 py-4 flex justify-between items-center bg-gray-400 rounded-lg">

                {/* Name / Logo */}
                <h1 className="text-xl font-bold text-white">
                    Shahanara{" "}
                    <span className="text-indigo-500">Aktar</span>
                </h1>

                {/* Desktop menu */}
                <div className="hidden md:flex gap-8 font-medium">
                    {navLinks}
                </div>

                {/* Mobile menu button */}
                <button
                    className="md:hidden text-2xl"
                    onClick={() => setOpen(!open)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile menu animated */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -30, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden absolute top-full right-10 w-1/3
                       bg-gray-500 text-white rounded-md backdrop-blur-md
                       shadow-md px-6 py-6 flex flex-col gap-4 font-medium"
                    >
                        {navLinks}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
