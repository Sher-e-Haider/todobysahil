import { useEffect, useState } from 'react';
import './App.css';
import Home from './Home/Home';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Auth from './auth/auth';
import ResponsiveAppBar from './components/appbar/AppBar'



const App=()=> {
  const [data,setData] = useState(JSON.parse(localStorage.getItem('profile')))

 console.log('app.js');
  return (
    <div className="main">
       <BrowserRouter>
   
   <Routes>
     <Route path='/' element={<Home data={data} setData={setData}/>} />
     <Route path='/auth' element={<Auth data={data}  />} />
   </Routes>
 </BrowserRouter> 
    </div>

   
  );
}

export default App;
