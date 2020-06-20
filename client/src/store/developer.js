import * as axios from "axios";
const SET_DEVELOPERS = "SET_DEVELOPERS";


const initialState = {
    developers: []
};

export const developer = (state = initialState, action) => {
    switch(action.type) {
        case SET_DEVELOPERS:
            return {
                ...state,
                developers: action.payload
            }
        default: return state;
    }
}

const setDevelopers = (developers) => ({type: SET_DEVELOPERS, payload: developers});


export const getDevelopers = () => async (dispatch) => {
    const response = await axios.get("http://localhost:5000");
    dispatch(setDevelopers(response.data));
}

export const addDeveloper = (developer) => async (dispatch) => {
    await axios.post("http://localhost:5000", developer);
}
