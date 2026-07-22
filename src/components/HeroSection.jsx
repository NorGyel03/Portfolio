import { ArrowDown, Github, Instagram, Linkedin, Facebook } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}Norbu
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}Gyeltshen
            </span>
          </h1>

          <h2 className="text-lg md:text-2xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            AI Developer &nbsp;·&nbsp; Robotics Engineer &nbsp;·&nbsp; Startup Founder
          </h2>

          <p className="text-sm md:text-base text-muted-foreground/70 max-xl mx-auto opacity-0 animate-fade-in-delay-3">
            B.Tech CSE (AI &amp; Robotics) · VIT University &nbsp;|&nbsp; Founder of VIHelp · Thimphu, Bhutan
          </p>

          <div className="pt-4">
            <h4 className="font-medium mb-4 text-muted-foreground text-sm uppercase tracking-widest">Connect With Me</h4>
            <div className="flex space-x-5 justify-center">
              <a
                href="https://www.linkedin.com/in/norbu-gyeltshen-484ba61b9/"
                target="_blank"
                rel="noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors duration-300"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://www.github.com/NorGyel03"
                target="_blank"
                rel="noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors duration-300"
              >
                <Github size={22} />
              </a>
              <a
                href="https://www.instagram.com/nor_gyel03/"
                target="_blank"
                rel="noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors duration-300"
              >
                <Instagram size={22} />
              </a>
              <a
                href="https://www.facebook.com/norbu.gyeltshen.9678/"
                target="_blank"
                rel="noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors duration-300"
              >
                <Facebook size={22} />
              </a>
            </div>
          </div>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex gap-4 justify-center flex-wrap">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
            <a
              href="#contact"
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
