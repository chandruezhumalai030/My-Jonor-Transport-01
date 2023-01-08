import React, { useState, useRef } from "react";
import { Text, StyleSheet, View, TextInput, TouchableOpacity, ScrollView,  } from "react-native";
import GetColors from '../assets/GetColors';
import { useNavigation } from "@react-navigation/native";
import Header from "../Components/Header";
import { design } from "../config/design.config";
import { colors } from '../config/colors.config';
import { hs, ws } from '../utils/design/measurement.design';

import Lottie from 'lottie-react-native';
import ReactModal from '../Components/ReactModal';

const ForgetReset = (props) => {
  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);

  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");

  const [number, onChangeNumber] = React.useState(null);




  const navigation = useNavigation();
  return (
    <Header
      {...props}
      rightIcon={false}
      // isBackground={true}
      isLeftIcon
      title={"Update Passcode"}
      labelStyle={design.TEXT[700][24]}
    >
      <View style={styles.container}>
        <View style={styles.forgetResetPassword}>
          <View style={styles.autoLayoutVertical1}>
            <View style={styles.autoLayoutVertical}>
              <Text style={styles.codeHasBeenSendTo1111}>
                Code has been send to +1 111 ******99
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
              <Text style={[styles.resendCodeIn55S, styles.mt60]}>
                <Text style={styles.resendCodeIn}>{`Resend code in `}</Text>
                <Text style={styles.text}>55</Text>
                <Text style={styles.sText}> s</Text>
              </Text>
            </View>
            <TouchableOpacity style={styles.Button}
            onPress={() => navigation.navigate("ForgetNewPassword")}
            //  onPress={() => setPromoModal(true)}
             >
              <Text style={styles.btnTxt}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      
    </Header>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  ml16: {
    marginLeft: 16,
  },
  mt60: {
    marginTop: 60,
  },
  codeHasBeenSendTo1111: {
    ...design.TEXT[500][18],
    color: colors.C212121,
    letterSpacing: ws(0.2),
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: -50,
    marginLeft: 30

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
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  codeInputView8: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
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
    ...design.TEXT[500][18],
    color: colors.C212121,
    letterSpacing: ws(0.2),
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 80
  },
  autoLayoutVertical: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
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
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 926,
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
});

export default ForgetReset;
