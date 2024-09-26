import { RouteConfig } from '@react-navigation/core';
import {
  NavigationContainer,
  NavigationProp,
  RouteProp,
  StackActions,
  StackNavigationState,
} from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { ScreensParams as MainScreensParams } from './stacks/Main';

/** The accessible screens of the Root navigator */
export type RootScreensParams = MainScreensParams;

/** The first layer of navigator screens */
export const RootScreens: Record<keyof RootScreensParams, keyof RootScreensParams> = {
  Home: 'Home',
};

/** The available & navigatable screens and their params in the app */
export type StackScreensParams = RootScreensParams;

export type ScreensParams = StackScreensParams;

export type RouteName = keyof ScreensParams;

export type RouteOptions = RouteConfig<
  ScreensParams,
  RouteName,
  NavigationState,
  Record<string, unknown>,
  Record<string, unknown>
>['options'];

export type CallableRouteOptions<T extends RouteName> = (
  // eslint-disable-next-line @typescript-eslint/ban-types
  args: Parameters<Extract<RouteOptions, Function>> & {
    route: PossibleNavigationRoute<T>;
  }
) => // eslint-disable-next-line @typescript-eslint/ban-types
ReturnType<Extract<RouteOptions, Function>>;

/** General type to use in order to type-guard the useRoute params
 * Example
 * useRoute<PossibleRoutes>()
 */
export type PossibleRoutes = RouteProp<ScreensParams, RouteName>;

/** General type to use in order to type-guard the useRoute params when you know whose screen is displaying the component
 * Example
 * useRoute<PossibleRoutes<YourRouteKey>>()
 *
 * `YourRouteKey` being a RouteName
 */
export type PossibleRoute<T extends RouteName> = RouteProp<ScreensParams, T>;

/** General type to use in order to type-guard the route param injected in navigation options */
export type PossibleNavigationRoute<T extends RouteName> = PossibleRoute<T> & {
  state?: NavigationState;
};

/** General type to use in order to type-guard the useRoute params
 * Example
 * useNavigation<PossibleNavigations>()
 */
export type PossibleNavigations = NavigationProp<ScreensParams, RouteName>;

/** The type a screen receives holding navigation & route */
export type ScreenNavParam<T extends RouteName> = StackScreenProps<ScreensParams, T>;

/** What the navigation state looks like */
export type NavigationState = StackNavigationState<ScreensParams>;

/** Navigation route instance */
export type NavigationRoute = NavigationState['routes'][0];

/** Navigation container props */
export type NavigationContainerProps = Parameters<typeof NavigationContainer>[0];

/** The actions one can send through navigation.dispatch are returned by this generator wrapper */
export const NavigationActions = StackActions;
