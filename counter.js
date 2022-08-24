// select dom element 

const counterEl = document.getElementById('counter');
const incrementEl = document.getElementById('increment');
const decrementEl = document.getElementById('decrement');

//state identifiers

const INCREMENT = 'increment'
const DECREMENT = 'decrement'

// action creators 

const increment =(value)=>{
    return {
        
            type: INCREMENT, //mandetory
            payload: value
    }
}
const decrement =(value)=>{
    return {
        
            type: DECREMENT, //mandetory
            payload: value
    }
}
// initial state 

const initialState ={
    value : 0,
};

// create reducer function 

const counterReducer =(state=initialState, action)=>{
     if(action.type === INCREMENT){
        return {
            ...state,
            value: state.value +action.payload
        }
     }else if(action.type ===DECREMENT){
        return {
            ...state,
            value: state.value-action.payload,
        }
     }else {
        return state;
     }
}

const store = Redux.createStore(counterReducer);

const render =()=>{
    const state = store.getState();
    counterEl.innerText= state.value.toString();
    
}


render()
store.subscribe(render)


incrementEl.addEventListener('click', ()=>{
    store.dispatch(increment(5));
    
})
decrementEl.addEventListener('click', ()=>{
    store.dispatch(decrement(2));
    
})


