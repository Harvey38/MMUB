import initialState from './initialState.json';
import * as actionTypes from '../actions/actionTypes';

export default function documentReducer(state=initialState.document,action){
    switch(action.type){
        case actionTypes.SET_SKIN:
            return {...state,id:action.document.id,skinCd:action.document.skinCd}
        case actionTypes.UPDATE_SKIN:
            return {...state,skinCd:action.document.skinCd}
        default:
            return state
    }
}