const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

const Form = document.getElementById('nameForm');

//! I must use on submit when submitting new data to the HTML PAGE

Form.addEventListener('submit', e=> {
    e.preventDefault();

    //TODO: This is grabbing the forms name value so that i have access to whatever name i input into the input field 
    const name = Form.elements.name.value;

    //TODO: Then i want the reducer to chanage the state of the page 
    dispatch({type: 'ADD_NAME', name:name});
})