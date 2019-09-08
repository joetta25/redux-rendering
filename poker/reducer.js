const initialState = [
    {
        value: "K",
        suit: "C"
    },
    {
        value: "K",
        suit: "D"
    }
];

//TODO: Define a function that grabs the random array

function getRandomFromArray(array){
    return array[Math.floor(Math.random()*array.length)]
}

//TODO: Define a function that grab the random suits 

function getRandomSuit() {
    const suits = ['C', 'D', 'H', 'S'];
    return getRandomFromArray(suits); // I will get a random letter based off the getRandomFromArray function 
}

function getRandomValue(){
    const value = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'K', 'A'];
    return getRandomFromArray(value);
}

const reducer = (state = initialState, action) => {
    // Handle actions here - make sure you don't mutate the state!
    const { type, index } = action;

    // ACTION - Change either card to a random new one (Try implementing one action that both buttons dispatch)
    
    if(type === 'CHANGE'){
        //TODO: put the update state in the NEWSTATE variable 
        const newState = [...state];
        //TODO: Then grab the newState function button at index 0 or 1
            newState[index]= { 
            //TODO: Then call each key and return the new values 
            value: getRandomValue(),
            suit: getRandomSuit(),

        }
        return newState 
        
    }
    return state;
}