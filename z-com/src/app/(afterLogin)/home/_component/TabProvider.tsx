'use client'

import {createContext, useState} from "react";

const TabContext = createContext({
    tab: 'rec',
    setTab: (value: 'rec' | 'fol') => {},
});

interface Props {
    children: React.ReactNode
}

const TabProvider = ({ children } :Props) => {
    const [tab, setTab] = useState('rec')

  return (
    <TabContext.Provider value={{ tab, setTab}}>{children}</TabContext.Provider>
  );
};

export default TabProvider;
