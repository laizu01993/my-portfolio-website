import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
    const boxVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <section
            id="contact"
            className="min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-20 bg-linear-to-b from-indigo-100 to-white dark:from-gray-900 dark:to-gray-800"
        >
            {/* Section Title */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-gray-300 mb-12"
            >
                Get <span className="text-indigo-500">In Touch</span>
            </motion.h2>

            {/* Contact Boxes */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                transition={{ staggerChildren: 0.2 }}
                className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16"
            >
                {/* Email */}
                <motion.a
                    variants={boxVariants}
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=laizuaktar6@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-8 bg-white dark:bg-gray-800 shadow-lg rounded-2xl 
                               hover:scale-105 hover:shadow-2xl hover:bg-indigo-50 dark:hover:bg-indigo-900
                               transition-all duration-300 cursor-pointer"
                >
                    <FaEnvelope className="text-5xl mb-3 text-indigo-500" />
                    <p className="text-gray-700 dark:text-gray-200 font-medium">laizuaktar6@gmail.com</p>
                </motion.a>

                {/* WhatsApp */}
                <motion.a
                    variants={boxVariants}
                    href="https://wa.me/8801993795774"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-8 bg-white dark:bg-gray-800 shadow-lg rounded-2xl 
                               hover:scale-105 hover:shadow-2xl hover:bg-green-50 dark:hover:bg-green-900
                               transition-all duration-300 cursor-pointer"
                >
                    <FaWhatsapp className="text-5xl mb-3 text-green-500" />
                    <p className="text-gray-700 dark:text-gray-200 font-medium">+880 1993 795 774</p>
                </motion.a>

                {/* Location */}
                <motion.div
                    variants={boxVariants}
                    className="flex flex-col items-center p-8 bg-white dark:bg-gray-800 shadow-lg rounded-2xl 
                               hover:scale-105 hover:shadow-2xl hover:bg-pink-50 dark:hover:bg-pink-900
                               transition-all duration-300 cursor-pointer"
                >
                    <FaMapMarkerAlt className="text-5xl mb-3 text-pink-500" />
                    <p className="text-gray-700 dark:text-gray-200 font-medium">Khulna, Bangladesh</p>
                </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex gap-8 text-4xl"
            >
                <a href="https://github.com/laizu01993" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors duration-300" />
                </a>
                <a
                    href="https://linkedin.com/in/shahanara"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 transform hover:-translate-y-1"
                >
                    <FaLinkedin />
                </a>
            </motion.div>
        </section>
    );
};

export default Contact;
