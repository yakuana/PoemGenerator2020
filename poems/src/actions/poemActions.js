import axios from 'axios'; 

// Phillis Wheatley Actions  
export const FETCH_WHEATLEY_POEM_DATA_START = 'FETCH_WHEATLEY_POEM_DATA_START'; 
export const FETCH_WHEATLEY_POEM_DATA_SUCCESS = 'FETCH_WHEATLEY_POEM_DATA_SUCCESS'; 
export const FETCH_WHEATLEY_POEM_DATA_FAILURE = 'FETCH_WHEATLEY_POEM_DATA_FAILURE'; 

// Paul Laurence Dunbar Acitons 
export const FETCH_DUNBAR_POEM_DATA_START = 'FETCH_DUNBAR_POEM_DATA_START'; 
export const FETCH_DUNBAR_POEM_DATA_SUCCESS = 'FETCH_DUNBAR_POEM_DATA_SUCCESS'; 
export const FETCH_DUNBAR_POEM_DATA_FAILURE = 'FETCH_DUNBAR_POEM_DATA_FAILURE'; 

// Jupiter Hammon Actions  
export const FETCH_HAMMON_POEM_DATA_START = 'FETCH_HAMMON_POEM_DATA_START'; 
export const FETCH_HAMMON_POEM_DATA_SUCCESS = 'FETCH_HAMMON_POEM_DATA_SUCCESS'; 
export const FETCH_HAMMON_POEM_DATA_FAILURE = 'FETCH_HAMMON_POEM_DATA_FAILURE'; 


export const getWheatleyData = () => dispatch => {
    // loading data 
    dispatch({ type: FETCH_WHEATLEY_POEM_DATA_START}); 

    axios 
        .get('https://poetrydb.org/author/Phillis%20Wheatley')
        .then(response => {
            // successful 
            console.log("DUNBAR response data", response.data)

            dispatch({ type: FETCH_WHEATLEY_POEM_DATA_SUCCESS, payload: response.data})
        })
        .catch(error => {
            // unsuccessful 
            dispatch({ type: FETCH_WHEATLEY_POEM_DATA_FAILURE, payload: error.response});
        });
};

export const getDunbarData = () => dispatch => {
    // loading data 
    dispatch({ type: FETCH_DUNBAR_POEM_DATA_START}); 

    axios 
        .get('https://poetrydb.org/author/Paul%20Laurence%20Dunbar')
        .then(response => {
            // successful 
            console.log("DUNBAR response data", response.data)

            dispatch({ type: FETCH_DUNBAR_POEM_DATA_SUCCESS, payload: response.data})
        })
        .catch(error => {
            // unsuccessful 
            dispatch({ type: FETCH_DUNBAR_POEM_DATA_FAILURE, payload: error.response});
        });
};

export const getHammonData = () => dispatch => {
    // loading data 
    dispatch({ type: FETCH_HAMMON_POEM_DATA_START}); 

    axios 
        .get('https://poetrydb.org/author/')
        .then(response => {
            // successful 
            console.log("HAMMON response data", response.data)

            dispatch({ type: FETCH_HAMMON_POEM_DATA_SUCCESS, payload: response.data})
        })
        .catch(error => {
            // unsuccessful 
            dispatch({ type: FETCH_HAMMON_POEM_DATA_FAILURE, payload: error.response});
        });
};
