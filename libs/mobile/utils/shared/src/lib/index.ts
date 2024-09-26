import { Dimensions, PixelRatio } from 'react-native';

// @TODO make this runtime to be able to handle screen rotation
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const widthBaseScale = SCREEN_WIDTH / 375;
const heightBaseScale = SCREEN_HEIGHT / 812;

const normalize = (size: number, based = 'width') => {
  const newSize = based === 'height' ? size * heightBaseScale : size * widthBaseScale;

  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

//for width  pixel
export const widthPixel = (size: number) => {
  return normalize(size, 'width');
};

// const multiply = Platform.OS === "ios" ? 3 : PixelRatio.get() <= 0.75 ? 2 : PixelRatio.get() <= 1 ? 2.8 : PixelRatio.get() <= 1.5 ? 2 : 2.5;
const getMultiply = () =>
  PixelRatio.get() <= 1
    ? 2
    : PixelRatio.get() <= 1.5
    ? 2.5
    : PixelRatio.get() <= 2
    ? 3
    : PixelRatio.get() <= 4
    ? 3
    : PixelRatio.get();

export const normalizePixel = (pixel: number) =>
  PixelRatio.roundToNearestPixel(pixel / 3) * getMultiply();

export const isMiniPhone = (pixel: number) => {
  PixelRatio.get();

  return PixelRatio.roundToNearestPixel(pixel / 3) * getMultiply();
};

export const getSizePhone = () => {
  const isIntermediatePhone = SCREEN_HEIGHT <= 750;
  const isMiniPhone = SCREEN_HEIGHT <= 650;

  return {
    isMiniPhone: isMiniPhone,
    isIntermediatePhone: isIntermediatePhone,
  };
};
