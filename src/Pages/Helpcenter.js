import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Fqa from './FQA';
import Contact from './Contact';
import Report from './Report';
const Tab = createMaterialTopTabNavigator();

export default function Helpcenter() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarLabelStyle: { textTransform: 'capitalize' },
    }}>
      <Tab.Screen name="Fqa" component={Fqa} />
      <Tab.Screen name="Contact" component={Contact} />
      <Tab.Screen name="REPORT" component={Report} />
    </Tab.Navigator>
  );
}
