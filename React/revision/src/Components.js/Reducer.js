import React,{useReducer, useState} from 'react'

const ACTIONS = {
    INCREMENT:'increment',
    DECREMENT:'decrement',
    RESET:'reset'
}
function reducer(count,action){
    switch(action.type){
        case ACTIONS.INCREMENT:
            return count+1
        case ACTIONS.DECREMENT:
            return count-1
        case ACTIONS.RESET:
            return 0
        default:
            return count
            }

}
function Reducer() {
    const [count,dispatch] = useReducer(reducer,0);
    return (
        <div>
            <span>{count}</span>
            <button onClick={()=>dispatch({type:ACTIONS.INCREMENT})} >+</button>
            <button onClick={()=>dispatch({type:ACTIONS.DECREMENT})} >-</button>
            <button onClick={()=>dispatch({type:ACTIONS.RESET})} >Reset</button>
        </div>
    )
}

export default Reducer
