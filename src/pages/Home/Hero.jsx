import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
const Hero = () => {
    return (
        <section id="hero" className="min-h-[60vh] pt-24 flex flex-col justify-center items-center text-center bg-gradient-to-b
             from-indigo-200 to-white
             dark:from-gray-900 dark:to-gray-800">

            {/* Animated intro with Framer Motion */}
            <motion.h1
                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-4xl dark:text-gray-300 md:text-6xl font-bold mb-6"
            >
                Hi, I’m Shahanara Aktar
            </motion.h1>

            {/* Typewriter effect */}
            <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
                className="text-2xl md:text-2xl font-medium text-gray-700 dark:text-gray-300"
            >
                <Typewriter
                    words={["React Developer", "Frontend Developer", "MERN Stack Developer", "Passionate About Clean Code",
                        "Building Responsive Websites"]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </motion.h2>
            <p className="mt-6 max-w-xl text-gray-600 dark:text-gray-300 text-lg md:text-xl">
                I’m a junior MERN Stack developer passionate about building
                <strong> responsive, modern web applications</strong> and delivering clean, maintainable code.
            </p>



            {/*scroll down hint */}
            <motion.div
                className="mt-12 text-gray-500 cursor-pointer"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                onClick={() => {
                    const aboutSection = document.getElementById("aboutMe");
                    if (aboutSection) {
                        aboutSection.scrollIntoView({ behavior: "smooth" });
                    }
                }}
            >
                ⬇ Scroll Down
            </motion.div>

        </section>
    );
};

export default Hero;
