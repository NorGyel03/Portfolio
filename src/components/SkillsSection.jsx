import { useState } from "react";
import { cn } from "@/lib/utils";
const skills = [
  // -------------------- Programming Languages --------------------
  { name: "Python", level: 90, category: "Languages" },
  { name: "C/C++", level: 88, category: "Languages" },
  { name: "Java", level: 75, category: "Languages" },
  { name: "MATLAB", level: 80, category: "Languages" },
  { name: "R", level: 70, category: "Languages" },

  // -------------------- Web & Databases --------------------
  { name: "JavaScript / TypeScript", level: 80, category: "Web & Databases" },
  { name: "ReactJS", level: 82, category: "Web & Databases" },
  { name: "Node.js / Express.js", level: 75, category: "Web & Databases" },
  { name: "Flask / FastAPI", level: 85, category: "Web & Databases" },
  { name: "HTML / CSS / Tailwind", level: 88, category: "Web & Databases" },
  { name: "MySQL", level: 80, category: "Web & Databases" },
  { name: "MongoDB", level: 72, category: "Web & Databases" },
  { name: "PHP", level: 70, category: "Web & Databases" },

  // -------------------- AI & Machine Learning --------------------
  { name: "Machine & Deep Learning", level: 88, category: "AI/ML" },
  { name: "Computer Vision (OpenCV, YOLO)", level: 85, category: "AI/ML" },
  { name: "Data Analysis (Pandas, NumPy)", level: 90, category: "AI/ML" },
  { name: "TensorFlow / PyTorch", level: 82, category: "AI/ML" },
  { name: "NLP & Generative AI", level: 78, category: "AI/ML" },
  
  // -------------------- Robotics & Embedded Systems --------------------
  { name: "ROS (Robot Operating System)", level: 80, category: "Robotics" },
  { name: "Gazebo / CoppeliaSim", level: 78, category: "Robotics" },
  { name: "Arduino / ESP32 / Raspberry Pi", level: 85, category: "Robotics" },
  { name: "3D Design (Fusion 360, SolidWorks)", level: 75, category: "Robotics" },

  // -------------------- Cloud & DevOps --------------------
  { name: "AWS", level: 78, category: "Cloud & DevOps" },
  { name: "Docker", level: 75, category: "Cloud & DevOps" },
  { name: "Git / GitHub", level: 85, category: "Cloud & DevOps" },
  { name: "Vercel", level: 80, category: "Cloud & DevOps" },
  
  // -------------------- Software & Tools --------------------
  { name: "Linux OS / Kali Linux", level: 82, category: "Software & Tools" },
  { name: "VS Code", level: 90, category: "Software & Tools" },
  { name: "Jupyter Notebook", level: 88, category: "Software & Tools" },
  { name: "UiPath Studio (RPA)", level: 80, category: "Software & Tools" },

  // -------------------- Soft Skills --------------------
  { name: "Problem-Solving", level: 90, category: "Soft Skills" },
  { name: "Team Collaboration", level: 88, category: "Soft Skills" },
  { name: "Leadership", level: 85, category: "Soft Skills" },
  { name: "Creativity & Innovation", level: 85, category: "Soft Skills" },
];

const categories = [
    "All", 
    "Languages", 
    "Web & Databases", 
    "AI/ML", 
    "Robotics", 
    "Cloud & DevOps", 
    "Software & Tools", 
    "Soft Skills"
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
