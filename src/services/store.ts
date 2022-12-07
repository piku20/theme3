import {
    Action,
    applyMiddleware,
    createStore,
} from "redux";
import thunk, { ThunkAction } from "redux-thunk";

import rootReducer from "./rootReducer";
import { useDispatch } from "react-redux";

const middleware = applyMiddleware(thunk);
const store = createStore(rootReducer, middleware);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch();
export type AppThunk = ThunkAction<void, RootState, unknown, Action>;

export default store;