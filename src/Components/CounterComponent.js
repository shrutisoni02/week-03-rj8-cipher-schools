import React, {useReducer} from "react";
import ErrorBoundary from "./ErrorBoundary";


const countReducer=(state,action)=>{
    switch(action.type){
        case "increment":
            if(state.count + action.payload >= 3){
                throw new Error("Count cannot to be greater than 3")
            }
            return{count:state.count+action.payload};
        case "decrement":
            return{count:state.count-action.payload};
        default:
            return state;

    }
}

const CounterComponent=()=>{
    const [state, dispatch]=useReducer(countReducer,{count:0})
    return(
        <ErrorBoundary>
       <div>
        <h1>The count is{state.count}</h1>
        <button onClick={()=>dispatch({type:"increment", payload:2})}>Increse</button>
        <button onClick={()=>dispatch({type:"decrement",payload:2})}>decrese</button>

       </div>
</ErrorBoundary>
    )


}

export default CounterComponent