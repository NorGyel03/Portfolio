import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Robotics & AI Innovator
            </h3>

            <p className="text-muted-foreground">
              Passionate about merging intelligent software with physical systems, I specialize in robotics, AI, and web development. 
              My experience spans designing autonomous robots, developing IoT and embedded solutions, and building modern, responsive web applications. 
              I also work extensively with Generative AI, computer vision, and LLM to create impactful, real-world solutions.
            </p>

            <p className="text-muted-foreground">
              I thrive on turning concepts into reality whether it’s programming microcontrollers for field robotics, engineering web platforms, 
              or deploying AI-powered tools for accessibility, governance, and industry. 
              With a track record in research, hackathons, and internships, I deliver solutions that are functional, scalable, and future-ready.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href=""
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Robotics Engineering</h4>
                  <p className="text-muted-foreground">
                    Designing and implementing autonomous robots, embedded systems, and 
                    IoT-enabled devices with ROS, Arduino, and Gazebo.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">AI & Machine Learning</h4>
                  <p className="text-muted-foreground">
                    Building intelligent systems with ML, DL, Computer Vision, NLP, 
                    and Generative AI to solve complex problems.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Leading projects from ideation to deployment using agile methodologies, 
                    ensuring timely delivery and quality outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
