import React, { useCallback } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Button
} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import Key from './Key';

const Piano = () => {
    const soundList = ["a3s", "b3", "c4", "c4s", "d4", "d4s", "e4", "f4", "f4s", "g4", "g4s", "a4", "a4s", "b4", "c5", "c5s"];
    const activeNotes = [1, 9];
    const playSound = useCallback(
        (note) => {
            SoundPlayer.setVolume(1);
            try {
                SoundPlayer.playSoundFile(note, 'mp3');
            } catch (error) {
                console.log("Cannot play the sound file: " + error);
            }
        }
    );

    const stroke = React.useCallback((note) => {
        //console.log(note);
        playSound(note);
    })
    const stop = (note) => {
        // change backgroundColor

        setTimeout(() => {
            // gradually decrease the volume
            for (let i = 0; i < 200; i++) {
                SoundPlayer.setVolume(1.0 - i / 200.);
                //console.log(1.0 - i / 200.);
            }
        }, 1)
    }
    var i = -1;
    const keys = soundList.map((element, index) => {
        var active = false;
        if(i > 0){
            if (i >= activeNotes[0] && i <= activeNotes[1]) {
                active = true;
                if (element.length == 2) {
                    i++;
                }
            }
        }else{
            i++;
        }
        return (
            <Key
                key={index}
                note={element}
                active={active}
                start={() => stroke(element)}
                stop={() => stop(element)}
            />
        );

    })
    return (
        <View style={styles.pianoView}>
            {keys}
        </View>
    );
};

const styles = StyleSheet.create({
    pianoView: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#301b7a",
        height: '27%',
        paddingTop: '0.2%',
        justifyContent: 'center'
    }
})
export default Piano;