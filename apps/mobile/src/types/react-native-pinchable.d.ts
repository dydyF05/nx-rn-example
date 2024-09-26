declare module 'react-native-pinchable' {
  import * as React from 'react';
  import { ViewProps } from 'react-native';

  interface PinchableProps extends ViewProps {
    /**
     * The minimum allowed zoom scale. Default is 1.
     */
    minimumZoomScale?: number;

    /**
     * The maximum allowed zoom scale. Default is 3.
     */
    maximumZoomScale?: number;

    /**
     * Optional callback that gets called when the zoom scale changes.
     */
    onZoomChange?: (scale: number) => void;
  }

  /**
   * A component that allows pinch-to-zoom functionality similar to Instagram.
   */
  const Pinchable: React.FC<PinchableProps>;

  export default Pinchable;
}
