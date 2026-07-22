import { Briefcase, ExternalLink } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Assistant IT Officer (Incoming)",
    company: "GovTech Bhutan",
    period: "Aug 2026 – Dec 2026",
    location: "Thimphu, Bhutan",
    type: "Contract",
    description:
      "Engaged on contract to continue contributing to national digital government initiatives in AI and data science, building on prior internship and research impact with the agency.",
    tags: ["AI/ML", "Data Science", "Gov Tech"],
    url: null,
    current: true,
  },
  {
    id: 2,
    role: "Founder & Chief Product Officer",
    company: "VIHelp",
    period: "Mar 2026 – Present",
    location: "Thimphu, Bhutan",
    type: "Startup",
    description:
      "Founded VIHelp through Bhutan Startup Launchpad — an affordable AI-powered wearable giving visually impaired individuals real-time environmental awareness via voice feedback. Secured Tranche 1 seed funding; led a 4-person founding team through MVP, 10 user pilots with DPOB, and Tranche 2 evaluation.",
    tags: ["YOLOv11", "MiDaS", "ESP32-S3", "Python", "Startup"],
    url: null,
    current: true,
  },
  {
    id: 3,
    role: "Software Engineering Intern",
    company: "Thimphu TechPark Limited",
    period: "Jan 2026 – Jun 2026",
    location: "Thimphu, Bhutan",
    type: "Internship",
    description:
      "Placed within the Analytics & Software Development Unit (ASDU) at Bhutan's first IT park (a DHI Company). Developed a mini HR Management System (iERP) using Spring Boot and CQRS architecture for core HR workflows.",
    tags: ["Spring Boot", "Java", "CQRS", "Enterprise Software"],
    url: null,
    current: false,
  },
  {
    id: 4,
    role: "Research Intern (SRIP 2025)",
    company: "Vellore Institute of Technology",
    period: "May 2025 – Jul 2025",
    location: "Chennai, India",
    type: "Research",
    description:
      "Selected for the competitive SRIP 2025 research program. Developed VersaChat, a compassionate AI chatbot for mental health using transformer-based language models. Collaborating with faculty toward a conference paper publication.",
    tags: ["LLMs", "RAG", "FastAPI", "NLP", "Research"],
    url: null,
    current: false,
  },
  {
    id: 5,
    role: "AI/ML Intern",
    company: "Elevate Labs",
    period: "Apr 2025 – May 2025",
    location: "Bengaluru, India",
    type: "Internship",
    description:
      "Developed ML models to enhance core application features. Engineered a credit card fraud detection system using anomaly detection and XGBoost, improving model accuracy by 8%. Recognized as Best Performer of the cohort.",
    tags: ["Python", "XGBoost", "Scikit-learn", "TensorFlow", "Fraud Detection"],
    url: null,
    current: false,
  },
  {
    id: 6,
    role: "AI/Data Science Intern",
    company: "GovTech Bhutan",
    period: "Jun 2024 – Jul 2024",
    location: "Thimphu, Bhutan",
    type: "Internship",
    description:
      "Contributed to development of a government AI chatbot by analyzing public sector workflows and Bhutan Civil Service Regulations (BCSR). Researched applications of deep learning and computer vision to autonomous vehicle technology.",
    tags: ["AI Chatbot", "Data Science", "Computer Vision", "Gov Tech"],
    url: null,
    current: false,
  },
];

const typeColors = {
  Contract: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  Startup: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Internship: "bg-green-500/10 text-green-400 border-green-500/20",
  Research: "bg-orange-500/10 text-orange-400 border-orange-500/20",
};

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Work <span className="text-primary">Experience</span>
        </h2>
        <p className="text-center text-muted-foreground mb-14 max-w-2xl mx-auto">
          Internships, research roles, and ventures across Bhutan and India.
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

          <div className="space-y-10">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1.5 mt-6 z-10" />

                  {/* Spacer for opposite side on desktop */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card */}
                  <div
                    className={`ml-12 md:ml-0 md:w-1/2 ${
                      isLeft ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="bg-card rounded-lg p-6 shadow-xs card-hover border border-border/40">
                      <div className="flex items-start justify-between gap-2 mb-3 flex-wrap">
                        <div>
                          <h3 className="font-semibold text-lg text-left leading-tight">
                            {exp.role}
                          </h3>
                          <p className="text-primary font-medium text-sm text-left">
                            {exp.company}
                          </p>
                        </div>
                        <span
                          className={`text-xs font-medium px-2.5 py-1 rounded-full border ${typeColors[exp.type]}`}
                        >
                          {exp.type}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground">
                        <span>{exp.period}</span>
                        <span>·</span>
                        <span>{exp.location}</span>
                        {exp.current && (
                          <>
                            <span>·</span>
                            <span className="text-green-400 font-medium">Active</span>
                          </>
                        )}
                      </div>

                      <p className="text-muted-foreground text-sm text-left leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 text-xs rounded-full bg-secondary text-secondary-foreground border border-border/40"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
