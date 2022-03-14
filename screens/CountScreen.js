import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Picker, TouchableOpacity, Text } from 'react-native';
import { useForm, Controller } from "react-hook-form";

const CountScreen = ({ navigation }) => {
    const [currency, setCurrency] = useState();
    const [bitcoin, setBitcoin] = useState();
    const [ethereum, setEthereum] = useState();
    const [binance, setBinance] = useState();

    useEffect(() => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch(`https://api.coinstats.app/public/v1/coins/bitcoin?currency=${currency}`, requestOptions)
            .then(response => response.json())
            .then(result => setBitcoin(result))
            .catch(error => console.log('error', error));
        fetch(`https://api.coinstats.app/public/v1/coins/ethereum?currency=${currency}`, requestOptions)
            .then(response => response.json())
            .then(result => setEthereum(result))
            .catch(error => console.log('error', error));
        fetch(`https://api.coinstats.app/public/v1/coins/binance-coin?currency=${currency}`, requestOptions)
            .then(response => response.json())
            .then(result => setBinance(result))
            .catch(error => console.log('error', error));
    }, [currency]);

    let object = { coins: { bitcoin, ethereum, binance } }
    localStorage.setItem("coins", JSON.stringify(object));
    
    return (
        <View style={styles.container}>
            <View style={styles.picker}>
                <Picker
                    selectedValue={currency}
                    onValueChange={value => setCurrency(value)}
                >
                    <Picker.Item label="AMD" value="AMD" />
                    <Picker.Item label="EUR" value="EUR" />
                    <Picker.Item label="USD" value="USD" />
                    {/* <Picker.Item label="Bitcoin" value="BTC" /> */}
                </Picker>
                <View>
                    <Text>
                        {bitcoin?.coin.name}
                    </Text>
                    {1 / bitcoin?.coin.price}
                </View>
                <View>
                    <Text>
                        {ethereum?.coin.name}
                    </Text>
                    {1 / ethereum?.coin.price}
                </View>
                <View>
                    <Text>
                        {binance?.coin.name}
                    </Text>
                    {1 / binance?.coin.price}
                </View>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
                <Text >History</Text>
            </TouchableOpacity>
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
});