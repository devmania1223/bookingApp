import React, {useReducer} from 'react';
import propertiesReducer from './Reducers/PropertiesReducer';
import {FETCH_PROPERTIES, FETCH_PROPERTY, USER_LOGIN} from "./Types/properties";


export const PropertiesContext = React.createContext({});

export const PropertiesProvider = ({children}) => {
    const [state, dispatch] = useReducer(propertiesReducer, {
        properties: [],
        propertiesWithDetails : [],
        user : null
    });

    const fetchProperties = (payload) => {
        return dispatch({type: FETCH_PROPERTIES, payload: payload})
    };
    const fetchProperty = (payload) => {
        return dispatch({type: FETCH_PROPERTY, payload: payload});
    };
    const login = (payload) => {
      return dispatch({type: USER_LOGIN, payload: payload})
    };
    return (
        <PropertiesContext.Provider  value={{state, fetchProperties, fetchProperty, login}}>
            {children}
        </PropertiesContext.Provider>
    );
};
export default PropertiesContext;
