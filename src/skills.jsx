import './App.css'

export default function Skills() {
    return (
        <>
            <section id="skills" className="bg-slate-800 m-5 p-6 rounded-2xl shadow-white hover:shadow-xl/10 scroll-mt-16 border border-slate-700/50">
                <h2 className="text-xl font-extrabold m-5 text-center">Skills</h2>
                <div className="flex flex-col md:flex-row gap-6">
                    <div className="bg-red-400/20 backdrop-blur-sm border border-red-400 rounded-2xl p-4 flex-1 transform hover:scale-105 transition-all duration-300 cursor-pointer shadow shadow-red-400 hover:shadow-lg">
                        <h3 className="flex font-semibold text-lg items-center">
                            <div className='bg-red-400 h-4 w-4 mr-2 rounded-full'></div>Languages</h3>
                        <ul>
                            <li className="text-center text-lg bg-red-400/10 border border-red-400 rounded my-2">Java</li>
                            <li className="text-center text-lg bg-red-400/10 border border-red-400 rounded my-2">Python</li>
                            <li className="text-center text-lg bg-red-400/10 border border-red-400 rounded my-2">c++</li>
                            <li className="text-center text-lg bg-red-400/10 border border-red-400 rounded my-2">Php</li>
                        </ul>
                    </div>
                    <div className="bg-green-400/20 backdrop-sm border border-green-400 rounded-2xl p-4 flex-1 transform hover:scale-105 transition-all duration-400 cursor-pointer shadow shadow-green-400 hover:shadow-lg">
                        <h3 className="font-semibold text-lg flex items-center">
                            <div className='bg-green-400 h-4 w-4 mr-2 rounded-full'></div>Frontend</h3>
                        <ul>
                            <li className="text-center text-lg bg-green-400/10 border border-green-400 rounded my-2">React js</li>
                            <li className="text-center text-lg bg-green-400/10 border border-green-400 rounded my-2">Tailwind css</li>
                        </ul>
                    </div>
                    <div className="bg-blue-400/20 backdrop-sm border border-blue-400 rounded-2xl p-4 flex-1 ransform hover:scale-105 transition-all duration-400 cursor-pointer shadow shadow-blue-400 hover:shadow-lg">
                        <h3 className="font-semibold text-lg flex items-center">
                            <div className='bg-blue-400 h-4 w-4 mr-2 rounded-full'></div>tools</h3>
                        <ul>
                            <li className="text-center text-lg bg-blue-400/10 border border-blue-400 rounded my-2">Git</li>
                            <li className="text-center text-lg bg-blue-400/10 border border-blue-400 rounded my-2">Git hub</li>
                            <li className="text-center text-lg bg-blue-400/10 border border-blue-400 rounded my-2">Vs code</li>
                        </ul>
                    </div>
                    <div className="bg-yellow-400/20 backdrop-sm border border-yellow-400 rounded-2xl p-4 flex-1 transform hover:scale-105 transition-all duration-400 cursor-pointer shadow shadow-yellow-400 hover:shadow-lg">
                        <h3 className="font-semibold text-lg flex items-center">
                            <div className='bg-yellow-400 h-4 w-4 mr-2 rounded-full'></div>Currently Learning</h3>
                        <ul>
                            <li className="text-center text-lg bg-yellow-400/10 border border-yellow-400 rounded my-2">Backend Development</li>
                            <li className="text-center text-lg bg-yellow-400/10 border border-yellow-400 rounded my-2">APIs</li>
                            <li className="text-center text-lg bg-yellow-400/10 border border-yellow-400 rounded my-2">DataBase</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}