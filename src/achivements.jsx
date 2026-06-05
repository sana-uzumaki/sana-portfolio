import { useEffect, useMemo, useRef, useState } from 'react'
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
        { label: 'Coding Streak Days', value: streak ?? '67' },
        { label: 'Projects Built', value: '5+' },
        { label: 'Paper Presentation', value: '3rd Place' }
    ]

    const staggerClasses = ['animate-stagger-1', 'animate-stagger-2', 'animate-stagger-3', 'animate-stagger-4']

    const slides = useMemo(
        () => [
            {
                title: 'Problem-Solving Expertise',
                description: `Solved ${solved ?? '850+'} LeetCode problems across core DSA topics, including arrays, strings, linked lists, stacks, queues, trees, recursion, binary search, greedy strategies, and dynamic programming. This continuous practice strengthened my reasoning and solution-building skills.`
            },
            {
                title: 'Consistent Growth',
                description: `Maintained ${streak ?? '67'} days of consistent coding practice by solving daily challenges and improving analytical thinking. This discipline has been key to building technical confidence and coding efficiency.`
            },
            {
                title: 'Project Development',
                description:
                    'Built multiple projects with React, Tailwind CSS, and JavaScript, focusing on component architecture, responsive UI, and deployment workflows using GitHub and Vercel. Each project improved my end-to-end development skills.'
            },
            {
                title: 'Recognition',
                description:
                    'Secured 3rd place in a technical presentation competition at Knowledge Institute of Technology, strengthening my communication, teamwork, and presentation skills.'
            }
        ],
        [streak, solved]
    )

    const [activeSlideIndex, setActiveSlideIndex] = useState(0)
    const [isCarouselPaused, setIsCarouselPaused] = useState(false)
    const carouselTimerRef = useRef(null)

    useEffect(() => {
        window.clearTimeout(carouselTimerRef.current)
        if (isCarouselPaused || slides.length <= 1) return

        carouselTimerRef.current = window.setTimeout(() => {
            setActiveSlideIndex((current) => (current + 1) % slides.length)
        }, 6500)

        return () => window.clearTimeout(carouselTimerRef.current)
    }, [activeSlideIndex, isCarouselPaused, slides.length])

    const goToSlide = (index) => {
        setActiveSlideIndex((current) => {
            const normalizedIndex = ((index % slides.length) + slides.length) % slides.length
            return normalizedIndex === current ? current : normalizedIndex
        })
    }

    const goToNextSlide = () => goToSlide(activeSlideIndex + 1)
    const goToPreviousSlide = () => goToSlide(activeSlideIndex - 1)
    const handleCarouselBlur = (event) => {
        if (event.currentTarget.contains(event.relatedTarget)) return
        setIsCarouselPaused(false)
    }

    return (
        <section id="achievements" className="relative mx-auto max-w-6xl px-6 py-12 sm:px-8 lg:px-12">
            <div className="mb-8 space-y-3 animate-fade-in-up">
                <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">Milestones</p>
                <h2 className="text-3xl font-semibold text-white">Achievements & Experience</h2>
            </div>

            <div
                id="leetcode"
                className="mb-8 rounded-4xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-950/40 backdrop-blur-xl transition duration-700 ease-out hover:-translate-y-2 hover:border-cyan-300/30 hover:bg-slate-900/70 animate-fade-in-up"
            >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-sm uppercase tracking-[0.35em] text-cyan-200">LeetCode Profile</p>
                        <p className="mt-2 text-lg font-semibold text-white">{username}</p>
                        <p className="text-sm text-slate-300">Synced highlights from your LeetCode profile.</p>
                    </div>
                    <a
                        href={profileUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-100 transition duration-500 ease-out hover:border-cyan-300/40 hover:bg-cyan-300/20 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
                    >
                        View on LeetCode
                    </a>
                </div>
            </div>

            <div className="space-y-6 rounded-4xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-950/40 backdrop-blur-xl transition duration-700 ease-out hover:-translate-y-2 hover:border-cyan-300/30 hover:bg-slate-900/70 animate-fade-in-up animate-stagger-2 sm:p-7">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {highlights.map((item, index) => (
                        <div
                            key={item.label}
                            className={`rounded-4xl border border-white/10 bg-white/5 p-6 shadow-xl shadow-slate-950/40 backdrop-blur-xl transition duration-700 ease-out hover:-translate-y-2 hover:border-cyan-300/30 hover:bg-slate-900/70 animate-fade-in-up ${staggerClasses[index % staggerClasses.length]}`}
                        >
                            <p className="text-4xl font-bold text-cyan-200">{item.value}</p>
                            <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-400">{item.label}</p>
                        </div>
                    ))}
                </div>

                <div
                    onMouseEnter={() => setIsCarouselPaused(true)}
                    onMouseLeave={() => setIsCarouselPaused(false)}
                    onFocusCapture={() => setIsCarouselPaused(true)}
                    onBlurCapture={handleCarouselBlur}
                >
                    <div className="flex items-center justify-end gap-4 h-full">
                        <p className=" text-xs uppercase tracking-[0.35em] text-slate-400">
                            {activeSlideIndex + 1} / {slides.length}
                        </p>
                    </div>

                    <div className="relative mt-5 overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl shadow-slate-950/40 backdrop-blur-xl transition duration-700 ease-out hover:border-cyan-300/30 hover:bg-slate-900/70">
                        <div
                            className="flex transition-transform duration-700 ease-out"
                            style={{ transform: `translateX(-${activeSlideIndex * 100}%)` }}
                            aria-live="polite"
                        >
                            {slides.map((slide) => (
                                <div key={slide.title} className="w-full shrink-0 p-6 sm:p-7">
                                    <h4 className="text-lg font-semibold text-white">{slide.title}</h4>
                                    <p className="mt-3 text-slate-300 leading-7">{slide.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-linear-to-r from-slate-900/30 to-transparent" />
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-linear-to-l from-slate-900/30 to-transparent" />

                        <button
                            type="button"
                            onClick={goToPreviousSlide}
                            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-slate-100 shadow-lg shadow-slate-950/30 backdrop-blur-xl transition duration-500 ease-out hover:border-cyan-300/30 hover:bg-slate-900/70 focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
                            aria-label="Previous slide"
                        >
                            ‹
                        </button>
                        <button
                            type="button"
                            onClick={goToNextSlide}
                            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-slate-100 shadow-lg shadow-slate-950/30 backdrop-blur-xl transition duration-500 ease-out hover:border-cyan-300/30 hover:bg-slate-900/70 focus:outline-none focus:ring-2 focus:ring-cyan-300/40"
                            aria-label="Next slide"
                        >
                            ›
                        </button>
                    </div>

                    <div className="mt-5 flex justify-center">
                        <div className="flex items-center gap-2">
                            {slides.map((slide, index) => (
                                <button
                                    key={slide.title}
                                    type="button"
                                    onClick={() => goToSlide(index)}
                                    className={`h-2.5 w-2.5 rounded-full transition ${
                                        index === activeSlideIndex ? 'bg-cyan-200' : 'bg-white/20 hover:bg-white/30'
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                    aria-current={index === activeSlideIndex ? 'true' : 'false'}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
