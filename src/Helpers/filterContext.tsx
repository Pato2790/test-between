import React, { useReducer } from "react";
import { actions, filterReducer } from "./filterReducer";

const initialState = {
    showOffline: false,
    showMoreUsers: false,
    setShowMoreUsers: (value: any) => { },
    setShowOffline: (value: any) => { }
}

const FilterContext = React.createContext(initialState);

const FilterProvider = ({ children }: any) => {
    const [state, dispatch] = useReducer(filterReducer, initialState);

    const filtersValue = {
        showOffline: state.showOffline,
        showMoreUsers: state.showMoreUsers,
        setShowMoreUsers: (value: any) => { dispatch({ type: actions.SHOW_MORE, payload: value }) },
        setShowOffline: (value: any) => { dispatch({ type: actions.SHOW_OFFLINE, payload: value }) },
    }

    return (
        <FilterContext.Provider value={filtersValue}>
            {children}
        </FilterContext.Provider>
    )
}

export { FilterProvider, FilterContext, initialState };