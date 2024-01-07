import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";


const Control=({play,skipSong,setPlay})=>{ 
  let icon=play?faPause:faPlay;
    return(<>
         <div className="my-player--controls">
          <button className="skip-btn">
            <FontAwesomeIcon icon={faBackward} onClick={()=>{skipSong(false)}}/>
          </button>
          <button className="play-btn">
            <FontAwesomeIcon icon={icon} onClick={()=>{setPlay(!play)}}/>
          </button>
          <button className="skip-btn">
            <FontAwesomeIcon icon={faForward} onClick={()=>{skipSong()}}/>
          </button>
        </div>
    </>)
}
export default Control;