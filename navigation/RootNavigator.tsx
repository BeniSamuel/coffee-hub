import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Product from "../screens/stack/Product/Product";
import Payment from "../screens/stack/Payment/Payment";
import TabNavigator from "./TabNavigator";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Main" component={TabNavigator} />
      <Stack.Screen name="Product" component={Product} />
      <Stack.Screen name="Payment" component={Payment} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
