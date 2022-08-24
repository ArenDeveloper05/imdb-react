import React from 'react'
import {BsPlayCircleFill} from 'react-icons/bs'
import './Card.css'

const Card = ({data}) => {

  return (

    <div className='card' >
        <img className='image' src={data.image} alt={data.title} />
        <div className='play'><a href="/"><BsPlayCircleFill className='play-icon'/></a></div>
        <p className='film-title'>{data.fullTitle||data.title}</p>
        <p className='desc'>{data.crew||data.description}</p>
    </div>
)
}

export default Card