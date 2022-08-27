import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native'

export default function Forecast(props) {
    return (
        <View >
            <Image source={{uri: `https://openweathermap.org/img/wn/${props.icon}@2x.png`}}
                style={{width: 100, height: 100}}/>
            <Text style={style.normalText}>{props.line}</Text>
            <Text style={style.Text}>main</Text>
            <Text style={style.normalText}>{props.main}</Text>
            <Text style={style.normalText}>description</Text>
            <Text style={style.normalText}>{props.description}</Text>
            <View style= {{
                flexDirection: "row",
                justifyContent: 'center',
            }}></View>
            <Text style={style.Text}>{props.temp} <Text style={style.normalText}>°C</Text></Text>
        </View>
    );
}
const style = StyleSheet.create(
    {
        normalText: {
            textAlign: 'center',
            fontSize: 30,
            fontWeight: "bold",
            color: 'white',
            fontWeight: '600'
        },

        Text: {
            fontSize: 45, 
            fontWeight: "bold", 
            color: 'white', 
            textAlign: 'center',
            lineHeight: 60,
            fontWeight: '650'
        }
    }
)