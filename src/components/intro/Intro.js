import './Intro.css'
import React from 'react'
import spaceship from './spaceship.svg'
import sun from './sun.svg'
import galaxy from './galaxy.svg'
import bhole from './bhole.svg'
import star from './star.svg'

function Intro() {
  return (
    <div className='intro'>
      <div className="background">
        <img className='star' id='f' src={star} alt='' />
        <img className='star' id='s' src={star} alt='' />
        <img className='star' id='t' src={star} alt='' />
        <img className='star' id='fr' src={star} alt='' />
        <img className='star' id='fv' src={star} alt='' />
        <img className='bhole' src={bhole} alt='' />
        <img className='galaxy' src={galaxy} alt='' />
        <img className='sun' src={sun} alt='' />
        <img className='space-ship' src={spaceship} alt='' />
      </div>
    </div>
  )
}

export default Intro