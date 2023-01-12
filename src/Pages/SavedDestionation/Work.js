import * as React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { design } from "../../config/design.config";
import { colors } from '../../config/colors.config';
import { hs, ws } from '../../utils/design/measurement.design';

const Work = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
    <View style={styles.savedDestination01View}>
      <View style={styles.autoLayoutVertical}>
        <View style={styles.graphicView}>
          <Image
            style={styles.imageIcon}
            resizeMode="cover"
            source={require("../../assets/SavedDestionation/image.png")}
          />
          <Text style={[styles.supportingText, styles.mt16]}>
            No Record available yet
          </Text>
        </View>
        {/* <Pressable
          style={styles.buttonPressable}
          onPress={() => navigation.navigate("Saved")}
        >
          <View style={styles.buttonBasePrimaryView}>
            <Text style={styles.text}>Add New</Text>
          </View>
        </Pressable> */}
         
      </View>
    </View>
    <TouchableOpacity style={styles.Button}
          onPress={() => navigation.navigate("Saved")}
          >
        <Text style={styles.btnTxt}>Add New</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  savedDestination01View: {
    position: "relative",
    // backgroundColor: "#fff",
    flex: 1,
    // width: "100%",
    // height: 926,
    overflow: "hidden",
  },
  autoLayoutVertical: {
    position: "absolute",
    top: 14,
    right: 0,
    bottom: 0,
    left: 0,
    flexDirection: "column",
    paddingHorizontal: 24,
    paddingTop: 2,
    paddingBottom: 58,
    boxSizing: "border-box",
    alignItems: "center",
    justifyContent: "space-between",
  },
  graphicView: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  imageIcon: {
    position: "relative",
    width: 116,
    height: 116,
    flexShrink: 0,
  },

  supportingText: {
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
  mt16: {
    marginTop: 16,
  },
  Button: {
    width: ws(380),
    height: hs(60),
    borderRadius: 100,
    backgroundColor: colors.C0F437B_500,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: hs(30),
    marginBottom:hs(50),
  },
  btnTxt: {
    ...design.TEXT[600][18],
    color: colors.white
  },
  text: {
    position: "relative",
    fontSize: 18,
    letterSpacing: 0.2,
    lineHeight: 28,
    fontWeight: "600",
    fontFamily: "Urbanist, sans-serif",
    color: "#fff",
    textAlign: "center",
  },
});

export default Work;

