import Skeleton from 'react-loading-skeleton'
import Timeline from './Timeline'

const Box = () => {
  return (
    <div className="p-4 rounded bg-slate-100 ">
      <Skeleton count={3} />
      <div className='pt-4 flex justify-center'>
        <Skeleton width={"100px"} />
      </div>
      <Timeline />
    </div>
  )
}

export default Box