import Header from '../components/Header'
import Box from '../components/Box'
import { useState } from 'react'
import OrderActivity from '../components/OrderActivity'
import TrackingActivity from '../components/TrackingActivity'
import Notice from '../components/Notice'

export default function Home() {

  const [orderActivity, setOrderActivity] = useState(true)
  const [trackingActivity, setTrackingActivity] = useState(false)

  const handleActivity = e => {

    let btn = e.target

    if(btn.getAttribute("disabled") == null){
      btn.setAttribute("disabled","disabled")
    }else{
      btn.removeAttribute("disabled")
    }
    

    if(orderActivity == true){
      setOrderActivity(false)
      setTrackingActivity(true)
    }else{
      setOrderActivity(true)
      setTrackingActivity(false)
    }
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
              <button className='btn-primary bg-sky-600' onClick={handleActivity}>Order Activity</button>
              <button className='btn-primary bg-sky-600' onClick={handleActivity}>Tracking Activity</button>
            </div>
            <div className='mt-4'>
              { orderActivity ? <OrderActivity /> : '' }
              { trackingActivity ? <TrackingActivity /> : ''}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
