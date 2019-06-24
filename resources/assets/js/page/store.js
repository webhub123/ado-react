import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';
import promise from 'redux-promise-middleware'
import thunk from 'redux-thunk';

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

import profileReducer from './reducers/profileReducer';

const persistConfig = {
    key : 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig, profileReducer)

const middleware = applyMiddleware(
    thunk,
    promise,
    createLogger()
);

const store = createStore(
    persistedReducer,
    composeWithDevTools(
        middleware
    )
); 

const persistor = persistStore(store)

export { store, persistor }; 