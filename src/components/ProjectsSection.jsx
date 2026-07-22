import { ArrowRight, ExternalLink, Github, BookOpen, Trophy } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "VIHelp — Real-Time Assistive Vision System",
    description:
      "Flagship project & startup. YOLOv11 + MiDaS depth estimation on ESP32-S3 giving visually impaired users real-time object detection and voice-based audio feedback. Seed-funded via Bhutan Startup Launchpad; validated with DPOB pilots.",
    tags: ["YOLOv11", "MiDaS", "ESP32-S3", "Python", "OpenCV", "Startup"],
    githubUrl: "https://github.com/NorGyel03",
    badge: "Under Journal Review",
    badgeColor: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  },
  {
    id: 2,
    title: "VersaChat — AI Mental Health Chatbot",
    description:
      "Compassionate GenAI chatbot for mental health support built during SRIP 2025 at VIT. Uses transformer-based LLMs, RAG pipeline, and FastAPI backend for empathetic, context-aware conversations. Targeting conference paper publication.",
    tags: ["LLMs", "RAG", "FastAPI", "Vector DB", "Python"],
    githubUrl: "https://github.com/NorGyel03",
    badge: "Research (SRIP 2025)",
    badgeColor: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  },
  {
    id: 3,
    title: "BSL-Transcribe: Bhutanese Sign Language Dataset",
    description:
      "500 annotated videos across 100 BSL sentences by native signers — the first public corpus for Bhutanese Sign Language recognition. Enables CV and deep learning research for an underserved language community.",
    tags: ["Computer Vision", "Deep Learning", "Dataset", "Python", "OpenCV"],
    githubUrl: "https://github.com/NorGyel03",
    badge: "Published Dataset",
    badgeColor: "bg-green-500/10 text-green-400 border-green-500/20",
  },
  {
    id: 4,
    title: "ALPR + Voice-Over Speed Detection",
    description:
      "Multi-object tracking system using YOLO + OCR + SORT to recognize license plates, estimate vehicle speeds, and trigger real-time voice alerts. Co-authored research paper with Dr. Jayanthi R, VIT Chennai.",
    tags: ["YOLO", "OCR", "SORT", "OpenCV", "Speech Synthesis", "Python"],
    githubUrl: "https://github.com/NorGyel03",
    badge: "Paper Submitted",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  },
  {
    id: 5,
    title: "Processor-in-Memory (pPIM) Compiler",
    description:
      "LLVM/C++ compiler translating C++ matrix operations into a custom 19-bit ISA for near-memory AI/ML compute architecture. Explores hardware-software co-design to reduce memory bottlenecks in ML inference.",
    tags: ["LLVM", "C++", "CMake", "Custom ISA", "Systems Programming"],
    githubUrl: "https://github.com/NorGyel03",
    badge: "Compiler Design",
    badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  },
  {
    id: 6,
    title: "Terrain-Adaptive Quadruped Robot",
    description:
      "Reinforcement learning-based adaptive locomotion for a quadruped robot over uneven terrain. Simulated in ROS/Gazebo with policy transfer to real Arduino Nano hardware. Part of Cognitive Robotics coursework.",
    tags: ["Reinforcement Learning", "ROS", "Gazebo", "Arduino", "3D Printing"],
    githubUrl: "https://github.com/NorGyel03",
    badge: null,
    badgeColor: null,
  },
  {
    id: 7,
    title: "Skin Cancer Detection (DenseNet + AWS)",
    description:
      "CNN pipeline achieving 94% accuracy on the HAM10000 dermoscopy dataset using DenseNet. Deployed on AWS for scalable production inference — demonstrating end-to-end ML deployment for medical imaging.",
    tags: ["TensorFlow", "DenseNet", "AWS", "CNN", "Medical AI"],
    githubUrl: "https://github.com/NorGyel03",
    badge: null,
    badgeColor: null,
  },
  {
    id: 8,
    title: "Border Compliance System (Blockchain + NDI)",
    description:
      "Hackathon project built at Bhutan DevFest 2025. Decentralized border compliance system using Bhutan's National Digital Identity (DID/VC), ReactJS smart contracts, and blockchain for tamper-proof credential verification.",
    tags: ["Blockchain", "ReactJS", "Smart Contracts", "Bhutan NDI", "DID/VC"],
    githubUrl: "https://github.com/NorGyel03",
    badge: "Hackathon",
    badgeColor: "bg-red-500/10 text-red-400 border-red-500/20",
  },
  {
    id: 9,
    title: "Dynamic Model Switching for Robotic Waste Segregation",
    description:
      "Adaptive inference system that switches deep learning models based on available compute for real-time waste classification on constrained robotic hardware. Balances accuracy vs. latency under resource constraints.",
    tags: ["TensorFlow", "PyTorch", "Robotics", "Deep Learning", "Python"],
    githubUrl: "https://github.com/NorGyel03",
    badge: "Under Journal Review",
    badgeColor: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Research, startups, and engineering projects across AI, Robotics, and Full Stack — spanning
          journals, hackathons, and real-world deployment.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover border border-border/40 flex flex-col"
            >
              <div className="p-6 flex flex-col flex-1">
                {/* Badge */}
                {project.badge && (
                  <span
                    className={`self-start text-xs font-medium px-2.5 py-1 rounded-full border mb-3 ${project.badgeColor}`}
                  >
                    {project.badge}
                  </span>
                )}

                <h3 className="text-lg font-semibold mb-2 text-left leading-snug">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 text-left leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-0.5 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-border/40">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground/60 hover:text-primary transition-colors duration-300 flex items-center gap-1.5 text-sm"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/NorGyel03"
          >
            View All 31 Projects on GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
