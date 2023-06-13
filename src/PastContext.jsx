import React, { createContext, useState } from 'react';

export const PastContext = createContext();

export const PastProvider = ({ children }) => {
  const [clicked, setClicked] = useState(null);

  return (
    <PastContext.Provider value={{ clicked, setClicked }}>
      {children}
    </PastContext.Provider>
  );
};
