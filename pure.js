const state ={
    value : 5,
};
//impure function
function impure(){
    state.value =6;
}

impure();