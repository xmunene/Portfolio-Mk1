import React from 'react';

const ShowcaseSection = () => {
    return(
        <div id="work" className="app-showcase">
            <div className="w-full">
                <div className="showcaselayout">
                    {/* Left side */}
                    <div className="first-project-wrapper">
                        <div className="image-wrapper">
                        <img src="/images/project1.png" alt="ticketsawa" />
                        </div>
                        <div className="text-content">
                        <h2> Service-as-a-Service Events and Tickets Marketplace called TicketSawa</h2>
                        <p className="text-white-50 md:text-xl">
                            A web-app built with Next.JS, TailwindCSS, and Convex for a fast, user-friendly experience. 
                        </p>
                        </div> 
                    </div>

                    {/* Right Side */}
                    <div className="project-list-wrapper overflow">
                        <div className="project">
                            <div className="image-wrapper bg-[#e6dbff]">
                                <img src="/images/project2.png" alt="3D Portfolio" />
                            </div>
                            <h2>3D Portfolio with Three.JS</h2>
                        </div>
                        <div className="project">
                            <div className="image-wrapper bg-[#dbecff]">
                                <img src="/images/project4.png" alt="Figma Design" />
                            </div>
                            <h2>Figma Website Design</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ShowcaseSection