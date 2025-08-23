import { useState } from "react";
import { cn } from "@/lib/utils";
const skills = [
  // -------------------- Programming & Web Development --------------------
  { name: "Python", level: 90, category: "Languages" },
  { name: "C/C++", level: 88, category: "Languages" },
  { name: "Java", level: 75, category: "Languages" },
  { name: "JavaScript/TypeScript", level: 80, category: "Web Dev" },
  { name: "ReactJS", level: 78, category: "Web Dev" },
  { name: "NodeJS", level: 72, category: "Web Dev" },
  { name: "Tailwind CSS", level: 80, category: "Web Dev" },
  { name: "MySQL/PHP", level: 78, category: "Web Dev" },

  // -------------------- AI & Machine Learning --------------------
  { name: "Machine & Deep Learning", level: 85, category: "AI/ML" },
  { name: "Computer Vision (OpenCV, YOLO)", level: 82, category: "AI/ML" },
  { name: "NLP & Generative AI", level: 78, category: "AI/ML" },
  { name: "TensorFlow / PyTorch", level: 80, category: "AI/ML" },
  { name: "Scikit-learn", level: 85, category: "AI/ML" },

  // -------------------- Robotics & Embedded Systems --------------------
  { name: "Robotics (ROS, Gazebo, CoppeliaSim)", level: 70, category: "Robotics" },
  { name: "Arduino & ESP32", level: 80, category: "Robotics" },
  { name: "Raspberry Pi", level: 78, category: "Robotics" },
  { name: "3D Design & Printing (Fusion 360, SolidWorks)", level: 75, category: "Robotics" },

  // -------------------- Tools --------------------
  { name: "Git/GitHub", level: 78, category: "Tools" },
  { name: "AWS", level: 75, category: "Tools" },
  { name: "Docker", level: 70, category: "Tools" },
  { name: "Linux OS/ Kali Linux", level: 82, category: "Tools" },
  { name: "UiPath Studio", level: 80, category: "Tools" },

  // -------------------- Soft Skills --------------------
  { name: "Problem-Solving", level: 90, category: "SoftSkills" },
  { name: "Team Collaboration", level: 85, category: "SoftSkills" },
  { name: "Leadership", level: 82, category: "SoftSkills" },
  { name: "Creativity & Innovation", level: 85, category: "SoftSkills" },
];

const categories = ["All", "Languages", "Web Dev", "AI/ML", "Robotics", "Tools", "SoftSkills"];

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
