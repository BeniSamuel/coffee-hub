import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import Home from "../screens/tabs/Home/Home";
import Cart from "../screens/tabs/Cart/Cart";
import Favorite from "../screens/tabs/Favorite/Favorite";
import History from "../screens/tabs/History/History";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#0C0F14",
          borderTopWidth: 0,
          elevation: 0,
        },

        tabBarIcon: ({ focused, size }) => {
          let icon;

          switch (route.name) {
            case "Home":
              icon = focused
                ? require("../assets/common/home-active-icon.png")
                : require("../assets/common/home-inactive-icon.png");
              break;
            case "Cart":
              icon = focused
                ? require("../assets/common/cart-active-icon.png")
                : require("../assets/common/cart-inactive-icon.png");
              break;
            case "Favorite":
              icon = focused
                ? require("../assets/common/favorite-active-icon.png")
                : require("../assets/common/favorite-inactive-icon.png");
              break;
            case "History":
              icon = focused
                ? require("../assets/common/order-active-icon.png")
                : require("../assets/common/order-inactive-icon.png");
              break;
            default:
              icon = require("../assets/common/default-icon.png");
          }

          return (
            <Image
              source={icon}
              style={{ width: size, height: size }}
              resizeMode="contain"
            />
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="History" component={History} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
