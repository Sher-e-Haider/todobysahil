import axios from "axios"
//https://todosahilapp.herokuapp.com/

const API = axios.create({ baseURL: 'https://todosahilapp.herokuapp.com' });
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });
export const getPost=()=>async(dispatch)=>{
    // dispatch({type:"REQUEST"})
    try {
        const {data} = await API.get('/user')
        dispatch({type:"FETCH",payload:data})
    } catch (error) {
        // dispatch({type:"FAIL",payload:error})
        console.log(error.message);
    }
}

export const createPost=(newPost)=>async(dispatch)=>{
    // dispatch({type:"CREQUEST"})
    try {
        const {data} = await API.post('/user',newPost)
        dispatch({type:"CREATE",payload:data})
    } catch (error) {
        // dispatch({type:"CFAIL",payload:error})
       console.log(error.message);
    }
}

export const deletePost=(id)=>async(dispatch)=>{
    // dispatch({type:"CREQUEST"})
    try {
        const {data} = await API.delete(`/user/${id}`)
        dispatch({type:"DELETE",payload:data})
    } catch (error) {
        // dispatch({type:"CFAIL",payload:error})
       console.log(error.message);
    }
}

export const updatePost=(id,post)=>async(dispatch)=>{
    // dispatch({type:"CREQUEST"})
    try {
        const {data} = await API.patch(`/user/${id}`,post)
        dispatch({type:"UPDATE",payload:data})
    } catch (error) {
        // dispatch({type:"CFAIL",payload:error})
       console.log(error.message);
    }
}

