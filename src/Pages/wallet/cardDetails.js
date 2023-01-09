import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert
} from "react-native";
import React, { useState } from "react";
import GetImage from "../../assets/GetImage";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;
import { useNavigation } from "@react-navigation/native";
import Header from "../../Components/Header";
import Bt_Main from "../../Components/Bt_Main";
import ReactModal from '../../Components/ReactModal';
import Lottie from 'lottie-react-native';

const cardDetails = (props) => {
  const navigation = useNavigation();
  const [promoModal, setPromoModal] = useState(false)
  const [number, onChangeNumber] = React.useState(null);
  const [isFocused, setIsFocused] = React.useState("name");
  const [reg_details, setReg_details] = useState({
    Name: "",
    cardNumber: "",
    date: "",
    cvv: "",
  });
  const [editable, setEditable] = useState(true);
  const labelTextArray = {
    Name: "Name",
    cardNumber: "Card Number",
    date: "DD/YY",
    cvv: "CVV",
  };

  const maxLength = {
    Name: 10,
    cardNumber: 16,
    date: 5,
    cvv: 4,
  };
  const data = [
    {
      id: 1,
      img: GetImage.mastercard,
      title: "•••• •••• •••• •••• 4679",
      time: "Dec 16, 2024 | 16:42 PM",
      rate: "- $14",
      isChecked: false,
    },
    {
      id: 2,
      img: GetImage.mastercard,
      title: "•••• •••• •••• •••• 4679",
      time: "Dec 16, 2024 | 11:39 PM",
      rate: "+ $80",
      isChecked: true,
    },
  ];
const _trigger=()=>{
  // Alert.alert("Card added successfully...")
  setTimeout(()=>{
    navigation.navigate("cardlist")
  },2000)
}
  return (
    <View style={styles.container}>
      <Header
        {...props}
        righticon={false}
        onPress={() => setOptionModal(!optionModal)}
        title={"Add New Card"}
      >
        <KeyboardAwareScrollView style={{ flex: 1 }}>
        <View style={{height:height/100*3}}></View>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                
              }}
            >
              <Image
                style={{
                  height: (height / 100) * 30,
                  width: (width / 100) * 92,
                  resizeMode: "contain",
                }}
                source={require("../../assets/icons/debit.png")}
              ></Image>
            </View>
          <View style={{height:height/100*1.8}}></View>
         
            <View  >
              <Text
                style={{
                  fontSize: (height / 100) * 2,
                  fontFamily: "Urbanist_bold",
                  fontWeight: "bold",
                  color: "#000",
                  paddingLeft: 23,
                }}
              >
                {"Card Name"}
              </Text>
              <View style={styles.textinput_con}>
                <TextInput
                  placeholder="  Name On Card"
                  placeholderTextColor={"gray"}
                  style={styles.textinput}
                />
              </View>
            </View>
            <View style={{height:height/100*1.5}}></View>
            <View>
              <Text
                style={{
                  fontSize: (height / 100) * 2,
                  fontFamily: "Urbanist_bold",
                  fontWeight: "bold",
                  color: "#000",
                  paddingLeft: 20,
                }}
              >
                {"Card Number"}
              </Text>
              <View style={styles.textinput_con}>
                <TextInput
                  placeholder="  Card Number"
                  placeholderTextColor={"#9E9E9E"}
                  style={styles.textinput}
                />
              </View>
            </View>
            <View style={{height:height/100*1}}></View>
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                justifyContent: "center",
              }}
            >
              <View style={{ flex: 0.48 }}>
                <Text
                  style={{
                    fontSize: (height / 100) * 2,
                    fontFamily: "Urbanist_bold",
                    fontWeight: "bold",
                    color: "#000",
                    paddingLeft: 15,
                  }}
                >
                  {"Expiry Date"}
                </Text>
                <View style={styles.textinput_con}>
                  <TextInput
                    placeholder="  MM/YY"
                    placeholderTextColor={"#9E9E9E"}
                    keyboardType='numeric'
                    onChangeText={onChangeNumber}
                    style={styles.textinput}
                  />
                </View>
              </View>
              <View style={{ flex: 0.48 }}>
                <Text
                  style={{
                    fontSize: (height / 100) * 2,
                    fontFamily: "Urbanist_bold",
                    fontWeight: "bold",
                    color: "#000",
                    paddingLeft: 15
                  }}
                >
                  {"CVV"}
                </Text>
                <View style={styles.textinput_con}>
                  <TextInput
                    placeholder="  CVV"
                    placeholderTextColor={"#9E9E9E"}
                    keyboardType='numeric'
                    onChangeText={onChangeNumber}
                    style={styles.textinput}
                    
                  />
                </View>
              </View>
            </View>
        
          {/* <CreditCard
                imageFront={GetImage.cardbg}
                imageBack={GetImage.cardbg}
                shiny={false}
                bar={false}
                focused={isFocused}
                number={reg_details.cardNumber}
                name={reg_details.Name}
                expiry={reg_details.date}
                cvc={reg_details.cvv}
              /> */}
              <View style={{height:height/100*5}}></View>
        <Bt_Main label="Add new Card" 
        // onPress={()=>_trigger()}
        onPress={() => setPromoModal(!promoModal)}

        ></Bt_Main>
        </KeyboardAwareScrollView>

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
                        {/* <Image
              source={GetImage.promoSuccess}
              style={{
                height: (height / 100) * 18,
                width: (height / 100) * 18,
                resizeMode: "contain",
              }}
            /> */}
                        <Lottie style={{ height: height / 100 * 20, width: height / 100 * 30 }} source={require("../../assets/Animation/lf20_s2lryxtd.json")} autoPlay />
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
                            {"New Card Added"}
                        </Text>
                        <Text
                            style={{
                                fontSize: (height / 100) * 1.5,
                                fontFamily: "Urbanist_semibold",
                                color: "#616161",
                            }}
                        >
                            You have successfully add the new card
                        </Text>
                    </View>

                    <View style={{ flex: 0.2, top: height / 100 * 5 }}>
                        <TouchableOpacity
                        //  onPress={() => {navigation.goBack(null);navigation.goBack(null)}}
                        onPress={()=>_trigger()}
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
                                    fontSize: (height / 100) * 2,
                                    fontFamily: "Urbanist_semibold",
                                    color: "#fff",
                                }}
                            >
                                {"Okey"}
                            </Text>
                        </TouchableOpacity>
                        <View style={{ height: (height / 100) * 2 }}></View>

                    </View>
                </View>
            </ReactModal>

       
      </Header>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5;",
  },
  headText: {
    fontSize: 15,
    fontFamily: "Urbanist_regular",
    fontWeight: "500",
    color: "#424242",
    paddingLeft: 20,
  },
  headsubText: {
    fontSize: 16,
    fontFamily: "Urbanist_semibold",
    fontWeight: "700",
    color: "#000",
  },
  subText: {
    fontSize: 14,
    fontFamily: "  Urbanist_regular",
    color: "#616161",
  },
  headerFooterStyle: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  textStyle: {
    fontSize: 13,
    fontFamily: "Urbanist_semibold",
    fontWeight: "700",
    color: "#0F437B",
  },
  textinput_con: {
    height: (height / 100) * 8,
    justifyContent: "center",
    alignItems: "center",
  },
  textinput: {
    // backgroundColor:'#E5E5E5;',
    color:'black',
    width: "90%",
    borderWidth: 1,
    borderColor: "#9E9E9E",
    height: (height / 100) * 6,
    borderRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    
  },
});

export default cardDetails;
