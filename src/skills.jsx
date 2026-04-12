import './App.css'

export default function Skills() {
    const skillCategories = [
        {
            title: 'Languages',
            items: ['Java', 'Python', 'C++', 'PHP']
        },
        {
            title: 'Frontend',
            items: ['React.js', 'Tailwind CSS', 'JavaScript']
        },
        {
            title: 'Tools & Version Control',
            items: ['Git', 'GitHub', 'VS Code']
        },
        {
            title: 'Currently Learning',
            items: ['Backend Development', 'APIs', 'Databases']
        }
    ]

    return (
        <section id="skills" className="relative mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-12 scroll-mt-18">
            <div className="mb-8 space-y-3 animate-fade-in-up">
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">Expertise</p>
                <h2 className="text-3xl font-semibold text-white">Skills & Technologies</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {skillCategories.map((category, index) => (
                    <div key={category.title} className={`rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-950/40 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-slate-900/70 animate-fade-in-up animate-stagger-${(index % 4) + 1}`}>
                        <p className="text-sm uppercase tracking-[0.35em] text-cyan-200 mb-4">{category.title}</p>
                        <div className="space-y-2">
                            {category.items.map((item) => (
                                <div key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-center text-sm font-medium text-slate-200 transition hover:border-cyan-300/30 hover:bg-cyan-300/10">
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}