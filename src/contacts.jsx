import './App.css'

export default function Contact() {
    return (
        <>
            <div  className="flex md:flex-row flex-col mb-5">
                <section id="contacts" className='flex-1 p-6 m-2 ml-5 border border-slate-600  bg-slate-800 rounded-2xl m-4 shadow-white hover:shadow-xl/10'>
                    <h2 className="font-extrabold text-xl text-center m-5 mb-6">Contact</h2>
                    <p className="bg-slate-400/20 border border-slate-400 rounded p-2 m-2">Email : <a href="sana0630c@gmail.com">sana0630c@gmail.com</a></p>
                    <p className="bg-blue-400/20 border border-blue-400 rounded p-2 m-2">GitHub: <a href="https://github.com/yourusername">sana._uzumaki</a> </p>
                    <p className="bg-yellow-400/20 border border-yellow-400 rounded p-2 m-2">LinkedIn: <a href="https://linkedin.com/in/yourusername">sanantheshwaran E</a> </p>
                </section>
                <section className='flex-1 p-6 m-2 mr-5 border border-slate-600 bg-slate-800 rounded-2xl m-4 shadow-white hover:shadow-xl/10'>
                    <p className='text-lg'>I'm curretly looking for internship opportunities and real-world projecs where can imporve my skills and contribute to meaningful work.
                        <br />
                        <br />
                    I enjoy building web applications using Reacy and Tailwind CSS, and i regularly practice problem-solving on Leetcode to strengthen my logical thinking
                    <br />
                    <br />
                    if you have an opportunity, project, or just want to connect, feel free to reach out. 
                    <br />Thank you for visiting my portfolio.
                    </p>
                </section>
            </div>
        </>
    )
}