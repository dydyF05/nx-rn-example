declare module '*.svg' {
  const ViewStyle: import('react-native').ViewStyle;
  const Node: import('react').ReactNode;
  export default (_props: { width?: number; height?: number; style?: ViewStyle }) => Node;
}
