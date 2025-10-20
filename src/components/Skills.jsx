import { FaReact, FaNodeJs, FaPython, FaGit, FaBootstrap, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiJavascript, SiNumpy, SiPandas, SiScikitlearn, SiTailwindcss, SiMongodb, SiMysql, SiSqlite, SiDjango, SiFlask, SiPostman,SiPlotly } from "react-icons/si";
import { AiOutlineConsoleSql,AiOutlineApi,AiFillFileExcel } from "react-icons/ai"; // Generic placeholder
import { BiBrain } from "react-icons/bi"; // For Fast Learner
import { DiJava } from "react-icons/di";
import { FaServer } from "react-icons/fa";
import "./Skills.css";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "Core Java", icon: <DiJava className="text-red-500" /> },
    { name: "Python", icon: <FaPython className="text-blue-400" /> },
    { name: "NumPy", icon: <SiNumpy /> },
    { name: "Pandas", icon: <SiPandas /> },
    { name: "Matplotlib", icon: <SiPlotly className="text-purple-500" /> }, // placeholder
    { name: "Scikit-Learn", icon: <SiScikitlearn /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
    { name: "Express.js", icon: <FaServer className="text-gray-400" />}, // placeholder
    { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    { name: "React", icon: <FaReact className="text-cyan-400" /> },
    { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" /> },
    { name: "Bootstrap", icon: <FaBootstrap className="text-purple-500" /> },
    { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
    { name: "SQLite", icon: <SiSqlite className="text-blue-400" /> },
    { name: "Django", icon: <SiDjango className="text-green-600" /> },
    { name: "Flask", icon: <SiFlask className="text-gray-400" /> },
    { name: "Excel", icon: <AiFillFileExcel className="text-green-600" /> }, // placeholder
    { name: "SQL", icon: <AiOutlineConsoleSql /> }, // placeholder
    { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
    { name: "Git / GitHub", icon: <FaGit className="text-red-400" /> },
    { name: "REST API", icon: <AiOutlineApi className="text-cyan-400" /> }, // placeholder
    { name: "Fast Learner", icon: <BiBrain /> },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-title">
        Skills
        <span className="skills-underline"></span>
      </h2>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div key={skill.name} className="skill-card">
            <div className="skill-icon">{skill.icon}</div>
            <span className="skill-name">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
