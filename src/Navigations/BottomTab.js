import React from "react";
import { View, Image, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../Pages/Home";
import Trip from "../Pages/Trips/Trips";
import Scan from "../Pages/Scan";
import Profile from "../Pages/Profile";
import GetImage from "../assets/GetImage";

const RenderTabIcon = (Props) => {
  const {
    activeIcon,
    inactiveIcon,
    title,
    isFocused,
    tint,
    width,
    height,
    bottom,
  } = Props;
  return (
    <View style={{ alignItems: "center", padding: 9 }}>
      <Image
        source={isFocused ? activeIcon : inactiveIcon}
        style={[
          isFocused
            ? {
                width: width ? width : 40,
                height: height ? height : 40,
                resizeMode: "contain",
                tintColor: tint,
                bottom,
              }
            : {
                width: width ? width : 35,
                height: height ? height : 35,
                resizeMode: "contain",
                bottom: bottom,
                tintColor: "#6A6A6A",
              },
        ]}
      />
      <Text style={{ color: isFocused ? "#1A96F0" : "#6A6A6A", fontSize: 10 }}>
        {title}
      </Text>
    </View>
  );
};

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { height: 65, padding: 10 },
      }}
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <RenderTabIcon
                isFocused={focused}
                width={20}
                height={20}
                activeIcon={GetImage.homeIcon}
                inactiveIcon={GetImage.homeLightIcon}
                tint={"#1A96F0"}
                title="Home"
              />
            );
          },
        }}
        initialParams={{ data: true, para: "" }}
      />
      <Tab.Screen
        name="Trip"
        component={Trip}
        options={{
          tabBarLabel: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <RenderTabIcon
                isFocused={focused}
                width={20}
                height={20}
                activeIcon={GetImage.documentIcon}
                inactiveIcon={GetImage.documentLightIcon}
                tint={"#1A96F0"}
                title="Trip"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Scan"
        component={Scan}
        options={{
          tabBarLabel: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <RenderTabIcon
                width={20}
                height={20}
                isFocused={focused}
                activeIcon={GetImage.scanIcon}
                inactiveIcon={GetImage.scanLightIcon}
                tint={"#1A96F0"}
                title="Scan"
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: "",
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <RenderTabIcon
                isFocused={focused}
                width={20}
                height={20}
                activeIcon={GetImage.profileIcon}
                inactiveIcon={GetImage.profileLightIcon}
                tint={"#1A96F0"}
                title="Profile"
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTab;
