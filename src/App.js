import React from 'react'
import {Routes,Route,Navigate} from 'react-router';
import './index.css';
import Login from'./pages/Login';
import Notfound from'./pages/Notfound';
import Landing from'./pages/Landing';
import AuthHook from './hooks/AuthHook';

const App=()=>{
  const{getToken}=AuthHook();
  let token=getToken();
  return(<Routes>
        <Route path="/login" element={token?<Navigate to='/' />:<Login/>}></Route>
        <Route path='/' element={<Landing/>}></Route>
        {/* <Route path="*" element={<Navigate to="/login" />}></Route> */}
        <Route path="*" element={<Notfound/>}></Route>
  </Routes>)
}


export default App;