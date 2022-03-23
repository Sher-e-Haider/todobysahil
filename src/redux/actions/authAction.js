import Axios from "axios"
const url = 'https://todosahilapp.herokuapp.com/auth'

//https://todosahilapp.herokuapp.com/
//https://todosahilapp.herokuapp.com/
export const signin=(formData,history)=>async(dispatch)=>{
   
    try {
        const {data} = await Axios.post(`${url}/signin`,formData)
        dispatch({type:'AUTH',data})
        history('/',{replace:true})
    } catch (error) {
        dispatch({type:"FAIL",payload:error.message})
        console.log(error.message);
        
    }
}

export const register=(formData,history)=>async(dispatch)=>{
   
    try {
        const {data} = await Axios.post(`${url}/signup`,formData)
        dispatch({type:'AUTH',data})
        history('/',{replace:true})
    } catch (error) {
        
        console.log(error);
    }
}
