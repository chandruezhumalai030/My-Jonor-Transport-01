import * as React from "react";
import { Text, StyleSheet, View, TextInput, TouchableOpacity, ScrollView } from "react-native";
import GetColors from '../assets/GetColors';
import { useNavigation } from "@react-navigation/native";

const Security = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.forgetResetPassword}>
        <View style={styles.autoLayoutVertical1}>
          <View style={styles.autoLayoutVertical}>
            <Text style={styles.codeHasBeenSendTo1111}>
              Enter Old Passcode
            </Text>
            <View style={[styles.codeInputView8, styles.mt60]}>
              <View style={styles.codeInputView1}>
                <View style={styles.codeInputView}>
                  <TextInput style={styles.codeText}
                   keyboardType='numeric'
                   maxLength={1}/>
                </View>
              </View>
              <View style={[styles.codeInputView1, styles.ml16]}>
                <View style={styles.codeInputView}>
                <TextInput style={styles.codeText}
                   keyboardType='numeric'
                   maxLength={1}/>
                </View>
              </View>
              <View style={[styles.codeInputView1, styles.ml16]}>
                <View style={styles.codeInputView}>
                <TextInput style={styles.codeText}
                   keyboardType='numeric'
                   maxLength={1}/>
                </View>
              </View>
              <View style={[styles.codeInputView1, styles.ml16]}>
                <View style={styles.codeInputView}>
                <TextInput style={styles.codeText}
                   keyboardType='numeric'
                   maxLength={1}/>
                </View>
              </View>
            </View>
          </View>
          <TouchableOpacity
              onPress={() => navigation.navigate("Security1")}
            >
              <Text style={styles.Txt454}>Forgot password?</Text>
            </TouchableOpacity>
          <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate("Security2")}>
            <Text style={styles.btnTxt}>Continue</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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
    alignSelf: "stretch",
    position: "relative",
    fontSize: 18,
    letterSpacing: 0.2,
    lineHeight: 25,
    fontWeight: "500",
    fontFamily: "Urbanist, sans-serif",
    color: "#212121",
    textAlign: "center",
  },
  codeText: {
    position: "relative",
    fontSize: 18,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "700",
    lineHeight: 19,
    marginLeft: 15,
    color: "rgba(33,33,33,1)",
    textAlign: "center",
    justifyContent: "center",
  },
  codeInputView: {
    borderRadius: 12,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "gray",
    borderWidth: 1.5,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 15,
    paddingVertical: 10,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  codeInputView1: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "gray"
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
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    marginTop: 60,
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
  Txt454: {
    fontSize: 18,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "600",
    lineHeight: 20,
    marginTop: 60,
    letterSpacing: 0.2,
    color: "#0F437B",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Security;


