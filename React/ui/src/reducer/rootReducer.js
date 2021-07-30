import { combineReducers } from "redux";
import contactReducer from './contactReducer';
import documentReducer from "./documentReducer";
import educationReducer from "./educationReducer";
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase'

const rootReducer = combineReducers({
    firestore:firestoreReducer,
    firebase:firebaseReducer,
    contactSection:contactReducer,
    educationSection: educationReducer,
    document:documentReducer,
})
export default rootReducer;