import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { Line } from 'react-chartjs-2'
import './CoinChart.css'


  const priceTimes = []
  const priceValues = []

  const coinChartData = {
    labels: priceTimes,
    datasets: [
      {
        label: "PRICE USD",
        data: priceValues,
        fill: true,
        backgroundColor: 'rgb(207, 233, 207)',
        borderColor: 'green',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };


const CoinChart = () => {
  const { coinId } = useParams();
  const chartApi = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=10&interval=50m`;

  const [ coinChart, setCoinChart ] = useState([])
  const [ isCoinLoading, setIsCoinLoading ] = useState(false)

    const fetchCoinChart = async () => {
    let chartResult = await axios.get(chartApi)
    return chartResult
  }

  useEffect(() => {
    fetchCoinChart().then((res) => {
      setIsCoinLoading(false)
      setCoinChart(res.data)
      console.log(res.data)
      for(const item of res.data.prices){
        let setTime = new Date(item[0])
        priceTimes.push(setTime.toString().substr(0,10))
        priceValues.push(parseInt(item[1], 10))
      }
      setIsCoinLoading(true)
    })

    const chartTimer = setInterval(() => {
      fetchCoinChart().then((res) => {
        setCoinChart(res.data)
        for(const item of res.data.prices){
          let setTime = new Date(item[0])
          priceTimes.push(setTime.toString().substr(0,10))
          priceValues.push(item[1])
        }
      })
    }, 1000 * 600)
    console.log(priceTimes)
    return () => {
      clearInterval(chartTimer)
    }
  }, [])

  return (
    <div>
      {
        isCoinLoading ?
        <Line data={coinChartData} options={options} />
        : "Loading Chart Data...."
      }
    </div>
  )
}

export default CoinChart
