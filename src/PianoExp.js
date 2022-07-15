import React, { useCallback } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Button
} from 'react-native';
import SoundPlayer from 'react-native-sound-player';
import { SIZES } from './data';
import pianoStyle from './style/PianoStyle';

const Piano = () => {
    const [state, setState] = React.useState({
        colorC: "white",
        colorCs: "black",
        colorD: "white",
        colorDs: "black",
        colorE: "white",
        colorF: "white",
        colorFs: "black",
        colorG: "white",
        colorGs: "black",
        colorA: "white",
        colorAs: "black",
        colorB: "white",
    });
    // preload sounds
    var sound = {};
    const soundList = ["c4", "c4s", "d4", "d4s", "e4", "f4", "f4s", "g4", "g4s", "a4", "a4s", "b4"];
    // soundList.forEach(note => {
    //   sound[note] = new Sound(note + ".mp3", Sound.MAIN_BUNDLE, error => {
    //     if (error) {
    //       console.log("failed to load the sound.", error);
    //     }
    //   })
    // });

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

    const stroke = (note) => {
        playSound(note);
        // change backgroundColor
        switch (note) {
            case "c4":
                setState({ ...state, colorC: "rgba(1, 1, 1, 0.1)" })
                break;
            case "c4s":
                setState({ ...state, colorCs: "rgba(0, 0, 0, 0.5)" })
                break;
            case "d4":
                setState({ ...state, colorD: "rgba(1, 1, 1, 0.1)" })
                break;
            case "d4s":
                setState({ ...state, colorDs: "rgba(0, 0, 0, 0.5)" })
                break;
            case "e4":
                setState({ ...state, colorE: "rgba(1, 1, 1, 0.1)" })
                break;
            case "f4":
                setState({ ...state, colorF: "rgba(1, 1, 1, 0.1)" })
                break;
            case "f4s":
                setState({ ...state, colorFs: "rgba(0, 0, 0, 0.5)" })
                break;
            case "g4":
                setState({ ...state, colorG: "rgba(1, 1, 1, 0.1)" })
                break;
            case "g4s":
                setState({ ...state, colorGs: "rgba(0, 0, 0, 0.5)" })
                break;
            case "a4":
                setState({ ...state, colorA: "rgba(1, 1, 1, 0.1)" })
                break;
            case "a4s":
                setState({ ...state, colorAs: "rgba(0, 0, 0, 0.5)" })
                break;
            case "b4":
                setState({ ...state, colorB: "rgba(1, 1, 1, 0.1)" })
                break;
        }

        // play sound
        // setTimeout(() => {
        //   sound[note].play(success => {
        //     if (success) {
        //       console.log("successfully finished playing.");
        //     } else {
        //       console.log("failed to play the sound.");
        //     }
        //   });
        // }, 1);

        // setPressedNote(note);
        // if (global.sound) {
        //   console.log(global.sound);
        //   global.sound.stop();
        // };
        // global.sound = sound[note];
        // sound[note].play(success => {
        //   if (success) {
        //     //setPressedNote(note);
        //     console.log("successfully finished playing.");
        //   } else {
        //     console.log("failed to play the sound.");
        //   }
        // });
    }
    const stop = (note) => {
        // change backgroundColor
        switch (note) {
            case "c4":
                setState({ ...state, colorC: "white" })
                break;
            case "c4s":
                setState({ ...state, colorCs: "black" })
                break;
            case "d4":
                setState({ ...state, colorD: "white" })
                break;
            case "d4s":
                setState({ ...state, colorDs: "black" })
                break;
            case "e4":
                setState({ ...state, colorE: "white" })
                break;
            case "f4":
                setState({ ...state, colorF: "white" })
                break;
            case "f4s":
                setState({ ...state, colorFs: "black" })
                break;
            case "g4":
                setState({ ...state, colorG: "white" })
                break;
            case "g4s":
                setState({ ...state, colorGs: "black" })
                break;
            case "a4":
                setState({ ...state, colorA: "white" })
                break;
            case "a4s":
                setState({ ...state, colorAs: "black" })
                break;
            case "b4":
                setState({ ...state, colorB: "white" })
                break;
        }

        setTimeout(() => {
            // gradually decrease the volume
            for (let i = 0; i < 200; i++) {
                SoundPlayer.setVolume(1.0 - i / 200.);
                console.log(1.0 - i / 200.);
            }
        }, 1)
    }
    return (
        <View style={pianoStyle.pianoView}>
            <View style={{ ...pianoStyle.pianoFirstRow }}>
                <View
                    style={{ backgroundColor: state.colorC, ...pianoStyle.specialNote, }} >
                </View >
                <View
                    onTouchStart={() => stroke("c4s")}
                    onTouchEnd={() => stop("c4s")}
                    style={{ backgroundColor: state.colorCs, ...pianoStyle.flatNote }} >
                </View >
                <View
                    style={{ backgroundColor: state.colorD, ...pianoStyle.spaceNaturalNoteAndFlatNote }} >
                </View >
                <View
                    onTouchStart={() => stroke("d4s")}
                    onTouchEnd={() => stop("d4s")}
                    style={{ backgroundColor: state.colorDs, ...pianoStyle.flatNote }} >
                </View >
                <View
                    style={{ backgroundColor: state.colorE, ...pianoStyle.headNaturalNote }} >
                </View >
                <View
                    style={{ backgroundColor: state.colorF, ...pianoStyle.specialNote }} >
                </View >
                <View
                    onTouchStart={() => stroke("f4s")}
                    onTouchEnd={() => stop("f4s")}
                    style={{ backgroundColor: state.colorFs, ...pianoStyle.flatNote }} >
                </View >
                <View
                    style={{ backgroundColor: state.colorG, ...pianoStyle.spaceNaturalNoteAndFlatNote }} >
                </View >
                <View
                    onTouchStart={() => stroke("g4s")}
                    onTouchEnd={() => stop("g4s")}
                    style={{ backgroundColor: state.colorGs, ...pianoStyle.flatNote }} >
                </View >
                <View
                    style={{ backgroundColor: state.colorA, ...pianoStyle.spaceNaturalNoteAndFlatNote }} >
                </View >
                <View style={{backgroundColor: state.colorB}}>
                    <View
                        onTouchStart={() => stroke("a4s")}
                        onTouchEnd={() => stop("a4s")}
                        style={{ backgroundColor: state.colorAs, ...pianoStyle.flatNote }} >
                    </View >
                </View>
                <View
                    style={{ backgroundColor: state.colorB, ...pianoStyle.headNaturalNote, borderRightWidth: 1 }} >
                </View >

            </View>

            <View style={pianoStyle.pianoSecondRow}>

                <View
                    onTouchStart={() => stroke("c4")}
                    onTouchEnd={() => stop("c4")}
                    style={{ backgroundColor: state.colorC, ...pianoStyle.remainNaturalNote }} >
                </View >
                <View
                    onTouchStart={() => stroke("d4")}
                    onTouchEnd={() => stop("d4")}
                    style={{ backgroundColor: state.colorD, ...pianoStyle.remainNaturalNote }} >
                </View >
                <View
                    onTouchStart={() => stroke("e4")}
                    onTouchEnd={() => stop("e4")}
                    style={{ backgroundColor: state.colorE, ...pianoStyle.remainNaturalNote }} >
                </View >
                <View
                    onTouchStart={() => stroke("f4")}
                    onTouchEnd={() => stop("f4")}
                    style={{ backgroundColor: state.colorF, ...pianoStyle.remainNaturalNote }} >
                </View >
                <View
                    onTouchStart={() => stroke("g4")}
                    onTouchEnd={() => stop("g4")}
                    style={{ backgroundColor: state.colorG, ...pianoStyle.remainNaturalNote }} >
                </View >
                <View
                    onTouchStart={() => stroke("a4")}
                    onTouchEnd={() => stop("a4")}
                    style={{ backgroundColor: state.colorA, ...pianoStyle.remainNaturalNote }} >
                </View >
                <View
                    onTouchStart={() => stroke("b4")}
                    onTouchEnd={() => stop("b4")}
                    style={{ backgroundColor: state.colorB, ...pianoStyle.remainNaturalNote, borderRightWidth: 1 }} >
                </View >

            </View>
        </View>
    );
};

export default Piano;