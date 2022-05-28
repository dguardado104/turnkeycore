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
      

      {
        !data.orderInformation ? <Skeleton count={3} /> :

        <ul>
          <li>
            <b>{ data.orderInformation.userName + " " + data.orderInformation.orderNumber}</b>
          </li>
          <li>
            Priority <b>{data.orderInformation.priority}</b>
          </li>
          <li>
            Shipped Via <b>{data.orderInformation.shippedVia}</b>
          </li>
        </ul>
      }
      
      <div className='pt-4 flex justify-center'>
        { !data.orderInformation.orderStatus ? <Skeleton width={"100px"} /> : <b className='uppercase'>{data.orderInformation.orderStatus}</b> }
      </div>

      <Timeline data={dataTimeline}  />

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