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
    <div className='mt-15'>
      <input
        className='p-3 w-[600px] outline-0 bg-[#02020faa] rounded-xl mt-3'
        placeholder='Search here'
        value={searchterm}
        onChange={(e) => setsearchterm(e.target.value)}
        type="text" />
      <div className='flex flex-col gap-3 mt-4'>
        {
          filterdata.length > 0 &&
          filterdata.map(
            (data) => (
              <div
                key={Math.random()}
                className='border'>
                <div>
                  {data.title}
                </div>
                <div>
                  {data.content}
                </div>
                <div className='flex place-content-evenly'>
                  <button>
                  <NavLink to={`/?pasteId=${data._id}`}>
                    Edit
                  </NavLink>
                  </button>
                  <button>
                  <NavLink to={`/Viewpaste/${data._id}`}>
                    View
                  </NavLink>
                  </button>
                  <button onClick={(e) => {
                      navigator.clipboard.writeText(data?.content)
                      toast.success('copied to clipboard')
                    }}
                  >Copy</button>
                  <button
                    onClick={() => handleremove(data?._id)
                    }
                  >Remove</button>
                  <button>Share</button>
                </div>
                <div>
                  {data.createdAt}
                </div>
              </div>

            ))
        }
      </div>
    </div>
  )
}

export default Pastes