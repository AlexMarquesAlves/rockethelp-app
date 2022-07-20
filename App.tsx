import {
  Roboto_400Regular,
  Roboto_700Bold,
  useFonts,
} from "@expo-google-fonts/roboto";
import { NativeBaseProvider } from "native-base";
import React from "react";

import { Loading } from "./src/components";
import { SignIn } from "./src/screen";

import { THEME } from "./src/styles/theme";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <NativeBaseProvider theme={THEME}>
      {fontsLoaded ? <SignIn /> : <Loading />}
    </NativeBaseProvider>
  );
}
