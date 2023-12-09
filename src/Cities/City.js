import React from 'react'
import {View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity} from 'react-native'
import CenterMessage from '../components/CenterMessage'
import {colors} from '../theme'

const City = (props) => {
    console.log(props.route.params)
    props.navigation.setOptions({
        title: props.route.params.city.city,
        headerTitleStyle: {
            color: 'white',
            fontSize: 20,
            fontWeight: '400'
        }
    })
    const {city} = props.route.params

    const [name, setName] = React.useState('')
    const [info, setInfo] = React.useState('')

    const onChangeText = (key, value) => {
        if (key === 'name') setName(value)
        else if (key === 'info') setInfo(value)
    }

    const addLocation = () => {
        if (name === '' || info === '') return
        const location = {
            name: name,
            info: info
        }
        props.route.params.screenProps.addLocation(location, city)
        setName('')
        setInfo('')
    }

    return (
        <View style={{flex: 1}}>
            <ScrollView contentContainerStyle={[!city.locations.length && {flex: 1}]}>
                <View
                    style={[styles.locationsContainer, !city.locations.length && {flex: 1, justifyContent: 'center'}]}>
                    {!city.locations.length && <CenterMessage message='No locations for this city!'/>}
                    {city.locations.map((location, index) => (
                        <View key={index} style={styles.locationContainer}>
                            <Text style={styles.locationName}>{location.name}</Text>
                            <Text style={styles.locationInfo}>{location.info}</Text>
                        </View>
                    ))}
                </View>
            </ScrollView>
            <TextInput
                onChangeText={val => onChangeText('name', val)}
                placeholder='Location name'
                value={name}
                style={styles.input}
                placeholderTextColor='white'
            />
            <TextInput
                onChangeText={val => onChangeText('info', val)}
                placeholder='Location info'
                value={info}
                style={[styles.input, styles.input2]}
                placeholderTextColor='white'
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={addLocation}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Add Location</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    locationsContainer: {
        paddingBottom: 104
    },
    input: {
        height: 50,
        backgroundColor: colors.primary,
        color: 'white',
        paddingHorizontal: 8,
        position: 'absolute',
        width: '100%',
        bottom: 104,
        left: 0
    },
    input2: {
        bottom: 52
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%'
    },
    button: {
        height: 50,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white'
    },
    locationContainer: {
        padding: 10,
        borderBottomColor: colors.primary,
        borderBottomWidth: 2
    },
    locationName: {
        fontSize: 20
    },
    locationInfo: {
        color: 'rgba(0, 0, 0, .5)'
    }
})

export default City