import Skeleton from 'react-loading-skeleton'
import { ClockIcon, CurrencyDollarIcon, TruckIcon, CheckCircleIcon } from '@heroicons/react/solid'
import React from 'react'

const Timeline = (props) => {

  let status = []

  status = [{
      statusName: "pending",
      active: true,
      icon: <ClockIcon className="h-5 w-5" />,
    },
    {
      statusName: "pendingPayment",
      active: false,
      icon: <CurrencyDollarIcon className="h-5 w-5" />,
    },
    {
      statusName: "inTransit",
      active: false,
      icon: <TruckIcon className="h-5 w-5" />,
    },
    {
      statusName: "shipped",
      active: false,
      icon: <CheckCircleIcon className="h-5 w-5" />,
    }]

  const dataList = status.map((item, index) => {
    return(
      <React.Fragment key={index}>
        <div className={`t-circle ${item.active ? 'active' : ''}`}>{ item.active ? item.icon : ''}</div>
        {
          (index+1) != status.length ?  <div className='t-line' ></div> : null
        }
      </React.Fragment>
    ) 
  })


  return (
    <div className='my-2'>
      { !status ? <Skeleton height={"50px"}/> : 
        <div className='flex justify-center items-center'>
          { dataList }
        </div>
      }
      <style jsx>{`
      
      .t-line {
        background-color: ${props.data.brandColor};
      }
      
      .t-circle{
        background-color: ${props.data.brandColor};
      }

      .t-circle.active{
        border: 5px solid ${props.data.brandColor};
        color: ${props.data.brandColor};
      }
      
    `}</style>
    </div>
  )
}

export default Timeline