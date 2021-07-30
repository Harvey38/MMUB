import initialState from './initialState.json';
import * as actionTypes from '../actions/actionTypes'

export default function educationReducer(state=initialState.educationSection,action){
    switch(action.type)
    {
        case actionTypes.ADD_EDUCATION:
            return {...action.educationSection}

        case actionTypes.UPDATE_EDUCATION:
            return {...action.educationSection}

        default:
            return state;
    }
}