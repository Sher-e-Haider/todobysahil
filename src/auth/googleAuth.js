import { Button } from '@material-ui/core'
import React from 'react'
import {GoogleLogin} from 'react-google-login'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Icon from './icon'
import useStyles from './styles';


const GoogleAuth = () => {
    const dispatch=useDispatch()
    const history=useNavigate()
    const classes = useStyles();
    const googleSuccess= async (res)=>{
        const result = res?.profileObj
        const token = res?.tokenId

        try {
            dispatch({type:'AUTH',data:{result,token}})
            history('/',{replace:true})
        } catch (error) {
            console.log(error);
        }
       
         
    }
    const googleFailure=()=>{
        console.log("unsuccessful");
     }
  return (
    <div>
       <GoogleLogin
                 clientId='988455849486-6rsv7i1kmo3e8uvdblqulslt733t69ui.apps.googleusercontent.com'
                 render={(renderProps)=>(
                     <Button 
                        //  className={classes.googleButton}
                         color="primary"
                         fullWidth
                         className={classes.googleButton}
                         onClick={renderProps.onClick}
                         disabled={renderProps.disabled}
                         variant="contained"
                         startIcon={<Icon />}
                     >
                     Google Login
                     </Button>
                    
                 )}
                     onSuccess={googleSuccess}
                     onFailure={googleFailure}
                     cookiePolicy="single_host_origin"
             />
    </div>
  )
}

export default GoogleAuth
