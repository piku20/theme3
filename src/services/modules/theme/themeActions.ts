import { THEME_CHANGE, ThemeDispatchTypes, ThemeState } from './themeTypes';

import {Dispatch} from 'redux';

export const switchMode = (mode:ThemeState) => async(dispatch: Dispatch<ThemeDispatchTypes>) => {
    dispatch({
        type: THEME_CHANGE,
        payload:mode,
    });
}