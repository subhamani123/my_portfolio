import websiteImg1 from '../assets/powerbi.png';
import websiteImg2 from '../assets/course-management.png';
import websiteImg3 from '../assets/personnel-management.jpg';

export default function Projects() {

    const config = {
        projects : [
            {
                image: websiteImg1,
                description: 'Streaming Insights Analysis. Built with PowerBi.Designed an interactive dashboard analyzing album performance, and platform engagement using data modeling and visualization techniques',
                link: 'https://github.com/jvlcode/jvlcart',
                showLink: false // This flag will be removed for simplicity
            },
            {
                image: websiteImg2,
                description: 'Course Management System, Built with Node JS & MongoDB',
                link: 'https://github.com/subhamani123/course_management_backend_nodejs',
                showLink: true
            },
            {
                image: websiteImg3,
                description: 'Software Personnel Management System. Built with PHP',
                link: 'https://github.com/subhamani123/software_personnel_management_system',
                showLink: true
            }
        ]
    }

    return (
        <section id='projects' className="flex flex-col py-20 px-5 justify-center bg-secondary text-white">
            <div className="w-full">
                <div className="flex flex-col px-10 py-5">
                    <h1 className="text-4xl border-b-4 border-primary mb-5 w-[150px] font-bold">Projects</h1>
                    <p>These are some of my best projects. I have built these with JavaScript, Node.js, Express.js, MongoDB, PHP, and Power BI. Check them out.</p>
                </div>
            </div>
            <div className="w-full">
                <div className='flex flex-col md:flex-row px-10 gap-5'>
                    {config.projects.map((project,index) => (
                        <div key={index} className='relative'>
                            <img className='h-[200px] w-[500px]' src={project.image} />
                            <div className='project-desc'>
                                <p className='text-center px-5 py-5'>{project.description}</p>
                                {/* Remove the View Project button for the first project */}
                                {project.showLink && (
                                    <div className='flex justify-center'>
                                        <a className='btn' target='_blank'  href={project.link}>View Project</a>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
