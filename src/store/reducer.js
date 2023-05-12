import { ADD_TO_COLLECTION, DELETE_COLLECTION, SEARCH_CHAMP } from "./Constants";
const collectionStorgae = JSON.parse(localStorage.getItem("collection")) || [];

export const initState = {
    collection: collectionStorgae,
    keySearch: "",
};

const reducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_COLLECTION: {
            const newState = {
                ...state,
                collection: [action.payload, ...state.collection],
            };
            localStorage.setItem("collection", JSON.stringify(newState.collection));

            return newState;
        }
        case DELETE_COLLECTION: {
            const newCollection = state.collection.filter((item, index) => index !== action.payload);
            const newState = {
                ...state,
                collection: [...newCollection],
            };
            localStorage.setItem("collection", JSON.stringify(newState.collection));
            return newState;
        }
        case SEARCH_CHAMP: {
            const newState = {
                ...state,
                keySearch: action.payload,
            };
            return newState;
        }
        default:
            throw new Error("invalid actions");
    }
};

export default reducer;
