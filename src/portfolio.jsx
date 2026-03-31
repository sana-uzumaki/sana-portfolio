import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink, Github, Mail, Linkedin, Download, Code2, Database, Globe, Zap } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const skillsData = {
    Languages: ['Java', 'Python', 'C++', 'JavaScript', 'PHP'],
    Frontend: ['React', 'Tailwind CSS', 'HTML', 'CSS', 'JavaScript'],
    Tools: ['Git', 'GitHub', 'VS Code', 'Vercel'],
    Learning: ['Node.js', 'Express.js', 'MongoDB', 'APIs']
  };

  const projectsData = [
    {
      title: 'Task Manager App',
      description: 'A task management web application where users can add, delete, and mark tasks as completed.',
      tech: ['React', 'Tailwind CSS'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'LeetCode Tracker UI',
      description: 'A dashboard UI to track coding progress, problems solved, and daily streak.',
      tech: ['HTML', 'Tailwind CSS', 'JavaScript'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: 'Personal Portfolio',
      description: 'A responsive portfolio website to showcase skills, projects, and achievements.',
      tech: ['React', 'Tailwind CSS'],
      liveLink: '#',
      githubLink: '#'
    }
  ];

  const achievementsData = [
    { number: '850+', label: 'LeetCode Problems Solved' },
    { number: '200+', label: 'Day Coding Streak' },
    { number: '3rd', label: 'Place Technical Presentation' },
    { number: '3+', label: 'Production Projects' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0B0F19] via-[#0F1424] to-[#0B0F19] text-[#E5E7EB] overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[#0B0F19]/80 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-[#3B82F6] to-blue-400 bg-clip-text text-transparent">
            Sanan
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            {['Home', 'About', 'Skills', 'Projects', 'Achievements', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-sm font-medium text-[#9CA3AF] hover:text-[#3B82F6] transition-colors"
              >
                {item}
              </button>
            ))}
          </div>

          <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-lg hover:bg-[#3B82F6]/20 transition-all">
            <Download size={16} />
            <span className="text-sm font-medium">Resume</span>
          </button>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-white/5 rounded-lg transition"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#111827] border-t border-white/5 p-4 space-y-3">
            {['Home', 'About', 'Skills', 'Projects', 'Achievements', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="block w-full text-left px-4 py-2 text-[#9CA3AF] hover:text-[#3B82F6] hover:bg-white/5 rounded transition"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fadeIn">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold mb-3">
                  Hello, I'm <span className="bg-gradient-to-r from-[#3B82F6] to-blue-400 bg-clip-text text-transparent">Sanan</span>
                </h1>
                <h2 className="text-2xl text-[#9CA3AF] font-light">Aspiring Full Stack Web Developer</h2>
              </div>
              
              <p className="text-[#9CA3AF] text-lg leading-relaxed max-w-lg">
                I build clean, responsive, and user-friendly web applications using React and Tailwind CSS. I practice Data Structures and Algorithms to improve my problem-solving skills. Currently looking for internship opportunities.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-3 bg-[#3B82F6] text-white font-medium rounded-lg hover:bg-blue-600 transition-all hover:shadow-lg hover:shadow-blue-500/20"
                >
                  View Projects
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-8 py-3 border border-[#3B82F6] text-[#3B82F6] font-medium rounded-lg hover:bg-[#3B82F6]/10 transition-all"
                >
                  Contact Me
                </button>
                <button className="px-8 py-3 border border-[#9CA3AF]/30 text-[#9CA3AF] font-medium rounded-lg hover:border-[#3B82F6] hover:text-[#3B82F6] transition-all flex items-center gap-2">
                  <Download size={18} />
                  Resume
                </button>
              </div>
            </div>

            <div className="relative h-96 lg:h-full min-h-96 flex items-center justify-center">
              <div className="relative w-full h-full max-w-md">
                <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/10 to-transparent rounded-3xl backdrop-blur-xl border border-white/10 overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code2 size={120} className="text-[#3B82F6]/30" />
                  </div>
                  
                  <div className="absolute top-8 left-8 text-xs font-mono text-[#3B82F6]/60 space-y-2">
<div>project</div>
                    <div className="ml-4">structure</div>
                    <div className="ml-4">{'Build & Deploy'}</div>
                    <div>{'</div>'}</div>
                  </div>
                  <div className="absolute bottom-8 right-8 text-xs font-mono text-[#9CA3AF]/40 space-y-2">
                    <div>{'const project ='}</div>
                    <div className="ml-4 text-[#3B82F6]/60">{'amazing()'}</div>
                    <div>{'deploy()'}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">About Me</h2>
          
          <div className="group backdrop-blur-xl bg-gradient-to-br from-[#111827]/80 to-[#0F1424]/80 border border-white/10 rounded-2xl p-8 lg:p-12 hover:border-[#3B82F6]/30 hover:bg-[#111827]/90 transition-all hover:shadow-xl hover:shadow-[#3B82F6]/10">
            <p className="text-[#9CA3AF] text-lg leading-relaxed mb-6">
              I am a Computer Science Engineering student with a strong interest in web development and problem solving. I am currently focused on building strong fundamentals in both frontend and backend development.
            </p>

            <p className="text-[#9CA3AF] text-lg leading-relaxed mb-6">
              I enjoy solving problems on platforms like LeetCode, where I have solved 850+ problems covering Data Structures and Algorithms such as Arrays, Strings, Linked Lists, Stacks, Queues, Trees, Recursion, Binary Search, Greedy, and Dynamic Programming.
            </p>

            <p className="text-[#9CA3AF] text-lg leading-relaxed mb-6">
              I believe in learning by building real-world projects. I regularly develop web applications to apply what I learn and improve my development skills.
            </p>

            <p className="text-[#3B82F6] text-lg font-medium">
              My goal is to become a skilled Full Stack Developer and build scalable and impactful applications.
            </p>
          </div>
        </div>
      </section>

      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(skillsData).map(([category, skills]) => (
              <div
                key={category}
                className="group backdrop-blur-xl bg-gradient-to-br from-[#111827]/60 to-[#0F1424]/60 border border-white/10 rounded-xl p-6 hover:border-[#3B82F6]/30 hover:bg-[#111827]/80 transition-all duration-300 hover:shadow-lg hover:shadow-[#3B82F6]/10"
              >
                <h3 className="text-lg font-semibold mb-4 text-[#3B82F6] flex items-center gap-2">
                  <Zap size={18} />
                  {category}
                </h3>
                <ul className="space-y-3">
                  {skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-[#9CA3AF] text-sm flex items-center gap-2 group/item hover:translate-x-1 transition-transform"
                    >
                      <span className="w-2 h-2 bg-[#3B82F6] rounded-full group-hover/item:scale-125 transition-transform"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="group backdrop-blur-xl bg-gradient-to-br from-[#111827]/70 to-[#0F1424]/70 border border-white/10 rounded-xl overflow-hidden hover:border-[#3B82F6]/30 hover:shadow-xl hover:shadow-[#3B82F6]/10 transition-all duration-300"
              >
                <div className="h-40 bg-gradient-to-br from-[#3B82F6]/20 to-transparent flex items-center justify-center overflow-hidden relative">
                  <Globe className="text-[#3B82F6]/30 group-hover:scale-110 transition-transform" size={60} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-[#E5E7EB] group-hover:text-[#3B82F6] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#9CA3AF] text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs bg-[#3B82F6]/10 border border-[#3B82F6]/20 text-[#3B82F6] rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 px-4 py-2 bg-[#3B82F6]/10 border border-[#3B82F6]/30 text-[#3B82F6] text-sm font-medium rounded-lg hover:bg-[#3B82F6]/20 transition-all flex items-center justify-center gap-2">
                      <ExternalLink size={16} />
                      Live Demo
                    </button>
                    <button className="flex-1 px-4 py-2 bg-[#3B82F6]/10 border border-[#3B82F6]/30 text-[#3B82F6] text-sm font-medium rounded-lg hover:bg-[#3B82F6]/20 transition-all flex items-center justify-center gap-2">
                      <Github size={16} />
                      GitHub
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Achievements & Milestones</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievementsData.map((achievement, index) => (
              <div
                key={index}
                className="group backdrop-blur-xl bg-gradient-to-br from-[#111827]/70 to-[#0F1424]/70 border border-white/10 rounded-xl p-8 text-center hover:border-[#3B82F6]/30 hover:shadow-xl hover:shadow-[#3B82F6]/10 transition-all duration-300"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-[#3B82F6] to-blue-400 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform">
                  {achievement.number}
                </div>
                <p className="text-[#9CA3AF] text-sm">{achievement.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 backdrop-blur-xl bg-gradient-to-br from-[#111827]/70 to-[#0F1424]/70 border border-white/10 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Solved 850+ problems on LeetCode covering DSA',
                'Maintained 200+ days coding streak',
                'Strong in Data Structures and Algorithms',
                'Built multiple production-ready React projects',
                'Deployed projects using GitHub & Vercel',
                'Won 3rd Place in Technical Presentation',
                'Continuously learning Full Stack Development',
                'Active contributor on coding platforms'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-[#3B82F6] mt-1">✓</span>
                  <span className="text-[#9CA3AF]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Let's Connect</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-6 py-3 bg-[#111827]/80 border border-white/10 rounded-lg text-[#E5E7EB] placeholder-[#9CA3AF]/50 focus:outline-none focus:border-[#3B82F6] transition-all focus:shadow-lg focus:shadow-[#3B82F6]/20"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-6 py-3 bg-[#111827]/80 border border-white/10 rounded-lg text-[#E5E7EB] placeholder-[#9CA3AF]/50 focus:outline-none focus:border-[#3B82F6] transition-all focus:shadow-lg focus:shadow-[#3B82F6]/20"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full px-6 py-3 bg-[#111827]/80 border border-white/10 rounded-lg text-[#E5E7EB] placeholder-[#9CA3AF]/50 focus:outline-none focus:border-[#3B82F6] transition-all focus:shadow-lg focus:shadow-[#3B82F6]/20 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#3B82F6] text-white font-medium rounded-lg hover:bg-blue-600 transition-all hover:shadow-lg hover:shadow-blue-500/20"
              >
                Send Message
              </button>
            </form>

            <div className="space-y-6">
              <div className="backdrop-blur-xl bg-gradient-to-br from-[#111827]/70 to-[#0F1424]/70 border border-white/10 rounded-xl p-6 hover:border-[#3B82F6]/30 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-lg flex items-center justify-center">
                    <Mail size={24} className="text-[#3B82F6]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#9CA3AF]">Email</p>
                    <p className="text-[#E5E7EB] font-medium">sana0630c@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-xl bg-gradient-to-br from-[#111827]/70 to-[#0F1424]/70 border border-white/10 rounded-xl p-6 hover:border-[#3B82F6]/30 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-lg flex items-center justify-center">
                    <Github size={24} className="text-[#3B82F6]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#9CA3AF]">GitHub</p>
                    <p className="text-[#E5E7EB] font-medium">github.com/sana-uzumaki</p>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-xl bg-gradient-to-br from-[#111827]/70 to-[#0F1424]/70 border border-white/10 rounded-xl p-6 hover:border-[#3B82F6]/30 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#3B82F6]/10 border border-[#3B82F6]/30 rounded-lg flex items-center justify-center">
                    <Linkedin size={24} className="text-[#3B82F6]" />
                  </div>
                  <div>
                    <p className="text-sm text-[#9CA3AF]">LinkedIn</p>
                    <p className="text-[#E5E7EB] font-medium">linkedin.com/in/sanantheshwaran</p>
                  </div>
                </div>
              </div>

              <p className="text-[#9CA3AF] text-sm pt-4">
                I'm currently looking for internship opportunities and real-world projects where I can improve my skills and contribute to meaningful work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-12 px-6">
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <p className="text-[#9CA3AF] text-sm">© 2026 Sanan — Built with React & Tailwind CSS</p>
          <p className="text-[#3B82F6] font-medium italic">"Keep building. Keep improving."</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
