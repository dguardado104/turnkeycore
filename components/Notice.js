import { useState } from "react"
import { XIcon } from '@heroicons/react/solid'

const Notice = () => {

  const [notice, setNotice] = useState(true)

  const handleCloseBtn = () => { 
    setNotice(false)
  }

  return (
    <>
    {
      !notice ? '' :
      <div className="bg-slate-300 rounded mb-4 p-4">
        <div className="flex justify-between items-center mb-4">
          <span className="font-bold">Lorem ipsum dolor</span>
          <button className="btn-close-notice" onClick={handleCloseBtn}>
            <XIcon className="h-5 w-5" />
          </button>
        </div>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora voluptate sequi distinctio natus, ut nihil! Fugit expedita, sit distinctio quae ex ab praesentium laborum perspiciatis nihil voluptates, quis officia dolores!</p>
        </div>
      </div>
    }
      
    </>
    
  )
}

export default Notice