import {
  Instagram,
  Linkedin,
  Facebook,
  Github,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Please fill in all fields.", description: "" });
      return;
    }
    setIsSubmitting(true);
    // Open mailto with prefilled subject/body
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:norbugyeltshen2003@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => {
      toast({
        title: "Email client opened!",
        description: "Your message has been pre-filled. Just hit send.",
      });
      setIsSubmitting(false);
      setForm({ name: "", email: "", message: "" });
    }, 800);
  };

  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out —
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold text-left">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-left">Email</h4>
                  <a
                    href="mailto:norbugyeltshen2003@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    norbugyeltshen2003@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-left">Phone</h4>
                  <a
                    href="tel:+97517263821"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +975 17263821
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-left">Location</h4>
                  <span className="text-muted-foreground">Thimphu, Bhutan</span>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h4 className="font-medium mb-4 text-left">Connect With Me</h4>
              <div className="flex space-x-4">
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
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs border border-border/40">
            <h3 className="text-2xl font-semibold mb-6 text-left">Send a Message</h3>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2 text-left">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  placeholder="FirstName LastName"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-left">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-left">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  isSubmitting && "opacity-70 cursor-wait"
                )}
              >
                {isSubmitting ? "Opening..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
