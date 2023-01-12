import React from 'react';
import {StyleSheet, Image, Text, View, TouchableOpacity,Dimensions} from 'react-native';
import GetImage from '../assets/GetImage';
import GetColors from '../assets/GetColors';

import { design } from "../config/design.config";
import { colors } from "../config/colors.config";
import { hs, ws } from "../utils/design/measurement.design";

const { width, height } = Dimensions.get("window");
const Hight = Dimensions.get("screen").height;

export default function Intro1({navigation}) {
  const goNext = () => {
    navigation.navigate('Intro2');
  };
  return (
    <View style={styles.container1}>
      <TouchableOpacity
          onPress={() => navigation.navigate("BottomTab")}
          style={{
            zIndex: 5,
            alignSelf: "flex-end",
            top: (height / 100) * 5,
            right: (Hight / 100) * 1.5,
          }}
        >
          {/* <Image source={GetImage.bell} style={styles.flot_img} /> */}<Text 
          style={{
                            ...design.TEXT[600][14],
                            color: colors.C212121,
                            textAlign:'right',
                            marginLeft:10
                        }}>Skip</Text>
        </TouchableOpacity>
    <View style={styles.Container}>
      <Image style={styles.BrandLogo} source={GetImage.introImg1} />
      <View style={styles.contentTxt}>
        <Text 
        style={{
          ...design.TEXT[700][24],
          color: colors.C212121_700,
          marginBottom: 16,
      }}
        // style={styles.heading}
        >Welcome To MYJohor Transport</Text>
        <Text 
        style={{
          ...design.TEXT[400][16],
          color: colors.C212121_400,
          textAlign: 'center',
          justifyContent: 'center',
          marginBottom: 16,
      }}
        // style={styles.content}
        >
          Let’s take a look at how is the app works together so you can have a
          better experience on the journey
        </Text>
        <Image source={GetImage.pagination} />
      </View>
      <TouchableOpacity style={styles.Button} onPress={goNext}>
        <Text style={styles.btnTxt}>Next</Text>
      </TouchableOpacity>

    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "#fff",
  },
  Container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 100,
    paddingBottom: 80,
    backgroundColor: GetColors.white,
    width: '100%',
    height: '100%',
  },
  BrandLogo: {
    width: '100%',
  },
  contentTxt: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 25,
    flexWrap: 'wrap',
    width: '100%',
  },

  heading: {
    fontSize: 24,
    fontFamily: 'Urbanist, sans-serif',
    fontWeight: '700',
    lineHeight: 29,
    color: GetColors.black,
    textAlign: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 16,
  },
  content: {
    fontSize: 16,
    fontFamily: 'Urbanist, sans-serif',
    fontWeight: '400',
    letterSpacing: 0.2,
    color: GetColors.black,
    textAlign: 'center',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 16,
  },
  Button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    borderRadius: 100,
    backgroundColor: GetColors.PrimaryBlue_500,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: GetColors.PrimaryBlue_500,
    width: '80%',
    marginHorizontal: '10%',
  },
  btnTxt: {
    fontSize: 18,
    fontFamily: 'Urbanist, sans-serif',
    fontWeight: '600',
    lineHeight: 28,
    letterSpacing: 0.2,
    color: GetColors.white,
    textAlign: 'center',
    justifyContent: 'center',
  },
});
