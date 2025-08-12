import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // -------------------- Programming & Web Development --------------------
  { name: "HTML/CSS", level: 90, category: "Web Dev" },
  { name: "JavaScript", level: 80, category: "Web Dev" },
  { name: "ReactJS", level: 78, category: "Web Dev" },
  { name: "NodeJS", level: 72, category: "Web Dev" },
  { name: "Tailwind CSS", level: 80, category: "Web Dev" },
  { name: "MySQL", level: 80, category: "Web Dev" },
  { name: "PHP", level: 80, category: "Web Dev" },
  { name: "Flask/ Streamlit", level: 80, category: "Web Dev" },
  
  { name: "C", level: 80, category: "Languages" },
  { name: "C++", level: 90, category: "Languages" },
  { name: "Python", level: 90, category: "Languages" },
  { name: "Java", level: 75, category: "Languages" },
  { name: "R", level: 70, category: "Languages" },
  { name: "Assembly Language", level: 80, category: "Languages" },
  { name: "Matlab", level: 75, category: "Languages" },
  
  // -------------------- AI & Machine Learning --------------------
  { name: "Machine Learning", level: 85, category: "AI/ ML" },
  { name: "Deep Learning", level: 80, category: "AI/ ML" },
  { name: "Neural Networks (CNN, RNN, LSTM, Transformer)", level: 78, category: "AI/ ML" },
  { name: "Computer Vision (OpenCV, YOLO, SORT, MiDaS)", level: 82, category: "AI/ ML" },
  { name: "Natural Language Processing (NLP)", level: 75, category: "AI/ ML" },
  { name: "Generative AI (LLMs, Chatbot)", level: 80, category: "AI/ ML" },
  { name: "Few-Shot Learning", level: 70, category: "AI/ ML" },
  { name: "Transfer Learning ", level: 75, category: "AI/ ML" },
  { name: "Anomaly Detection", level: 78, category: "AI/ ML" },
  { name: "Edge AI Deployment", level: 72, category: "AI/ ML" },
  { name: "PyTorch", level: 80, category: "AI/ ML" },
  { name: "TensorFlow / Keras", level: 78, category: "AI/ ML" },
  { name: "Scikit-learn", level: 85, category: "AI/ ML" },
  { name: "Hugging Face Transformer", level: 75, category: "AI/ ML" },



  // -------------------- Robotics & Embedded Systems --------------------
  { name: "ROS (Robot Operating System)", level: 70, category: "Robotics/ Embedded Systems" },
  { name: "Arduino", level: 80, category: "Robotics/ Embedded Systems" },
  { name: "ESP32", level: 75, category: "Robotics/ Embedded Systems" },
  { name: "Raspberry Pi", level: 78, category: "Robotics/ Embedded Systems" },
  { name: "Path Planning", level: 70, category: "Robotics/ Embedded Systems" },
  { name: "Gazebo Simulation", level: 65, category: "Robotics/ Embedded Systems" },
  { name: "Servo and Motor Control", level: 60, category: "Robotics/ Embedded Systems" },
  { name: "Wireless Communication (Bluetooth, Wi-Fi, MQTT)", level: 60, category: "Robotics/ Embedded Systems" },
  { name: "Sensor Integration (Ultrasonic, IR, Camera)", level: 60, category: "Robotics/ Embedded Systems" },
  { name: "CoppeliaSim", level: 60, category: "Robotics/ Embedded Systems" },




  // -------------------- Tools & Soft Skills --------------------
  { name: "Git/GitHub", level: 65, category: "Tools" },
  { name: "AWS", level: 78, category: "Tools" },
  { name: "Cisco Packet Tracer", level: 75, category: "Tools" },
  { name: "Matlab", level: 70, category: "Tools" },
  { name: "UiPath Studio", level: 82, category: "Tools" },
  { name: "LTSpiceXVII", level: 68, category: "Tools" },
  { name: "Jupyter Notebook", level: 85, category: "Tools" },
  { name: "VS Code", level: 90, category: "Tools" },
  { name: "Arduino IDE", level: 95, category: "Tools" },
  { name: "Keil uVision5", level: 75, category: "Tools" },
  { name: "Linux OS", level: 85, category: "Tools" },
  { name: "ProjectLibre/ StarUML", level: 95, category: "Tools" },


  { name: "Problem-Solving", level: 90, category: "SoftSkills" },
  { name: "Critical Thinking", level: 88, category: "SoftSkills" },
  { name: "Team Collaboration", level: 85, category: "SoftSkills" },
  { name: "Adaptability", level: 85, category: "SoftSkills" },
  { name: "Communication", level: 88, category: "SoftSkills" },
  { name: "Leadership", level: 82, category: "SoftSkills" },
  { name: "Time Management", level: 80, category: "SoftSkills" },
  { name: "Creativity & Innovation", level: 85, category: "SoftSkills" },
  { name: "Strategic Thinking", level: 80, category: "SoftSkills" },
  { name: "Attention to Detail", level: 82, category: "SoftSkills" },

];

const categories = ["All", "Languages" ,"Web Dev", "AI/ ML", "Robotics/ Embedded Systems", "Tools", "SoftSkills"];

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
