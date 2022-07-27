import "./Projects.css"
import React from 'react'
import pic1 from './project3.jpg'
import pic2 from './project2.jpg'
import pic3 from './project1.jpg'
import gh from './github.svg'
import app from './web.svg'

function Projects() {
  return (
    <div className="projects" id="projects"> 

        {/* Background */}
        <div className="project-background">
            <video autoPlay muted>
                <source src="./vid.mp4" type="video/mp4" />
            </video>
        </div>

        {/* Title container */}
        <div className="title-con">
            <h1>Projects</h1>
        </div>

        {/* Projects */}
        <div className="project-body">
            <div className="projects-content">
              <div class="project-item">
                <div id="ecp" className="overlay">
                  <a target="_blank" rel="noreferrer" href="https://e-commerce1-ae557.web.app">
                    <img src={app} alt='' />
                    <p>Demo</p>
                  </a>
                  <a target="_blank" rel="noreferrer" href="https://github.com/Nadir-Enthusiast/e-commerce">
                    <img src={gh} alt='' />
                    <p>GitHub</p>
                  </a>
                </div>
                <img
                  src={pic1}
                  alt=""
                  style={{width: '40vh', height: 'fit-content', zIndex: '10'}}
                />
                <p>E-commerce</p>
              </div>
              <div class="project-item">
                <div id="sma" className="overlay">
                  <a target="_blank" rel="noreferrer" href="https://social-media-app-by-nadir.web.app">
                    <img src={app} alt='' />
                    <p>Demo</p>
                  </a>
                  <a target="_blank" rel="noreferrer" href="https://github.com/Nadir-Enthusiast/social-media-app1">
                    <img src={gh} alt='' />
                    <p>GitHub</p>
                  </a>
                </div>
                <img
                  src={pic2}
                  alt=""
                  style={{width: '40vh', height: 'fit-content', zIndex: '10'}}
                />
                <p>Social Media App</p>
              </div>
              <div class="project-item">
                <div id="gca" className="overlay">
                  <a target="_blank" rel="noreferrer" href="https://group-chat-simple.web.app">
                    <img src={app} alt='' />
                    <p>Demo</p>
                  </a>
                  <a target="_blank" rel="noreferrer" href="https://github.com/Nadir-Enthusiast/Chat-app">
                    <img src={gh} alt='' />
                    <p>GitHub</p>
                  </a>
                </div>
                <img
                  src={pic3}
                  alt=""
                  style={{width: '40vh', height: 'fit-content', zIndex: '10'}}
                />
                <p>Group Chat</p>
              </div>
            </div>
        </div>
        
    </div>
  )
}

export default Projects