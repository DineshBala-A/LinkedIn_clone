import React, { useState, createContext, useReducer} from 'react';

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [user_id, set_user_id] = useState(null);
  const [reducer, forceUpdate]=useReducer(x=>x+1,0);

    console.log("user_id")
  return (
    <MyContext.Provider value={{ 
      user_id, set_user_id,
      reducer, forceUpdate, 
    
    }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
