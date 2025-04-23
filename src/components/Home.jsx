import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useSearchParams } from 'react-router-dom'
import { addToPaste, updateToPaste } from '../redux/pasteSlice'
import toast from 'react-hot-toast'

const Home = () => {
  const [Title, setTitle] = useState('')
  const [Value, setValue] = useState('')
  const [searchParams, setsearchParams] = useSearchParams()
  const pasteId = searchParams.get('pasteId')
  const dispatch= useDispatch()
  const allpaste=useSelector((state)=>state.paste.pastes)
  useEffect(()=>{
    if(pasteId){
      const paste = allpaste.find((ele)=>ele._id === pasteId)
      setTitle(paste.title)
      setValue(paste.content)
    }
  },[pasteId])
  
  function createpaste() {
    const paste ={
      title: Title,
      content: Value,
      _id: pasteId || 
      Date.now().toString(36),
      createdAt: new Date().toLocaleDateString(),
    }
    if(pasteId){
      dispatch(updateToPaste(paste))
    }
    else{
      dispatch(addToPaste(paste))
    }
    setTitle('')
    setValue('')
    setsearchParams({})
  }
  return (
    <div className=' mt-15 '>
      <div className='flex gap-4 place-content-between'>
        <input
          type="text"
          className='py-2 px-3 w-[145vh] mt-2 bg-[#02020faa] rounded outline-0'
          placeholder='Title'
          value={Title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={createpaste} className='p-2 mt-2 rounded'>
          {pasteId ? 'Update My Paste' : 'Create My Paste'}
        </button>
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
          if(Value){
          navigator.clipboard.writeText(Value)
          toast.success('copied to clipboard')}
        }}
        className="cursor-pointer ri-file-copy-line"></i>
        </div>
        <textarea
          value={Value}
          onChange={(e) => setValue(e.target.value)}
          className='bg-[#02020faa] h-[400px] p-3 rounded-b-xl outline-0  w-[170vh]'
          placeholder='Write Your Content Here...' />
      </div>
    </div>
  )
}

export default Home