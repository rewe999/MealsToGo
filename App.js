import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView } from 'react-native';
import { ThemeProvider } from "styled-components";

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

import { theme } from "./src/infrustructure/theme";
import { RestaurantsScreen } from "./src/features/restaurant/screens/restaurants.screen";

export default function App() {

  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
    <ScrollView>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
      <ExpoStatusBar style="auto" />
      </ScrollView>
    </>
  );
}