import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from "./src";

export default function App() {
    const initialState = [
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
    ];
    const [cities, setCities] = useState(initialState);
    const addCity = (city) => {
        // const newCities = cities;
        cities.push(city);
        setCities(cities);
    }
    const addLocation = (location, city) => {
        const index = cities.findIndex((item) => {
            return item.id === city.id;
        });
        const chosenCity = cities[index];
        chosenCity.locations.push(location);
        const citiesNew = [
            ...cities.slice(0, index),
            chosenCity,
            ...cities.slice(index + 1),
        ];
        setCities(citiesNew)
    };

    return (
        <NavigationContainer>
            <Tabs
                screenProps={{
                    cities: cities,
                    addCity: addCity,
                    addLocation: addLocation,
                }}
            />
        </NavigationContainer>
    );
}