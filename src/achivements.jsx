import { useLeetCodeStats } from './hooks/useLeetCodeStats.js'
import { formatNumber } from './lib/leetcode-client.js'

export default function Achievements() {
    const defaultUsername = 'sana_0630'
    const username = import.meta.env.VITE_LEETCODE_USERNAME ?? defaultUsername
    const profileUrl = `https://leetcode.com/${username}`
    const { data } = useLeetCodeStats(username)
    const solved = typeof data?.totalSolved === 'number' ? formatNumber(data.totalSolved) : null
    const streak = typeof data?.streak === 'number' ? formatNumber(data.streak) : null

    const highlights = [
        { label: 'LeetCode Problems', value: solved ?? '850+' },
        { label: 'Coding Streak Days', value: streak ?? '200+' },
        { label: 'Projects Built', value: '5+' },
        { label: 'Paper Presentaion', value: '3rd Place' }
    ]

    const staggerClasses = ['animate-stagger-1', 'animate-stagger-2', 'animate-stagger-3', 'animate-stagger-4']

    return (
        <section id="achievements" className="relative mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-12">
            <div className="mb-8 space-y-3 animate-fade-in-up">
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">Milestones</p>
                <h2 className="text-3xl font-semibold text-white">Achievements & Experience</h2>
            </div>

            <div id="leetcode" className="mb-8 rounded-3xl border border-cyan-300/20 bg-slate-950/70 p-6 shadow-xl shadow-slate-950/30 backdrop-blur-xl animate-fade-in-up">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">LeetCode Profile</p>
                        <p className="mt-2 text-lg font-semibold text-white">{username}</p>
                        <p className="text-sm text-slate-300">My LeetCode profile.</p>
                    </div>
                    <a
                        href={profileUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition duration-300 hover:bg-cyan-300/20 hover:text-white"
                    >
                        View on LeetCode
                    </a>
                </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-slate-950/40 backdrop-blur-xl animate-fade-in-up sm:p-8">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
                    {highlights.map((item, index) => (
                        <div key={item.label} className={`rounded-2xl border border-white/10 bg-slate-900/70 p-6 animate-fade-in-up ${staggerClasses[index % staggerClasses.length]}`}>
                            <p className="text-4xl font-bold text-cyan-200">{item.value}</p>
                            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
                        </div>
                    ))}
                </div>

                <div className="space-y-6">
                    <div className="animate-fade-in-up animate-stagger-1">
                        <h3 className="text-lg font-semibold text-white mb-3">🎯 Problem-Solving Expertise</h3>
                        <p className="text-slate-300 leading-7">
                            Solved {solved ?? '850+'} problems on LeetCode covering Data Structures and Algorithms including Arrays, Strings, Linked Lists, Stacks, Queues, Trees, Recursion, Binary Search, Greedy Algorithms, and Dynamic Programming. This continuous practice has strengthened my problem-solving skills and logical thinking.
                        </p>
                    </div>

                    <div className="animate-fade-in-up animate-stagger-2">
                        <h3 className="text-lg font-semibold text-white mb-3">⚡ Consistent Growth</h3>
                        <p className="text-slate-300 leading-7">
                            Maintained {streak ?? '200+'} days of consistent coding practice, regularly solving daily challenges and improving analytical thinking. This discipline has been crucial in developing my technical proficiency and coding efficiency.
                        </p>
                    </div>

                    <div className="animate-fade-in-up animate-stagger-3">
                        <h3 className="text-lg font-semibold text-white mb-3">🚀 Project Development</h3>
                        <p className="text-slate-300 leading-7">
                            Built multiple projects using React, Tailwind CSS, and JavaScript. Learned component architecture, responsive design, and deployment strategies using GitHub and Vercel. Each project enhanced my understanding of full-stack development.
                        </p>
                    </div>

                    <div className="animate-fade-in-up animate-stagger-4">
                        <h3 className="text-lg font-semibold text-white mb-3">🏆 Recognition</h3>
                        <p className="text-slate-300 leading-7">
                            Secured 3rd place in a technical presentation competition at Knowledge Institute of Technology. This achievement improved my communication, teamwork, and presentation skills.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
