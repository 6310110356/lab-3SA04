import React from 'react';
import { Text , ImageBackground , StyleSheet } from 'react-native';
import { useState } from 'react';
import Forecast from './Forecast';
export default function Weather(props) {
    const [forecastInfo, setForecastInfo] = useState({
        main: '-',
        description: '-',
        temp: 0
    })
    return (
            <ImageBackground source={require('../screen.jpg')} style={styles.backdrop}>
                <Text>Zip Code</Text>
                <Text>{props.zipCode}</Text>
                <Forecast {...forecastInfo} />
            </ImageBackground>
    );
       }
    const styles = StyleSheet.create({
        backdrop: {
            alignItems: 'center',
            width: '100%',
            height: '100%'
        },
    });
   