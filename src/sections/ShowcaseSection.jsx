import React from 'react';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import TitleHeader from '../components/TitleHeader.jsx'

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef = useRef(null);
    const project1Ref = useRef(null);
    const project2Ref = useRef(null);
    const project3Ref = useRef(null);

    useGSAP(() => {
        const projects = [project1Ref.current, project2Ref.current, project3Ref.current];
        projects.forEach((card, index) => {
            gsap.fromTo(
                card,
                {
                    y: 50, opacity: 0 
                },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.3 * (index + 1),
                    scrollTrigger:{
                        trigger: card,
                        start: 'top bottom-=100',
    
                    }
                }
            )
        })
        gsap.fromTo(
            sectionRef.current, 
            { opacity: 0 },
            { opacity: 1, duration: 1.5 })
    }, []);

    return(
        <section id="projects" ref={sectionRef} className="app-showcase">
            <div className="w-full">
                <div className="mb-16">
                    <TitleHeader 
                        title="My Projects" 
                        sub="👨🏾‍💻 Featured work and creations"
                    />
                </div>
                <div className="showcaselayout">
                    {/* Left side */}
                    <div className="first-project-wrapper" ref={project1Ref}>
                        <div className="image-wrapper">
                        <img src="/images/project1.png" alt="ticketsawa" />
                        </div>
                        <div className="text-content">
                        <h2> Service-as-a-Service Events and Tickets Marketplace called TicketSawa</h2>
                        <p className="text-white-50 md:text-xl">
                            A web-app built with Next.JS, TailwindCSS, and Convex for a fast, user-friendly experience.
                        </p>
                        <a href ="https://ticketsawa.vercel.app" target="_blank" rel="noopener noreferrer"> 
                                <span className="text-blue-50">View Project</span>
                        </a>
                        <div className="text-white-50 md:text-xl">
                        </div>
                        </div> 
                    </div>

                    {/* Right Side */}
                    <div className="project-list-wrapper overflow">
                        <div className="project" ref={project2Ref}>
                            <div className="image-wrapper bg-[#e6dbff]">
                                <img src="/images/project2.png" alt="3D Portfolio" />
                            </div>
                            <h2>3D Portfolio with Three.js</h2>
                        </div>
                        <div className="project" ref={project3Ref}>
                            <div className="image-wrapper bg-[#dbecff]">
                                <img src="/images/project3.png" alt="Figma Design" />
                            </div>
                            <h2>Figma Website Design</h2>
                            <p>
                                <a href ="https://www.figma.com/proto/4S1Js8KBCD9gFIaYuXZmAc/CRITIQUE?node-id=68-56&t=30yL5Yk2ziHucBfL-0&scaling=contain&content-scaling=fixed&page-id=0%3A1" target="_blank" rel="noopener noreferrer">
                                    <span className="text-blue-50"> View Design</span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ShowcaseSection