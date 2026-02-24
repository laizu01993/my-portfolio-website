import { motion } from "framer-motion";

const AboutMe = () => {
    const techSkills = [
        "JavaScript (ES6+)",
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Tailwind CSS",
        "DaisyUI",
        "Firebase",
        "JWT Authentication",
        "HTML5",
        "CSS3",
        "Git & GitHub",
    ];

    return (
        <section
            id="aboutMe"
            className="flex flex-col justify-center items-center text-center px-6 md:px-24 py-20
        bg-gradient-to-b from-white to-indigo-100 dark:from-gray-900 dark:to-gray-800"
        >
            {/* Section Title */}
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold mb-10 text-gray-800 dark:text-gray-300"
            >
                Who <span className="text-indigo-500">I Am</span>
            </motion.h2>

            {/* Description */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-lg font-medium md:text-xl text-gray-900 dark:text-gray-300 max-w-3xl leading-relaxed"
            >
                I’m <strong className="text-indigo-500">Shahanara Aktar</strong>, a passionate{' '}
                <strong className="text-green-500">MERN Stack Developer</strong> from Bangladesh.
                I specialize in building{' '}
                <strong className="text-purple-500">responsive, modern, and user-friendly web applications</strong>{' '}
                using cutting-edge technologies and best practices.
                <br /><br />
                I enjoy creating <strong className="text-pink-500">scalable solutions</strong>, solving complex problems,
                and designing <strong className="text-yellow-500">interactive user interfaces</strong>
                that provide smooth and engaging user experiences.
                <br /><br />
                My goal is to contribute to impactful projects, continuously learn new technologies, and deliver{' '}
                <strong className="text-indigo-600">real value</strong> to users and businesses.
            </motion.p>

            {/* Tech Stack Badges */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="flex flex-wrap justify-center mt-10 gap-3"
            >
                {techSkills.map((tech, index) => (
                    <motion.span
                        key={index}
                        whileHover={{ scale: 1.1, y: -2 }}
                        className="px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300 font-semibold text-sm md:text-base cursor-default shadow-md hover:shadow-lg transition-all duration-300"
                    >
                        &lt;{tech} /&gt;
                    </motion.span>
                ))}
            </motion.div>
        </section>
    );
};

export default AboutMe;