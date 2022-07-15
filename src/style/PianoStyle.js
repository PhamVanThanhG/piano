import { StyleSheet } from "react-native";
import { SIZES } from "../data";

const heightRemainNaturalNote = SIZES.androidHeightWithStatusBar.device * 0.1025;
const heightFlatAndHeadNaturalNote = SIZES.androidHeightWithStatusBar.device * 0.1;

const pianoStyle = StyleSheet.create({
    pianoView: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#301b7a",
        height: '27%',
        paddingTop: '0.2%',
    },
    pianoFirstRow: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    pianoSecondRow: {
        flexDirection: "row", 
        alignItems: "center", 
        justifyContent: "center", 
        marginTop: 0
    },
    headNaturalNote: {
        height: heightFlatAndHeadNaturalNote,
        width: SIZES.androidWidth.window * 0.07866,
        borderTopWidth: 1,
        borderColor: "#301b7a"
    },
    flatNote:{
        height: heightFlatAndHeadNaturalNote,
        width: SIZES.androidWidth.window * 0.07866,
        borderTopWidth: 1,
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
    },
    spaceNaturalNoteAndFlatNote: {
        height: heightFlatAndHeadNaturalNote,
        width: SIZES.androidWidth.window * 0.03934,
        borderTopWidth: 1,
        //borderLeftWidth: SIZES.androidWidth.window * 0.006,
    },
    remainNaturalNote: {
        height: heightRemainNaturalNote,
        width: SIZES.androidWidth.window * 0.118,
        borderLeftWidth: SIZES.androidWidth.window * 0.006,
        borderColor: "#301b7a",
        borderBottomEndRadius: 7,
        borderBottomStartRadius: 7,
    },
    specialNote: {
        height: heightFlatAndHeadNaturalNote,
        width: SIZES.androidWidth.window * 0.07866,
        borderTopWidth: 1,
        borderColor: "#301b7a",
        borderLeftWidth: SIZES.androidWidth.window * 0.006,
    }

})

export default pianoStyle;