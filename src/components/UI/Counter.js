import React, { Fragment,useReducer } from "react";


const initialCount =1;
const countReducer = (state,action) => {
    if(action.type === "DECREMENT"){
        if(state>1){
            return state-1
        }
        
    }
    if(action.type === "INCREMENT"){
        
        return state+1
    }
    return state
}

const Counter = () => {
    const [countState, dispatch] = useReducer(countReducer,initialCount);
    const decrement = () => {
        dispatch({type:"DECREMENT"})
    }
    const increment = () => {
        dispatch({type:"INCREMENT"})
    }
return (
    <Fragment>
    <div>
        <button onClick={decrement}> - </button>
        <span>{countState}</span>
        <button onClick={increment}> + </button>
    </div>
    </Fragment>
)
}

export default Counter;