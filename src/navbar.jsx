import './App.css'

export default function NavBar() {
    return (
        <>
            <header className="sticky z-50 top-0 uppercase font-extrabold  flex bg-slate-800 h-12 text-xl items-center p-4 pt-0 pb-0 border-b border-slate-700/50">
                <h2>Sanantheshwaran</h2>
                <nav className="flex-1">
                    <ul className="flex md:flex-row text-blue-400 w-full gap-15 justify-end">
                        <li><a href="#home" className=" hover:text-slate-600 hover:border-b border-blue-400">Home</a></li>
                        <li><a href="#about" className=" hover:text-slate-600 hover:border-b border-blue-400">about</a></li>
                        <li><a href="#skills" className=" hover:text-slate-600 hover:border-b border-blue-400">skills</a></li>
                        <li><a href="#projects" className=" hover:text-slate-600 hover:border-b border-blue-400">projects</a></li>
                        <li><a href="#achievements" className=" hover:text-slate-600 hover:border-b border-blue-400">achievements</a></li>
                        <li><a href="#contacts" className=" hover:text-slate-600 hover:border-b border-blue-400">Contact</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}