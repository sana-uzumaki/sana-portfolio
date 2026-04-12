import './App.css'

export default function Hero() {
    return (
        <section className="relative mx-auto max-w-6xl px-6 py-10 sm:px-8 lg:px-12">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
                <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                    <div className="space-y-4">
                        <p className="inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-1 text-sm uppercase tracking-[0.35em] text-cyan-200 backdrop-blur-sm">
                            Welcome
                        </p>
                        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                            Hello, I'm Sanantheshwaran
                        </h1>
                        <p className="text-base leading-8 text-slate-300 sm:text-lg">
                            2nd-year CSE student at Muthayammal Engineering College. I build responsive web applications with React and Tailwind CSS, and practice Data Structures & Algorithms to enhance my problem-solving skills.
                        </p>
                        <p className="text-base leading-7 text-slate-400">
                            Currently seeking opportunities to learn, build real-world projects, and grow as a full-stack developer.
                        </p>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-slate-950/30 backdrop-blur-xl">
                        <p className="text-sm uppercase tracking-[0.35em] text-slate-400">Quick facts</p>
                        <p className="mt-3 text-3xl font-semibold text-white">850+</p>
                        <p className="mt-1 text-sm text-slate-300">LeetCode problems solved</p>
                        <p className="mt-4 text-3xl font-semibold text-cyan-200">200+</p>
                        <p className="text-sm text-slate-300">Days coding streak</p>
                    </div>
                </div>
            </div>
        </section>
    )
}