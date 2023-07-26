import React from 'react'
import { Link } from 'react-router-dom'
import './gameCard.css'

const GameCard = ({data}) => {
  return (
    <div className='gameCard'>
  <Link to={data?.source} className='gameCard__link'>
  <div className="gameCard__image">
    <img src={data?.imageURL} alt="" className="gameCard__image"/>
  </div>
  <span className="game__cardTitle">{data?.title}</span>
  </Link>
    </div>
  )
}

export default GameCard