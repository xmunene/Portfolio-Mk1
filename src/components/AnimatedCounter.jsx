import React from 'react'
import TitleHeader from './TitleHeader.jsx'
import { aboutItems } from '../constants/index.js'

const AboutMe = () => {

  return (
    <div id="about" className="padding-x-lg xl:mt-0 mt-32">
      <div className="mb-16">
        <TitleHeader 
          title="About Me" 
          sub="🤝🏾Get to know me"
        />
      </div>
      
      <div className="mx-auto grid-4-cols">
        {aboutItems.map((item, index) => (
          <div 
            key={index} 
            className="bg-zinc-900 rounded-lg p-8 flex flex-col justify-center hover:bg-zinc-800 transition-all duration-300 group"
          >
            <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <h3 className="text-white text-xl font-semibold mb-3 text-center">
              {item.title}
            </h3>
            <p className="text-white-50 text-sm leading-relaxed text-center">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutMe