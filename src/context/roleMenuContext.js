import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
    isOwner: false,
    roleMenuAccess:[],
    roleId:""
};

export const RoleMenuAccessContext = createContext(INITIAL_STATE);

const RoleMenuAccessReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ISOWNER":
            return {
                ...state,
                isOwner: action.payload,
            };
        case "ADD_ROLEMENUACCESS": 
            return {
                ...state,
                roleMenuAccess: action.payload.roleMenuAccess,
                roleId:action.payload.roleId
            };
        case "REMOVE_CONTEXT":  
            return {
                isOwner: false,
                roleMenuAccess: []
            };
        default:
            return state;
    }
};

export const RoleMenuAccessContextProvider = ({ children }) => {
    const [state,dispatch ] = useReducer(RoleMenuAccessReducer, INITIAL_STATE);

    return (
        <RoleMenuAccessContext.Provider
            value={{
                isOwner: state.isOwner,
                roleMenuAccess: state.roleMenuAccess,
                roleId:state.roleId,
                dispatch,
            }}
        >
        {children}
        </RoleMenuAccessContext.Provider>
    );
};