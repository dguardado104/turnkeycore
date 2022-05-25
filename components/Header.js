import Skeleton from 'react-loading-skeleton'

const Header = () => {
  return (
    <div className='flex p-4 justify-between items-center bg-slate-50'>
      <div>
        <Skeleton circle width={"60px"} height={"60px"} />
      </div>
      <div>
        <Skeleton width={"200px"} height={"20px"} />
      </div>
    </div>
  )
}

export default Header