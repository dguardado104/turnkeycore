import Header from '../components/Header'
import Box from '../components/Box'
import OrderActivity from '../components/OrderActivity'
import TrackingActivity from '../components/TrackingActivity'
import Notice from '../components/Notice'
import Head from 'next/head'

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


  const data = {
    brand: {
      name: '',
      logoUrl: '',
      emailSupport: '',
      primaryColor: '',
      pageTitle: ''
    },
    links: {
      designDetailLink: ""
    },
    orderInformation: {
      orderNumber: null,
      userName: "",
      priority: "",
      shippedVia: "",
      orderStatus: "",
      customDates: [],
      orderActivityList: [],
      trackingActivity: {
        list: []
      }
    }
  }

  /*

  const data = {
    brand: {
      name: 'Bowlifi',
      logoUrl: 'https://bowlifi.com/media/logo/default/logo_charcoal.png',
      emailSupport: 'support@bowlifi.com',
      primaryColor: '#a61f2b',
      pageTitle: 'Order Status'
    },
    links: {
      designDetailLink: "#"
    },
    orderInformation: {
      orderNumber: 1000078545,
      userName: "John Doe",
      priority: "Express",
      shippedVia: "USPS - Priority Mail 2 - Day",
      orderStatus: "shipped",
      customDates: [{
        name: "Ship Date",
        date: "Apr 26, 2022"
      },{
        name: "In Transit Date",
        date: "Apr 27, 2022"
      }],
      orderActivityList: [{
        title: "Art Review",
        activityDate: "2022-05-27 20:30:57"
      },{
        title: "Send for Approval",
        activityDate: "2022-05-25 16:35:34"
      }],
      trackingActivity: {
        trackingNumber: 100000014515,
        type: "USPS",
        list: [{
          title: "Art Review",
          activityDate: "2022-05-27 20:30:57"
        },{
          title: "Send for Approval",
          activityDate: "2022-05-25 16:35:34"
        }]
      }
        
    }
  }

  */


  return (
    <>
      <Head>
        <title>{!data == {} ? data.brand.name + "-" + data.brand.pageTitle : 'Turnkeycore'}</title>
        <link rel="icon" type="image/png" href={!data == {} ? data.brand.logoUrl : '/favicon.ico'}/>
      </Head>

      <div className='main'>
        <div className="container">
          <Header data={data.brand} />
          <div className='m-4'>

            <div className='flex mb-4 justify-end'>
              { data.links.designDetailLink ? <a href={data.links.designDetailLink} className='btn-primary'>Design Details</a> : '' }
            </div>
            
            {
              data.notice ? <Notice data={data.notice}/> : ''
            }
            
            <Box data={data} />

            <div className='mt-4'>
              <div className='mb-4'>
                <span className='font-bold text-lg'>Recently Activity</span>
              </div>
              <div className='flex'>
                <button className='panel-link btn-primary active' data-target="order-panel" onClick={activityTab} >Order Activity</button>
                { !data.orderInformation.trackingActivity.list.length > 0 ? '' : 
                  <button className='panel-link btn-primary' data-target="tracking-panel" onClick={activityTab}>Tracking Activity</button>
                }
              </div>
              <div className='mt-4'>
                <div className="panel order-panel show">
                  <OrderActivity data={data.orderInformation.orderActivityList } />
                </div>
                <div className="panel tracking-panel">
                  <TrackingActivity data={data.orderInformation.trackingActivity} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    
  )
}
