import { fetchData,userData } from './userReducer'
import { combineReducers } from 'redux'
import authReducer from './authReducer'

export default combineReducers({
    alldata:fetchData,
    auth:authReducer
   
})
