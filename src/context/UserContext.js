import React,{createContext,useState} from 'react'
const UserName=createContext();
const UserContext=({children})=>{
  const[name,setName]=useState("")
    return(<UserName.Provider value={{name,setName}}>
        {children}
    </UserName.Provider>)
   
}


export default UserContext;
export {UserName}

