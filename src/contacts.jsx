export default function Contact() {
    return (
        <section id="contacts" className="relative mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-12 scroll-mt-4">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur-xl animate-fade-in-up sm:p-8">
                <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
                    <div className="animate-fade-in-left">
                        <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">Let's connect</p>
                        <h2 className="mt-4 text-3xl font-semibold text-white">Ready to build something great?</h2>
                        <p className="mt-3 max-w-2xl text-slate-300">
                            I'm currently looking for internship opportunities and real-world projects where I can improve my skills and contribute to meaningful work.
                        </p>
                        <p className="mt-4 text-slate-400">
                            If you have an opportunity, project idea, or just want to connect, feel free to reach out. I'd love to hear from you!
                        </p>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2 animate-fade-in-right">
                        <a href="mailto:sana0630c@gmail.com" className="inline-flex items-center justify-center rounded-3xl bg-cyan-400 px-6 py-3 text-center text-sm font-semibold text-slate-950 transition duration-500 ease-out hover:bg-cyan-300 hover:-translate-y-1">
                            Email me
                        </a>
                        <a href="#projects" className="inline-flex items-center justify-center rounded-3xl border border-white/10 bg-slate-900/70 px-6 py-3 text-center text-sm font-semibold text-slate-100 transition duration-500 ease-out hover:border-cyan-300/40 hover:-translate-y-1">
                            My projects
                        </a>
                    </div>
                </div>

                <div className="mt-8 border-t border-white/10 pt-8 animate-fade-in-up">
                    <p className="mb-6 text-sm uppercase tracking-[0.35em] text-cyan-200">Connect with me on</p>
                    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                        <a href="https://github.com/sana-uzumaki" className="flex w-full items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-slate-300 transition duration-500 ease-out hover:border-white/20 hover:bg-white/10 hover:-translate-y-1 sm:w-auto">
                            <span className="shrink-0">🔗 GitHub</span>
                            <span className="min-w-0 truncate text-slate-500">sana-uzumaki</span>
                        </a>
                        <a href="https://linkedin.com/in/sanantheshwaran-e" className="flex w-full items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-slate-300 transition duration-500 ease-out hover:border-white/20 hover:bg-white/10 hover:-translate-y-1 sm:w-auto">
                            <span className="shrink-0">💼 LinkedIn</span>
                            <span className="min-w-0 truncate text-slate-500">sanantheshwaran E</span>
                        </a>
                        <a href="mailto:sana0630c@gmail.com" className="flex w-full items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-slate-300 transition duration-500 ease-out hover:border-white/20 hover:bg-white/10 hover:-translate-y-1 sm:w-auto">
                            <span className="shrink-0">✉️ Email</span>
                            <span className="min-w-0 truncate text-slate-500">sana0630c@gmail.com</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
