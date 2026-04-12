import './App.css'

export default function Home() {
    return (
        <section className="relative mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-12">
            <div className="grid gap-6 lg:grid-cols-2">
                <div id="home" className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-slate-900/70">
                    <div className="space-y-4">
                        <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">Introduction</p>
                        <h2 className="text-2xl font-semibold text-white">Hi, I'm Sanan 👋</h2>
                        <p className="text-base leading-7 text-slate-300">
                            Aspiring Full Stack Web Developer dedicated to building clean, responsive, and user-friendly web applications.
                        </p>
                        <p className="text-base leading-7 text-slate-400">
                            I'm focused on improving every day through coding practice and problem-solving challenges. My journey is driven by curiosity and a passion for creating impactful digital experiences.
                        </p>
                    </div>
                </div>

                <div id="about" className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-slate-900/70">
                    <div className="space-y-4">
                        <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">About Me</p>
                        <h2 className="text-2xl font-semibold text-white">Self-Taught Developer</h2>
                        <p className="text-base leading-7 text-slate-300">
                            I'm building strong fundamentals in both frontend and backend development while actively solving problems on LeetCode.
                        </p>
                        <p className="text-base leading-7 text-slate-400">
                            I believe in learning by building real projects. My goal is to become a skilled full-stack developer and create impactful, scalable applications that solve real-world problems.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}