import './App.css'


export default function Hero() {
    return (
        <>
            <div className='scroll-mt-16 mt-5 flex flex-col md:flex-row'>
                <section className='m-5 p-6 pl-10 flex-1'>
                    <h1 className='text-4xl mb-4'>Hello, I'm
                        <br />
                        sanantheswharan</h1>
                    <p className='text-xl mb-4'>Computer Science Engineering Student | Aspiring Web Developer</p>
                    <p className='text-lg'>I am  2nd-year CSE student at Muthayammal Engineering College. I build responsive web applications using React and Tailwind CSS and practice Data Structures and Algorithms to improve my problem Solving skills. I am currently looking for opportunities to learn, buid real-world projects, and grow as a developer.</p>
                </section>
                <section className='flex md:flex-1 justify-center items-center'>
                    <img src=""  className='rounded h-100 w-100'/>
                </section>
            </div>
        </>
    )
}