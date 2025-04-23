import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPaste } from '../redux/pasteSlice'
import toast from 'react-hot-toast'
import { NavLink } from 'react-router-dom'

const Pastes = () => {
  const data = useSelector((state) => state.paste.pastes)
  const [searchterm, setsearchterm] = useState('')
  const dispatch = useDispatch()
  const filterdata = data.filter((ele) => ele.title.toLowerCase().includes(searchterm.toLowerCase()))


  function handleremove(pasteid) {
    dispatch(removeFromPaste(pasteid))
  }

  return (
    <div className='mt-15 '>
      <input
        className='p-2 w-[145vh] outline-0 bg-[#02020faa] rounded mt-3'
        placeholder='Search here'
        value={searchterm}
        onChange={(e) => setsearchterm(e.target.value)}
        type="text" />
      <div className='bg-[#02020faa]  mt-3'>
        <div className='justify-baseline p-2 w-full border-b text-[4.5vh] font-semibold'>
          All Pastes
        </div>
      <div className=' flex flex-col  gap-3 '>
        {
          filterdata.length > 0 &&
          filterdata.map(
            (dat) => (
              <div
                key={Math.random()}
                className='border px-3 flex justify-between'>
               <div className='p-3'>
                    <div className='text-[4vh] font-semibold'>
                      {dat.title}
                    </div>
                    <div>
                      {dat.content}
                    </div>
              </div>
              <div className=' p-3'>    
                <div className='gap-2 flex place-content-evenly'>
                <NavLink  to={`/?pasteId=${dat._id}`}>
                <button >
                  <i className="ri-pencil-line"></i>
                  </button>
                  </NavLink>
                  <NavLink  to={`/Viewpaste/${dat._id}`}>
                  <button>
                  <i class="ri-eye-line"></i>
                  </button>
                  </NavLink>
                  <button onClick={(e) => {
                      navigator.clipboard.writeText(dat?.content)
                      toast.success('copied to clipboard')
                    }}
                  >
                    <i class="ri-file-copy-2-line"></i>
                  </button>
                  <button
                    onClick={() => handleremove(dat?._id)
                    }
                  >
                    <i class="ri-delete-bin-6-line"></i>
                  </button>
                  <button>
                    <i class="ri-share-line"></i>
                  </button>
                </div>
                <div className='flex gap-2 justify-end '>
                <i class="ri-calendar-line"></i>
                  {dat.createdAt}
                </div>
              </div>  
              </div>

            ))
        }
      </div>
      </div>
    </div>
  )
}

export default Pastes