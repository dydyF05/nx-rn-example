declare module '*.svg' {
  const ViewStyle: import('react-native').ViewStyle;
  const React: import('react').React;
  export default (props: { width?: number; height?: number; style?: ViewStyle }) => React.ReactNode;
}
