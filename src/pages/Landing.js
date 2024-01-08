import React,{useEffect,useState} from 'react'
import axios from 'axios';
import Loader from '../components/Loader';
import Player from '../components/Player';
import AuthHook from '../hooks/AuthHook';
const Landing=()=>{
  const {getToken,logout}=AuthHook()
  const token=getToken();
 
    const[loader,setLoader]=useState(true)
  const[data,setData]=useState([]);
  useEffect(()=>{
    if(token)
    {
      fetch()
    }
    else{
       logout();
    }
   
  },
  []);

  async function fetch()
{
    try{
        let Songdata=await axios.get('http://127.0.0.1:8000/api/get-songs',{headers:{Authorization :`Bearer ${token}` }});
      
        const {data}=Songdata;
     
        if(data.data.length > 0)
        {
          setData(data)  
          setLoader(false)

        }
       
    }
    catch(error)
    {
      
      if(error.code !='ERR_NETWORK')
      {
        if(error.response.data.message ==='Unauthenticated.')
        {
          logout();
        }
      }
         

    }
   

}

return (<div className="App">
{loader&&<Loader/>}
    {!loader&&<Player data={data.data}/>}
</div>)
}
export default Landing;