import { motion } from "framer-motion";

export function Navbar({ ref1, ref2, ref3, ref4, ref5 }) {
    const handleClick = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    }

    const navItems = [
        { name: "About Me", ref: ref2 },
        { name: "Experience", ref: ref5 },
        { name: "Projects", ref: ref3 },
        { name: "Contact", ref: ref4 },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-white bg-black/80 backdrop-blur-sm flex gap-6 items-center justify-end pr-12 pt-6 pb-4 font-Inria font-bold sticky top-0 z-50"
        >
            {navItems.map((item, index) => (
                <motion.h2
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`hover:text-yellow-500 cursor-pointer transition-colors duration-300 ${
                        item.ref ? "" : "opacity-50"
                    }`}
                    onClick={() => item.ref && handleClick(item.ref)}
                >
                    {item.name}
                </motion.h2>
            ))}
            <motion.a
                href="https://drive.google.com/file/d/1139fsTYamZi4nEy2r_raGxLg3jUVHMEr/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                className="hover:bg-yellow-500 hover:text-black cursor-pointer border border-yellow-500 rounded-lg px-4 py-2 transition-all duration-300"
            >
                Resume
            </motion.a>
        </motion.div>
    )
}