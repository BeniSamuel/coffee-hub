import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/tabs/Home/Home";
import Cart from "../screens/tabs/Cart/Cart";
import Favorite from "../screens/tabs/Favorite/Favorite";
import History from "../screens/tabs/History/History";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#0C0F14",
          outlineColor: "none",
          borderColor: "none",
        },
      }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="History" component={History} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
