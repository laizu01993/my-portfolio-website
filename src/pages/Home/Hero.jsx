// import { Typewriter } from "react-simple-typewriter";
// import { motion } from "framer-motion";

// const Hero = () => {
//     return (
//         <section
//             id="home"
//             className="
//         relative min-h-[calc(90vh-80px)]
//         flex flex-col justify-center items-center text-center
//         bg-linear-to-b from-indigo-50 via-white to-white
//         dark:from-gray-950 dark:via-gray-900 dark:to-gray-900
//         transition-colors duration-500 overflow-hidden
//       "
//         >
//             {/* Background Glow Effects */}
//             <div className="absolute inset-0 -z-10 overflow-hidden">
//                 <div className="absolute w-125 h-125 bg-indigo-400/30 dark:bg-indigo-600/20 rounded-full blur-3xl -top-30 left-1/2 -translate-x-1/2"></div>
//                 <div className="absolute w-100 h-100 bg-purple-400/20 dark:bg-purple-600/20 rounded-full blur-3xl -bottom-25 -right-25"></div>
//             </div>

//             {/* Small Intro Badge */}
//             <motion.div
//                 initial={{ opacity: 0, y: -20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6 }}
//                 className="flex items-center gap-3 mb-6"
//             >
//                 <span className="
//           px-4 py-1.5 rounded-full text-sm font-medium
//           bg-indigo-100 text-indigo-600
//           dark:bg-indigo-900/40 dark:text-indigo-300
//         ">
//                     Junior MERN Stack Developer
//                 </span>
//                 <span className="
//           flex items-center gap-2
//           px-3 py-1 rounded-full text-xs font-semibold
//           bg-green-100 text-green-600
//           dark:bg-green-900/40 dark:text-green-400
//         ">
//                     <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
//                     Available for Hire
//                 </span>
//             </motion.div>

//             {/* Name */}
//             <motion.h1
//                 initial={{ y: -40, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.8 }}
//                 className="
//           text-4xl md:text-6xl font-extrabold mb-6 tracking-tight
//           bg-linear-to-r from-indigo-600 via-purple-500 to-pink-500
//           dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400
//           bg-clip-text text-transparent
//         "
//             >
//                 Hi, I’m Shahanara Aktar
//             </motion.h1>

//             {/* Typewriter Role */}
//             <motion.h2
//                 initial={{ y: 25, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, delay: 0.6 }}
//                 className="text-lg md:text-2xl font-medium text-gray-800 dark:text-gray-200"
//             >
//                 <Typewriter
//                     words={[
//                         "React Developer",
//                         "Frontend Specialist",
//                         "MERN Stack Developer",
//                         "Building Modern Web Applications",
//                     ]}
//                     loop={0}
//                     cursor
//                     cursorStyle="|"
//                     typeSpeed={70}
//                     deleteSpeed={50}
//                     delaySpeed={1200}
//                 />
//             </motion.h2>

//             {/* Description */}
//             <motion.p
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ delay: 1.4, duration: 0.8 }}
//                 className="mt-8 max-w-2xl text-gray-800 dark:text-gray-300 text-lg leading-relaxed"
//             >
//                 I build
//                 <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
//                     {" "}responsive, scalable, and user-friendly web applications
//                 </span>
//                 {" "}using modern technologies with clean architecture and elegant UI design.
//             </motion.p>

//             {/* CTA Buttons */}
//             <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ delay: 1.8, duration: 0.6 }}
//                 className="flex flex-wrap gap-4 mt-10"
//             >
//                 <a
//                     href="#projects"
//                     className="px-7 py-3 rounded-xl font-semibold bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-xl hover:scale-105 transition-all duration-300"
//                 >
//                     View Projects
//                 </a>
//                 <a
//                     href="#contact"
//                     className="px-7 py-3 rounded-xl font-semibold border border-indigo-500 text-indigo-600 dark:text-indigo-400 backdrop-blur-md hover:bg-indigo-50 dark:hover:bg-gray-800 hover:shadow-md hover:scale-105 transition-all duration-300"
//                 >
//                     Contact Me
//                 </a>
//             </motion.div>
//         </section>
//     );
// };

// export default Hero;

import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section
            id="home"
            className="
        relative min-h-[calc(90vh-80px)]
        flex flex-col justify-center items-center text-center
        bg-linear-to-b from-indigo-50 via-white to-white
        dark:from-gray-950 dark:via-gray-900 dark:to-gray-900
        transition-colors duration-500 overflow-x-hidden
      "
        >
            {/* Background Glow Effects */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                {/* Large circle (responsive) */}
                <div className="
          absolute
          w-62.5 h-62.5 sm:w-100 sm:h-100 md:w-125 md:h-125
          bg-indigo-400/30 dark:bg-indigo-600/20
          rounded-full blur-3xl
          -top-12 sm:-top-20 md:-top-30
          left-1/2 -translate-x-1/2
        "></div>

                {/* Bottom circle */}
                <div className="
          absolute
          w-45 h-45 sm:w-80 sm:h-80 md:w-100 md:h-100
          bg-purple-400/20 dark:bg-purple-600/20
          rounded-full blur-3xl
          -bottom-12 sm:-bottom-20 md:-bottom-25
          -right-12 sm:-right-20 md:-right-25
        "></div>
            </div>

            {/* Small Intro Badge */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-3 mb-6"
            >
                <span className="
          px-4 py-1.5 rounded-full text-sm font-medium
          bg-indigo-100 text-indigo-600
          dark:bg-indigo-900/40 dark:text-indigo-300
        ">
                    Junior MERN Stack Developer
                </span>
                <span className="
          flex items-center gap-2
          px-3 py-1 rounded-full text-xs font-semibold
          bg-green-100 text-green-600
          dark:bg-green-900/40 dark:text-green-400
        ">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    Available for Hire
                </span>
            </motion.div>

            {/* Name */}
            <motion.h1
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="
          text-4xl md:text-6xl font-extrabold mb-6 tracking-tight
          bg-linear-to-r from-indigo-600 via-purple-500 to-pink-500
          dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400
          bg-clip-text text-transparent
        "
            >
                Hi, I’m Shahanara Aktar
            </motion.h1>

            {/* Typewriter Role */}
            <motion.h2
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg md:text-2xl font-medium text-gray-800 dark:text-gray-200"
            >
                <Typewriter
                    words={[
                        "React Developer",
                        "Frontend Specialist",
                        "MERN Stack Developer",
                        "Building Modern Web Applications",
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1200}
                />
            </motion.h2>

            {/* Description */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="mt-8 max-w-full sm:max-w-2xl text-gray-800 dark:text-gray-300 text-lg leading-relaxed px-4"
            >
                I build
                <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                    {" "}responsive, scalable, and user-friendly web applications
                </span>
                {" "}using modern technologies with clean architecture and elegant UI design.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8, duration: 0.6 }}
                className="flex flex-wrap gap-4 mt-10"
            >
                <a
                    href="#projects"
                    className="px-7 py-3 rounded-xl font-semibold bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                    View Projects
                </a>
                <a
                    href="#contact"
                    className="px-7 py-3 rounded-xl font-semibold border border-indigo-500 text-indigo-600 dark:text-indigo-400 backdrop-blur-md hover:bg-indigo-50 dark:hover:bg-gray-800 hover:shadow-md hover:scale-105 transition-all duration-300"
                >
                    Contact Me
                </a>
            </motion.div>
        </section>
    );
};

export default Hero;