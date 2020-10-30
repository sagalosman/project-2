import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import Music from './Music'  // Chrome won't play music onLoad anymore. Add a button?


const Forex = () => {
  const [forexRates, updateForex] = useState([])
  const [oldForex, historicForex] = useState([])

  useEffect(() => {
    axios.get('https://blockchain.info/ticker')
      .then(resp => {
        console.log(resp.data)
        updateForex(resp.data)
      })
  }, [])

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=gbp&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=30d')
      .then(resp => {
        console.log(resp.data)
        historicForex(resp.data)
      })
  }, [])

  return <div className="hero is-danger is-fullheight-with-navbar" >
    <div className="hero-body" className="middle-2">
      <div className="container has-text-centered" >
        <h1 className="title">How does Bitcoin compare to other currencies?</h1>
      </div>
    </div>
    <div className="title is-4" className="box-1">
      <ul>One Bitcoin = <span className="span1">£{forexRates.GBP ? forexRates.GBP.last : ''}</span></ul>
    </div>
    <div className="title is-4" className="box-1">
      <ul>Bitcoin's value against the British pound has increased by <span className="span1">{oldForex.price_change_percentage_30d_in_currency ? oldForex.price_change_percentage_30d_in_currency.last : ''}%</span> in the past 30 days</ul>
    </div>
    <div className="title is-4" className="box-1">
      <ul>One Bitcoin = <span className="span1">CND${forexRates.CAD ? forexRates.CAD.last : ''}</span></ul>
    </div>
    <div className="title is-4" className="box-1">
      <ul>One Bitcoin = <span className="span1" >US${forexRates.USD ? forexRates.USD.last : ''}</span></ul>
    </div>
    <div className="title is-4" className="box-1">
      <ul>One Bitcoin = <span className="span1" >€{forexRates.EUR ? forexRates.EUR.last : ''}</span></ul>
    </div>
    <Music />
  </div>
}

export default Forex