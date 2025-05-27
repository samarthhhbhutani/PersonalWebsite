import  { useRef } from "react";
import { FirstPage } from "./components/FirstPage";
import { Navbar } from "./components/Navbar";
import { AboutMe } from "./components/AboutMe";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

export function App() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);

  return (
    <div className="bg-black">
      <div className="pl-4">
        <div ref={ref1} className="min-h-screen">
          <Navbar ref1={ref1} ref2={ref2} ref3={ref3} ref4={ref4} ref5={ref5} />
          <FirstPage />
        </div>
        <div ref={ref2}>
          <AboutMe />
        </div>
        <div ref={ref5}>
          <Experience />
        </div>
        <div ref={ref3}>
          <Projects />
        </div>
        <div ref={ref4}>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
