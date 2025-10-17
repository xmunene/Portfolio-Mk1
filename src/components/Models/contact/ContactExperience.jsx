import React from 'react'

const ContactExperience = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <video 
        className="w-full h-full object-cover"
        src="images/screen.mp4"
        autoPlay
        loop
        muted
        playsInline
      >
        Your browser does not support the video tag.
      </video>    </div>
    )
}

export default ContactExperience