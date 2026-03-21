import './App.css'

export default function Projects() {
    return (
        <>
            <section id="projects" className="bg-slate-800 m-5 mt-10 p-6 rounded-2xl scroll-mt-16 border border-slate-700/50">
                <h2 className="text-xl font-extrabold m-5 text-center">Projects</h2>
                <div className="cursor-pointer bg-red-400/40 border border-red-400 rounded-2xl p-4 mt-6 shadow-red-400 shadow-sm hover:shadow-lg transform hover:scale-102 transition-all duration-200">
                    <h2 className="font-semibold text-lg pb-4 flex items-center"><div className='m-3 rounded-full bg-red-400 h-4 w-4'></div> Title: Task Manager App</h2>
                    <div className="pl-6 mr-6 rounded shadow shadow-xm bg-blue-400/40 border border-blue-400 shadow-blue-400">
                        <p className="text-lg rounded p-2 pl-6 pb-4">Description:
                            A simple web app to manage daily tasks with add, delete, and mark-as-complete features.
                            <br />
                            Tech Stack: React, Tailwind CSS
                            <br />
                            <br />
                            Links:
                            <br />
                            Live Demo:
                            <br />
                            Git Hub:
                        </p>
                    </div>
                </div>
                <hr className="m-4 text-slate-800" />
                <div className="flex md:flex-row flex-col">
                    <div className="cursor-pointer bg-green-400/20 rounded-2xl p-4 flex-1 md:mr-6 md:mb-0 mb-5 shadow-green-400 hover:shadow-lg shadow-sm border border-green-400 transform hover:scale-102 transition-all duration-200">
                        <h2 className="font-semibold text-lg pb-4 flex items-center"><div className='m-3 rounded-full bg-green-400 h-4 w-4'></div> Title: LeetCode Tracker UI </h2>
                        <div className="pl-6 mr-6 bg-blue-400/40 border border-blue-400 shadow shadow-blue-400 rounded">
                            <p className="text-lg rounded p-2 pl-6 pb-4">Description:
                                A dashboard-style UI to track coding progress, problems solved, and daily streaks.
                                <br />
                                Tech Stack:
                                HTML, Tailwind CSS, JavaScript
                                <br />
                                <br />
                                Links:
                                <br />
                                Live Demo:
                                <br />
                                Git Hub:
                            </p>
                        </div>
                    </div>
                    <div className="cursor-pointer bg-yellow-400/20 rounded-2xl p-4 flex-1 shadow-yellow-400 hover:shadow-lg shadow-sm border border-yellow-400 transform hover:scale-102 transition-all duration-200">
                        <h2 className="font-semibold text-lg pb-4 flex items-center"><div className='m-3 rounded-full bg-yellow-400 h-4 w-4'></div> Title: Personal Portfolio Website </h2>
                        <div className="pl-6 mr-6 bg-blue-400/40 border border-blue-400 shadow shadow-blue-400 rounded">
                            <p className="text-lg rounded p-2 pl-6 pb-4">Description:
                                A responsive portfolio website showcasing my projects, skills, and achievements.
                                <br />
                                Tech Stack:
                                React, Tailwind CSS
                                <br />
                                <br />
                                Links:
                                <br />
                                Live Demo:
                                <br />
                                Git Hub:
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}