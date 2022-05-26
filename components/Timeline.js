import Skeleton from 'react-loading-skeleton'
import { ClockIcon, CurrencyDollarIcon, TruckIcon, CheckCircleIcon } from '@heroicons/react/solid'
import { useState } from 'react'

const Timeline = () => {

  let circle = true

  const status = [
    {
      statusName: "pending",
      active: false,
      icon: <ClockIcon className="h-5 w-5" />,
      position: 0
    },
    {
      statusName: "pendingPayment",
      active: false,
      icon: <CurrencyDollarIcon className="h-5 w-5" />,
      position: 1
    },
    {
      statusName: "inTransit",
      active: false,
      icon: <TruckIcon className="h-5 w-5" />,
      position: 2
    },
    {
      statusName: "shipped",
      active: true,
      icon: <CheckCircleIcon className="h-5 w-5" />,
      position: 3
    }]


  const dataList = status.map((item, index) => {

    console.log("is circle? ", circle)

    if(circle == true){
      
      circle = false

      if(item.active){

        return <div className='t-circle active' key={index}>{item.icon}</div>
      }


      return <div className='t-circle' key={index}></div>
     
    }

    circle = true
      
    if( (index+1) != status.length){

      return <div className='t-line' key={index}></div>
    }
    
  })


  return (
    <div className='mt-4'>

      { !status ? <Skeleton height={"50px"}/> : 
        <div className='flex justify-center items-center'>
          { dataList }
        </div>
      }
    </div>
  )
}

export default Timeline