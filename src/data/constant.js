import { Dimensions, StatusBar } from "react-native";
const androidHeightWithStatusBar = {
  device: Dimensions.get('screen').height,
  window: Dimensions.get('window').height,
  statusBar: StatusBar.currentHeight,
  bottomTap: Dimensions.get('screen').height - (Dimensions.get('window').height + StatusBar.currentHeight),
}
const androidWidth = {
  device: Dimensions.get('screen').width,
  window: Dimensions.get('window').width
}

export const SIZES = {
  // App dimension
  androidHeightWithStatusBar,
  androidWidth
};

export const NOTE_TO_SHOW = {
    c: 'Do',
    cs: 'Do#',
    d: 'Re',
    ds: 'Mi♭',
    e: 'Mi',
    f: 'Fa',
    fs: 'Fa#',
    g: 'Sol',
    gs: 'Sol#',
    a: 'La',
    as: 'Si♭',
    b: 'Si',
};

// export { NOTE_TO_SHOW };