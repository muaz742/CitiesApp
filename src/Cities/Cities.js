import React, {useEffect} from 'react'
import {View, Text, StyleSheet, ScrollView, Pressable} from 'react-native'
import {useSelector} from 'react-redux'

import CenterMessage from '../components/CenterMessage'

import {colors} from '../theme'

const Cities = (props) => {
    const cities = useSelector((state) => state.cities.cities)
    const navigate = (item) => {
        props.navigation.navigate('City', {city: item})
    }
    return (
        <ScrollView contentContainerStyle={[!cities.length && {flex: 1}]}>
            <View style={[!cities.length && {justifyContent: 'center', flex: 1}]}>
                {
                    !cities.length && <CenterMessage message='No saved cities!'/>
                }
                {
                    cities.map((item, index) => (
                        <Pressable onPress={() => navigate(item)} key={index}>
                            <View style={styles.cityContainer}>
                                <Text style={styles.city}>{item.city}</Text>
                                <Text style={styles.country}>{item.country}</Text>
                            </View>
                        </Pressable>
                    ))
                }
            </View>
        </ScrollView>
    )

}

export default Cities;

const styles = StyleSheet.create({
    cityContainer: {
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: colors.primary
    },
    city: {
        fontSize: 20,
    },
    country: {
        color: 'rgba(0, 0, 0, .5)'
    },
})