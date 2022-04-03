import { combineReducers } from "redux";
import user from "./user/reducer"
import font from "./font/reducer";
import properties from "./properties/reducer";
import property from "./property/reducer";
import comments from "./comments/reducer";
export default combineReducers({
    font,
    properties,
    property,
    comments,
    user
});
