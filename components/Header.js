import Skeleton from 'react-loading-skeleton'

const Header = (props) => {
  return (
    <div className='flex p-4 px-8 justify-between items-center bg-slate-50'>
      <div>
        {
          !props.data.logoUrl ? <Skeleton circle width={"60px"} height={"60px"} /> : <img src={props.data.logoUrl} alt={props.data.name} style={{ width: "60px", height: "60px", objectFit: "contain" }}/>
        }
        
      </div>
      <div>
        {
          !props.data.pageTitle && !props.data.primaryColor ? <Skeleton width={"200px"} height={"20px"} /> : <span className='font-bold text-lg' style={{ color: props.data.primaryColor }}>{props.data.pageTitle}</span>
        }
        
      </div>
    </div>
  )
}

export default Header