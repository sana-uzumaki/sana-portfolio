import { useEffect, useState } from 'react'

export default function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    useEffect(() => {
        if (!isMenuOpen) return
        const onKeyDown = (event) => {
            if (event.key === 'Escape') setIsMenuOpen(false)
        }
        window.addEventListener('keydown', onKeyDown)
        return () => window.removeEventListener('keydown', onKeyDown)
    }, [isMenuOpen])

    const links = [
        { href: '#home', label: 'Home' },
        { href: '#about', label: 'About' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Projects' },
        { href: '#achievements', label: 'Achievements' },
        { href: '#contacts', label: 'Contact' },
    ]

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl animate-fade-in-down">
            <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-8 lg:px-12">
                <a href="#hero" className="text-lg font-semibold tracking-tight text-white uppercase">Sanantheshwaran</a>
                <button
                    type="button"
                    aria-controls="mobile-menu"
                    aria-expanded={isMenuOpen}
                    onClick={() => setIsMenuOpen((open) => !open)}
                    className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 p-2 text-slate-200 transition duration-500 ease-out hover:border-white/20 hover:bg-white/10 md:hidden"
                >
                    <span className="sr-only">Toggle menu</span>
                    {isMenuOpen ? (
                        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>

                <nav className="hidden md:block">
                    <ul className="flex gap-6 md:gap-8 text-sm uppercase tracking-[0.15em] text-slate-300">
                        {links.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} className="transition duration-500 ease-out hover:text-cyan-200">
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>

            {isMenuOpen && (
                <div id="mobile-menu" className="border-t border-white/10 bg-slate-950/95 backdrop-blur-xl md:hidden">
                    <nav className="mx-auto max-w-6xl px-6 py-4 sm:px-8 lg:px-12">
                        <ul className="flex flex-col gap-4 text-sm uppercase tracking-[0.15em] text-slate-200">
                            {links.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="block rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition duration-500 ease-out hover:border-cyan-300/30 hover:bg-slate-900/70 hover:text-cyan-200"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    )
}
