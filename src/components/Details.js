import React from 'react'
import { BiLogOutCircle } from "react-icons/bi";
import AuthHook  from '../hooks/AuthHook';

const Details=({current})=>{
  const {logout} =AuthHook();
  const colors=["red","green","blue",'yellow','#0099cc','#99e6ff','#80ffd4','#cc99ff','#b3ff99'];
  let index=Math.floor(Math.random()*10);

    return(<>
            <div className="my-player--details">
          <div className="details-img">
            {/* <img className="songImage" src={`/images/${current.id}.jpg`} alt="imgDescripiton"  style={{width: "350px",height:"223px",boxShadow:`6px 6px 14px ${colors[index]}, -6px -6px 12px ${colors[index]}`, transition: "all .5s ease",WebkitTransition: "all .5s ease",MozTransition: "all .5s ease"}} /> */}
            <img className="songImage" src={current?.image&&current.image} alt="imgDescripiton"  style={{width: "350px",height:"223px",boxShadow:`6px 6px 14px ${colors[index]}, -6px -6px 12px ${colors[index]}`, transition: "all .5s ease",WebkitTransition: "all .5s ease",MozTransition: "all .5s ease"}} />
           
          </div>
          <div className="logout-btn-wrapper">
                <button className='btn logout-btn' title="logout" onClick={()=>logout()}><BiLogOutCircle  color="white" size="37px"/></button>
            </div>
          {/* <h3 className="details-title">{current?.title&&current.title}</h3>
          <h4 className="details-artist">{current.description?current.description.substring(0,33):''}</h4> */}
            <h3 className="details-title">{current?.song_name&&current.song_name}</h3>
          <h4 className="details-artist">{current.artist?current.artist.substring(0,33):''}</h4>
        </div>
    </>)
}

export default Details;