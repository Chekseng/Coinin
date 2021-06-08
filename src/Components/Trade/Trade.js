import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Coin from './Coin/Coin'
import './Trade.css'
import Pagination from './Pagination/Pagination'

const Trade = () => {
  const [ coins, setCoins ] = useState([])
  const [ loading, setLoading ] = useState(false)
  const [search, setSearch ] = useState('')
  const [ currentPage, setCurrentPage ] = useState(1)
  const [ coinsPerPage ] = useState(10)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const res = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      setCoins(res.data)
      // console.log(res.data)
      setLoading(false)
    }
    fetchData();
  }, [])

  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoin = coins.slice(indexOfFirstCoin, indexOfLastCoin)

  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <div className="trade-body" id="Trade">
      <Coin coins={currentCoin} loading={loading} />
      <Pagination coinsPerPage={coinsPerPage} totalCoins={coins.length} paginate={paginate} />
    </div>
  )
}

export default Trade
