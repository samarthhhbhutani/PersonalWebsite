// import { Meteors } from "./ui/meteors";
import { motion } from "framer-motion";
import { useEffect, useState, memo } from "react";

const TypewriterText = memo(function TypewriterText() {
    const roles = ["Web Developer", "ML Engineer", "Problem Solver"];
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(100);

    useEffect(() => {
        const ticker = setInterval(() => {
            tick();
        }, delta);

        return () => clearInterval(ticker);
    }, [text, delta]);

    const tick = () => {
        const i = currentRoleIndex % roles.length;
        const fullText = roles[i];
        
        if (!isDeleting && text === fullText) {
            // Pause at the end of typing
            setDelta(2000);
            setIsDeleting(true);
            return;
        }

        if (isDeleting && text === '') {
            // Move to next word
            setIsDeleting(false);
            setCurrentRoleIndex(prevIndex => prevIndex + 1);
            setDelta(100);
            return;
        }

        // Update text
        const updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);
        setDelta(isDeleting ? 50 : 100);
    };

    return (
        <span className="text-yellow-500 ml-1 min-h-[2.5rem] inline-block">
            {text}
            <span className="animate-blink">|</span>
        </span>
    );
});

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5
        }
    }
};

const buttonVariants = {
    hover: {
        scale: 1.05,
        transition: {
            duration: 0.2
        }
    }
};

const imageVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.5
        }
    },
    hover: {
        y: [0, -10, 0],
        transition: {
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
        }
    }
};

const BackgroundEffect = () => {
    return (
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black opacity-50" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-500/10 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,_var(--tw-gradient-stops))] from-yellow-500/5 via-transparent to-transparent" />
        </div>
    );
};

const FloatingParticles = () => {
    const particles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 1,
        duration: Math.random() * 20 + 10
    }));

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full bg-yellow-500/20"
                    style={{
                        width: particle.size,
                        height: particle.size,
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                    }}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0, 0.5, 0],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                />
            ))}
        </div>
    );
};

export function FirstPage(){
    return(
        <div className="min-h-full w-full bg-black flex relative overflow-hidden mb-28">
            <BackgroundEffect />
            <FloatingParticles />
            {/* <Meteors number={10}></Meteors> */}
            <div className="md:pb-20 grid grid-cols-12 relative z-10">
                <motion.div 
                    className="flex ml-24 md:ml-32 items-start md:col-span-6 col-span-12 mr-24 md:mr-0 mt-32 flex-col"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div 
                        variants={itemVariants} 
                        className="text-yellow-500 text-4xl font-semibold relative"
                    >
                        <span className="relative z-10">Hello, I'm</span>
                        <motion.div 
                            className="absolute -inset-1 bg-yellow-500/10 blur-xl rounded-lg"
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.5, 0.8, 0.5],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </motion.div>
                    <motion.div 
                        variants={itemVariants} 
                        className="text-yellow-400 text-6xl mt-4 font-bold relative"
                    >
                        <span className="relative z-10">Samarth Bhutani</span>
                        <motion.div 
                            className="absolute -inset-1 bg-yellow-400/10 blur-xl rounded-lg"
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.5, 0.8, 0.5],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: 0.5,
                            }}
                        />
                    </motion.div>
                    <motion.div variants={itemVariants} className="mt-4 text-4xl">
                        <span className="text-white">I'm a </span>
                        <TypewriterText />
                    </motion.div>
                    <motion.div variants={itemVariants} className="text-neutral-200 text-sm md:text-md mt-6">
                        B. Tech student passionate about creating innovative solutions through code and data. I specialize in building beautiful web experiences and implementing intelligent systems.
                    </motion.div>
                    <motion.div variants={itemVariants} className="text-neutral-200 gap-4 md:mt-8 mt-6">
                        <motion.span 
                            whileHover={{ scale: 1.05, color: "#EAB308", borderColor: "#EAB308" }}
                            className="px-6 py-2 border-slate-600 border border-1 rounded-xl mr-4 cursor-pointer duration-150 relative group"
                        >
                            <span className="relative z-10">Web Development</span>
                            <motion.div 
                                className="absolute inset-0 bg-yellow-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                                initial={false}
                            />
                        </motion.span>
                        <motion.span 
                            whileHover={{ scale: 1.05, color: "#EAB308", borderColor: "#EAB308" }}
                            className="px-6 py-2 border-slate-600 border border-1 rounded-xl mr-4 cursor-pointer duration-150 relative group"
                        >
                            <span className="relative z-10">AI/ML</span>
                            <motion.div 
                                className="absolute inset-0 bg-yellow-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                                initial={false}
                            />
                        </motion.span>
                        <motion.span 
                            whileHover={{ scale: 1.05, color: "#EAB308", borderColor: "#EAB308" }}
                            className="px-6 py-2 border-slate-600 border border-1 rounded-xl mr-4 cursor-pointer duration-150 relative group"
                        >
                            <span className="relative z-10">B. Tech Student</span>
                            <motion.div 
                                className="absolute inset-0 bg-yellow-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                                initial={false}
                            />
                        </motion.span>
                    </motion.div>
                    <motion.button 
                        variants={buttonVariants}
                        whileHover="hover"
                        className="bg-yellow-400 hover:bg-yellow-500 font-semibold rounded-xl mt-6 text-lg px-4 py-3 relative group"
                    >
                        <span className="relative z-10">Connect With Me</span>
                        <motion.div 
                            className="absolute inset-0 bg-yellow-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"
                            initial={false}
                        />
                    </motion.button>
                </motion.div>
                
                <motion.div 
                    className="md:col-span-6 col-span-12 flex justify-center mt-24 mb-8 md:mt-36 md:mb-0 items-center md:ml-24"
                    initial="initial"
                    animate="animate"
                    whileHover="hover"
                >
                    <motion.div
                        className="relative"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.img 
                            variants={imageVariants}
                            src="/try1.jpg" 
                            className="w-64 rounded-full h-64 relative z-10"
                        />
                        <motion.div 
                            className="absolute inset-0 bg-yellow-500/20 rounded-full blur-xl"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 0.8, 0.5],
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}