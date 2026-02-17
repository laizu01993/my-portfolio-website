import { motion } from "framer-motion";

const AboutMe = () => {
    return (
        <section
            id="aboutMe"
            className="flex flex-col justify-center items-center text-center px-6 md:px-24 py-20
                 bg-linear-to-b from-white to-indigo-100 dark:from-gray-900 dark:to-gray-800"
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
                using <strong>React, Node.js, Express, and MongoDB</strong>.
                <br />
                <br />
                I enjoy solving complex problems, creating{' '}
                <strong className="text-pink-500">scalable solutions</strong>, and experimenting with smooth{' '}
                <strong className="text-yellow-500">animations</strong> & interactive UI/UX.
                <br />
                <br />
                My goal is to contribute to impactful projects, continuously learn new technologies, and develop applications that deliver{' '}
                <strong className="text-indigo-600">real value</strong> to users and businesses.
            </motion.p>
        </section>
    );
};

export default AboutMe;
