import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable,TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { design } from "../config/design.config";
import { colors } from '../config/colors.config';
import { hs, ws } from '../utils/design/measurement.design';

const ForgetPassword = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
    <View style={styles.forgetResetPassword}>
      <View style={styles.autoLayoutVertical3}>
        <Image
          style={styles.frameIcon}
          resizeMode="cover"
          source={require("../assets/Profile/ForgetPassword/frame18.png")}
        />
        <View style={styles.autoLayoutVertical2}>
          <Text style={styles.selectWhichContactDetails}>
            Select which contact details should we use to reset your password
          </Text>
          <View style={[styles.autoLayoutHorizontal1, styles.mt24]}>
            <View style={styles.featureIconView1}>
              <View style={styles.featureIconView}>
                <View style={styles.autoLayoutHorizontal}>
                  <Image
                    style={styles.iconlyBoldChat}
                    resizeMode="cover"
                    source={require("../assets/Profile/ForgetPassword/iconlyboldchat.png")}
                  />
                </View>
              </View>
            </View>
            <Pressable>
            <View style={[styles.autoLayoutVertical, styles.ml20]}>
              <Text style={styles.viaSMSText}>via SMS:</Text>
              <Text style={styles.text}>+1 111 ******99</Text>
            </View>
            </Pressable>
          </View>
          <View style={[styles.autoLayoutHorizontal3, styles.mt24]}>
            <View style={styles.featureIconView3}>
              <View style={styles.featureIconView2}>
                <View style={styles.autoLayoutHorizontal2}>
                  <Image
                    style={styles.iconlyBoldMessage}
                    resizeMode="cover"
                    source={require("../assets/Profile/ForgetPassword/iconlyboldmessage.png")}
                  />
                </View>
              </View>
            </View>
            <Pressable>
            <View style={[styles.autoLayoutVertical1, styles.ml20]}>
              <Text style={styles.viaEmailText}>via Email:</Text>
              <Text style={styles.andArgmailcomText}>and **ar@gmail.com</Text>
            </View>
            </Pressable>
          </View>
        </View>
        {/* <Pressable
          style={styles.buttonPressable}
          onPress={() => navigation.navigate("ForgetReset")}
        >
          <View style={styles.buttonBasePrimaryView}>
            <Text style={styles.text1}>Continue</Text>
          </View>
        </Pressable> */}
        <TouchableOpacity style={styles.Button}
          onPress={() => navigation.navigate("ForgetReset")}
          >
        <Text style={styles.btnTxt}>Add New</Text>
      </TouchableOpacity>
      </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ml20: {
    marginLeft: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mt24: {
    marginTop: 24,
  },
  frameIcon: {
    position: "relative",
    width: 276,
    height: 250,
    flexShrink: 0,
    overflow: "hidden",
  },
  selectWhichContactDetails: {
    ...design.TEXT[500][18],
    color: colors.C212121,
    letterSpacing: ws(0.2),
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    // width: 381,
    marginBottom: 10,
    marginTop: 10
  },
  iconlyBoldChat: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
  },
  autoLayoutHorizontal: {
    borderRadius: 1000,
    backgroundColor: "#002b7f",
    flexDirection: "row",
    padding: 8,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  featureIconView: {
    borderRadius: 100,
    backgroundColor: "#b0bdd7",
    width: 52,
    height: 52,
    flexShrink: 0,
    flexDirection: "row",
    padding: 8,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  featureIconView1: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  viaSMSText: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 12,
    letterSpacing: 0.2,
    fontWeight: "500",
    fontFamily: "Urbanist,sans-serif",
    color: "#757575",
    textAlign: "left",
  },
  text: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 16,
    letterSpacing: 0.2,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Urbanist,sans-serif",
    color: "#000",
    textAlign: "left",
  },
  autoLayoutVertical: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  autoLayoutHorizontal1: {
    alignSelf: "stretch",
    borderRadius: 20,
    backgroundColor: "rgba(0, 43, 127, 0.03)",
    shadowColor: "rgba(4, 6, 15, 0.05)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 60,
    elevation: 60,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#002b7f",
    borderWidth: 3,
    flexDirection: "row",
    padding: 24,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconlyBoldMessage: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
  },
  autoLayoutHorizontal2: {
    borderRadius: 1000,
    backgroundColor: "#002b7f",
    flexDirection: "row",
    padding: 8,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  featureIconView2: {
    borderRadius: 100,
    backgroundColor: "#b0bdd7",
    width: 52,
    height: 52,
    flexShrink: 0,
    flexDirection: "row",
    padding: 8,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  featureIconView3: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  viaEmailText: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 12,
    letterSpacing: 0.2,
    fontWeight: "500",
    fontFamily: "Urbanist,sans-serif",
    color: "#757575",
    textAlign: "left",
  },
  andArgmailcomText: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 16,
    letterSpacing: 0.2,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: "Urbanist,sans-serif",
    color: "#000",
    textAlign: "left",
  },
  autoLayoutVertical1: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  autoLayoutHorizontal3: {
    alignSelf: "stretch",
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "rgba(4, 6, 15, 0.05)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 60,
    elevation: 60,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#eee",
    borderWidth: 1,
    flexDirection: "row",
    padding: 24,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  autoLayoutVertical2: {
    alignSelf: "stretch",
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
    fontFamily: "Urbanist,sans-serif",
    color: "#fff",
    textAlign: "center",
  },
  Button: {
    width: ws(380),
    height: hs(60),
    borderRadius: 100,
    backgroundColor: colors.C0F437B_500,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: hs(30)
  },
  btnTxt: {
    ...design.TEXT[600][18],
    color: colors.white
  },
  autoLayoutVertical3: {
    position: "absolute",
    right: 0,
    left: 0,
    height: 670,
    flexDirection: "column",
    paddingHorizontal: 24,
    paddingTop: 2,
    paddingBottom: 38,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
  forgetResetPassword: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
    marginTop:15,
  },
});

export default ForgetPassword;
