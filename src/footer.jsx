import './App.css'

export default function Footer() {
    return (
        <footer className="relative border-t border-white/10 bg-slate-950 backdrop-blur-xl">
            <div className="mx-auto max-w-6xl px-6 py-8 sm:px-8 lg:px-12">
                <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row">
                    <p className="text-sm text-slate-400">
                        © 2026 Sanantheshwaran. All rights reserved.
                    </p>
                    <p className="text-sm font-medium text-cyan-200">
                        ✨ Built with React, Vite & Tailwind CSS
                    </p>
                    <p className="text-sm italic text-slate-500">
                        "Keep building. Keep improving."
                    </p>
                </div>
            </div>
        </footer>
    )
}