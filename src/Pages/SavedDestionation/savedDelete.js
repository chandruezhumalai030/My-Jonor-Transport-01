import * as React from "react";
import { Text, StyleSheet, Image, View, Pressable, } from "react-native";
import { useNavigation } from "@react-navigation/native";

const SavedDelete = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
    <View style={styles.savedDestination11View}>
      <View style={styles.modalView1}>
        <View style={styles.modalView}>
          <Image
            style={styles.featurePopUpIcon}
            resizeMode="cover"
            source={require("../../assets/SavedDestionation/-feature-pop-up-icon6.png")}
          />
          <View style={[styles.contentView10, styles.mt32]}>
            <View style={styles.textSupportingText}>
              <Text style={styles.text9}>Are you sure?</Text>
              <Text style={[styles.supportingText5, styles.mt8]}>
                Removing this means you won’t be able to see saved data ever
                again
              </Text>
            </View>
          </View>
          <View style={[styles.modalActionComponent, styles.mt32]}>
            {/* <View style={styles.buttonView2}>
              <View style={styles.buttonBasePrimaryView2}>
                <Text style={styles.text10}>Delete</Text>
              </View>
            </View> */}
             <Pressable
              style={[styles.buttonPressable, styles.mt12]}
              onPress={() => navigation.navigate("SavedAddress")}
            >
              <View style={styles.buttonBasePrimaryView2}>
                <Text style={styles.text11}>Delete</Text>
              </View>
            </Pressable>
            <Pressable
              style={[styles.buttonPressable, styles.mt12]}
              onPress={() => navigation.navigate("SavedAddress")}
            >
              <View style={styles.buttonBasePrimaryView3}>
                <Text style={styles.text11}>Cancel</Text>
              </View>
            </Pressable>
          </View>
          <Image
            style={[styles.frameIcon, styles.mt32]}
            resizeMode="cover"
            // source={require("../assets/frame1.png")}
          />
        </View>
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
  ml14: {
    marginLeft: 14,
  },
  ml12: {
    marginLeft: 12,
  },
  mt4: {
    marginTop: 4,
  },
  mt12: {
    marginTop: 12,
  },
  mt16: {
    marginTop: 16,
  },
  ml16: {
    marginLeft: 16,
  },
  mt8: {
    marginTop: 8,
  },
  mt32: {
    marginTop: 32,
  },
  text: {
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
  text1: {
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
    backgroundColor: "#fff",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  labelText: {
    position: "relative",
    fontSize: 18,
    letterSpacing: 0.2,
    lineHeight: 25,
    fontWeight: "700",
    fontFamily: "Urbanist",
    color: "#212121",
    textAlign: "left",
  },
  labelTextView: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 2,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconlyBoldCircle: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
    display: "none",
  },
  text2: {
    flex: 1,
    position: "relative",
    fontSize: 16,
    letterSpacing: 0.2,
    lineHeight: 22,
    fontFamily: "Urbanist",
    color: "#212121",
    textAlign: "left",
  },
  contentView1: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 1,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconlyLightOutlineCircle: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
    display: "none",
  },
  inputView: {
    borderRadius: 12,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#212121",
    borderWidth: 0.5,
    width: 380,
    height: 56,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  supportingText: {
    position: "relative",
    fontSize: 12,
    letterSpacing: 0.2,
    lineHeight: 12,
    fontFamily: "Urbanist",
    color: "#9e9e9e",
    textAlign: "left",
    display: "none",
  },
  contentView2: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  inputFieldBaseAlternative: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  textFieldView: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  labelText1: {
    position: "relative",
    fontSize: 18,
    letterSpacing: 0.2,
    lineHeight: 25,
    fontWeight: "700",
    fontFamily: "Urbanist",
    color: "#212121",
    textAlign: "left",
  },
  labelTextView1: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 2,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconlyBoldCircle1: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
    display: "none",
  },
  text3: {
    flex: 1,
    position: "relative",
    fontSize: 16,
    letterSpacing: 0.2,
    lineHeight: 22,
    fontFamily: "Urbanist",
    color: "#212121",
    textAlign: "left",
  },
  contentView3: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 1,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconlyLightOutlineCircle1: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
    display: "none",
  },
  inputView1: {
    borderRadius: 12,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#212121",
    borderWidth: 0.5,
    width: 380,
    height: 56,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  supportingText1: {
    position: "relative",
    fontSize: 12,
    letterSpacing: 0.2,
    lineHeight: 12,
    fontFamily: "Urbanist",
    color: "#9e9e9e",
    textAlign: "left",
    display: "none",
  },
  contentView4: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  inputFieldBaseAlternative1: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  textFieldView1: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  labelText2: {
    position: "relative",
    fontSize: 18,
    letterSpacing: 0.2,
    lineHeight: 25,
    fontWeight: "700",
    fontFamily: "Urbanist",
    color: "#212121",
    textAlign: "left",
  },
  labelTextView2: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 2,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconlyBoldCircle2: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
    display: "none",
  },
  text4: {
    flex: 1,
    position: "relative",
    fontSize: 16,
    letterSpacing: 0.2,
    lineHeight: 22,
    fontFamily: "Urbanist",
    color: "#212121",
    textAlign: "left",
  },
  contentView5: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 1,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconlyLightOutlineCircle2: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
    display: "none",
  },
  inputView2: {
    borderRadius: 12,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#212121",
    borderWidth: 0.5,
    width: 380,
    height: 56,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  supportingText2: {
    position: "relative",
    fontSize: 12,
    letterSpacing: 0.2,
    lineHeight: 12,
    fontFamily: "Urbanist",
    color: "#9e9e9e",
    textAlign: "left",
    display: "none",
  },
  contentView6: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  inputFieldBaseAlternative2: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  textFieldView2: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  labelText3: {
    position: "relative",
    fontSize: 18,
    letterSpacing: 0.2,
    lineHeight: 25,
    fontWeight: "700",
    fontFamily: "Urbanist",
    color: "#212121",
    textAlign: "left",
  },
  labelTextView3: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 2,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  iconlyBoldCircle3: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
    display: "none",
  },
  text5: {
    flex: 1,
    position: "relative",
    fontSize: 16,
    letterSpacing: 0.2,
    lineHeight: 22,
    fontFamily: "Urbanist",
    color: "#212121",
    textAlign: "left",
  },
  contentView7: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 0,
    paddingVertical: 1,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  iconlyLightOutlineCircle3: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
    display: "none",
  },
  inputView3: {
    borderRadius: 12,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#212121",
    borderWidth: 0.5,
    width: 380,
    height: 56,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  supportingText3: {
    position: "relative",
    fontSize: 12,
    letterSpacing: 0.2,
    lineHeight: 12,
    fontFamily: "Urbanist",
    color: "#9e9e9e",
    textAlign: "left",
    display: "none",
  },
  contentView8: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  inputFieldBaseAlternative3: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  textFieldView3: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  labelText4: {
    position: "relative",
    fontSize: 18,
    letterSpacing: 0.2,
    lineHeight: 25,
    fontWeight: "700",
    fontFamily: "Urbanist",
    color: "#212121",
    textAlign: "left",
  },
  labelTextView4: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: 2,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text6: {
    flex: 1,
    position: "relative",
    fontSize: 16,
    letterSpacing: 0.2,
    lineHeight: 22,
    fontFamily: "Urbanist",
    color: "#212121",
    textAlign: "left",
  },
  iconlyLightOutlineCircle4: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
    display: "none",
  },
  iconlyBoldArrowDown2: {
    position: "relative",
    width: 20,
    height: 20,
    flexShrink: 0,
  },
  frameView: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  dropdownView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  inputView4: {
    borderRadius: 12,
    backgroundColor: "#fff",
    borderStyle: "solid",
    borderColor: "#e0e0e0",
    borderWidth: 0.5,
    width: 380,
    height: 56,
    flexShrink: 0,
    overflow: "hidden",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 0,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  supportingText4: {
    position: "relative",
    fontSize: 12,
    letterSpacing: 0.2,
    lineHeight: 12,
    fontFamily: "Urbanist",
    color: "#9e9e9e",
    textAlign: "left",
    display: "none",
  },
  contentView9: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  inputFieldBaseAlternative4: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  textFieldView4: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  profileInputForm: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  autoLayoutVertical: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  autoLayoutVertical1: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text7: {
    position: "relative",
    fontSize: 18,
    letterSpacing: 0.2,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: "Urbanist",
    color: "#616161",
    textAlign: "center",
  },
  buttonBasePrimaryView: {
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
  buttonView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  text8: {
    position: "relative",
    fontSize: 18,
    letterSpacing: 0.2,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: "Urbanist",
    color: "#fff",
    textAlign: "center",
  },
  buttonBasePrimaryView1: {
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
  buttonView1: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  doubleButtonView: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  autoLayoutVertical2: {
    position: "absolute",
    top: 108,
    right: 0,
    left: 0,
    height: 818,
    flexDirection: "column",
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 48,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
  featurePopUpIcon: {
    position: "relative",
    width: 185.93,
    height: 180,
    flexShrink: 0,
  },
  text9: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 24,
    lineHeight: 29,
    fontWeight: "700",
    fontFamily: "Urbanist",
    color: "#181a20",
    textAlign: "center",
  },
  supportingText5: {
    alignSelf: "stretch",
    position: "relative",
    fontSize: 16,
    letterSpacing: 0.2,
    lineHeight: 22,
    fontFamily: "Urbanist",
    color: "#212121",
    textAlign: "center",
  },
  textSupportingText: {
    width: 316,
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  contentView10: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  text10: {
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
    backgroundColor: "#f75555",
    borderStyle: "solid",
    borderColor: "#f75555",
    borderWidth: 1,
    flexDirection: "row",
    paddingHorizontal: 28,
    paddingVertical: 16,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonView2: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  text11: {
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
  buttonPressable: {
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
    width: 428,
    height: 926,
    flexDirection: "row",
    paddingHorizontal: 24,
    paddingVertical: 182,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "center",
  },
  savedDestination11View: {
    position: "relative",
    backgroundColor: "#fff",
    flex: 1,
    overflow: "hidden",
  },
});

export default SavedDelete;
