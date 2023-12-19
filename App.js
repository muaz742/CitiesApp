import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from "./src";
import store from "./app/store";
import {Provider} from "react-redux";

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Tabs/>
            </NavigationContainer>
        </Provider>
    );
}