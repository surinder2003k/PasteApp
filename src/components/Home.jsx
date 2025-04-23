import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useSearchParams } from 'react-router-dom'
import { addToPaste, updateToPaste } from '../redux/pasteSlice'

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
    <div className='border mt-15 '>
      <div className='flex gap-4 place-content-between'>
        <input
          type="text"
          className='py-2 px-3 w-[320px] mt-2 bg-[#02020faa] rounded outline-0'
          placeholder='Enter title here'
          value={Title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={createpaste} className='p-2 mt-2 rounded'>
          {pasteId ? 'Update My Paste' : 'Create My Paste'}
        </button>
      </div>
      <div>
        <textarea
          value={Value}
          onChange={(e) => setValue(e.target.value)}
          className='bg-[#02020faa] h-[300px] p-3 rounded-xl outline-0 mt-3 w-[500px]'
          placeholder='Enter Your Paste' />
      </div>
    </div>
  )
}

export default Home