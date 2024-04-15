'use client';

import React, { createContext, useContext, useState } from 'react';

const GlobalContext = createContext();

export const useMenuItemContext = () => useContext(GlobalContext);

export const MenuItemSelectorProvider = ({ children }) => {
    const [menuItemValue, setMenuItemValue] = useState(0);

    return (
        <GlobalContext.Provider value={{ menuItemValue, setMenuItemValue }}>
            {children}
        </GlobalContext.Provider>
    );
};
