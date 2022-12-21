import React from 'react';
import { View, Image, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Pages/Home';
import Trips from '../Pages/Trips/Trips';
import Scan from '../Pages/Scan';
import Profile from '../Pages/Profile';
import GetImage from '../assets/GetImage';
import ScanQR from '../Pages/QR/ScanQR';
const RenderTabIcon = Props => {
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
    <View style={{ alignItems: 'center', padding: 9 }}>
      <Image
        source={isFocused ? activeIcon : inactiveIcon}
        style={[
          isFocused
            ? {
              width: width ? width : 40,
              height: height ? height : 40,
              resizeMode: 'contain',
              tintColor: tint,
              bottom,
            }
            : {
              width: width ? width : 35,
              height: height ? height : 35,
              resizeMode: 'contain',
              bottom: bottom,
              tintColor: '#6A6A6A'
            },
        ]}
      />
      <Text style={{color: isFocused ? '#0F437B' : '#6A6A6A', fontSize: 12,marginTop:10}}>
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
        tabBarStyle: { height: 70, padding: 10,},
      }}
      initialRouteName="Home">
      <Tab.Screen
        name=" "
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <RenderTabIcon
                isFocused={focused}
                width={25}
                height={25}
                activeIcon={GetImage.homeIcon}
                inactiveIcon={GetImage.homeIcon}
                tint={'#0F437B;'}
                title='Home'
              />
            );
          },
        }}
        initialParams={{ data: true, para: "" }}

      />
      <Tab.Screen
        name="  "
        component={Trips}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <RenderTabIcon
                isFocused={focused}
                width={25}
                height={25}
                activeIcon={GetImage.documentIcon}
                inactiveIcon={GetImage.documentIcon}
                tint={'#0F437B;'}
                title={'Trips'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        // name="Scan"
        name="   "
        component={ScanQR}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <RenderTabIcon
                width={25}
                height={25}
                isFocused={focused}
                activeIcon={GetImage.scanIcon}
                inactiveIcon={GetImage.scanIcon}
                tint={'#0F437B;'}
                title={'ScanQR'}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="    "
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => {
            return (
              <RenderTabIcon
                isFocused={focused}
                width={25}
                height={25}
                activeIcon={GetImage.profileIcon}
                inactiveIcon={GetImage.profileIcon}
                tint={'#0F437B;'}
                title={'Profile'}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
export default BottomTab;
