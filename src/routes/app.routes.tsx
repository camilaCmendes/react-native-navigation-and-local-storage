import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Groups, NewGroup, Players } from "@/screens";
import { View } from "react-native";
const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="groups" component={Groups} />
      <Screen name="new" component={NewGroup} />
      <Screen name="players" component={Players} />
    </Navigator>
  );
}
