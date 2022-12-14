import * as React from "react";
import { Text, StyleSheet, View, TouchableOpacity, Pressable } from "react-native";
import GetColors from '../assets/GetColors';
import { useNavigation } from "@react-navigation/native";

const Security1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.security02View}>
      <View style={styles.modalView1}>
        <View style={styles.modalView}>
          <View style={[styles.contentView1, styles.mt32]}>
            <View style={[styles.textSupportingText, styles.mt16]}>
              <Text style={styles.text4}>Forgot your PIN</Text>
              <Text
                style={[styles.supportingText, styles.mt8]}
              >{`Request an email to authenticate yourself & update your PIN`}</Text>
            </View>
          </View>
          <View style={[styles.modalActionComponent, styles.mt32]}>
            <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate("Security2")}>
            <Text style={styles.btnTxt}>Request Email</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.Button1} onPress={() => navigation.navigate("Security")}>
            <Text style={styles.btnTxt1}>Cancel</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml16: {
    marginLeft: 16,
  },
  mt60: {
    marginTop: 60,
  },
  ml14: {
    marginLeft: 14,
  },
  mt8: {
    marginTop: 8,
  },
  mt16: {
    marginTop: 16,
  },
  mt12: {
    marginTop: 12,
  },
  mt32: {
    marginTop: 32,
  },
  enterOldPasscode: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 18,
    letterSpacing: 0.2,
    lineHeight: 25,
    fontWeight: "500",
    fontFamily: "Urbanist",
    color: "#212121",
    textAlign: "center",
  },
  codeText: {
    position: "relative",
    fontSize: 24,
    lineHeight: 29,
    fontWeight: "700",
    fontFamily: "Urbanist",
    color: "#212121",
    textAlign: "center",
    display: "none",
  },
  codeInputView: {
    borderRadius: 12,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#bdbdbd",
    borderWidth: 0.5,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 32,
    paddingVertical: 16,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  codeInputView1: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  codeText1: {
    position: "relative",
    fontSize: 24,
    lineHeight: 29,
    fontWeight: "700",
    fontFamily: "Urbanist",
    color: "#212121",
    textAlign: "center",
    display: "none",
  },
  codeInputView2: {
    borderRadius: 12,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#bdbdbd",
    borderWidth: 0.5,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 32,
    paddingVertical: 16,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  codeInputView3: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  codeText2: {
    position: "relative",
    fontSize: 24,
    lineHeight: 29,
    fontWeight: "700",
    fontFamily: "Urbanist",
    color: "#212121",
    textAlign: "center",
    display: "none",
  },
  codeInputView4: {
    borderRadius: 12,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#bdbdbd",
    borderWidth: 0.5,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 32,
    paddingVertical: 16,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  codeInputView5: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  codeText3: {
    position: "relative",
    fontSize: 24,
    lineHeight: 29,
    fontWeight: "700",
    fontFamily: "Urbanist",
    color: "#212121",
    textAlign: "center",
    display: "none",
  },
  codeInputView6: {
    borderRadius: 12,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#bdbdbd",
    borderWidth: 0.5,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 32,
    paddingVertical: 16,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  codeInputView7: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  codeInputView8: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text: {
    position: "relative",
    fontSize: 14,
    letterSpacing: 0.2,
    lineHeight: 20,
    fontWeight: "600",
    fontFamily: "Urbanist",
    color: "#0f437b",
    textAlign: "center",
  },
  buttonBasePrimaryView: {
    flex: 1,
    borderRadius: 100,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonView: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  autoLayoutVertical: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  autoLayoutVertical1: {
    position: "absolute",
    top: 132,
    left: 24,
    width: 380,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text1: {
    position: "relative",
    fontSize: 18,
    letterSpacing: 0.2,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: "Urbanist",
    color: "#e7ecf2",
    textAlign: "center",
  },
  buttonBasePrimaryView1: {
    flex: 1,
    borderRadius: 100,
    backgroundColor: "#b5c5d6",
    borderStyle: "solid",
    borderColor: "#b5c5d6",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 28,
    paddingVertical: 16,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonView1: {
    position: "absolute",
    top: 774,
    left: 24,
    width: 380,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  autoLayoutVertical2: {
    position: "absolute",
    top: 44,
    right: 0,
    left: 0,
    height: 882,
  },
  text2: {
    position: "absolute",
    marginTop: -11,
    top: "50%",
    left: 23,
    fontSize: 16,
    letterSpacing: 0.2,
    lineHeight: 22,
    fontWeight: "600",
    fontFamily: "Urbanist",
    color: "#121212",
    textAlign: "left",
  },
  groupIcon: {
    position: "absolute",
    marginTop: -4,
    top: "50%",
    right: 76,
    width: 18,
    height: 10,
  },
  groupIcon1: {
    position: "absolute",
    marginTop: -5,
    top: "50%",
    right: 55.73,
    width: 15.27,
    height: 10.97,
  },
  groupIcon2: {
    position: "absolute",
    marginTop: -6,
    top: "50%",
    right: 23.02,
    width: 26.98,
    height: 13,
  },
  statusBarView: {
    position: "relative",
    width: 428,
    height: 44,
    flexShrink: 0,
  },
  iconlyLightArrowLeft: {
    position: "relative",
    width: 28,
    height: 28,
    flexShrink: 0,
  },
  text3: {
    position: "relative",
    fontSize: 24,
    lineHeight: 29,
    fontWeight: "700",
    fontFamily: "Urbanist",
    color: "#212121",
    textAlign: "left",
  },
  contentView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  topAppBar: {
    width: 428,
    height: 64,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 24,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  topAppBar1: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  topAppBar2: {
    position: "absolute",
    top: 0,
    left: 0,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  imageIcon: {
    position: "relative",
    width: 160,
    height: 160,
    flexShrink: 0,
    display: "none",
  },
  imageIcon1: {
    alignSelf: "stretch",
    position: "relative",
    maxWidth: "100%",
    overflow: "hidden",
    height: 184,
    flexShrink: 0,
    display: "none",
  },
  text4: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 24,
    lineHeight: 29,
    fontWeight: "700",
    fontFamily: "Urbanist, sans-serif",
    color: "#181a20",
    textAlign: "center",
  },
  supportingText: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 16,
    letterSpacing: 0.2,
    lineHeight: 22,
    fontFamily: "Urbanist, sans-serif",
    color: "#212121",
    textAlign: "center",
  },
  textSupportingText: {
    width: 316,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  contentView1: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text5: {
    position: "relative",
    fontSize: 18,
    letterSpacing: 0.2,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: "Urbanist",
    color: "#fff",
    textAlign: "center",
  },
  buttonBasePrimaryView2: {
    flex: 1,
    borderRadius: 100,
    backgroundColor: "#0f437b",
    borderStyle: "solid",
    borderColor: "#0f437b",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 28,
    paddingVertical: 16,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPressable: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text6: {
    position: "relative",
    fontSize: 18,
    letterSpacing: 0.2,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: "Urbanist",
    color: "#616161",
    textAlign: "center",
  },
  buttonBasePrimaryView3: {
    flex: 1,
    borderRadius: 100,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#e0e0e0",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 28,
    paddingVertical: 16,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonPressable1: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  modalActionComponent: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  frameIcon: {
    position: "relative",
    width: 60,
    height: 60,
    flexShrink: 0,
    overflow: "hidden",
    display: "none",
  },
  modalView: {
    flex: 1,
    borderRadius: 24,
    backgroundColor: "#fff",
    flexDirection: "column",
    padding: 32,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  modalView1: {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(24, 26, 32, 0.8)",
    width: "100%",
    height: "100%",
    flexDirection: "row",
    paddingHorizontal: 24,
    paddingVertical: 182,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  security02View: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
  },
  Button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    marginTop: 20,
    borderRadius: 100,
    backgroundColor: GetColors.PrimaryBlue_500,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: GetColors.PrimaryBlue_500,
    width: '80%',
    marginHorizontal: '10%',
  },
  Button1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    marginTop: 20,
    borderRadius: 100,
    // backgroundColor: GetColors.PrimaryBlue_500,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: "gray",
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
  btnTxt1: {
    fontSize: 18,
    fontFamily: 'Urbanist, sans-serif',
    fontWeight: '600',
    lineHeight: 28,
    letterSpacing: 0.2,
    color: "gray",
    textAlign: 'center',
    justifyContent: 'center',
  },
});

export default Security1;