import React, { useContext } from 'react';

const Context = React.createContext({});

export default function ShareProvider(props) {
  const { children, value } = props;
  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export function useDateContext() {
  return useContext(Context);
}
