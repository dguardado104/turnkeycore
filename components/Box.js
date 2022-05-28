import { delLocale } from 'next/dist/shared/lib/router/router'
import Skeleton from 'react-loading-skeleton'
import Timeline from './Timeline'

const Box = (props) => {

  const data = props.data;

  const dataTimeline = {
    brandColor: data.brand.primaryColor,
    orderStatus: data.orderInformation.orderStatus
  }

  return (
    <div className="p-4 rounded bg-slate-100 ">
      <div className='mb-2'>
        { !data.brand.primaryColor ? <Skeleton width={"150px"} /> : <span className='font-bold text-xl' style={{color: data.brand.primaryColor}}>Order Information</span> }
      </div>
      
      <ul>
        <li>
          {data.orderInformation.userName && data.orderInformation.orderNumber ? <b>{ data.orderInformation.userName + " " + data.orderInformation.orderNumber}</b> : <Skeleton /> }
        </li>
        <li>
          { data.orderInformation.priority ? <span>Priority <b>{data.orderInformation.priority}</b></span> : <Skeleton />} 
        </li>
        <li>
          { data.orderInformation.shippedVia ? <span>Shipped Via <b>{data.orderInformation.shippedVia}</b></span> : <Skeleton /> }
        </li>
      </ul>
      
      <div className='pt-4 flex justify-center'>
        { !data.orderInformation.orderStatus ? <Skeleton width={"100px"} /> : <b className='uppercase'>{data.orderInformation.orderStatus}</b> }
      </div>

      { dataTimeline ? <Skeleton height={"50px"}/> : <Timeline data={dataTimeline}  />
      
      }
      

      <div className='flex justify-center'>
        <ul>
          { !data.orderInformation.customDates ? <Skeleton count={2} width={"200px"}/> : data.orderInformation.customDates.map((item, index) => (
            <li key={index} className="text-center">{item.name} {item.date}</li>
          )) }
        </ul>
      </div>
    </div>
  )
}

export default Box