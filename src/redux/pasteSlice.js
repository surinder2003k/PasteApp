import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';


const initialState ={
  pastes: localStorage.getItem('pastes')
  ? JSON.parse(localStorage.getItem('pastes')) 
  :[],
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPaste: (state, action) => {
      const paste= action.payload
      // check already exist
        if(!(state.pastes.some(item=>item.title.toLowerCase() === paste.title.toLowerCase() ))){
          state.pastes.push(paste);
          localStorage.setItem('pastes',JSON.stringify(state.pastes))
          toast.success('Paste Created Successfully')
        }
        else{
          toast.error('Already Exist')
        }
    },
    updateToPaste: (state, action) => {
      const paste = action.payload
      const index =state.pastes.findIndex((item)=>item._id === paste._id)
      if(index >= 0){
        state.pastes[index] = paste

        localStorage.setItem('pastes',JSON.stringify(state.pastes))
        toast.success('Paste updated Successfully')
      }
    },
    removeFromPaste:(state, action) => {
      const paste= action.payload
      const index= state.pastes.findIndex((item)=>item._id === paste)
      if(index>=0){
        state.pastes.splice(index,1)
        localStorage.setItem('pastes',JSON.stringify(state.pastes))
        toast.success('Paste Removed Successfully')
      }
      
    },
    resetPaste:(state, action) =>{
        state.pastes=[]
        localStorage.removeItem('pastes')
    }
    
  },
})

// Action creators are generated for each case reducer function
export const { updateToPaste, addToPaste, removeFromPaste, resetPaste } = pasteSlice.actions

export default pasteSlice.reducer