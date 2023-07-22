import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Layout = () => {
  const [fontsLoaded, error] = useFonts({
    UbuntuBold: require("../assets/fonts/Ubuntu-Bold.ttf"),
    UbuntuMedium: require("../assets/fonts/Ubuntu-Medium.ttf"),
    UbuntuRegular: require("../assets/fonts/Ubuntu-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
    console.log(error);
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return <Stack onLayout={onLayoutRootView} />;
};

export default Layout;
