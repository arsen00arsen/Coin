import React from 'react';
import { View, StyleSheet, Text } from 'react-native';


const HomeScreen = ({ navigation }) => {
//    let coinsList= JSON.parse(localStorage.getItem('coins'))
   var data = JSON.parse(localStorage.getItem('coins'));
   Object.keys(data).forEach(function (k) {
     localStorage.setItem(k, data[k]);
   });
   console.log(data.coins.binance.coin.price, "lll")
  
    return (
        <View style={styles.container}>
            {/* <View style={styles.picker}>
                <Picker
                    selectedValue={currency}
                    onValueChange={value => setCurrency(value)}
                >
                    <Picker.Item label="AMD" value="AMD" />
                    <Picker.Item label="EUR" value="EUR" />
                    <Picker.Item label="USD" value="USD" />
               
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
            <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}> */}
                <Text >History</Text>
                {data.coins.binance.coin.price}
            {/* </TouchableOpacity> */}
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: "center"
    },
});