import React, { useCallback } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';
import HeaderOneOctaveSightReadingScreen from '../component/HeaderOneOctaveSightReadingScreen';
import Piano from '../component/Piano';

const OneOctave_SightReadingScreen = () => {
    return (
        <View style={styles.container}>
            <HeaderOneOctaveSightReadingScreen/>
            <Piano/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: '#F5FCFF',
        flexDirection: "column",
    },
});
export default OneOctave_SightReadingScreen;