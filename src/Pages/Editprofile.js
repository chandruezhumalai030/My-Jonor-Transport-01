import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GetColors from '../assets/GetColors';
import Header from "../Components/Header";
import { design } from "../config/design.config";
import { colors } from "../config/colors.config";
import { hs, ws } from "../utils/design/measurement.design";

export default function EditProfile(props) {
  const navigation = useNavigation();

  const pin1Ref = useRef(null);
  const pin2Ref = useRef(null);
  const pin3Ref = useRef(null);
  const pin4Ref = useRef(null);

  const [pin1, setPin1] = useState("");
  const [pin2, setPin2] = useState("");
  const [pin3, setPin3] = useState("");
  const [pin4, setPin4] = useState("");

  const [number, onChangeNumber] = React.useState(null);
  return (
    <Header
      {...props}
      rightIcon={false}
      isLeftIcon
      title={"Edit Profile"}
      labelStyle={styles.labelStyle}
    >
      <View style={styles.container}>
        <View style={styles.EditProfile}>
          <View style={styles.AutoLayoutVertical4}>
            <View style={{justifyContent:'center', alignItems:'center'}}>
              <Text style={styles.Txt1081}>Enter Your Passcode</Text>
              <View style={styles.CodeInput}>
                <View style={styles.CodeInput}>
                  <View style={styles._codeInput}>
                    <TextInput style={styles.Txt415}
                      // placeholder="5"
                      // placeholderTextColor = "black"
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
                      cursorColor={colors.C757575}
                    />
                  </View>
                </View>
                <View style={styles.CodeInput}>
                  <View style={styles._codeInput}>
                    <TextInput style={styles.Txt415}
                      ref={pin2Ref}
                      keyboardType='numeric'
                      maxLength={1}
                      onChange={(pin2) => {
                        setPin2(pin2);
                        if (pin2 !== "") {
                          pin3Ref.current.focus();
                        }
                      }}
                      cursorColor={colors.C757575}
                    />
                  </View>
                </View>
                <View style={styles.CodeInput}>
                  <View style={styles._codeInput}>
                    <TextInput style={styles.Txt415}
                      ref={pin3Ref}
                      keyboardType='numeric'
                      maxLength={1}
                      onChange={(pin3) => {
                        setPin3(pin3);
                        if (pin3 !== "") {
                          pin4Ref.current.focus();
                        }
                      }}
                      cursorColor={colors.C757575}
                    />
                  </View>
                </View>
                <View style={styles.CodeInput}>
                  <View style={styles._codeInput}>
                    <TextInput style={styles.Txt415}
                      ref={pin4Ref}
                      keyboardType='numeric'
                      maxLength={1}
                      onChange={(pin4) => {
                        setPin4(pin4)
                      }}
                      cursorColor={colors.C757575}
                    />
                  </View>
                </View>
              </View>
              <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate("EditProfile1")}>
                <Text style={styles.btnTxt}>Continue</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Header>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  EditProfile: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    // backgroundColor: "rgba(255, 255, 255, 1)",
    // width: 528,
    // height: 926,
  },
  AutoLayoutVertical5: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  AutoLayoutVertical4: {
    justifyContent: "center",
    alignItems: "center",
  },
  AutoLayoutVertical3: {
    justifyContent: "center",
    alignItems: "center",
  },
  Txt1081: {
    ...design.TEXT[400][18],
    color: colors.C212121,
    letterSpacing: ws(0.2),
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    // width: 381,
    marginBottom: 80,
    marginTop: 120
  },
  CodeInput: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 9,
    marginBottom: 50
  },
  _codeInput: {
    width: ws(78),
    height: hs(61),
    borderWidth: 0.5,
    borderColor: colors.CE0E0E0,
    borderRadius: 12,
  },
  Txt415: {
    ...design.TEXT[700][24],
    color: colors.C212121,
    textAlign: "center",
    justifyContent: "center",
  },
  Button: {
    width: ws(380),
    height: hs(60),
    backgroundColor: colors.C0F437B_500,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hs(84)
  },
  btnTxt: {
    ...design.TEXT[600][18],
    color: colors.white,
    textAlign: 'center',
    justifyContent: 'center',
  },
  labelStyle: {
    ...design.TEXT[700][24],
    color: colors.C212121
  }
})