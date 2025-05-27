// import { Car } from "lucide-react";
import { useState } from "react";
import { Popup } from "./Popup";
import { motion } from "framer-motion";

export function AboutMe() {
  const [disp, setDisp] = useState({
    display: false,
    title: "",
    description: "",
    link: "",
  });

  // @ts-expect-error "abc"
  function displayCard( title, description, link ):void {

    setTimeout(()=>{setDisp({
      display: true,
      title: title,
      description: description,
      link: link,
    })},150);
    return;
  }

  function endDisplay() {
    const newd = { ...disp, display: false };
    setTimeout(()=>{
        setDisp(newd);
    },150)
    
  }

  return (
    <div className="w-full bg-black min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-black border border-white rounded-xl m p-8 pb-12 pl-8 mr-8 ml-12 text-white shadow-lg shadow-yellow-500/10"
      >
        <h2 className="text-yellow-500 text-3xl font-bold font-Inria mb-6">
          About Me
        </h2>
        <div className="pl-4 pr-8">
          <motion.h4 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="pt-4 text-xl text-gray-300"
          >
            CSE Undergrad at Delhi Technological University (2022-2026)
          </motion.h4>

          <motion.h4 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="pt-8 text-gray-400 leading-relaxed"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            accusantium amet nihil recusandae repellat corrupti! Voluptate
            labore aut optio vitae. Harum nihil recusandae eos sunt! Tempora qui
            voluptas magnam minima.
          </motion.h4>

          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-2xl pt-12 text-yellow-500 font-bold mb-6"
            >
              Academic Achievements
            </motion.h2>
            <div className="grid pt-4 grid-cols-12 gap-6">
              <Card
  title="DARPA Triage Challenge"
  description="Only Asian team to qualify in the 1st phase of DARPA Triage Challenge (Won 60K USD)"
  onClick={() => {
    displayCard(
      "DARPA Triage Challenge",
      "Only Asian team to qualify in the 1st phase of DARPA Triage Classification Challenge. Ranked among the top 15 globally and won $60,000 in funding.",
      "/darpa.png"
    );
  }}
/>

<Card
  title="Best Paper Award"
  description="Won the best paper award at ICDAM'24 for my paper titled 'Precise Detection of Email Based Cyberbullying'"
  onClick={() => {
    displayCard(
      "Best Paper Award",
      "Won the best paper award at ICDAM'24, London Metropolitan University, for the paper 'Implementation of Machine Learning Methods for Precise Detection of Email Based Cyberbullying'.",
      "/paper.png"
    );
  }}
/>

<Card
  title="IMAV'24"
  description="Bagged the 2nd place in the Hiker Rescue Challenge, Germany. First Indian podium finish in 10 years."
  onClick={() => {
    displayCard(
      "IMAV'24",
      "Bagged the 2nd place in the IMAV Hiker Rescue Challenge, Germany. First Indian podium finish in the past 10 years.",
      "/imav.jpg"
    );
  }}
/>

<Card
  title="SUAS'24"
  description="Led development of autonomous aerial system with in-house RPN and OCR modules."
  onClick={() => {
    displayCard(
      "SUAS'24",
      "Built an autonomous aerial system capable of detecting and geotagging ground targets. Engineered an in-house Region Proposal Network (RPN) and OCR module, improving detection accuracy by 8% over standard benchmarks.",
      "/suas.png"
    );
  }}
/>

<Card
  title="DSA Achievements"
  description="Solved 500+ questions on all platforms: Leetcode, Gfg and CodeStudio"
  onClick={() => {
    displayCard(
      "DSA Achievements",
      "Solved over 500+ Data Structures and Algorithms problems across platforms like Leetcode, GeeksforGeeks, and CodeStudio. Built strong problem-solving and algorithmic thinking skills.",
      "/dsa.png"
    );
  }}
/>

<Card
  title="NSBC'24"
  description="Bagged the first runner up spot at NSBC-The Flagship Case Study competition of NSUT"
  onClick={() => {
    displayCard(
      "NSBC'24",
      "Secured the 1st runner-up position at NSBC'24, NSUT’s flagship business case competition. Applied structured frameworks to solve real-world business problems.",
      "/nsbc.png"
    );
  }}
/>

{disp.display && (
  <Popup
    title={disp.title}
    description={disp.description}
    link={disp.link}
    closePopup={() => {
      endDisplay();
    }}
  />
)}

            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function Card({
  title,
  description,
  onClick
}: {
  title: string;
  description: string;
  onClick:()=>void
}) {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="col-span-12 md:col-span-6 hover:border-yellow-500 hover:-translate-y-2 hover:-translate-x-2 bg-gray-900 border pl-6 pr-4 py-4 transition-all duration-300 rounded-lg shadow-lg hover:shadow-yellow-500/20"
    >
      <div>
        <h2 className="pt-2 font-bold text-lg text-yellow-500">{title}</h2>
      </div>
      <h4 className="pt-3 pb-4 text-sm text-gray-300">{description}</h4>
      <h6
        className="pb-2 md:text-sm text-gray-400 cursor-pointer hover:text-yellow-500 text-xs transition-colors duration-300"
        onClick={onClick}
      >
        Click to know more →
      </h6>
    </motion.div>
  );
}
