const authReducer=(state={authData:null,loading:false},action)=>{
    switch(action.type){
        case 'AUTH':
            localStorage.setItem('profile',JSON.stringify({...action?.data}))
            console.log(action?.data);
            return {...state,authData:action?.data,loading:true}
        case "FAIL":
           return { loading:true }
        case 'LOGOUT':
            localStorage.clear()
            return {...state,authData:null,loading:false}
        default:
            return state
    }
}

export default authReducer

