import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ImageBackground,
} from "react-native";
const height = Dimensions.get("screen").height;
import { useNavigation } from "@react-navigation/native";
import Header from "../../Components/Header";
import GetImage from "../../assets/GetImage";
import ReactModal from "../../Components/ReactModal";
import { width } from "../../assets/fontsAndColors";
import { icon } from "../../assets/icons";
import { colors } from "../../config/colors.config";
import { hs, ws } from "../../utils/design/measurement.design";
import { design } from "../../config/design.config";

function ScanQR(props) {
  const [amountModal, setAmountModal] = React.useState(false)
  const navigation = useNavigation();

  let data = [
    {
      id: 1,
      title: 'Successfully Onboard',
      sub: 'We hope you will be having a pleasant & memorable journey',
      but:'Refresh',
      img: GetImage.promoSuccess

    },
    {
      id: 2,
      title: 'Timeout',
      sub: 'You have pass the limit for QR Code. Refresh again',
      but: 'Okay',
      img: GetImage.timeout

    },
    {
      id: 3,
      title: 'Unable to Onboard',
      sub: 'Looks like we got problem. Kindly check your internet connection.',
      but: 'Retry',
      img: GetImage.wrong

    },
    {
      id: 4,
      title: 'Successfully Offboard',
      sub: 'Thank you for using our service.',
      but: 'Okay',
      img: GetImage.promoSuccess

    }
  ]
  const [ModalCount, setModalCount] = React.useState(0)
  const _Triggr = () => {
    if (ModalCount === 0 || ModalCount === 1 || ModalCount === 2) {
      setModalCount(ModalCount + 1)
    }
    else {
      setModalCount(0)

      setAmountModal(!amountModal)
    }
  }
  return (
    <View style={styles.container}>
      <Header
        {...props}
        title={"San QR"}
        isLeftIcon
        isBackground
        titleStyle={styles.title}
        labelStyle={design.TEXT[700][24]}
      >
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <Text style={styles.headText}>Scan QR code for onboarding</Text>
          <Image source={icon.timer} style={{ height: 25, width: 25, resizeMode: 'contain', marginTop: 25 }} />

          <TouchableOpacity onPress={() => { setAmountModal(!amountModal) }}>
            <Image
              source={GetImage.qrimage}
              style={{
                height: 345,
                width: width / 100 * 95,
                resizeMode: "contain",
                alignSelf: "center",
                marginTop: 20,

              }}
            />

          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: "#F6DA5C",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              padding: 8,
              borderRadius: 5,
              marginTop: 40,
            }}

            onPress={() => navigation.navigate("routerlist")}
          >
            <Image
              source={GetImage.d}
              style={{
                marginLeft: 5,
                height: 13,
                width: 13,
                resizeMode: "contain",
                alignSelf: "center",
                marginRight: 3
              }}
            />
            <Text style={[styles.subText, { fontSize: 13, color: "#212121" }]}>
              {"Larkin"}
            </Text>
            <View
              style={{
                width: 1,
                height: 20,
                backgroundColor: "#E0C654",
                marginHorizontal: 10


              }}
            />
            <Image
              source={GetImage.d}
              style={{
                height: 13,
                width: 13,
                resizeMode: "contain",
                alignSelf: "center",
                marginRight: 3

              }}
            />
            <Text style={[styles.subText, { fontSize: 13, color: "#212121", marginRight: 5 }]}>
              {"Zoo Johor"}
            </Text>
          </TouchableOpacity>
        </View>
      </Header>
      <ReactModal
        container={{
          backgroundColor: "rgba(0,0,0,0.7)",
          justifyContent: "center",
          alignItems: "center",
        }}
        visible={amountModal}
      >
        <View
          style={{
            backgroundColor: "#fff",
            height: (height / 100) * 50,
            width: "95%",
            justifyContent: "center",
            
            alignItems: "center",
            borderRadius: 24,
          }}
        >
          <View style={{ flex: 0.4, }}>
            <Image
              source={data[ModalCount].img}
              style={{
                height: (height / 100) * 18,
                width: (height / 100) * 18,
                resizeMode: "contain",
              }}
            />
            {/* <Lottie style={{ height: height / 100 * 20, width: height / 100 * 30 }} source={require("../../assets/Animation/lf20_s2lryxtd.json")} autoPlay /> */}
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
              {data[ModalCount].title}
            </Text>
            <Text
            style={{
              ...design.TEXT[400][16],
              color: colors.C212121_400,
              textAlign:'center'
          }}
              // style={{
              //   fontSize: (height / 100) * 1.8,
              //   fontFamily: "Urbanist_semibold",
              //   color: "#616161",
              //   textAlign: 'center',
              //   marginTop: 2,
              //   paddingHorizontal: 5
              // }}
            >
              {data[ModalCount].sub}
            </Text>
          </View>

          <View style={{ flex: 0.2, top: height / 100 * 5 }}>
            <TouchableOpacity
              onPress={() => _Triggr()}
              style={{
                height: (height / 100) * 6,
                backgroundColor: "#0F437B",
                width: width / 100 * 78,
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
                // style={{
                //   fontSize: (height / 100) * 2,
                //   fontFamily: "Urbanist_semibold",
                //   color: "#fff",
                // }}
              >
                {data[ModalCount].but}
                {/* {"Okay"} */}
              </Text>
            </TouchableOpacity>
            <View style={{ height: (height / 100) * 2 }}></View>

          </View>
        </View>
      </ReactModal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#002B7F",
  },
  headText: {
    fontSize: (height / 100) * 2.5,
    fontFamily: "Urbanist_semibold",
    fontWeight: "bold",
    color: "#fff",
    paddingLeft: 20,
    alignSelf: "center",
  },
  headsubText: {
    fontSize: 16,
    fontFamily: "Urbanist_semibold",
    fontWeight: "bold",
    color: "#000",
  },
  subText: {
    fontSize: 14,
    fontFamily: "  Urbanist_regular",
    color: "#616161",
  },
});

export default ScanQR;
