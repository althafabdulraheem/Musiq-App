import React,{useEffect,useState} from 'react'
import Player from './components/Player';
import axios from 'axios';
import './index.css';
import Loader from './components/Loader';




const App=()=>{

  const[loader,setLoader]=useState(true)
  const[data,setData]=useState([]);
  useEffect(()=>{
    fetch()
  },
  []);

  async function fetch()
{
    try{
        let Songdata=await axios.get('https://fakestoreapi.com/products/');
        const {data}=Songdata;
        if(data.length > 0)
        {
          setData(data)  
          setLoader(false)

        }
       
    }
    catch(error)
    {
      console.log(error)

    }
}


  
  

  return (<div className="App">
    {loader&&<Loader/>}
        {!loader&&<Player data={data}/>}
  </div>)
}


export default App;