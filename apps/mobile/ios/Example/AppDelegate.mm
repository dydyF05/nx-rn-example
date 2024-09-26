#import "AppDelegate.h"
#import <Firebase.h>// Added for Firebase library
#import <segment_analytics_react_native-Swift.h> // Added for trackDeepLinks option in @segment/analytics-react-native
#import "RNBootSplash.h" // Added for react-native-bootsplash

#import <React/RCTBundleURLProvider.h>

@implementation AppDelegate

// Added for trackDeepLinks option in @segment/analytics-react-native
- (BOOL)application:(UIApplication *)application
            openURL: (NSURL *)url
            options:(nonnull NSDictionary<UIApplicationOpenURLOptionsKey, id> *)options {
  
  [AnalyticsReactNative trackDeepLink:url withOptions:options];  
  return YES;
}
// End of @segment/analytics-react-native

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  [FIRApp configure];// Added for Firebase library
  self.moduleName = @"Example";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self bundleURL];
}

- (NSURL *)bundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"src/main"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

- (void)customizeRootView:(RCTRootView *)rootView {
  [RNBootSplash initWithStoryboard:@"BootSplash" rootView:rootView]; // Added for react-native-bootsplash
}

@end
