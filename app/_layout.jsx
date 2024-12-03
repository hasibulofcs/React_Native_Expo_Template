import { View, Text } from "react-native";
import React, { Fragment } from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
  // FONT
  const [loaded, error] = useFonts({
    "Nunito-Regular": require("../assets/fonts/Nunito-Regular.ttf"),
    "Nunito-Bold": require("../assets/fonts/Nunito-Bold.ttf"),
  });

  useEffect(() => {
    if (error) throw error;

    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded || error) {
    return null;
  }

  return (
    <Fragment>
      <Stack.Screen name="Home" options={{ headerShown: false }} />
      <Stack.Screen name="profile" options={{ headerShown: false }} />
    </Fragment>
  );
};

export default RootLayout;
