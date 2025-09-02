import {
  Instagram,
  Linkedin,
  Facebook,
  Mail,
  MapPin,
  Phone,
  Send,

} from "lucide-react";

import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Norbu
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              
            </span>
          </h1>

          <h2 className="text-lg md:text-3xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
          Soon to be - AI Developer and Robotics Engineer
          </h2>

          <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/norbu-gyeltshen-484ba61b9/" target="_blank">
                  <Linkedin />
                </a>
                <a href="https://www.instagram.com/nor_gyel03/" target="_blank">
                  <Instagram />
                </a>
                <a href="https://www.facebook.com/norbu.gyeltshen.9678/" target="_blank">
                  <Facebook />
                </a>
              </div>
            </div>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
