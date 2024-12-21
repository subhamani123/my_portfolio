import ResumeImg from '../assets/resume.webp';

export default function Resume () {
    const config = {
        link: 'https://docs.google.com/document/d/1spvog-gnveHd-PhCGKMngP8bzdySmV8HGehzi7PDPvs/edit?tab=t.0'
    }

    return <section id='resume' className='flex flex-col md:flex-row bg-primary px-5'>
        <div className='py-5 md:w-1/2 flex justify-center md:justify-end'>
            <img className='w-[300px]' src={ResumeImg} />
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
                <h1 className='text-4xl border-b-4 border-secondary mb-5 w-[140px] font-bold'>Resume</h1>
                <p className='pb-5'>You can view my resume <a className='btn' href={config.link} download> Download</a></p>
            </div>
        </div>
    </section>
}