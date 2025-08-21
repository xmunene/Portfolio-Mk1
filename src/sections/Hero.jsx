import React from 'react'
import { words } from '../constants/index.js'
import Button from '../components/Button.jsx'
import HeroExperience from '../components/HeroModels/HeroExperience.jsx'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import AnimatedCounter from '../components/AnimatedCounter.jsx'
const Hero = () => {
    useGSAP(() => {
        gsap.fromTo('.hero-text h1', 
            {
                y: 50,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                ease: 'power2.inOut'
            },
        )
    })

  return (
    <section id="hero" className="relative overflow-hidden">
        <div className="absolute top-0 left-0 z-10">
            <img src="/images/bg.png" alt="background"/>
        </div>
        <div className="hero-layout">
            {/*left=hero content */}
            <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
                <div className="flex flex-col gap-7">
                    <div className= "hero-text">
                        <h1>
                            Shaping
                            <span className="slide">
                                <span className="wrapper">
                                    {words.map((word) => (
                                        <span key={word.text} className="flex items-center md:gap-3 gap-1 pb-2">
                                            <img
                                            src={word.imgPath}
                                            alt={word.text}
                                            className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                                            />
                                            <span>{word.text}</span>
                                        </span>
                                    ))}
                                </span>
                            </span>
                        </h1>
                        <h1>into Real Projects</h1>
                        <h1>that Deliver Results</h1>
                    </div>
                    <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                        Hi, I'm Munene, a developer based in Nairobi, Kenya with a passion for code.
                    </p>
                    {/* <Button 
                    className="md:w-80 md:h-16 w-60 h-12"
                    id="button"
                    text="Learn About Me"
                    /> */}
                    <div className="cta-button-wrapper relative z-20 cursor-pointer group mt-3">
                        <button className="
                            relative px-8 py-3 md:px-10 md:py-5 
                            rounded-xl bg-white/10 backdrop-blur-md
                            border border-white/20 
                            text-white font-semibold text-sm md:text-base
                            flex items-center justify-center gap-3
                            overflow-hidden cursor-pointer
                            transition-all duration-500 ease-out
                            hover:scale-105 hover:bg-white/20
                            hover:border-white/40 hover:shadow-2xl
                            hover:shadow-cyan-500/20
                            active:scale-95
                        ">
                            <div className="
                                absolute inset-0 bg-gradient-to-r 
                                from-cyan-500/20 via-blue-500/20 to-purple-500/20
                                opacity-0 group-hover:opacity-100
                                transition-opacity duration-500
                            ">
                            </div>
                            <div className="
                                absolute inset-0 bg-gradient-to-r 
                                from-transparent via-white/10 to-transparent
                                -translate-x-full group-hover:translate-x-full
                                transition-transform duration-1000
                            ">
                            </div>

                            <span className="relative z-10 tracking-wider">
                                LEARN ABOUT ME
                            </span>
                            
                            <svg 
                                className="relative z-10 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                                fill="none" 
                                stroke="currentColor" 
                                viewBox="0 0 24 24"
                            >
                                <path 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round" 
                                    strokeWidth={2} 
                                    d="M8 17l4 4m0 0l4-4m-4 4V3" 
                                />
                            </svg>
                            
                            <div className="
                                absolute inset-0 rounded-xl
                                bg-gradient-to-r from-purple-900 to-purple-800
                                opacity-0 group-hover:opacity-100
                                blur-sm -z-10
                                transition-opacity duration-500
                            "></div>
                        </button>
                    </div>
                </div>
            </header>

            {/*right=3D model */}
            <figure>
                <div className="hero-3d-layout">
                    <HeroExperience />
                </div>
            </figure>
        </div>
        <AnimatedCounter />
    </section>
  )
}

export default Hero