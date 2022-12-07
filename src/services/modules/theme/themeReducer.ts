import {
    THEME_CHANGE,
    ThemeDispatchTypes,
    ThemeState
} from "./themeTypes";

const initialState:ThemeState = {
    mode:'light',
};

const themeReducer = (
    state:ThemeState = initialState,
    action: ThemeDispatchTypes
) => {
    switch(action.type){
        case THEME_CHANGE:
            return{
                ...state,
                mode: action.payload
            }
        default:
            return state;
    }
};

export default themeReducer;