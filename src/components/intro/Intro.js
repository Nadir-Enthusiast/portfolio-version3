import './Intro.css'
import React from 'react'
import spaceship from './spaceship.svg'
import sun from './sun.svg'
import galaxy from './galaxy.svg'
import bhole from './bhole.svg'
import star from './star.svg'
import earth from './earth.svg'
import str from './str.svg'

import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

function Intro() {

  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(120 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Full Stack Developer", "Software Developer" ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(110);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <div className='intro'>
      <div className="background">
        <img className='star' id='f' src={star} alt='' />
        <img className='star' id='s' src={star} alt='' />
        <img className='star' id='t' src={star} alt='' />
        <img className='star' id='fr' src={star} alt='' />
        <img className='star' id='fv' src={star} alt='' />
        <img className='str' id='str1' src={str} alt='' />
        <img className='str' id='str2' src={str} alt='' />
        <img className='str' id='str3' src={str} alt='' />
        <img className='str' id='str4' src={str} alt='' />
        <img className='str' id='str5' src={str} alt='' />
        <img className='bhole' src={bhole} alt='' />
        <img className='galaxy' src={galaxy} alt='' />
        <img className='earth' src={earth} alt='' />
        <img className='space-ship floating' src={spaceship} alt='' />
        <img className='sun' src={sun} alt='' />
      </div>
      <div className="title">
        <TrackVisibility>
          {({ isVisible }) =>
          <div className='title-text'>
            <h1>{`Hi! I'm Nadir,`} <span className="txt-rotate" dataPeriod="500" data-rotate='[ "Web Developer", "Full Stack Developer", "Software Developer" ]'><span className="wrap">{text}</span></span></h1>
            <p>I have experience in building web application with React, Front-End libraries, Express, Node. Scroll down to learn more about me.</p>
          </div>}
        </TrackVisibility>
      </div>
    </div>
  )
}

export default Intro