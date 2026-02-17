import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <section
            id="hero"
            className="
        relative min-h-[80vh] pt-24
        flex flex-col justify-center items-center text-center
        bg-linear-to-b from-indigo-100 via-white to-white
        dark:from-gray-950 dark:via-gray-900 dark:to-gray-900
        transition-colors duration-300
      "
        >
            {/* Soft glowing background */}
            <div className="absolute inset-0 -z-10 blur-3xl opacity-30 dark:opacity-20">
                <div className="w-130 h-130 bg-indigo-400 dark:bg-indigo-600 rounded-full mx-auto -mt-35" />
            </div>

            {/* Name */}
            <motion.h1
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9 }}
                className="
          text-4xl md:text-6xl font-extrabold mb-6 tracking-tight
          bg-linear-to-r from-indigo-600 via-purple-500 to-pink-500
          dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400
          bg-clip-text text-transparent
        "
            >
                Hi, I’m Shahanara Aktar
            </motion.h1>

            {/* Role Typewriter */}
            <motion.h2
                initial={{ y: 25, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.8 }}
                className="
          text-lg md:text-2xl font-medium
          text-gray-800 dark:text-gray-200
        "
            >
                <Typewriter
                    words={[
                        "React Developer",
                        "Frontend Developer",
                        "MERN Stack Developer",
                        "Building Modern Web Apps",
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </motion.h2>

            {/* Description */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.8 }}
                className="
          mt-6 max-w-2xl
          text-gray-900 font-medium dark:text-gray-300
          text-lg md:text-xl leading-relaxed
        "
            >
                I’m a junior MERN Stack developer focused on creating
                <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                    {" "}responsive, scalable, and user-friendly web applications
                </span>
                {" "}with clean architecture and modern UI.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.1, duration: 0.6 }}
                className="flex flex-wrap gap-4 mt-10"
            >
                {/* View Projects */}
                <a
                    href="#projects"
                    className="
            px-6 py-3 rounded-xl font-semibold
            bg-indigo-600 text-white
            hover:bg-indigo-700 hover:scale-105
            transition-all duration-300 shadow-md
          "
                >
                    View Projects
                </a>

                {/* Contact Me */}
                <a
                    href="#contact"
                    className="
            px-6 py-3 rounded-xl font-semibold
            border border-indigo-600
            text-indigo-600 dark:text-indigo-400
            hover:bg-indigo-50 dark:hover:bg-gray-800
            hover:scale-105 transition-all duration-300
          "
                >
                    Contact Me
                </a>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="
          mt-16 flex flex-col items-center cursor-pointer
          text-gray-900 dark:text-gray-300
          hover:text-indigo-600 dark:hover:text-indigo-400
          transition-colors
        "
                animate={{ y: [0, 14, 0] }}
                transition={{ repeat: Infinity, duration: 1.8 }}
                onClick={() => {
                    const aboutSection = document.getElementById("aboutMe");
                    if (aboutSection) {
                        aboutSection.scrollIntoView({ behavior: "smooth" });
                    }
                }}
            >
                <span className="text-xs tracking-widest uppercase">
                    Scroll Down
                </span>
                <span className="text-2xl mt-1">↓</span>
            </motion.div>
        </section>
    );
};

export default Hero;


