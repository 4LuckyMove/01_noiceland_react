import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [category, setCategory] = useState({filter: 'All Posts', scrollPage: window.scrollTo({top: 0})});

    return (
        <StateContext.Provider
            value={{
                activeMenu, setActiveMenu,
                modalOpen, setModalOpen,
                category, setCategory,
            }}
        >
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);