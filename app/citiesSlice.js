import {createSlice} from '@reduxjs/toolkit'

export const citiesSlice = createSlice({
    name: 'counter',
    initialState: {
        cities: [
            {
                city: 'Paris',
                country: 'France',
                id: 0,
                locations: [
                    {
                        name: 'Eiffel Tower',
                        info: 'The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France.'
                    },
                    {
                        name: 'The Louvre',
                        info: 'The Louvre, or the Louvre Museum, is the world\'s largest art museum and a historic monument in Paris, France.'
                    },
                    {
                        name: 'Palais Garnier',
                        info: 'The Palais Garnier is a 1,979-seat opera house, which was built from 1861 to 1875 for the Paris Opera.'
                    }
                ]
            },
            {
                city: 'Tokyo',
                country: 'Japan',
                id: 1,
                locations: [
                    {
                        name: 'Tokyo Skytree',
                        info: 'Tokyo Skytree is a broadcasting and observation tower in Sumida, Tokyo.'
                    },
                    {
                        name: 'Meiji Shrine',
                        info: 'Meiji Shrine, located in Shibuya, Tokyo, is the Shinto shrine that is dedicated to the deified spirits of Emperor Meiji and his wife, Empress Shōken.'
                    },
                    {
                        name: 'Tokyo Tower',
                        info: 'Tokyo Tower is a communications and observation tower in the Shiba-koen district of Minato, Tokyo.'
                    }
                ]
            }
        ]
    },
    reducers: {
        addCityToStore: (state, action) => {
            state.cities.push(action.payload);
        },
        addLocationToStore: (state, action) => {
            const index = state.cities.findIndex((item) => {
                console.log(item.id, action.payload.city.id)
                return item.id === action.payload.city.id;
            });
            const chosenCity = state.cities[index];
            console.log(index)
            chosenCity.locations.push(action.payload.location);
            const citiesNew = [
                ...state.cities.slice(0, index),
                chosenCity,
                ...state.cities.slice(index + 1),
            ];
            state.cities = citiesNew;
        }
    }
})

// Action creators are generated for each case reducer function
export const {
    addCityToStore,
    addLocationToStore
} = citiesSlice.actions

export default citiesSlice.reducer