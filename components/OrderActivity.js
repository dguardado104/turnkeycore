import Skeleton from "react-loading-skeleton"

const OrderActivity = (props) => {

  const formatDate = (date) => { 
    const months = ["Jan", "Feb", "Mar", "April", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    const d = new Date(date)
    return(months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear())

  }

  const formatTime = (date) => { 
    const d = new Date(date)
    return (d.getHours() + ":" + d.getMinutes())
  }

  return (
    <>
      { !props.data ? 
        <div>
          <div className="p-4 mt-4 bg-slate-100 rounded">
            <div className="flex justify-between">
              <Skeleton width={"100px"}/>
              <Skeleton width={"200px"}/>
            </div>
          </div>
          <div className="p-4 mt-4 bg-slate-100 rounded">
            <div className="flex justify-between">
              <Skeleton width={"100px"}/>
              <Skeleton width={"200px"}/>
            </div>
          </div>
        </div>
        :
        props.data.map((item, index) => (
          <div className="p-4 mt-4 bg-slate-100 rounded" key={index}>
            <div className="flex justify-between">
              <div>
                <b>{formatDate(item.activityDate)}</b><br />
                <b>{formatTime(item.activityDate)}</b>
              </div>
              <div>
                <b>{item.title}</b>
              </div>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default OrderActivity