import {useState, createContext, useEffect, useReducer} from 'react';
const MyContext=createContext();


const MyContextProvider=({children})=>{
    const [user_id,set_user_id]=useState(null);

    return(
        <MyContext.Provider value={{
            user_id,set_user_id
        
         }}>
            {children}
        </MyContext.Provider>

    )
}

export {MyContext, MyContextProvider};