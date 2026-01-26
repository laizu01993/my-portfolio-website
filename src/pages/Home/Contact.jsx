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
            className="min-h-screen flex flex-col justify-center items-center text-center px-4 md:px-20 bg-gradient-to-b from-indigo-100 to-white"
        >
            {/* Section Title */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 2, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold text-gray-800 mb-10"
            >
                Get <span className="text-indigo-500">In Touch</span>
            </motion.h2>

            {/* Contact Boxes */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                transition={{ staggerChildren: 0.2 }}
                className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12"
            >
                {/* Email */}
                <motion.a
                    variants={boxVariants}
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=laizuaktar6@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-6 bg-white shadow-lg rounded-xl hover:bg-indigo-50 transition-colors duration-300"
                >
                    <FaEnvelope className="text-4xl mb-2 text-indigo-500" />
                    <p className="text-gray-700 font-medium">laizuaktar6@gmail.com</p>
                </motion.a>

                {/* WhatsApp */}
                <motion.a
                    variants={boxVariants}
                    href="https://wa.me/8801993795774"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center p-6 bg-white shadow-lg rounded-xl hover:bg-green-50 transition-colors duration-300"
                >
                    <FaWhatsapp className="text-4xl mb-2 text-green-500" />
                    <p className="text-gray-700 font-medium">+880 1993 795 774</p>
                </motion.a>

                {/* Location */}
                <motion.div
                    variants={boxVariants}
                    className="flex flex-col items-center p-6 bg-white shadow-lg rounded-xl hover:bg-pink-50 transition-colors duration-300"
                >
                    <FaMapMarkerAlt className="text-4xl mb-2 text-pink-500" />
                    <p className="text-gray-700 font-medium">Khulna, Bangladesh</p>
                </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="flex gap-6 text-gray-700 text-3xl"
            >
                <a href="https://github.com/laizu01993" target="_blank" rel="noopener noreferrer">
                    <FaGithub className="hover:text-gray-900 transition-colors duration-300" />
                </a>
                <a href="https://linkedin.com/in/shahanara" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin className="hover:text-blue-700 transition-colors duration-300" />
                </a>
            </motion.div>
        </section>
    );
};

export default Contact;
