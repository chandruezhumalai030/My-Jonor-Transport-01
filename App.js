import React from 'react';
import {View} from 'react-native';
import Routes from './src/Navigations/Routes';
import { Text } from 'react-native';

export default function App() {

  React.useEffect(() => {
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;
  }, []);

  return (
    <View style={{flex: 1,position: 'static'}}>
      <Routes />
    </View>
  );
}
// import React from 'react';
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// // import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

// //import Splashscreen from './src/Components/Splashscreen';

// import Routes from './src/Navigations/Routes';

// export default function App() {
//   const Stack = createNativeStackNavigator();
//   // const Tab = createMaterialTopTabNavigator();
//   return (
//     <View style={{flex: 1}}>
//         <Stack.Navigator>
//             <Stack.Screen
//               name="Route"
//               component={Profile}
//            s />
//             <Stack.Screen
//               name="Home"
//               component={Home}
//             />
//             <Stack.Screen
//               name="Notification"
//               component={Notification}
//             />
//             <Stack.Screen
//               name="PrivacyPolicies"
//               component={PrivacyPolicies}
//             />
//             <Stack.Screen
//               name="Editprofile"
//               component={Editprofile}
//             />
//             <Stack.Screen
//               name="EditProfile1"
//               component={EditProfile1}
//             />
//             <Stack.Screen
//               name="Editsuccess"
//               component={Editsuccess}
//             />
//             <Stack.Screen
//               name="Helpcenter"
//               component={Helpcenter}
//             />
//             <Stack.Screen
//              name="Helpcenter1"
//               component={FQA}
//             />
//             <Stack.Screen
//              name="Helpcenter2"
//               component={Contact}
//             />
//             <Stack.Screen
//              name="Helpcenter3"
//               component={Report}
//             />
//             <Stack.Screen
//              name="Address"
//               component={Address}
//             />
//             <Stack.Screen
//              name="Addressnew"
//               component={Addressnew}
//             />
//             <Stack.Screen
//              name="Singup"
//               component={Singup}
//             />
//             <Stack.Screen
//              name="Singin"
//               component={Singin}
//             />
            

            
//     </Stack.Navigator>
//     </View>
//   );
// }




// // import React in our code
// import React, { useState } from 'react';

// // import all the components we are going to use
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   Text,
//   Image,
//   Button,
// } from 'react-native';

// //import AppIntroSlider to use it
// import AppIntroSlider from 'react-native-app-intro-slider';

// const App = () => {
//   const [showRealApp, setShowRealApp] = useState(false);

//   const onDone = () => {
//     setShowRealApp(true);
//   };

//   const onSkip = () => {
//     setShowRealApp(true);
//   };

//   const RenderItem = ({ item }) => {
//     return (
//       <View
//         style={{
//           flex: 1,
//           backgroundColor: item.backgroundColor,
//           alignItems: 'center',
//           justifyContent: 'space-around',
//           paddingBottom: 100,
//         }}>
//         <Text style={styles.introTitleStyle}>{item.title}</Text>
//         <Image style={styles.introImageStyle} source={item.image} />
//         <Text style={styles.introTextStyle}>{item.text}</Text>
//       </View>
//     );
//   };

//   return (
//     <>
//       {showRealApp ? (
//         <SafeAreaView style={styles.container}>
//           <View style={styles.container}>
//             <Text style={styles.titleStyle}>
//               React Native App Intro Slider using AppIntroSlider
//             </Text>
//             <Text style={styles.paragraphStyle}>
//               This will be your screen when you click Skip from any slide or
//               Done button at last
//             </Text>
//             <Button
//               title="Show Intro Slider again"
//               onPress={() => setShowRealApp(false)}
//             />
//           </View>
//         </SafeAreaView>
//       ) : (
//         <AppIntroSlider
//           data={slides}
//           renderItem={RenderItem}
//           onDone={onDone}
//           showSkipButton={true}
//           onSkip={onSkip}
//         />
//       )}
//     </>
//   );
// };

// export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     padding: 10,
//     justifyContent: 'center',
//   },
//   titleStyle: {
//     padding: 10,
//     textAlign: 'center',
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   paragraphStyle: {
//     padding: 20,
//     textAlign: 'center',
//     fontSize: 16,
//   },
//   introImageStyle: {
//     width: 200,
//     height: 200,
//   },
//   introTextStyle: {
//     fontSize: 18,
//     color: 'white',
//     textAlign: 'center',
//     paddingVertical: 30,
//   },
//   introTitleStyle: {
//     fontSize: 25,
//     color: 'white',
//     textAlign: 'center',
//     marginBottom: 16,
//     fontWeight: 'bold',
//   },
// });

// const slides = [
//   {
//     key: 's1',
//     text: 'Best Recharge offers',
//     title: 'Mobile Recharge',
//     image: {
//       uri:
//         'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_mobile_recharge.png',
//     },
//     backgroundColor: '#20d2bb',
//   },
//   {
//     key: 's2',
//     title: 'Flight Booking',
//     text: 'Upto 25% off on Domestic Flights',
//     image: {
//       uri:
//         'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_flight_ticket_booking.png',
//     },
//     backgroundColor: '#febe29',
//   },
//   {
//     key: 's3',
//     title: 'Great Offers',
//     text: 'Enjoy Great offers on our all services',
//     image: {
//       uri:
//         'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_discount.png',
//     },
//     backgroundColor: '#22bcb5',
//   },
//   {
//     key: 's4',
//     title: 'Best Deals',
//     text: ' Best Deals on all our services',
//     image: {
//       uri:
//         'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_best_deals.png',
//     },
//     backgroundColor: '#3395ff',
//   },
//   {
//     key: 's5',
//     title: 'Bus Booking',
//     text: 'Enjoy Travelling on Bus with flat 100% off',
//     image: {
//       uri:
//         'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_bus_ticket_booking.png',
//     },
//     backgroundColor: '#f6437b',
//   },
//   {
//     key: 's6',
//     title: 'Train Booking',
//     text: ' 10% off on first Train booking',
//     image: {
//       uri:
//         'https://raw.githubusercontent.com/AboutReact/sampleresource/master/intro_train_ticket_booking.png',
//     },
//     backgroundColor: '#febe29',
//   },
// ];
