import React, { useCallback } from "react";
import { Button, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { NOTE_TO_SHOW, SIZES } from "../data/constant";

const heightRemainNaturalNote = SIZES.androidHeightWithStatusBar.device * 0.2025;
const heightFlat = SIZES.androidHeightWithStatusBar.device * 0.1;
const naturalNoteWidth = SIZES.androidWidth.window * 0.112;
const flatNoteWidth = SIZES.androidWidth.window * 0.098;
const marginOfFlatNote = SIZES.androidWidth.window * 0.0464;
const marginOfNaturalNote = SIZES.androidWidth.window * 0.0051;

const Key = ({ note, start, stop, active }) => {
    ///PROPERTIES
    //Check note is flat
    const isFlat = note.length == 3;
    var noteToShow = note[0];
    if (isFlat) {
        noteToShow += "s";
    }
    const defaultBGColor = active ? (isFlat ? 'black' : 'white') : (isFlat ? 'black' : "#aeaeb2");
    const [backgroundColor, setBackgroundColor] = React.useState(defaultBGColor);

    //Value for c4 note
    //Check not is c4
    var isC4 = (note == "c4");
    var defaultC4Color = isC4 && "#1b74d5";
    const [c4Color, setC4Color] = React.useState(defaultC4Color);


    ///METHOD

    //Stoking note
    const strokeNote = useCallback(() => {
        if (active) {
            start();
            //UI
            setBackgroundColor("#d8d8d8");
            if (isC4) {
                setC4Color("#1ae4f4");
            }
        }
    }, [start]);

    //Stoping to stroke note
    const stopNote = useCallback(() => {
        if (active) {
            stop();
            //UI
            setBackgroundColor(defaultBGColor);
            if (isC4) {
                setC4Color(defaultC4Color);
            }
        }
    }, [stop]);

    return (
        <View
            style={isFlat ? { ...styles.flatKey, backgroundColor } : { ...styles.key, backgroundColor, marginLeft: (note[0] == "f" || note[0] == "c") ? marginOfNaturalNote : 0 }}
            onTouchStart={strokeNote}
            onTouchEnd={stopNote}
        >
            <Text
                style={{
                    ...styles.keyText,
                    color: isFlat ? '#ffffff' : (isC4 ? 'white' : "#707070"),
                    backgroundColor: c4Color,
                    paddingHorizontal: isC4 ? 3 : 0,
                    paddingVertical: isC4 ? 2 : 0,
                    borderRadius: 20
                }}
            >{NOTE_TO_SHOW[noteToShow]}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    key: {
        height: heightRemainNaturalNote,
        width: naturalNoteWidth,
        borderColor: "#301b7a",
        justifyContent: "flex-end",
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 5,
    },
    keyText: {
        position: 'relative',
        alignSelf: "center",
        marginBottom: 7,
        fontSize: 13
    },
    flatKey: {
        position: 'relative',
        marginLeft: -marginOfFlatNote,
        marginRight: -marginOfFlatNote,
        height: heightFlat,
        width: flatNoteWidth,
        zIndex: 2,
        justifyContent: "flex-end",
        borderBottomLeftRadius: 7,
        borderBottomRightRadius: 7,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 5,
    },
    c4s: {
        backgroundColor: "#1b74d5"
    }
})

export default Key;