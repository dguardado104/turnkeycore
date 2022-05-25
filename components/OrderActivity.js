import Skeleton from "react-loading-skeleton"

const OrderActivity = () => {

  return (
    <>
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
      <div className="p-4 mt-4 bg-slate-100 rounded">
        <div className="flex justify-between">
          <Skeleton width={"100px"}/>
          <Skeleton width={"200px"}/>
        </div>
      </div>
    </>
    
  )
}

export default OrderActivity