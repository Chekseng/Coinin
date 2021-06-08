import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Coin.css'

const Coin = ({ coins, loading }) => {
  const [ search, setSearch ] = useState('')

  if(loading){
    return <h1>Loading....</h1>
  }

  const filteredCoins = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLocaleLowerCase()))

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }
  return (
    <section className='coin-container'>
      <article className="coin-search">
        <form>
          <input type="search" placeholder="Search Cryptocurrency" onChange={handleSearch} />
        </form>
      </article>

      <article class="coin-data-heading">
        <div>
          <p>Image</p>
          <p>Name</p>
          <p>Symbol</p>
        </div>

        <div>
          <p>Current Price</p>
          <p>Market Cap</p>
          <p>% Price Change</p>
          <p>Total Volume</p>
        </div>
      </article>

      <article className="coin-data">
        {
          filteredCoins.map((filteredCoin) => (
            <Link to={`/${filteredCoin.id}`} className="coin-data-link" key={filteredCoin.id}>
              <div className="coin-left">
                <img src={filteredCoin.image} alt={filteredCoin.name} />
                <p className="coin-name">{filteredCoin.name}</p>
                <p className="coin-symbol">{filteredCoin.symbol}</p>
              </div>

              <div className="coin-right">
                <p className="coin-price">{filteredCoin.current_price}</p>
                <p className="coin-market-cap">{filteredCoin.market_cap}</p>
                {
                  filteredCoin.price_change_percentage_24h < 0 ? (
                    <p className="coin-percentage red">{filteredCoin.price_change_percentage_24h.toFixed(2)}%</p>
                  ) : (
                    <p className="coin-percentage green">{filteredCoin.price_change_percentage_24h.toFixed(2)}%</p>
                  )
                }
                <p className="coin-total-volume">
                  ${filteredCoin.total_volume.toLocaleString()}
                </p>
              </div>
            </Link>
          ))
        }
      </article>

    </section>
  )
}

export default Coin
