import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { useRef } from "react";

export function Projects() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
    const springX = useSpring(x, { stiffness: 100, damping: 20 });

    return (
        <div ref={ref} className="relative h-[300vh] bg-black">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-yellow-500 text-4xl pt-12 font-bold pl-12 md:text-5xl"
            >
                Projects
            </motion.h2>
            <div className="sticky top-0 h-screen overflow-hidden flex w-full">
                <motion.div 
                    style={{ translateX: springX }} 
                    className="px-8 pb-12 flex bg-black z-10 w-fit"
                >
                    <Card 
                        title="Official College Job Portal" 
                        description="Developed and deployed the backend of the college's official job portal, streamlining placements for 10,000+ students with one-click job applications using pre-verified profiles.
                    " 
                        link="/rm.png" 
                        projectlink="https://www.rm.dtu.ac.in/login"
                    />
                    <Card 
                        title="Brainly: Curated Linkboards" 
                        description="Engineered a full-stack web platform enabling 100+ users to authenticate via both local and third-party (Google) OAuth strategies, save important links in the form of mood boards, and manage them through a responsive, user-friendly interface." 
                        link="/brainly.png"
                        projectlink="https://brainly-xi.vercel.app/"
                    />
                    <Card 
                        title="DARPA (R&D agency of US Department of Defence) Triage Challenge
                        " 
                        description="Developed a multi-robot system with 3 UAVs and 2 UGVs, integrating ensemble algorithmic and deep learning models. 
                        Achieved precise non-contact detection of human vitals (heart rate, respiratory rate, burns)." 
                        link="/dtc.png"
                        projectlink="https://triagechallenge.darpa.mil/ce1/systems"
                    />
                    <Card 
                        title="Object Detection Localisation and Classification" 
                        description="Developed an autonomous aerial system capable of detecting on-ground target text-boards.
                        Engineered an in-house Region Proposal Network (RPN), geotagging, and Optical Character Recognition (OCR) system; enhanced accuracy by 8% over off-the-shelf solutions." 
                        link="/odlc.png"
                        projectlink="https://github.com/samarthhhbhutani/ODLC-Object-Detection-Localization-Classification-.git"
                    />
                </motion.div>
            </div>
        </div>
    );
}

function Card({ title, description, link, projectlink }: { title: string; description: string; link: string , projectlink?: string }) {
    return (
        <motion.div 
            whileHover={{ scale: 1.02 }}
            className="md:mx-12 mx-8 text-white mt-12 inline-block md:max-h-[75vh] pt-12 min-w-[75vw]"
        >
            <div className="relative group">
                <img 
                    className="rounded-2xl mx-auto md:max-h-[60vh] max-h-[40vh] border border-gray-800 transition-all duration-300 group-hover:border-yellow-500/50" 
                    src={link}
                    alt={title}
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center">
                    <motion.button 
                        whileHover={{ scale: 1.1 }}
                        className="bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold"
                    >
                        <a href={projectlink} target="_blank" rel="noopener noreferrer">
                        View Details
                        </a>
                    </motion.button>
                </div>
            </div>
            <div className="flex flex-col items-center mt-6">
                <h2 className="text-white text-2xl font-bold text-center">{title}</h2>
                <h4 className="text-gray-400 text-center mt-3 max-w-2xl">{description}</h4>
            </div>

        </motion.div>
    );
}
