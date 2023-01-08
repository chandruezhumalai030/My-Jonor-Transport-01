import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, ScrollView,Dimensions, TextInput, TouchableOpacity } from "react-native";
import { RadioButton } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";
import GetImage from '../assets/GetImage';
import GetColors from '../assets/GetColors';
import Header from "../Components/Header";
import Lottie from 'lottie-react-native';
import ReactModal from '../Components/ReactModal';
import { design } from "../config/design.config";
import { colors } from '../config/colors.config';
import { hs, ws } from '../utils/design/measurement.design';

export default function Editprofile1(props) {

  const height = Dimensions.get("screen").height;
  const [promoModal, setPromoModal] = useState(false)

  const navigation = useNavigation();
  const [checked, setChecked] = React.useState('first');
  const [text, setText] = React.useState("");
  return (
    <Header
      {...props}
      rightIcon={false}
      isLeftIcon
      title={"Edit Profile"}
      labelStyle={styles.labelStyle}
    >
      <ScrollView style={styles.container}>
        <View style={styles.EditProfile_03}>
          <View style={styles.Group642}>
            <View style={styles.AutoLayoutVertical2}>
              {/* <View style={styles.AutoLayoutVertical1}> */}
              <View style={styles.AutoLayoutVertical}>
                <Image
                  style={styles.AvatarThumbail}
                  source={require('../assets/Profile/editprofile.png')}
                />
                <View style={styles.TopAppBar1}>
                  <View style={styles.Frame25}>
                    <View style={styles.Content}>
                      <View>
                        <RadioButton
                          value="first"
                          status={checked === 'first' ? 'checked' : 'unchecked'}
                          onPress={() => setChecked('first')}
                          color={'#0F437B'}
                        />
                      </View>
                      <Text style={styles.Txt914}>Male</Text>
                    </View>
                    <View style={styles.Content}>
                      <View>
                        <RadioButton
                          value="second"
                          status={checked === 'second' ? 'checked' : 'unchecked'}
                          onPress={() => setChecked('second')}
                          color={'#0F437B'}
                        />
                      </View>
                      <Text style={styles.Txt914}>Female</Text>
                    </View>
                  </View>
                  <View style={styles.Text_field}>
                    <View style={styles.Input1}>
                      <View style={styles.Content1}>
                        <TextInput style={styles.Txt754}
                          underlineColorAndroid="transparent"
                          placeholder="Name"
                          autoCapitalize="none"
                          placeholderTextColor="gray" />
                      </View>
                    </View>
                  </View>
                  <View style={styles.Text_field}>
                    <View style={styles.Input1}>
                      <View style={styles.Content1}>
                        <TextInput style={styles.Txt754}
                          underlineColorAndroid="transparent"
                          placeholder="Number"
                          autoCapitalize="none"
                          placeholderTextColor="gray" />
                      </View>
                    </View>
                  </View>
                  <View style={styles.Text_field}>
                    <View style={styles.Input1}>
                      <View style={styles.Content1}>
                        <TextInput style={styles.Txt754}
                          underlineColorAndroid="transparent"
                          placeholder="Gmail"
                          autoCapitalize="none"
                          placeholderTextColor="gray" />
                      </View>
                    </View>
                  </View>
                  <View style={styles.Text_field}>
                    <View style={styles.Input1}>
                      <View style={styles.Content1}>
                        <TextInput style={styles.Txt754}
                          underlineColorAndroid="transparent"
                          placeholder="Nationality"
                          autoCapitalize="none"
                          placeholderTextColor="gray" />
                      </View>
                    </View>
                  </View>
                  <View style={styles.TopAppBar1}>
                    <View style={styles.Input1}>
                      <View style={styles.Content1}>
                        <Image
                          style={styles.Frame23}
                          source={require('../assets/Profile/phone.png')}
                          resizeMode={'contain'}
                        />
                        <TextInput style={styles.Txt754}
                          underlineColorAndroid="transparent"
                          placeholder="Phone Number"
                          autoCapitalize="none"
                          placeholderTextColor="gray" />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
              {/* </View> */}
              <TouchableOpacity style={styles.Button} onPress={() => setPromoModal(true)}>
                <Text style={styles.btnTxt}>Update</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      <ReactModal
        container={{
          backgroundColor: "rgba(0,0,0,0.7)",
          justifyContent: "center",
          alignItems: "center",
        }}
        visible={promoModal}
      >
        <View
          style={{
            backgroundColor: "#fff",
            height: (height / 100) * 45,
            width: "89%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          <View style={{ flex: 0.4, }}>
            <Lottie style={{ height: height / 100 * 20, width: height / 100 * 30 }} source={require("../assets/Animation/lf20_s2lryxtd.json")} autoPlay />
          </View>
          <View
            style={{
              flex: 0.2,
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Text
              style={{
                fontSize: (height / 100) * 2.5,
                fontFamily: "Urbanist_semibold",
                color: "#000",
              }}
            >
              {"Succesfully Update"}
            </Text>
            <Text
              style={{
                fontSize: (height / 100) * 1.5,
                fontFamily: "Urbanist_semibold",
                color: "#616161",
              }}
            >
              Your profile has been updated
            </Text>
          </View>

          <View style={{ flex: 0.2, top: height / 100 * 5 }}>
            <TouchableOpacity
              onPress={() => {
                setPromoModal(!promoModal)
                navigation.navigate("BottomTab")
              }}
              style={{
                height: (height / 100) * 6,
                backgroundColor: "#0F437B",
                width: (height / 100) * 35,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 25,
              }}
            >
              <Text
                style={{
                  fontSize: (height / 100) * 2,
                  fontFamily: "Urbanist_semibold",
                  color: "#fff",
                }}
              >
                {"Okay"}
              </Text>
            </TouchableOpacity>
            <View style={{ height: (height / 100) * 2 }}></View>

          </View>
        </View>
      </ReactModal>
    </Header>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  EditProfile_03: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 1)",
    width: '100%',
    height: '100%',
  },
  Group642: {
    display: "flex",
    flexDirection: "column",
  },
  TopAppBar1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  AutoLayoutVertical2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 31,
    paddingBottom: 47,
    paddingLeft: 23,
    paddingRight: 23,
    height: 750,
    width: 428,
  },
  AutoLayoutVertical1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 380,
  },
  AutoLayoutVertical: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 360,
   // marginTop: hs(20),
  },
  AvatarThumbail: {
    width: 140,
    height: 140,
    marginBottom: 40,
  },
  Frame25: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    marginBottom: 16,
    width: 380,
  },
  Group3: {
    marginRight: 12,
    borderRadius: 12,
    backgroundColor: "rgba(15,67,123,1)",
    borderWidth: 3,
    borderStyle: "solid",
    borderColor: "rgba(15,67,123,1)",
    width: 24,
    height: 24,
  },
  Content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  Txt754: {
    ...design.TEXT[400][16],
    color: colors.C9E9E9E_500
  },
  Txt914: {
    ...design.TEXT[600][14],
    color: colors.C212121,
  },

  Text_field: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    // marginRight: -25
  },
  Input: {
    width: ws(380),
    height: hs(56),
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: colors.CBDBDBD_400,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: ws(16)
  },
  Content1: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    width: 340,
  },
  Txt674: {
    fontSize: 16,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "400",
    lineHeight: 22,
    letterSpacing: 0.2,
    color: "rgba(33,33,33,1)",
    width: 341,
  },
  Input1: {
    width: ws(380),
    height: hs(56),
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: colors.CBDBDBD_400,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: ws(20),
    marginLeft : ws(24),
    marginRight: ws(24)
  },
  Txt855: {
    fontSize: 16,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "400",
    lineHeight: 22,
    letterSpacing: 0.2,
    color: "rgba(18,18,18,1)",
    width: 341,
  },
  Input2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 5,
    paddingBottom: 0,
    paddingLeft: 19.5,
    paddingRight: 19.5,
    borderRadius: 12,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 0.5,
    borderStyle: "solid",
    borderColor: "rgba(189,189,189,1)",
    width: 380,
    height: 56,
  },
  Txt591: {
    fontSize: 16,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "400",
    lineHeight: 22,
    letterSpacing: 0.2,
    color: "rgba(158,158,158,1)",
    width: 341,
  },
  Input2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 19.5,
    paddingRight: 19.5,
    borderRadius: 12,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 0.5,
    borderStyle: "solid",
    borderColor: "rgba(189,189,189,1)",
    width: 380,
    height: 56,
  },
  Frame23: {
    width: 44,
    height: 22,
    marginRight: 12,
  },
  Txt1073: {
    fontSize: 16,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "400",
    lineHeight: 22,
    letterSpacing: 0.2,
    color: "rgba(158,158,158,1)",
    width: 285,
  },

  Button: {
    width: ws(380),
    height: hs(60),
    borderRadius: 100,
    backgroundColor: colors.C0F437B_500,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hs(70),
    marginBottom: hs(44)
  },
  btnTxt: {
    justifyContent: 'center',
    alignItems: 'center',
    ...design.TEXT[600][18],
    color: colors.white
  },
  labelStyle: {
    ...design.TEXT[700][24],
    color: colors.C212121
  }
})
