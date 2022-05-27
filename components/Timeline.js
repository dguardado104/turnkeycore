import Skeleton from 'react-loading-skeleton'
import { ClockIcon, CurrencyDollarIcon, TruckIcon, CheckCircleIcon } from '@heroicons/react/solid'
import { useState } from 'react'
import React from 'react'

const Timeline = () => {

  let circle = true

  const status = [
    {
      statusName: "pending",
      active: true,
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
      active: false,
      icon: <CheckCircleIcon className="h-5 w-5" />,
      position: 3
    }]


  const dataList = status.map((item, index) => {
    return(
      <React.Fragment key={index}>
        <div className={`t-circle ${item.active ? 'active' : ''}`} >{ item.active ? item.icon : ''}</div>
        {
          (index+1) != status.length ?  <div className='t-line' ></div> : null
        }
      </React.Fragment>
    ) 
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