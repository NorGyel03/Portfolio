import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "6-DOF Robotic Manipulator Arm",
    description:
      "Built a robotic arm with voice and remote control, integrated with computer vision and ML for intelligent waste segregation. Designed for automation, assistive robotics, and research.",
    image: "/projects/project1.png",
    tags: ["Embedded Systems", "Computer Vision", "AI/ML", "Python", "Robotics"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "ALPR + Voice-Over Speed Detection System",
    description:
      "Developed a system that recognizes license plates, estimates vehicle speed, and generates real-time voice alerts to enhance traffic monitoring.",
    image: "/projects/project2.png",
    tags: ["OpenCV", "OCR", "YOLO", "Python", "AI/ML"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "BSL-Transcribe: Bhutanese Sign Language",
    description:
      "Created a dataset and recognition system for Bhutanese Sign Language using deep learning and NLP to transcribe gestures into text.",
    image: "/projects/project3.png",
    tags: ["Computer Vision", "Deep Learning", "NLP", "Python"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Skin Cancer Detection Using DenseNet",
    description:
      "Implemented a CNN model for early skin cancer detection from medical images, trained and deployed on AWS Cloud.",
    image: "/projects/project4.png",
    tags: ["Deep Learning", "TensorFlow", "CNN", "AWS"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Terrain-Adaptive Quadruped Robot",
    description:
      "Designed a quadruped robot capable of adaptive locomotion on rough terrain using reinforcement learning and ROS simulation.",
    image: "/projects/project5.png",
    tags: ["Reinforcement Learning", "Robotics", "ROS", "Gazebo"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "VersaChat: AI Mental Health Chatbot",
    description:
      "Built a generative AI chatbot for mental health support using transformers, NLP, and backend APIs for empathetic conversations.",
    image: "/projects/project6.png",
    tags: ["Generative AI", "Transformers", "NLP", "Flask/FastAPI"],
    demoUrl: "#",
    githubUrl: "#",
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
          Here are some of my most impactful projects across AI, Robotics, and
          Web Development.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/NorGyel03"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
