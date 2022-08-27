import React, { useState, useEffect } from 'react';
import { Text, View, ImageBackground, StyleSheet } from 'react-native'
import Forecast from './Forecast';
import Constants from 'expo-constants';
import DateTime from './DateTime';

export default function Weather(props) {
    useEffect(() => {
        console.log(`fetching data with zipCode = ${props.zipCode}`)
        if (props.zipCode) {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${props.zipCode},th&units=metric&APPID=50360fdc693e3cb32910e4dd6d98d839`)
                .then((response) => response.json())
                .then((json) => {
                    setForecastInfo({
                        main: json.weather[0].main,
                        description: json.weather[0].description,
                        temp: json.main.temp,
                        icon: json.weather[0].icon
                    });
            })
            .catch((error) => {
                console.warn(error);
            });
        }
    }, [props.zipCode])

    const [forecastInfo, setForecastInfo] = useState({
        line: '',
        main: '',
        description: '',
        temp: 0
    })

    return (
        <ImageBackground source={require('../screen.jpg')} style={styles.backdrop}>
        <View style={styles.highlight}>
            <View>
                
                <View style={styles.container}>
                    <Text style={styles.place}>{props.place}</Text>
                </View>
                <View>
                    <DateTime />
                </View>
                <View >
                    <Text>{props.line}</Text>
                    <Text style={styles.titleText}>Zip code is {props.zipCode}.</Text>
                </View>
            </View>
            <View>
                <Forecast {...forecastInfo}/>
            </View>
        </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%'
    },
    highlight: {
        backgroundColor: 'rgba(0, 0, 0, 0.25)',
        width:"100%", 
        height:"100%", 
        paddingTop: Constants.statusBarHeight, 
        alignItems: 'center'
    },

    titleText: {
        fontSize: 30,
        fontWeight: "bold",
        color: 'white',
        textAlign: 'center',
        fontWeight: '300'
    },

    section: {
        flex: 1.5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 25
    },

    place: {
        fontSize: 20,
        color: 'white',
        fontWeight: '300',
        textAlign: 'center'
    },

    container: {
        backgroundColor: "#18181b99",
        borderRadius: 10,
        padding: 10,
        marginTop: 10
    },

    am: {
        fontSize: 30,
        color: 'white',
        fontWeight: '300',
        textAlign: 'center'
    }
}); 