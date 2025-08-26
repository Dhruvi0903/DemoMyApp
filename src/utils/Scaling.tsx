import { Platform, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');
const [shortDimension, longDimension] =
    width < height ? [width, height] : [height, width];
// Default guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = Platform.OS === 'ios' ? 360 : 360; // this will be used by defau
const guidelineBaseHeight = Platform.OS === 'ios' ? 760 : 760;
const scale = (size: number) => (shortDimension / guidelineBaseWidth) * size;
const verticalScale = (size: number) =>
    (longDimension / guidelineBaseHeight) * size;
const moderateScale = (size: number, factor = 0.5) =>
    size + (scale(size) - size) * factor;
const moderateVerticalScale = (size: number, factor = 0.5) =>
    size + (verticalScale(size) - size) * factor;
// const pixelDensity = Pixelatio.get ();
// const metricsNumber = () => {
// const density = pixelDensity * 160;
// const x = Math.pow( (width * pixelDensity) / density, 2);
// const y = Math.pow( (height * pixelDensity) / density, 2);
// const screenInches = Math.sqrt (x + y) + 1.6;
// return screenInches;
// }:
// const scale = (size: number) => {

// const ratio = (metricsNumber () + pixelDensity) / 10;
// const value = size * Number(ratio.tofixed(1));
// return Number (value. tofixed(1));
// }:

export const s = scale;
export const vs = scale;
export const ms = scale;
export const mvs = scale;

export default {
    /**
    * As per latest Nomenclature
    /*
    Horizontal Scaling
    left, right, paddingHorizontal, marginHorizontal
    */
    hs: (value: number) => {
        return scale(value);
        // return scale (value);
    },
    /*
    Vertical Scaling
    top, bottom, paddingVertical, marginVertical
    */
    vs: (value: number) => {
        return verticalScale(value);
        // return scale(value);
    },
    /*
    Modrate Scaling
    fontSize, lineHeight
    */
    ms: (value: number, factor = 0.5) => {
        // ms: (value: number) => {
        return moderateScale(value, factor);
        // return scale(value);
    },
    /*
    Modrate Vertical Scaling
    fontSize, lineHeight
    */
    mvs: (value: number, factor = 0.5) => {
        // mvs: (value: number) => {
        return moderateVerticalScale(value, factor);
        // return scale(value);
    },
};
