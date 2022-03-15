import React from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity } from 'react-native';


const AllRequests = ({ navigation }) => {
    let coinsList = JSON.parse(localStorage.getItem('coins'))
    let content = coinsList.map((elem, index) => {

        return (
            <View key={index} style={styles.container}>
                <View style={styles.coinViewBody}>
                    <Text style={styles.currencyName}>{elem.currency}</Text>
                    <View >
                        <Text style={styles.coinName}>{elem.coins.binance.coin.name}</Text>
                        <View>{1 / elem.coins.binance.coin.price}</View>
                    </View>
                </View>
                <View style={styles.coinViewBody}>
                    <Text style={styles.currencyName}>{elem.currency}</Text>
                    <View>
                        <Text style={styles.coinName}>{elem.coins.bitcoin.coin.name}</Text>
                        <View>{1 / elem.coins.bitcoin.coin.price}</View>
                    </View>
                </View>
                <View style={styles.coinViewBody}>
                    <Text style={styles.currencyName}>{elem.currency}</Text>
                    <View>
                        <Text style={styles.coinName}>{elem.coins.ethereum.coin.name}</Text>
                        <View>{1 / elem.coins.ethereum.coin.price}</View>
                    </View>
                </View>
            </View>
        )
    })
    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.title} >Все запросы</Text>
                {content}
                <TouchableOpacity style={styles.currencyButton} onPress={() => navigation.goBack()}>
                    <Text>Калькулятор</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default AllRequests;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: "center"
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: `center`
    },
    coinViewBody: {
        display: `flex`,
        alignItems: `center`,
        flexDirection: `row`,
        width: "100%",
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        padding: 7
    },
    currencyName: {
        fontSize: 17,
        fontWeight: "bold",
        paddingRight: 10
    },
    currencyButton: {
        marginTop: 40,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: `tomato`,
        padding: 15,
        display: `flex`,
        flexDirection: `row`,
        allignItems: "center",
        justifyContent: `center`
    },
    coinName: {
        fontSize: 12,
        fontWeight: "bold",
        paddingBottom: 10
    }
});