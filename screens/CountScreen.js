import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Picker, TouchableOpacity, Text, ScrollView } from 'react-native';


const CountScreen = ({ navigation }) => {
    const [currency, setCurrency] = useState('RUB');
    const [coinsData, setCoinsData] = useState();

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch(`https://api.coinstats.app/public/v1/coins/bitcoin?currency=${currency}`, requestOptions)
            .then(bitcoin => bitcoin.json())
            .then(bitcoin => {
                fetch(`https://api.coinstats.app/public/v1/coins/ethereum?currency=${currency}`, requestOptions)
                    .then(ethereum => ethereum.json())
                    .then(ethereum => {
                        fetch(`https://api.coinstats.app/public/v1/coins/binance-coin?currency=${currency}`, requestOptions)
                            .then(binance => binance.json())
                            .then(binance => {
                                setAllData({ currency: currency, coins: { bitcoin, ethereum, binance } })
                            })
                            .catch(error => console.log('error', error));
                    })
                    .catch(error => console.log('error', error));
            })
            .catch(error => console.log('error', error));
    }, [currency]);

    function setAllData(allCoins) {
        let storageData = localStorage.getItem('coins');
        let coinsData = []
        if (storageData) {
            coinsData = JSON.parse(storageData)
            coinsData.push(allCoins)
        } else {
            coinsData.push(allCoins)
        }
        setCoinsData(allCoins)
        localStorage.setItem("coins", JSON.stringify(coinsData));
    }
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.picker}>
                    <Text style={styles.title} >Калькулятор</Text>
                    <View style={styles.currency}>
                        <Text style={styles.currencyText}>Выбрать валюту</Text>
                        <Picker
                            selectedValue={currency}
                            onValueChange={value => setCurrency(value)}
                        >
                            <Picker.Item label="Рубль" value="RUB" />
                            <Picker.Item label="Евро" value="EUR" />
                            <Picker.Item label="Доллар" value="USD" />
                        </Picker>
                    </View>
                    <View style={styles.coinbody}>
                        <Text style={styles.coinName}>
                            {coinsData?.coins.binance.coin.name}
                        </Text>
                        {1 / coinsData?.coins.binance.coin.price}
                    </View>
                    <View style={styles.coinbody}>
                        <Text style={styles.coinName}>
                            {coinsData?.coins.bitcoin.coin.name}
                        </Text>
                        {1 / coinsData?.coins.bitcoin.coin.price}
                    </View>
                    <View style={styles.coinbody}>
                        <Text style={styles.coinName}>
                            {coinsData?.coins.ethereum.coin.name}
                        </Text>
                        {1 / coinsData?.coins.ethereum.coin.price}
                    </View>
                </View>
                <TouchableOpacity style={styles.currencyButton} onPress={() => navigation.navigate('AllRequests')}>
                    <Text>Посмотреть все запросы</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default CountScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: "center"
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: `center`,
        marginBottom: 20
    },
    currency: {
        display: `flex`,
        flexDirection: `row`,
        allignItems: "center",
        marginBottom: 20
    },
    currencyText: {
        paddingRight: 20,
        fontSize: 20

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
    coinbody:{
        display: `flex`,
        alignItems: `center`,
        flexDirection: `column`,
        width: "100%",
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        padding: 7
    },
    coinName:{
        fontSize: 17,
        fontWeight: "bold",
        paddingBottom: 10
    }
});