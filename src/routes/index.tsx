import { NavigationContainer } from "@react-navigation/native";
import { SignIn } from "../screens";
import { AppRoutes } from "./app.routes";
import auth, { FirebaseAuthTypes } from "@react-native-firebase/auth";
import { useEffect, useState } from "react";

export function Routes() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User>();

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((response) => {
      setUser(response);
      setLoading(false);
    });

    return () => {
      subscriber;
    };
  }, []);

  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
