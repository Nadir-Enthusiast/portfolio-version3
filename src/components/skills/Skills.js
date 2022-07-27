import './Skills.css'
import React,{useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Skills() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className='skills' id='skills'>
        <div className="wrapper">
            <video autoPlay muted>
                <source src='./galaxy.mp4' type='video/mp4' />
            </video>
        </div>
        <div className="txw">
          <h1 className='sk-title'>Skills</h1>
        </div>
        <Carousel interval='3000' className='carousel' style={{height: '53vh', width: '89vh', margin: '0 auto 3.2vh auto'}} activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item className='item'>        
                <h1>Software Developer</h1>
                <div className="skill">
                  <h2 className='del0'>Unit Testing </h2>
                </div>
                <div className="skill">
                  <h2 className='del1'>Python</h2>
                </div>
                <div className="skill">
                  <h2 className='del2'>Data Visualisation (D3)</h2>
                </div>
                <div className="skill">
                  <h2 className='del3'>Bootstrap</h2>
                </div>
            </Carousel.Item>
            <Carousel.Item className='item'>         
                <h1>Front End Developer</h1>
                <div className="skill">
                  <h2 className='del0'>React</h2>
                </div>
                <div className="skill">
                  <h2 className='del1'>JavaScript, HTML / CSS</h2>
                </div>
                <div className="skill">
                  <h2 className='del2'>Anime</h2>
                </div>
                <div className="skill">
                  <h2 className='del3'>Bootstrap, Material, Tailwind, jQuery</h2>
                </div>
            </Carousel.Item>
            <Carousel.Item className='item'>        
                <h1>Back End Developer</h1>
                <div className="skill">
                  <h2 className='del0'>Node, Express</h2>
                </div>
                <div className="skill">
                  <h2 className='del1'>Firebase, MongoDB</h2>
                </div>
                <div className="skill">
                  <h2 className='del2'>NoSQL</h2>
                </div>
                <div className="skill">
                  <h2 className='del3'>REST APIs</h2>
                </div>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default Skills