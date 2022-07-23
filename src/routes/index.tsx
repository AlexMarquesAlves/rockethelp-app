import { NavigationContainer } from "@react-navigation/native";
import { SignIn } from "../screens";
import { AppRoutes } from "./app.routes";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { useState } from "react";

export function Routes() {
  const [loading, setLoading] = useState();
  const [user, setUser] = useState<FirebaseAuthTypes.User>();
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
