import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const StockData = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>{props.route.params.name}</Text>
            <Text style={styles.data}>{props.route.params.price}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 30,
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontFamily: 'Oxygen-bold',
        fontSize: 30,
        paddingBottom: 20,
    },
    data: {
        fontFamily: 'Oxygen-regular',
        fontSize: 20,
    },
})

export default StockData;