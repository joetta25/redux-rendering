const initialState = [
    {
        radius: 50,
        color: "#FF00FF"
    },
    {
        radius: 30,
        color: "#FF99AA"
    },
    {
        radius: 60,
        color: "#0000FF"
    },
    {
        radius: 10,
        color: "#000000"
    },
];

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type } = action;

    // ACTION: Add a random circle
    if(type === 'ADD_NEW_Circle') {
        //Todo: Define what you want each value of the state to change to
        // Math.random() will generate a random number between 0-100  and each time outputs a random number 
        const radius =  Math.random() * 100;
        //! In order for a random color to show on the page we must convert the number to a string
        const color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
        return[
            // Use spread to keep the orginal copy of the state and generate the new state 
            ...state, 
            {
                radius:radius,
                color:color
            }
        ]

    }

    return state;
}