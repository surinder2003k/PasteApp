import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { NavLink, useParams, useSearchParams } from 'react-router-dom'

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
          className='py-3 px-3 w-[160vh] cursor-not-allowed mt-2 bg-[#02020faa] rounded outline-0'
          placeholder='Enter title here'
          onChange={(e)=>settitle(e.target.value)}
          value={paste.title}
          disabled
        />
        <NavLink to={'/'}>
        <button className='p-2 mt-2 rounded'>
        <i class="ri-add-circle-line"></i>
        </button>
        </NavLink>
      </div>
      <div className='mt-3'>
      <div className='border flex  place-content-between items-center px-5 border-gray-600 rounded-t h-[40px] '>
        <div>
        <i className="text-red-500 ri-circle-fill"></i>
        <i className="text-orange-500 ri-circle-fill"></i>
        <i className="text-green-500 ri-circle-fill"></i>
        </div>
        <i 
        onClick={()=>{
          if(paste.content){
          navigator.clipboard.writeText(paste.content)
          toast.success('copied to clipboard')}
        }}
        className="cursor-pointer ri-file-copy-line"></i>
        </div>
        <textarea
          value={paste.content}
          onChange={(e)=>setvalue(e.target.value)}
          disabled
          className='bg-[#02020faa] h-[400px] cursor-not-allowed p-3 rounded-b-xl outline-0  w-[170vh]'
          placeholder='Enter Your Paste' />
      </div>
    </div>
  )
}

export default Viewpaste