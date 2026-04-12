export default function Projects() {
    const projects = [
        {
            title: 'Task Manager App',
            description: 'A simple web app to manage daily tasks with add, delete, and mark-as-complete features.',
            stack: 'React, Tailwind CSS',
            liveDemo: '#',
            github: '#'
        },
        {
            title: 'LeetCode Tracker UI',
            description: 'A dashboard-style UI to track coding progress, problems solved, and daily streaks.',
            stack: 'HTML, Tailwind CSS, JavaScript',
            liveDemo: '#',
            github: '#'
        },
        {
            title: 'Personal Portfolio Website',
            description: 'A responsive portfolio website showcasing projects, skills, and achievements.',
            stack: 'React, Vite, Tailwind CSS',
            liveDemo: '#',
            github: '#'
        }
    ]

	    const staggerClasses = ['animate-stagger-1', 'animate-stagger-2', 'animate-stagger-3', 'animate-stagger-4']

    return (
        <section id="projects" className="scroll-mt-24 relative mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-12">
            <div className="mb-8 space-y-3 animate-fade-in-up">
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">Portfolio</p>
                <h2 className="text-3xl font-semibold text-white">Featured Projects</h2>
                <p className="text-base text-slate-400">Explore my recent work and creative projects built with modern technologies.</p>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
                {projects.map((project, index) => (
                    <article key={project.title} className={`rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-950/40 backdrop-blur-xl transition duration-700 ease-out hover:-translate-y-2 hover:border-cyan-300/30 hover:bg-slate-900/70 animate-fade-in-up ${staggerClasses[index % staggerClasses.length]}`}>
                        <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">Project</p>
                        <h3 className="mt-4 text-2xl font-semibold text-white">{project.title}</h3>
                        <p className="mt-3 text-slate-300">{project.description}</p>
                        <p className="mt-4 text-sm text-slate-400 font-medium">Tech: {project.stack}</p>
                        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                            <a href={project.liveDemo} className="inline-flex items-center justify-center rounded-lg bg-cyan-400/20 border border-cyan-300/30 px-4 py-2 text-sm font-medium text-cyan-200 transition duration-500 ease-out hover:bg-cyan-400/30">
                                Live Demo
                            </a>
                            <a href={project.github} className="inline-flex items-center justify-center rounded-lg border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-300 transition duration-500 ease-out hover:border-white/20 hover:bg-white/10">
                                GitHub
                            </a>
                        </div>
                    </article>
	                ))}
	            </div>
	        </section>
	    )
}
