const { createStore } = Redux;
const { subscribe, dispatch, getState } = createStore(reducer);

subscribe(() => render(getState()));

dispatch({ type: null }); // Here we're making a call to dispatch() - this triggers the first render.

// Write DOM event listeners here, make them dispatch actions to the Redux store 

const likesButton = document.getElementById('sortLikes');
likesButton.addEventListener('click', e => dispatch({type: 'SORT_LIKES'}));

const retweetsButton = document.getElementById('sortRetweets');
retweetsButton.addEventListener('click', e=> dispatch({type: 'SORT_RETWEETS'}));

const replyButton = document.getElementById('sortReplies');
replyButton.addEventListener('click', e=> dispatch({type: 'SORT_REPLIES'}));


