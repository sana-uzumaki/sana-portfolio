import './App.css'

export default function Home() {
    return (
        <>
            <div className="flex flex-col md:flex-row mt-5">
                <section id="home" className="cursor-pointer bg-slate-800 m-5 p-3 rounded-2xl  text-center pb-6 shadow-white hover:shadow-xl/10 scroll-mt-16 border border-slate-700/50">
                    <h2 className="text-xl font-extrabold mb-4 mt-4">Home</h2>
                    <p className="text-lg">
                        Hi, I'm Sanan 👋
                        Aspiring Full Stack Web Developer

                        I build clean, responsive, and user-friendly web applications.
                        Focused on improving every day through coding and problem solving.

                    </p>
                </section>
                <section id="about" className="cursor-pointer bg-slate-800 m-5 p-3 rounded-2xl  text-center  pb-6 shadow-white hover:shadow-xl/10 scroll-mt-16 border border-slate-700/50">
                    <h2 className="text-xl font-extrabold mb-4 mt-4">About</h2>
                    <p className="text-lg">
                        I'm a self-taught web developer currently focused on building strong fundamentals in both frontend and backend development.

                        I enjoy solving problems, especially through platforms like LeetCode, and consistently work on improving my logical thinking and coding skills.

                        I believe in learning by building, so I regularly create projects to apply what I learn.

                        My goal is to become a skilled full-stack developer and build impactful, real-world applications.
                    </p>
                </section>
            </div>
        </>
    )
}