import { applyMiddleware, combineReducers, createStore } from "redux";
import initialReducer from "./initialReducer";
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import searchReducer from "./search/searchReducer"
import themeReducer from "./themeMode/themeReducer";
import sortNfilterReducer from "./newUpdate/sortNfilterReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import Login_Singup_Reducer from './signup/Login_signup_reducer'

//Do not change anything and use combine reducer to combine and provide your reducer to the app.

//for storing the data inside the localstorage 
const persistConfig = {
    key: 'root',
    storage,
  }

const rootReducer = combineReducers({
    initialReducer,
    Login_Singup_Reducer,
    searchReducer,
    themeReducer,
    sortNfilterReducer,
})
const persistedReducer = persistReducer(persistConfig,rootReducer)


export const store = createStore(persistedReducer, applyMiddleware(thunk, logger))

export const persistedStore = persistStore(store)
