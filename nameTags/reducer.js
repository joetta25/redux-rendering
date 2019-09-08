const initialState = [
    "Kamilah",
    "Stuart"
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;

    // Add a Name Tag
    if( type === 'ADD_NAME') {
        //! I only use action when I send new data to the HTML PAGE  
     return [
         ...state,
         
         action.name
     ]
    }
    return state;
}