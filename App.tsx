import { NativeBaseProvider } from "native-base";
import React from "react";

import { SignIn } from "./src/screen";
import { THEME } from "./src/styles/theme";

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <SignIn />
    </NativeBaseProvider>
  );
}
