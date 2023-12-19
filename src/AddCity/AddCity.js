import React from 'react'
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import uuid from 'react-native-uuid';
import {colors} from '../theme'
import {useDispatch} from "react-redux";
import {addCityToStore} from "../../app/citiesSlice";

const AddCity = (props) => {
    const [city, setCity] = React.useState('')
    const [country, setCountry] = React.useState('')
    const dispatch = useDispatch();

    const onChangeText = (key, value) => {
        if (key === 'city') setCity(value)
        else if (key === 'country') setCountry(value)
    }

    const submit = () => {
        if (city === '' || country === '') alert('please complete form')
        const newCity = {
            city: city,
            country: country,
            id: uuid.v4(),
            locations: []
        }
        dispatch(addCityToStore(newCity));
        console.log(newCity)
        setCity('')
        setCountry('')
        props.navigation.navigate('Cities')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Cities</Text>
            <TextInput
                placeholder='City name'
                onChangeText={val => onChangeText('city', val)}
                style={styles.input}
                value={city}
            />
            <TextInput
                placeholder='Country name'
                onChangeText={val => onChangeText('country', val)}
                style={styles.input}
                value={country}
            />
            <TouchableOpacity onPress={submit}>
                <View style={styles.button}>
                    <Text style={styles.buttonText}>Add City</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 50,
        backgroundColor: '#666',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 18
    },
    heading: {
        color: 'white',
        fontSize: 40,
        marginBottom: 10,
        alignSelf: 'center'
    },
    container: {
        backgroundColor: colors.primary,
        flex: 1,
        justifyContent: 'center'
    },
    input: {
        margin: 10,
        backgroundColor: 'white',
        paddingHorizontal: 8,
        height: 50
    }
})

export default AddCity