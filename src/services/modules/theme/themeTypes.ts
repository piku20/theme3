export const THEME_CHANGE = 'THEME/THEME_CHANGE';

export interface ThemeDispatchTypes{
    type:string;
    payload:ThemeState;
};

export interface ThemeState{
    mode: 'light' | 'dark';
};