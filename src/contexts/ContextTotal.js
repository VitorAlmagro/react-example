import React, { useState } from 'react';

const ContextTotal = React.createContext({});

export const Provider = ({children}) => {

  const [total, setTotal] = useState(0);

  return (
    <ContextTotal.Provider
      value={{
        total,
        setTotal: (value) => setTotal(value)
      }}
    >
      {children}
    </ContextTotal.Provider>
  )
}


export default ContextTotal;