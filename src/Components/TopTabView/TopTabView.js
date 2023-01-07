import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { TabBar, TabView } from "react-native-tab-view";
import { colors } from '../../config/colors.config';
import { design } from '../../config/design.config';
import { Dimensions } from 'react-native';
import { hs } from '../../utils/design/measurement.design';
import { TouchableOpacity } from 'react-native';

const TopTabView = ({ setcurrentIndex, tabs, renderScene, initialTab = 0, backgroundColor, onChange = () => { } }) => {
  const [routes] = useState(tabs);
  const [index, setIndex] = useState(initialTab);

  useEffect(() => {
    setIndex(initialTab);
  }, [initialTab]);

  const onIndexChange = (index) => {
    setIndex(index);
    setcurrentIndex && setcurrentIndex(index);
    onChange(index);
  };

  const renderTabBar = (props) => {
    return (
      <View style={{
          height: hs(45),
          width: "100%",
          backgroundColor: backgroundColor || "transparent",
          borderBottomWidth: 0.2,
          borderBottomColor: colors.C0F437B_500,
      }}>
        <TabBar 
          {...props}
          indicatorStyle={{
            height: hs(1.5),
            borderRadius: 10,
          }}
          style={{
            backgroundColor: colors.C424242_800,
          }}
          renderTabBarItem={({ route, focused, color, navigationState, onPress, ...rest }) => {
            const isActive = route.index === navigationState.index;
            return (
              <TouchableOpacity
                onPress={onPress}
                style={{
                  height: hs(45),
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
                key={route.key}
                activeOpacity={0.2}
              >
                <Text style={[styles.label, isActive && styles.activeLabel]}>
                  {route.title} {route.count ? `(${route.count})` : ""}{" "}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    )
  }

  return (
    <TabView
      navigationState={{ routes, index }}
      renderTabBar={renderTabBar}
      renderScene={renderScene}
      onIndexChange={onIndexChange}
      initialLayout={{ width: Dimensions.get('window').width }}
    />
  )
}

export default TopTabView

const styles = StyleSheet.create({
  label: {
    ...design.TEXT[700][18],
    color: colors.C212121,
  },
  activeLabel: {
    color: colors.C212121,
    ...design.TEXT[600][16],
  },
})