import React, { useState, useRef } from "react";
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Image, Dimensions } from "react-native";
import GetColors from '../assets/GetColors';
import GetImage from '../assets/GetImage';
import { useNavigation } from "@react-navigation/native";

import Lottie from 'lottie-react-native';
import ReactModal from '../Components/ReactModal';
import { design } from "../config/design.config";
import Header from "../Components/Header";
import { colors } from "../config/colors.config";
import { hs, ws } from "../utils/design/measurement.design";

const Security = () => {
  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);

  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");

  const [number, onChangeNumber] = React.useState(null);

  const height = Dimensions.get("screen").height;
  const [promoModal, setPromoModal] = useState(false)
  const [promoModal1, setPromoModal1] = useState(false)

  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.forgetResetPassword}>
      <Header
        title={"Update Passcode"}
        isLeftIcon
        titleStyle={styles.title}
        labelStyle={design.TEXT[700][24]}
      />
        <View style={styles.autoLayoutVertical1}>
          <View style={styles.autoLayoutVertical}>
            <Text style={styles.codeHasBeenSendTo1111}>
              Enter Old Passcode
            </Text>
            <View style={[styles.codeInputView8, styles.mt60]}>
              <View style={styles.codeInputView1}>
                <View style={styles.codeInputView}>
                  <TextInput style={styles.codeText}
                    ref={pin1Ref}
                    keyboardType='numeric'
                    maxLength={1}
                    onChangeText={onChangeNumber}
                    onChange={(pin1) => {
                      setPin1(pin1);
                      if (pin1 !== "") {
                        pin2Ref.current.focus();
                      }
                    }}
                  />
                </View>
              </View>
              <View style={[styles.codeInputView1, styles.ml16]}>
                <View style={styles.codeInputView}>
                  <TextInput style={styles.codeText}
                    ref={pin2Ref}
                    keyboardType='numeric'
                    maxLength={1}
                    onChange={(pin2) => {
                      setPin2(pin2);
                      if (pin2 !== "") {
                        pin3Ref.current.focus();
                      }
                    }} />
                </View>
              </View>
              <View style={[styles.codeInputView1, styles.ml16]}>
                <View style={styles.codeInputView}>
                  <TextInput style={styles.codeText}
                    ref={pin3Ref}
                    keyboardType='numeric'
                    maxLength={1}
                    onChange={(pin3) => {
                      setPin3(pin3);
                      if (pin3 !== "") {
                        pin4Ref.current.focus();
                      }
                    }} />
                </View>
              </View>
              <View style={[styles.codeInputView1, styles.ml16]}>
                <View style={styles.codeInputView}>
                  <TextInput style={styles.codeText}
                    ref={pin4Ref}
                    keyboardType='numeric'
                    maxLength={1}
                    onChange={(pin4) => {
                      setPin4(pin4)
                    }} />
                </View>
              </View>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => setPromoModal1(true)}
            style={{marginTop: hs(60)}}
          >
            <Text style={styles.Txt454}>Forgot password?</Text>
          </TouchableOpacity>
          <View style={{ marginTop: hs(80)}}>
          <TouchableOpacity style={styles.Button} onPress={() => setPromoModal(true)}>
            <Text style={styles.btnTxt}>Continue</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
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
            borderRadius: 24,
          }}
        >
          <View style={{ flex: 0.4, }}>
            {/* <Image
              source={GetImage.promoSuccess}
              style={{
                height: (height / 100) * 18,
                width: (height / 100) * 18,
                resizeMode: "contain",
              }}
            /> */}
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
              ...design.TEXT[700][24],
              color: colors.C181A20_700,
              textAlign:'center'
          }}
              // style={{
              //   fontSize: (height / 100) * 2.5,
              //   fontFamily: "Urbanist_semibold",
              //   color: "#000",
              // }}
            >
              {"Congratulations"}
            </Text>
            <Text
            style={{
              ...design.TEXT[400][16],
              color: colors.C212121_400,
              textAlign:'center'
          }}
              // style={{
              //   fontSize: (height / 100) * 1.5,
              //   fontFamily: "Urbanist_semibold",
              //   color: "#616161",
              // }}
            >
              Your passcode has been updated {"\n"}to the new ones
            </Text>
          </View>

          <View style={{ flex: 0.2, top: height / 100 * 5 }}>
            <TouchableOpacity
              onPress={() => {
                setPromoModal(!promoModal)
                navigation.navigate('BottomTab')
              }}
              style={{
                height: (height / 100) * 6,
                backgroundColor: "#0F437B",
                width: (height / 100) * 33,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 25,
              }}
            >
              <Text
                style={{
                  ...design.TEXT[400][16],
                  color: colors.white,
                  textAlign:'center'
              }}
              >
                {"Got It"}
              </Text>
            </TouchableOpacity>
            <View style={{ height: (height / 100) * 2 }}></View>

          </View>
        </View>
      </ReactModal>
      <ReactModal
        container={{
          backgroundColor: "rgba(0,0,0,0.7)",
          justifyContent: "center",
          alignItems: "center",
        }}
        visible={promoModal1}
      >
        <View
          style={{
            backgroundColor: "#fff",
            height: (height / 100) * 35,
            width: "89%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 24,
          }}
        >
          <View
            style={{
              flex: 0.2,
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <Text
              style={{
                ...design.TEXT[700][24],
                color: colors.C181A20_700,
                textAlign:'center'
            }}
            >
              {"Forgot your PIN"}
            </Text>
            <Text
              style={{
                ...design.TEXT[400][16],
                color: colors.C212121_400,
                textAlign:'center'
            }}
            >
              Request an email to authenticate{"\n"} yourself & update your PIN
            </Text>
          </View>

          <View style={{ flex: 0.2, top: height / 100 * 3, marginBottom: 10 }}>
            <TouchableOpacity
              onPress={() => setPromoModal1(!promoModal1)}
              style={{
                height: (height / 100) * 6,
                backgroundColor: "#0F437B",
                width: (height / 100) * 33,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 25,
                marginBottom: 10
              }}
            >
              <Text
                style={{
                  ...design.TEXT[400][16],
                  color: colors.white,
                  textAlign:'center'
              }}
              >
                {"Request Email"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setPromoModal1(!promoModal1)}
              style={{
                height: (height / 100) * 5.5,
                backgroundColor: "white",
                borderColor: "#E0E0E0",
                borderWidth: 1,
                width: (height / 100) * 33,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 25,
                marginBottom: 5
              }}
            >
              <Text
                style={{
                  ...design.TEXT[600][18],
                  color: colors.C616161_600,
                  textAlign:'center'
              }}
              >
                {"Cancel"}
              </Text>
            </TouchableOpacity>
            <View style={{ height: (height / 100) * 2 }}></View>

          </View>
        </View>
      </ReactModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  ml16: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginLeft: ws(12)
  },
  mt60: {
    marginTop: 60,
  },
  codeHasBeenSendTo1111: {
    ...design.TEXT[500][18],
    color: colors.C212121,
  },
  codeText: {
    ...design.TEXT[700][24],
    justifyContent: "center",
    alignItems: 'center',
    marginLeft: ws(14)
  },
  codeInputView: {
    justifyContent: 'center',
    borderWidth: 0.5,
    width: ws(78),
    height: hs(61),
    borderRadius: 12,
    borderColor: colors.CE0E0E0,
    alignItems: 'center',
  },
  codeInputView1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  codeInputView8: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  resendCodeIn: {
    color: "#212121",
  },
  text: {
    color: "#002b7f",
  },
  sText: {
    color: "#212121",
  },
  resendCodeIn55S: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 18,
    letterSpacing: 0.2,
    lineHeight: 25,
    fontWeight: "500",
    fontFamily: "Urbanist",
    textAlign: "center",
  },
  autoLayoutVertical: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  autoLayoutVertical1: {
    position: "absolute",
    top: 154,
    right: 0,
    left: 0,
    height: 466,
    flexDirection: "column",
    padding: 24,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  forgetResetPassword: {
    position: "relative",
    // backgroundColor: "#fff",
    flex: 1,
    // width: "100%",
    // height: 926,
    overflow: "hidden",
  },
  Button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    marginTop: 60,
    borderRadius: 100,
    backgroundColor: GetColors.PrimaryBlue_500,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: GetColors.PrimaryBlue_500,
    width: ws(380),
    height: hs(60),
    marginHorizontal: '10%',
  },
  btnTxt: {
    ...design.TEXT[600][18],
    color: colors.white,
    textAlign: 'center',
    justifyContent: 'center',
  },
  Txt454: {
    ...design.TEXT[600][14],
    color: colors.C0F437B_500,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Security;


