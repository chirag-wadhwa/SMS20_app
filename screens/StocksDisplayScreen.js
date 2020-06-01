import React from 'react';
import { View, Text, ScrollView, StyleSheet, Button } from 'react-native';

import { STOCKS } from '../data/dummy-data';

function StocksDisplayScreen({ navigation }) {

    // const list = STOCKS.map(item =>
    //     <View key={item.name} >
    //         <Text>{item.name}</Text>
    //         <Text>{item.price}</Text>
    //     </View>);
    return (
        <ScrollView>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Stocks</Text>
            </View>
            {STOCKS.map(item =>
                <View key={item.name} style={styles.container}  >
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.price}>{item.price}</Text>
                    <Button title="Buy" onPress={() => {
                        navigation.navigate('StockData', { id: item.id, name: item.name, price: item.price });
                    }} />
                </View>)}
        </ScrollView>
        // <View>
        //     <Text>Hello</Text>
        // </View>
    );
};

const styles = StyleSheet.create({
    titleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 30,
    },
    title: {
        fontFamily: 'Oxygen-Bold',
        fontSize: 25,

    },
    container: {
        width: '90%',
        left: '5%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        marginBottom: 20,
        borderWidth: 1,
        borderColor: 'black',
        borderTopLeftRadius: 15,
        borderBottomRightRadius: 15,
    },
    name: {
        fontFamily: 'Oxygen-Bold',
        fontSize: 20,
    },
    price: {
        fontFamily: 'Oxygen-Regular',
        fontSize: 20,
        paddingBottom: 15,
    },
})

export default StocksDisplayScreen;