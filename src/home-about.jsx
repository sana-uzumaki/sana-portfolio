export default function Home() {
    return (
        <div className="relative mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-12 sm:pt-12 space-y-6">
            <div className="grid gap-6 lg:grid-cols-2">
                <section id="home" className="scroll-mt-14">
                    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur-xl transition duration-700 ease-out hover:-translate-y-2 hover:border-cyan-300/30 hover:bg-slate-900/70 animate-fade-in-left sm:p-8">
                        <div className="space-y-4">
                            <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">Introduction</p>
                            <h2 className="text-2xl font-semibold text-white">Hi, I'm Sanantheshwaran</h2>
                            <p className="text-base leading-7 text-slate-300">
                                Aspiring Full Stack Web Developer dedicated to building clean, responsive, and user-friendly web applications.
                            </p>
                            <p className="text-base leading-7 text-slate-400">
                                I'm focused on improving every day through coding practice and problem-solving challenges. My journey is driven by curiosity and a passion for creating impactful digital experiences.
                            </p>
                        </div>
                    </div>
                </section>

                <section id="about" className="scroll-mt-14">
                    <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur-xl transition duration-700 ease-out hover:-translate-y-2 hover:border-cyan-300/30 hover:bg-slate-900/70 animate-fade-in-right sm:p-8">
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
                </section>
            </div>
        </div>
    )
}
