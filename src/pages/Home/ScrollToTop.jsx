// import { useState, useEffect } from "react";
// import { FaArrowUp } from "react-icons/fa";
// import { motion, AnimatePresence } from "framer-motion";

// const ScrollToTop = () => {
//     const [visible, setVisible] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             const hero = document.getElementById("home");
//             if (!hero) return;

//             // Distance from top of viewport to bottom of hero
//             const heroBottom = hero.getBoundingClientRect().bottom;

//             // Show button only when hero bottom is completely above viewport
//             setVisible(heroBottom <= 0);
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     const scrollToTop = () => {
//         window.scrollTo({ top: 0, behavior: "smooth" });
//     };

//     return (
//         <AnimatePresence>
//             {visible && (
//                 <motion.button
//                     onClick={scrollToTop}
//                     initial={{ opacity: 0, y: 20 }}
//                     animate={{ opacity: 1, y: [0, -6, 0] }}
//                     exit={{ opacity: 0 }}
//                     transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
//                     className="
//             fixed bottom-6 right-6
//             w-14 h-14 flex justify-center items-center
//             rounded-full
//             bg-linear-to-br from-indigo-500 to-purple-500
//             text-white shadow-2xl backdrop-blur-sm
//             hover:scale-110 hover:shadow-3xl
//             transition-transform duration-300 z-50
//           "
//                     aria-label="Scroll to top"
//                 >
//                     <FaArrowUp size={20} />
//                 </motion.button>
//             )}
//         </AnimatePresence>
//     );
// };

// export default ScrollToTop;
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const hero = document.getElementById("home");

        const handleScroll = () => {
            if (!hero) return;

            const heroHeight = hero.offsetHeight;

            // Show only after scrolling past hero height
            setVisible(window.scrollY > heroHeight - 100);
        };

        handleScroll(); // run once on mount
        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    onClick={scrollToTop}
                    initial={{ opacity: 0, scale: 0.8, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.8, y: 40 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.95 }}
                    className="
            fixed bottom-6 right-6 w-14 h-14 flex justify-center items-center
rounded-full bg-indigo-600 dark:bg-indigo-300 text-white 
dark:text-gray-900 shadow-[0_8px_25px_rgba(79,70,229,0.4)] dark:shadow-[0_8px_25px_rgba(199,210,254,0.4)] hover:shadow-[0_10px_30px_rgba(79,70,229,0.6)] dark:hover:shadow-[0_10px_30px_rgba(199,210,254,0.6)] transition-all duration-300 z-50"
                    aria-label="Scroll to top"
                >
                    <motion.div
                        animate={{ y: [0, -4, 0] }}
                        transition={{
                            repeat: Infinity,
                            duration: 1.5,
                            ease: "easeInOut",
                        }}
                    >
                        <FaArrowUp size={20} />
                    </motion.div>
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;