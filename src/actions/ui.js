import { SET_ERROR, REMOVE_ERROR, START_LOADING, FINISH_LOADING } from './../types/index';

export const setError = (msgError) => ({
    type: SET_ERROR,
    payload: msgError,
})

export const removeError = () => ({
    type: REMOVE_ERROR,
})

export const startLoading = () => ({
    type: START_LOADING,
})

export const finishLoading = () => ({
    type: FINISH_LOADING,
})