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
                    
                </div>
            </div>
        </div>
    )
}
export default ShowcaseSection