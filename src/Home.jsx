import React from 'react'
import { Header } from './components/Header'
import { NewsItem } from './components/NewsItem'

export const Home = () => {
  return (
    <>
        <Header/>
        <br/>
        <div>Home</div>
        <h1 className="App">Welcome team!</h1>
        <small><h1 className="App">Magic Time!</h1></small>
        <h2>༼つಠ益ಠ༽つ ─=≡ΣO))</h2>

        <hr/>

        <NewsItem />
    </>
  )
}
