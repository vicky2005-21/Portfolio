"use client";

import { assets } from "@/constant/assets";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsDribbble, BsGithub } from "react-icons/bs";
import { IoMdOpen } from "react-icons/io";
import { useInView } from "react-intersection-observer";


const categories = [
    {
        slug: 'app',
        name: 'App',
    },
    {
        slug: 'design',
        name: 'Design',
    }
];

const projectTypes = [
    {
        slug: 'real-project',
        name: 'Real Project',
    },
    {
        slug: 'real-project',
        name: 'Real Project',
    }
]

const initialProjects = [
    {
        slug: 'crypto-website',
        title: 'Crypto-Website',
        image: assets.home.myLatestProject.projects.portfolioWebsite,
        repositoryUrl: "https://github.com/vicky2005-21/Crypto-Web",
        demoUrl: "https://github.com/vicky2005-21/Crypto-Web",
        summary: 'The live website that showcase the crypto data.',
        techStacks: [
            {
                name: 'React JS',
                imageUrl: 'https://img.icons8.com/?size=512&id=123603&format=png',
                WebUrl: 'https://reactjs.org/'
            },
        ],
        projectType: projectTypes[0],
        category: categories[0]
    },
    {
        slug: 'Treasure-of-coding',
        title: 'Treasure-of-coding',
        image: assets.home.myLatestProject.projects.hi,
        repositoryUrl: "https://github.com/vicky2005-21/Treasure-Of-Coding",
        demoUrl: "https://github.com/vicky2005-21/Treasure-Of-Coding",
        summary: 'This project aims to help programming enthusiasts learn various programming languages.',
        techStacks: [
            {
                name: 'GitHub',
                imageUrl: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',
                WebUrl: 'https://github.com'
            },
        ],
        projectType: projectTypes[0],
        category: categories[0]
    },
    {
        slug: 'gaming-app',
        title: 'Gaming-App',
        image: assets.home.myLatestProject.projects.homeScreen,
        repositoryUrl: "https://github.com/vicky2005-21/Gaming-App",
        demoUrl: "https://github.com/vicky2005-21/Gaming-App",
        summary: 'This project helps to gain mental health stability by playing small mind games.',
        techStacks: [
            {
                name: 'Type-Script',
                imageUrl: 'https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_original_logo_icon_146317.png',
                WebUrl: 'https://www.typescriptlang.org/'
            },
            {
                name: 'Expo go App',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYHI7VU9C1q7XVbwuO7cDe_o8pIO_vCvGdIA&usqp=CAU',
                WebUrl: 'https://expo.dev/client'
            },
            
        ],
        projectType: projectTypes[0],
        category: categories[0]
    },
    {
        slug: 'CollageManagement',
        title: 'Collage Management',
        image: assets.home.myLatestProject.projects.collage,
        repositoryUrl: "https://github.com/vicky2005-21/CollageManagement",
        demoUrl: "https://github.com/vicky2005-21/CollageManagement",
        summary: 'The Project Collage Management system is used for exchanging words, assignments, and marks between professors and students.',
        techStacks: [
            {
                name: 'Django',
                imageUrl: 'https://e7.pngegg.com/pngimages/10/113/png-clipart-django-web-development-web-framework-python-software-framework-django-text-trademark-thumbnail.png',
                WebUrl: 'https://www.djangoproject.com/'
            },
            {
                name: 'Python',
                imageUrl: 'https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png',
                WebUrl: 'https://www.python.org/'
            },
            {
                name: 'HTML&CSS',
                imageUrl: 'https://w7.pngwing.com/pngs/175/261/png-transparent-web-development-html-css-design-and-build-web-sites-cascading-style-sheets-world-wide-web-blue-web-design-text-thumbnail.png',
                WebUrl: 'https://html.com/'
            },
        ],
        projectType: projectTypes[0],
        category: categories[0]
    },
    {
        slug: '2d-game',
        title: '2D Game(Andriod)',
        image: assets.home.myLatestProject.projects.game,
        repositoryUrl: "https://drive.google.com/drive/folders/1ghCgD5ruaYf6E_br8--hg8Pt1AA-pJmo?usp=sharing",
        demoUrl: "https://drive.google.com/drive/folders/1ghCgD5ruaYf6E_br8--hg8Pt1AA-pJmo?usp=sharing",
        summary: 'It is a unity 2D mobile game(JUST FOR FUN).',
        techStacks: [
            {
                name: 'Unity-2D',
                imageUrl: 'https://w7.pngwing.com/pngs/911/748/png-transparent-unity-technologies-adobe-flash-computer-software-technology-unity-emblem-electronics-company-thumbnail.png',
                WebUrl: 'https://unity.com/'
            },
            {
                name: 'C Sharp',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png',
                WebUrl: 'https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/#:~:text=C%23%20is%20an%20object%2Doriented,create%20and%20use%20software%20components.'
            },
        ],
        projectType: projectTypes[0],
        category: categories[0]
    },
    {
        slug: 'SIMBA-UI',
        title: 'SIMBA UI',
        image: assets.home.myLatestProject.projects.simba,
        repositoryUrl: "https://github.com/vicky2005-21/SIMBA-UI",
        demoUrl: "https://github.com/vicky2005-21/SIMBA-UI",
        summary: 'The SIMBA project is related to physics simulations.',
        techStacks: [
            {
                name: 'Unity-2D',
                imageUrl: 'https://w7.pngwing.com/pngs/911/748/png-transparent-unity-technologies-adobe-flash-computer-software-technology-unity-emblem-electronics-company-thumbnail.png',
                WebUrl: 'https://unity.com/'
            },
            {
                name: 'C Sharp',
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/4f/Csharp_Logo.png',
                WebUrl: 'https://learn.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/#:~:text=C%23%20is%20an%20object%2Doriented,create%20and%20use%20software%20components.'
            },
            {
                name: 'Figma',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHwTYl5xo_PMhjbjKDsXXsB8seN3tdinkoMw&usqp=CAU',
                WebUrl: 'https://www.figma.com/'
            },
        ],
        projectType: projectTypes[0],
        category: categories[0]
    },
    {
        slug: 'admin-panel-design',
        title: 'Admin-Panel for Management',
        image: assets.home.myLatestProject.projects.figma,
        repositoryUrl: "https://www.figma.com/file/HSxf8zxg5UIDMWwCaleqpN/GTA?type=design&mode=design&t=lYDzpOCEKYA2oWuU-0",
        demoUrl: "https://www.figma.com/proto/HSxf8zxg5UIDMWwCaleqpN/GTA?type=design&t=lYDzpOCEKYA2oWuU-0&scaling=min-zoom&page-id=0%3A1&node-id=0-1",
        summary: 'This is for a club maintaining their admin panel for updating and uploading data.',
        techStacks: [
            {
                name: 'Figma',
                imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHwTYl5xo_PMhjbjKDsXXsB8seN3tdinkoMw&usqp=CAU',
                WebUrl: 'https://www.figma.com/'
            },
        ],
        projectType: projectTypes[1],
        category: categories[1]
    },
]

export default function Project() {
    const [projects, setProjects] = useState(initialProjects);
    const [filteredProjects, setFilteredProjects] = useState(initialProjects);

    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
    });

    return (
        <section ref={ref} className='safe-x-padding mt-[38px] overflow-y-hidden lg:min-h-[1000px]'>
            <div className='text-center'>
                <motion.h2 initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.2 }} className='mb-6 text-5xl font-extrabold lg:text-6xl font-montserrat gradient-text'>Explore my Project&apos;s</motion.h2>
                <motion.p initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.4 }} className='font-medium text-xl lg:text-2xl text-accent max-w-[730px] mx-auto'>Take a look at something I&apos;ve worked.</motion.p>
            </div>
            <div className='my-[50px] h-full'>
                <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.4 }} className="grid grid-flow-row grid-cols-4 gap-6 md:grid-cols-8 xl:grid-cols-12">
                    {filteredProjects.map((project, index) => (
                        <div key={index} className="col-span-4 shadow-md hover:shadow-2xl hover:scale-[1.01] rounded-2xl transition-all duration-500 ease-in-out">
                            <Link
                                className="w-full h-full bg-white"
                                href={`/project/${project.slug}`}
                                target="_blank"
                            >
                                <div className="relative overflow-hidden max-h-48 rounded-tl-2xl rounded-tr-2xl">
                                    <div className="relative">
                                        <Image className="object-cover" src={project.image} alt={`${project.title} thumbnail`} />
                                        <div className="absolute top-0 right-0 p-2 bg-black z-[1] text-white rounded-bl-2xl text-sm hover:opacity-0 transition-all duration-500 ease-in-out">
                                            {project.projectType.name}
                                        </div>
                                    </div>
                                    <div className="absolute bottom-0 left-0 px-6 py-3">
                                        <div className="flex flex-row flex-wrap gap-x-4">
                                            {project.techStacks.map((techStack, index) => (
                                                <motion.div
                                                    key={index}
                                                    initial={{ opacity: 0 }}
                                                    animate={inView ? { opacity: 1 } : {}}
                                                    transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                                                    className="p-1 bg-white border-[0.5px] border-gray/70 rounded-full hover:cursor-help"
                                                >
                                                    <Image
                                                        src={techStack.imageUrl}
                                                        alt={`${techStack.name} icon`}
                                                        loader={({ src }) => src}
                                                        width={36}
                                                        height={36}
                                                        title={techStack.name}
                                                        unoptimized
                                                    />
                                                </motion.div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 py-4">
                                    <h5 className="mb-2 text-base font-bold line-clamp-1">{project.title}</h5>
                                    <p className="text-sm font-normal line-clamp-2">{project.summary}</p>
                                    <div className="grid grid-flow-col gap-4 mt-4">
                                        {project.demoUrl && (
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    window.open(project.demoUrl, '_blank', 'utm_source=Vicky.my.id&utm_medium=campaign&utm_campaign=portfolio');
                                                }}
                                                className="flex flex-row items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white transition-all duration-200 transform rounded-lg shadow-lg bg-accent hover:gradient-bg line-clamp-1">
                                                <span>
                                                    {project.category.slug === 'design' ?
                                                        "See Prototype"
                                                        :
                                                        "Visit Demo"
                                                    }
                                                </span>
                                                <IoMdOpen />
                                            </button>
                                        )}

                                        {project.repositoryUrl && (
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    window.open(project.repositoryUrl, '_blank', 'utm_source=Vicky.my.id&utm_medium=campaign&utm_campaign=portfolio');
                                                }}
                                                rel="noopener noreferrer"
                                                className="flex flex-row items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white transition-all duration-200 transform rounded-lg shadow-lg bg-accent hover:gradient-bg line-clamp-1"
                                            >
                                                {project.category.slug === 'design' ? (
                                                    <>
                                                        <span>Dribble</span>
                                                        <BsDribbble />
                                                    </>
                                                ) : (
                                                    <>
                                                        <span>Github</span>
                                                        <BsGithub />
                                                    </>
                                                )}
                                            </button>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>

    )
}
