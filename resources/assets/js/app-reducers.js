import {combineReducers} from 'redux';
import profileReducer from './profile/profile-reducer';

const Reducers = combineReducers({
    profile: profileReducer
})


export default Reducers;