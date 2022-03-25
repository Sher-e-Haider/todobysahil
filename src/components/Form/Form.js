import React from 'react'
import useStyles from './styles'
import { useState } from 'react'
import { useDispatch} from 'react-redux'
import { createPost, updatePost } from '../../redux/actions/indexAc'
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import {TextField} from '@material-ui/core'
import AddIcon from '@mui/icons-material/Add';
import { useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'



const Form = ({currentId,setCurrentId}) => {
    const [postData,setPostData] = useState({input:''})
   
    const dispatch=useDispatch()
    
    const classes = useStyles();
    const [data,setData] = useState(JSON.parse(localStorage.getItem('profile')))
  //  console.log(data,'lawarish');
    useEffect(() => {
   
    if(data?.result?.googleId || data?.result?._id||data?._id){
      toast.success('successfully login')
      
    }
 
   },[data])
    const handleSubmit=(e)=>{
        e.preventDefault()
        // if(currentId){
        //   dispatch(updatePost(currentId,postData))
        // }else{
        //   dispatch(createPost(postData))
        // }
        
        if (!currentId) {
          dispatch(createPost({ ...postData, name: data?.result?.name }));
         console.log('create');
        } else {
          dispatch(updatePost(currentId, { ...postData, name: data?.result?.name }));
         
        }
         setCurrentId(null)
         setPostData({input:''})
       }
     
  return (
   
       
       <div className='form_displays'>
         <ToastContainer position="bottom-center" limit={1} />
          <form autoComplete='off' noValidate type='submit' onSubmit={handleSubmit} className={classes.paper}>
      
           <TextField className={classes.input}  id="outlined-basic"  label="Enter Your Item" fullWidth value={postData.input} variant="outlined" onChange={(e)=>setPostData({...postData,input:e.target.value})}/>
      
          { data && <Button disabled={postData.input?false:true} className={classes.button} variant="contained" type='submit' >{currentId?<EditIcon />:<AddIcon />}</Button>
          }
          
             
            
           

          
          </form>
         
       </div>

      
   
   
   
   
  )
}

export default Form