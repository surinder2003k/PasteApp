import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams, useSearchParams } from 'react-router-dom'

const Viewpaste = () => {
  const[title,settitle]=useState('')
  const[value,setvalue]=useState('')
  const allpastes = useSelector((state)=>state.paste.pastes)
  
  const{id}=useParams()
  const paste= allpastes.find((e)=>e._id == id)

  return (
    <div className='mt-15 h-auto w-auto'>
      <div className='flex h-auto w-auto gap-4 place-content-between'>
        <input
          type="text"
          className='py-3 px-3  w-[170vh] mt-2 bg-[#02020faa] rounded outline-0'
          placeholder='Enter title here'
          onChange={(e)=>settitle(e.target.value)}
          value={paste.title}
          disabled
        />
        {/* <button onClick={createpaste} className='p-2 mt-2 rounded'>
          {pasteId ? 'Update My Paste' : 'Create My Paste'}
        </button> */}
      </div>
      <div>
        <textarea
          value={paste.content}
          onChange={(e)=>setvalue(e.target.value)}
          disabled
          className='bg-[#02020faa] h-[300px] p-3 rounded-xl outline-0 mt-3 w-[500px]'
          placeholder='Enter Your Paste' />
      </div>
    </div>
  )
}

export default Viewpaste