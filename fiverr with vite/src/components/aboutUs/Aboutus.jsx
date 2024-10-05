import React from 'react'
import './Aboutus.scss'

const Aboutus = () => {
  return (
    <div className='containers'>
      <h1>A whole world of freelance talent at your fingertips</h1>

      <div className='AboutUscards'>
        <div className='AboutUscard'>
          <di className='AboutUsicons'>
          <i className="fa-solid fa-list"></i>
          </di>
          <h2>Over 700 categories</h2>
          <h3>
          Get results from skilled freelancers from all over the world, for every task, at any price point.
          </h3>
        </div>
      </div>

      <div className='AboutUscards'>
        <div className='AboutUscard'>
          <di className='AboutUsicons'>
          <i className="fa-regular fa-handshake"></i>
          </di>
          <h2>Clear, transparent pricing</h2>
          <h3>
          Pay per project or by the hour (Pro). Payments only get released when you approve.
          </h3>
        </div>
      </div>

      <div className='AboutUscards'>
        <div className='AboutUscard'>
          <di className='AboutUsicons'>
          <i className="fa-solid fa-cloud-bolt"></i>
          </di>
          <h2>Quality work done faster</h2>
          <h3>
          Filter to find the right freelancers quickly and get great work delivered in no time, every time.
          </h3>
        </div>
      </div>

      <div className='AboutUscards'>
        <div className='AboutUscard'>
          <di className='AboutUsicons'>
          <i className="fa-solid fa-dharmachakra"></i>
          </di>
          <h2>24/7 award-winning support</h2>
          <h3>
          Chat with our team to get your questions answered or resolve any issues with your orders.
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Aboutus
