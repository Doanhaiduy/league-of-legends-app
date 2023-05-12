import { ADD_TO_COLLECTION, DELETE_COLLECTION, SEARCH_CHAMP } from "./Constants";

export const addToCollection = (payload) => {
    return {
        type: ADD_TO_COLLECTION,
        payload,
    };
};

export const deleteCollection = (payload) => {
    return {
        type: DELETE_COLLECTION,
        payload,
    };
};

export const searchChamp = (payload) => {
    return {
        type: SEARCH_CHAMP,
        payload,
    };
};
