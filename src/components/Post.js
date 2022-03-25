import React from 'react'
import { useDispatch } from 'react-redux'
import { deletePost } from '../redux/actions/indexAc'
import EditIcon from '@mui/icons-material/Edit';
import {MdDelete } from 'react-icons/md';
import { useState } from 'react';

const Post = ({x,setCurrentId}) => {
  const [data,setData] = useState(JSON.parse(localStorage.getItem('profile')))
    const dispatch=useDispatch()
  //  console.log(data,'Home.js');
    const deleted=(id)=>{
   
        dispatch(deletePost(id))
        
      }
      const update=(id)=>{
        setCurrentId(x._id)
        console.log(id,'update');
      }
     
  return (
    <div  className="content_text">
   { data &&  <div className='box'>{x.input}</div>}
    
   <div className="action_button">
   
   { 
    (data?.result?.googleId === x?.creator || data?.result?._id === x?.creator ||data?._id===x?.creator) &&(
      <div>
      <button className='react_icon' onClick={()=>deleted(x._id)}><MdDelete/></button>
     <button onClick={()=>update(x._id)}  className='btn'><EditIcon color='secondary' /></button>
     
     
       
  </div> 
     )
   }
      </div>
  
   
    </div>   
  )
}

export default Post