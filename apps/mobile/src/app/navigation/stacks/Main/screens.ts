/** Main stack navigator screens and params */
export type ScreensParams = {
  Home: undefined;
};

/** The set of screens belonging to the Main stack navigator */
export const Screens: Record<keyof ScreensParams, keyof ScreensParams> = {
  Home: 'Home',
};
