import React from 'react'
import './home.css'
import { games } from '../../data/data'
import { GameCard } from '../../components/index'

const Home = () => {
  return (
    <div className='home'>
       <div className="home__header">
        <h3>My Games</h3>
        </div> 
        <div className="home__gamesContainer">
            {
                games?.map((game, index) => (
                    <GameCard data={game} key={index}/>
                ))
            }
        </div>
    </div>
  )
}

export default Home