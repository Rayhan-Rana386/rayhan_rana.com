import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-neutral-900 text-white border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xl font-bold tracking-tight">
            DevCraft<span className="text-neutral-500">.</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">
              <Instagram size={20} />
            </a>
          </div>

          <div className="text-sm text-neutral-500 font-medium tracking-tight">
            © {currentYear} DevCraft Portfolio. Built with React & Tailwind.
          </div>
        </div>
      </div>
    </footer>
  );
}
