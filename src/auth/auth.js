import { Button } from '@material-ui/core'
import { Paper } from '@material-ui/core'
import GoogleAuth from '../auth/googleAuth'
import React from 'react'
import useStyles from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import { register, signin } from '../redux/actions/authAction'
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react'
import ResponsiveAppBar from '../components/appbar/AppBar'
import { TextField } from '@material-ui/core'


const initialState= {firstname:'',lastname:'',email:'',password:'',confirmPassword:''}
const Auth = ({data}) => {
    const [isSignup,setIsSignup] = useState(true)
    // const [data,setData] = useState(JSON.parse(localStorage.getItem('profile')))
    const [show,setShow] = useState(true)
    
    const [error,setError] = useState(false)
    const [formData,setFormData] = useState(initialState)
     const value = useSelector(state=>state.auth)
    //  console.log(data,'dataaajil',);
      const {authData,loading} = value
    // console.log(data,'dataa');
    const dispatch=useDispatch()
    const history=useNavigate()
    const classes = useStyles();
    const handleSubmit=(e)=>{
        e.preventDefault()
        
         if(!isSignup){
          // toast.success('successfully login')
         
          dispatch(signin(formData,history))
        
           
               
           if(!data){
           return toast.error('username or password wrong')
           }
          
       
      //     try {
      //    const {data} = await Axios.post('/auth/signin',{name:formData.firstname,email:formData.email, password:formData.password})
         
        
      //    setTimeout(()=>{
         
      //   
      //      },2000)
      //        dispatch(signin(formData,history))
      //        history('/',{replace:true})
         
          
      //   //  console.log('ppp');
      //  } catch (error) {
      //      toast.error(error.message)
        //  console.log('qqqq');
       //}
         }
        else{
          
          
         
          // try {
          //   const {data} = await Axios.post('/auth/signup',formData)
          //  console.log(data,'signupoooo');
          // // 
          //  history('/',{replace:true})
          // // setTimeout(()=>{
            
          // // },2000)
          //    console.log('register');
            
          // } catch(error) {
          //   toast.error(error.message)
          //   console.log('qqqq');
          // }
         
          dispatch(register(formData,history))
          history('/',{replace:true})
        if(!data){
          // console.log('not dataaa');
          return toast.error('Sorry=>user already exist,please signup with other email')
        }else{
          console.log('hai data signup, ');
        }
      // console.log(formData,'pp');
      // if(!isSignup){
        
      //   setTimeout(()=>{
      //    dispatch(signin(formData,history))
      //     },2000)
         
        
       
         } 

        
           
      // else{
        //     setTimeout(()=>{
        //    dispatch(register(formData,history))
        // },2000)
          
        //   console.log('register');
        //   return toast.success('successFully SignUp ')
         
    //   }
    }
   
    useEffect(()=>{
      if(isSignup){
         if((formData.firstname && formData.lastname &&formData.confirmPassword) && (formData.email && formData.password) ){
         
              if(formData.password!==formData.confirmPassword){
                return toast.error('password and confirm password not equal ')
              }
              
              setShow(false)
         }else{
          setShow(true)
          
         }
          
      }else{
            if(formData.email && formData.password){
              setShow(false)
            }
      }
     
      
     
    },[formData])
    
  return (
    <div className="pura_mai">

    <ResponsiveAppBar setIsSignup={setIsSignup} />
    <div className='auth'>
    <ToastContainer position="bottom-center" limit={1} />
    
      <Paper className={classes.paper} >
           <form  type='submit' className='form' onSubmit={handleSubmit}>
           { isSignup &&(
               <div>
             <TextField type='text' className={classes.authField} fullWidth id="outlined-basic" placeholder='firstname' label="firstname" name='firstname' value={formData.firstname} variant="outlined" onChange={(e)=>setFormData({...formData,firstname:e.target.value})} />
               
              <TextField id="outlined-basic" className={classes.authField} fullWidth label="lastname" name='lastname' value={formData.lastname} variant="outlined" onChange={(e)=>setFormData({...formData,lastname:e.target.value})} />
          
          </div>
               )}
              <TextField id="outlined-basic" fullWidth className={classes.authField} label="email" name='email' value={formData.email} variant="outlined" onChange={(e)=>setFormData({...formData,email:e.target.value})} /> 
             
              <TextField id="outlined-basic" className={classes.authField} label="password" name='password' value={formData.password} variant="outlined" onChange={(e)=>setFormData({...formData,password:e.target.value})} />
          
           { isSignup &&(
            <TextField id="outlined-basic" className={classes.authField} label="confirmpassword"  name='confirmPassword' value={formData.confirmPassword} variant="outlined" onChange={(e)=>setFormData({...formData,confirmPassword:e.target.value})} />

           )}

           <Button variant="contained" className={classes.button} type='submit' disabled={show} color='secondary'>login</Button>
           <GoogleAuth/>
           <div className='signin_signup'>
           { isSignup ?(
              <p>have You already an account ? <span className={isSignup?'sign_title':'sign'} onClick={()=>setIsSignup(false)} style={{color:'red',cursor:'pointer'}}>Sign In</span></p>
           ):(<p>don't have an account ? <span className={isSignup?'sign_title':'sign'} onClick={()=>setIsSignup(true)} style={{color:'red',cursor:'pointer'}}>Sign Up</span></p>)}
           
           </div>
          </form>

      </Paper>
     
    </div>
    </div>
  )
}

export default Auth
