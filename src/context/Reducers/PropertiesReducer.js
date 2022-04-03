import {FETCH_PROPERTIES, FETCH_PROPERTY, USER_LOGIN} from '../Types/properties';

export default (state, action) => {
    switch (action.type) {
        case FETCH_PROPERTIES:
            console.log(action);
            return {
                ...state,
                properties: action.payload
            };
        case FETCH_PROPERTY:
            return {
                ...state,
                propertiesWithDetails: [...propertiesWithDetails, action.payload]
            };
        case USER_LOGIN:
            return {
                ...state,
                user: action.payload
            };

        default:
            return state;
    }
};
