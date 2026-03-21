import './App.css'

export default function Achievements() {
    return (
        <section id="achievements" className="bg-slate-800 m-5 mt-10 p-10 rounded-2xl border border-slate-700 shadow-lg scroll-mt-16 text-white">
            <h2 className="text-3xl font-extrabold mb-6 text-center">
                Achievements
            </h2>
            <div className='bg-blue-400/20 border border-blue-400  p-6 rounded-2xl'>
                <p className="text-lg leading-8 text-slate-300 mt-6">
                    I have solved over 850 problems on LeetCode, covering various Data Structures and Algorithms such as Arrays, Strings, Linked Lists, Stacks, Queues, Trees, Recursion, Binary Search, Greedy Algorithms, and Dynamic Programming. This continuous practice has helped me develop strong problem-solving skills and logical thinking ability.
                    <br /><br />
                    I have maintained a consistent coding practice for more than 200 days, regularly solving daily coding challenges and improving my analytical thinking and coding efficiency. This consistency has helped me become more disciplined and focused on improving my technical skills.
                    <br /><br />
                    I have built multiple personal projects using React, Tailwind CSS, and JavaScript. Through these projects, I learned component-based architecture, responsive web design, and how to deploy real-world applications using GitHub and Vercel. These projects helped me understand how to build and deploy complete web applications.
                    <br /><br />
                    I also participated in a technical presentation competition conducted at Knowledge Institute of Technology, where my team secured 3rd place for our project presentation. This experience improved my presentation skills, teamwork, and communication skills.
                    <br /><br />
                    I am continuously learning Data Structures and Algorithms, Web Development, and modern technologies to improve my skills and become a better software developer. My goal is to become a full stack developer and build efficient, scalable, and user-friendly applications.
                </p>

                <div className="mt-8 text-lg">
                    <p className="font-semibold mb-2">Key Highlights:</p>
                    <ul className="list-disc pl-6 leading-8">
                        <li>Solved 850+ problems on LeetCode</li>
                        <li>Maintained 200+ days coding streak</li>
                        <li>Strong in Data Structures and Algorithms</li>
                        <li>Built multiple projects using React and Tailwind CSS</li>
                        <li>Deployed projects using GitHub and Vercel</li>
                        <li>3rd Place in Technical PPT Presentation (Team)</li>
                        <li>Continuously learning Full Stack Development</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
