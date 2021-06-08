import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './CoinDetail.css'
import CoinChart from '../CoinChart/CoinChart'

const CoinDetail = () => {
  const { coinId } = useParams()
  const [ coinData, setCoinData] = useState([])
  const [ isDone, setIsDone ] = useState(false)

  useEffect(() => {
    fetchCoinData().then((res) => {
      setIsDone(false)
      setCoinData(res.data)
      console.log(res.data)
      setIsDone(true)
    })

    const coinDataTimer = setInterval(() => {
      fetchCoinData.then((res) => {
        setCoinData(res.data)
      })
    }, 1000 * 600)

    return () => {
      clearInterval(coinDataTimer)
    }
  }, [])

  const fetchCoinData = async () => {
    let coinDataResult = await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}`)
    return coinDataResult
  }

  return (
    <div>
      {
        isDone ? 
        <section class="main-coin-detail">
          <article className="coin-detail-banner">
            <h2>{coinData.name}</h2>
          </article>

          

          <article className="coin-detail-content">
            <div className="navigation">
              <p><b>Cryptocurrencies </b> &gt; <b>Coins</b> &gt; {coinData.name}</p>
            </div>

            <div className="navigation-back">
              <a href="/#Trade"><button>Back</button></a>
            </div>

            <div className="coin-detail-description">
              <article className="desc-first">
                <img src={coinData.image.large} />
              </article>

              <article className="desc-second">
                <h3>Description About <span>{coinData.name}</span></h3>
                <p>{coinData.description.en.slice(0,800)}...</p>
              </article>
            </div>

            <div class="coin-detail-table">
              <h2>Key Metrics</h2>

              <article className="first-row table-row">
                <div>
                  <p>Block Time</p>
                  <h3>{coinData.block_time_in_minutes}</h3>
                </div>

                <div>
                  <p>Symbol</p>
                  <h3>{coinData.symbol}</h3>
                </div>

                <div>
                  <p>Coingecko Rank</p>
                  <h3>{coinData.coingecko_rank}</h3>
                </div>

                <div>
                  <p>Coingecko Score</p>
                  <h3>{Math.floor(coinData.coingecko_score)}</h3>
                </div>

                <div>
                  <p>Community Score</p>
                  <h3>{coinData.community_score}</h3>
                </div>
              </article>

              <article className="second-row table-row">
                <div>
                  <p>Closed Issues</p>
                  <h3>{coinData.developer_data.closed_issues}</h3>
                </div>

                <div>
                  <p>Pull Request Merged</p>
                  <h3>{coinData.developer_data.pull_requests_merged}</h3>
                </div>

                <div>
                  <p>Stars</p>
                  <h3>{coinData.developer_data.stars}</h3>
                </div>

                <div>
                  <p>Subscribers</p>
                  <h3>{coinData.developer_data.subscribers}</h3>
                </div>

                <div>
                  <p>Total Issues</p>
                  <h3>{coinData.developer_data.total_issues}</h3>
                </div>
              </article>

              <article className="third-row table-row">
                <div>
                  <p>Liquidity Score</p>
                  <h3>{coinData.liquidity_score}</h3>
                </div>

                <div>
                  <p>Votes Up </p>
                  <h3>{coinData.sentiment_votes_up_percentage}</h3>
                </div>

                <div>
                  <p>Votes Down</p>
                  <h3>{coinData.sentiment_votes_down_percentage}</h3>
                </div>

                <div>
                  <p>Genesis Data</p>
                  <h3>{coinData.genesis_date}</h3>
                </div>

                <div>
                  <p>Hashing Algorithm</p>
                  <h3>{coinData.hashing_algorithm}</h3>
                </div>
              </article>
            </div>

          </article>

          

          <article class="coin-detail-chart">
            <div className="navigation-back">
              <a href="/#Trade"><button>Back</button></a>
          </div>
            <h4>Previous 10 day chart of <span>{coinData.name}</span></h4>
            <CoinChart />
          </article>

        </section>
        : <p className="loading-data">Loading Coin Data...</p>
      }
    </div>
  )
}

export default CoinDetail
