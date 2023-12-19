import {configureStore} from '@reduxjs/toolkit'
import citiesReducer from "./citiesSlice";

export default configureStore({
    reducer: {
        cities: citiesReducer
    }
})