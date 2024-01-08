import React,{useState,useRef,useEffect,useMemo,useContext} from 'react'
import Details  from './Details';
import Control from './Control';
import { UserName } from '../context/UserContext';


const Player=({data})=>{
    const {name,setName}=useContext(UserName);
    const newData=useMemo(()=>{ console.log("memo");return data.splice(0,2);},[data])
    
  if(!name){
   
    let userData=localStorage.getItem('user');
    if(userData)
    {
      setName(JSON.parse(userData).name)
    }
  }
  const[current,setCurrent]=useState(0);
  const [isPlaying,setPlaying]=useState(false);
  const[next,setNext]=useState(0)
  const audio=useRef(null)

//   skip song

  const skip=(forward=true)=>{
    if(forward)
    {
       
        if(current >= newData.length-1)
        {
            setCurrent(0);
         
           

        }
        else{
            setCurrent((prev)=>prev+1)
       
         
            
        }
    }
    else{
       
        if(current === 0)
        {
            setCurrent(newData.length-1)
         
           
        }
        else{
            setCurrent((prev)=>prev-1)
         
        }
    }

      }

    //   skip song ends

    // next
      const nextSong=()=>{
        setNext(current+1)
    }

    // next song ends

    // play

   useEffect(()=>{
  
    if(isPlaying)
    {
          audio.current.play()
    }
    else{
      audio.current.pause()
    }

    setNext(()=>{
        
        if(current>=newData.length-1)
        {
            
            return 0;
        }
        else{
           
            
            return current+1;
        }
    })

    

   },[isPlaying,current])


    // play ends
   
    return(
        
        <div className="my-player">
          <audio src={newData[current]?.song&&newData[current].song} ref={audio}>

            </audio>
              <h4>{name?`Hi ${name}`:'Playing Now'}</h4>
                <Details current={newData[current]}/>
                <Control play={isPlaying} skipSong={skip} setPlay={setPlaying}/>
             <div className="next-title"></div>   
            <p>Next song : {newData[next].song_name}</p>
        </div>
    )
   
}

export default Player;