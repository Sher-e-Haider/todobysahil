import React from 'react'
import { useState } from 'react'
import {Paper} from '@material-ui/core'
import { useEffect } from 'react'
import { getPost } from '../redux/actions/indexAc'
import { useDispatch, useSelector } from 'react-redux'
import Form from '../components/Form/Form'
import Post from '../components/Post'
import ResponsiveAppBar from '../components/appbar/AppBar'


const Home = () => {
  
    const [currentId,setCurrentId] = useState(null)
  const [loading,setLoading] = useState(false)
  const dispatch=useDispatch()
  const posts=useSelector(state=>state.alldata)
  
  useEffect(() => {
    dispatch(getPost())
   
  }, [dispatch,posts])
  
  
 
  return (
    <div className="pura_main">
     <ResponsiveAppBar/>
       <div className='form-main'>
  
   
  
  <Paper elevation={3}>
      <Form currentId={currentId} setCurrentId={setCurrentId} loading={loading} />
     <ul>
       {
         posts.map(x=>(
           <Post key={x._id} x={x} setCurrentId={setCurrentId} currentId={currentId} setLoading={setLoading} />
         ))
       }
       </ul>
       
       </Paper>
      
   
    </div>
   </div>
  )
}

export default Home
