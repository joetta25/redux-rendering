const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

const addCircle = document.getElementById('addCircle');

addCircle.addEventListener('click', e=> dispatch ({ type: 'ADD_NEW_Circle'}));