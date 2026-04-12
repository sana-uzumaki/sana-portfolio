import './App.css'

export default function NavBar() {
    return (
        <header className="sticky z-100 top-0 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
            <div className="relative mx-auto max-w-6xl px-6 py-4 sm:px-8 lg:px-12 flex items-center justify-between">
                <h2 className="text-lg font-semibold tracking-tight text-white uppercase">Sanantheshwaran</h2>
                <nav>
                    <ul className="flex gap-6 md:gap-8 text-sm uppercase tracking-[0.15em] text-slate-300">
                        <li><a href="#home" className="transition hover:text-cyan-200">Home</a></li>
                        <li><a href="#about" className="transition hover:text-cyan-200">About</a></li>
                        <li><a href="#skills" className="transition hover:text-cyan-200">Skills</a></li>
                        <li><a href="#projects" className="transition hover:text-cyan-200">Projects</a></li>
                        <li><a href="#achievements" className="transition hover:text-cyan-200">Achievements</a></li>
                        <li><a href="#contacts" className="transition hover:text-cyan-200">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}