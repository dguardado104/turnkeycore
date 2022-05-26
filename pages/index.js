import Header from '../components/Header'
import Box from '../components/Box'
import { useState } from 'react'
import OrderActivity from '../components/OrderActivity'
import TrackingActivity from '../components/TrackingActivity'
import Notice from '../components/Notice'

export default function Home() {

  const activityTab = e => { 
    let panels = document.querySelectorAll(".panel")
    let buttons = document.querySelectorAll(".panel-link")

    buttons.forEach(el => {
      el.classList.remove("active")
    })

    panels.forEach(el => {
      if(el.classList.contains(e.target.getAttribute('data-target'))){
        el.classList.add("show")
        e.target.classList.add("active")
      }else{
        el.classList.remove("show")
      }
    })
  }


  return (
    <div className='main'>
      <div className="container">
        <Header />
        <div className='m-4'>
          <Notice />
          <Box />
          <div className='mt-4'>
            <div className='mb-4'>
              <span className='font-bold text-lg'>Recently Activity</span>
            </div>
            <div className='flex'>
              <button className='panel-link btn-primary bg-sky-600 active' data-target="order-panel" onClick={activityTab} >Order Activity</button>
              <button className='panel-link btn-primary bg-sky-600' data-target="tracking-panel" onClick={activityTab}>Tracking Activity</button>
            </div>
            <div className='mt-4'>
              <div className="panel order-panel show">
                <OrderActivity />
              </div>
              <div className="panel tracking-panel">
              <TrackingActivity />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
