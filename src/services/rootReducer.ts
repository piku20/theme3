import { combineReducers } from "redux";
import themeReducer from "./modules/theme/themeReducer";

const rootReducer = combineReducers({
    theme:themeReducer,
});

export default rootReducer;