const initialState = {
    width: 100,
    height: 200,
    color: "#FF00FF"
};

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type, value } = action;

    // ACTION 1 - Increment height by 10
    if(type === 'HEIGHT_CHANGE') {
     return  {
        ...state,
            height: state.height + value,
        }
     
     
    }
    // ACTION 2 - Increment width by 10
    if(type === 'WIDTH_CHANGE') {
     return  {
            ...state,
            width: state.width + value,
         }
     
     
    }
    if(type === 'CHANGE_COLOR'){
        return {
            ...state,
                color: value,
            }
        
        
    }

    // ACTION 3 - Change the color

    return state;
}