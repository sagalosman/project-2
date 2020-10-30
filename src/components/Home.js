import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
  const [rateData, updateRate] = useState([])

  useEffect(() => {
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(resp => {
        console.log(resp.data)
        resp.data.bpi.GBP.rate_float = resp.data.bpi.GBP.rate_float.toFixed(2)
        updateRate(resp.data)
        rateData.bpi.GBP.rate_float
      })
  }, [])

  return <div className="hero is-primary  is-fullheight-with-navbar" >
    <div className="hero-body" className="middle-2"> 
      <div className="container has-text-centered">
        <h1 className="title" >What's the value of Bitcoin right now?</h1>
      </div>
      <div className="title is-4" className="h2">
        <h2>One Bitcoin is worth <strong>£{ (rateData.bpi ? rateData.bpi.GBP.rate_float : '' ) }</strong></h2>
      </div>
      <div className="buttons-2" >
        <Link to="/forex"><button>
          See how it compares to other currencies!
        </button>
        </Link>
      </div>
    </div>
  </div>
}

export default Home