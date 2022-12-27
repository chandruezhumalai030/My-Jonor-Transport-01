import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, ScrollView, Dimensions, TextInput, TouchableOpacity, Button, Pressable } from "react-native"
import { useNavigation } from "@react-navigation/native";
import GetImage from '../../assets/GetImage';
import GetColors from '../../assets/GetColors';
import Header from "../../Components/Header";
import { white } from "react-native-paper/lib/typescript/styles/colors";
import Lottie from 'lottie-react-native';
import ReactModal from '../../Components/ReactModal';

export default function Successaddress(props) {
  const height = Dimensions.get("screen").height;
  const [promoModal, setPromoModal] = useState(false)
  const [promoModal1, setPromoModal1] = useState(false)
  const navigation = useNavigation();
  return (
    <Header
      {...props}
      rightIcon={false}
      // isBackground={true}
      title={"Edit Address"}
    >
      <ScrollView style={styles.container}>
        <View style={styles.Address_02}>
          <View style={styles.Group6610}>
            <View style={styles.AutoLayoutVertical2}>
              <View style={styles.AutoLayoutVertical1}>
                <View style={styles.AutoLayoutVertical}>
                  <View style={styles.ProfileInputForm}>
                    <View style={styles.Text_field}>
                      <View style={styles.Content2}>
                        <View style={styles.LabelText}>
                          <Text style={styles.Txt860}>Name</Text>
                        </View>
                        <View style={styles.Content2}>
                          <View style={styles.Input}>
                            <View style={styles.Content1}>
                              <TextInput style={styles.Txt606}
                                underlineColorAndroid="transparent"
                                placeholder="Address Name"
                                autoCapitalize="none"
                                placeholderTextColor="gray" />
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={styles.Text_field}>
                      <View style={styles.Content2}>
                        <View style={styles.LabelText}>
                          <Text style={styles.Txt860}>Address Line 1</Text>
                        </View>
                        <View style={styles.Content2}>
                          <View style={styles.Input}>
                            <View style={styles.Content1}>
                              <TextInput style={styles.Txt606}
                                underlineColorAndroid="transparent"
                                placeholder="Address Line 1"
                                autoCapitalize="none"
                                placeholderTextColor="gray" />
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={styles.Text_field}>
                      <View style={styles.Content2}>
                        <View style={styles.LabelText}>
                          <Text style={styles.Txt860}>Address Line 2</Text>
                        </View>
                        <View style={styles.Content2}>
                          <View style={styles.Input}>
                            <View style={styles.Content1}>
                              <TextInput style={styles.Txt606}
                                underlineColorAndroid="transparent"
                                placeholder="Address Line 2"
                                autoCapitalize="none"
                                placeholderTextColor="gray" />
                            </View>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={styles.Text_field}>
                      <View style={styles.Content2}>
                        <View style={styles.LabelText}>
                          <Text style={styles.Txt860}>Postcode</Text>
                        </View>
                        <View style={styles.Content2}>
                          <View style={styles.Input}>
                            <TextInput style={styles.Txt606}
                              underlineColorAndroid="transparent"
                              placeholder="5600"
                              autoCapitalize="none"
                              placeholderTextColor="gray" />
                            <Image
                              style={styles.Dropdown}
                              source={require('../../assets/Profile/down.png')}
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={styles.Text_field}>
                      <View style={styles.Content2}>
                        <View style={styles.LabelText}>
                          <Text style={styles.Txt860}>Country</Text>
                        </View>
                        <View style={styles.Content2}>
                          <View style={styles.Input}>
                            <TextInput style={styles.Txt606}
                              underlineColorAndroid="transparent"
                              placeholder="Malaysia"
                              autoCapitalize="none"
                              placeholderTextColor="gray" />
                            <Pressable onPress={() => navigation.navigate("Addresssuccess")}>
                              <Image
                                style={styles.Dropdown}
                                source={require('../../assets/Profile/down.png')}
                              />
                            </Pressable>
                          </View>
                        </View>
                      </View>
                    </View>


                  </View>
                </View>
              </View>
              {/* <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate("Savedlocation")}>
        <Text style={styles.btnTxt}>Add</Text>
      </TouchableOpacity> */}
              <View style={styles.fixToText}>
                {/* <Button
          title="Delete"
          onPress={() => navigation.navigate("SavedDelete")}
          
        />
        <Button
          title="Save"
          onPress={() => navigation.navigate("Success1")}
        /> */}
                <TouchableOpacity style={styles.Button} onPress={() => setPromoModal1(true)}>
                  <Text style={styles.btnTxt}>Delete</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Button1} onPress={() => setPromoModal(true)}>
                  <Text style={styles.btnTxt1}>Save</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
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
              {"Succesfully Update"}
            </Text>
            <Text
              style={{
                fontSize: (height / 100) * 1.5,
                fontFamily: "Urbanist_semibold",
                color: "#616161",
              }}
            >
              Your profile has been updated
            </Text>
          </View>

          <View style={{ flex: 0.2, top: height / 100 * 5 }}>
            <TouchableOpacity
              onPress={() => setPromoModal(!promoModal)}
              style={{
                height: (height / 100) * 6,
                backgroundColor: "#0F437B",
                width: (height / 100) * 35,
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
                {"Okay"}
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
            height: (height / 100) * 60,
            width: "95%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          <View style={{ flex: 0.4, }}>
            <Image
              source={GetImage.promoDelete}
              style={{
                height: (height / 100) * 18,
                width: (height / 100) * 18,
                resizeMode: "contain",
              }}
            />
            {/* <Lottie style={{ height: height / 100 * 20, width: height / 100 * 30 }} source={require("../../assets/SavedDestionation/-feature-pop-up-icon6.png")} autoPlay /> */}
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
              {"Are you sure?"}
            </Text>
            <Text
              style={{
                fontSize: (height / 100) * 2,
                fontFamily: "Urbanist_semibold",
                color: "#616161",
              }}
            >
              Removing this means you won’t be able to see saved data ever
              again
            </Text>
          </View>

          <View style={{ flex: 0.2, top: height / 100 * 5,marginBottom:10 }}>
            <TouchableOpacity
              onPress={() => setPromoModal1(!promoModal1)}
              style={{
                height: (height / 100) * 6,
                backgroundColor: "#f75555",
                width: (height / 100) * 35,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 25,
                marginBottom:10
              }}
            >
              <Text
                style={{
                  fontSize: (height / 100) * 2,
                  fontFamily: "Urbanist_semibold",
                  color: "#fff",
                }}
              >
                {"Delete"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setPromoModal1(!promoModal1)}
              style={{
                height: (height / 100) * 6,
                backgroundColor: "white",
                borderColor:"#e0e0e0",
                borderWidth: 1,
                width: (height / 100) * 35,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 25,
                marginBottom:5
              }}
            >
              <Text
                style={{
                  fontSize: (height / 100) * 2,
                  fontFamily: "Urbanist_semibold",
                  color: "gray",
                }}
              >
                {"Cancel"}
              </Text>
            </TouchableOpacity>
            <View style={{ height: (height / 100) * 2 }}></View>

          </View>
        </View>
      </ReactModal>
    </Header>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Address_02: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "rgba(255, 255, 255, 1)",
    // width: '100%',
    // height: '100%',
  },
  Group6610: {
    display: "flex",
    flexDirection: "column",
  },
  AutoLayoutVertical2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 31,
    paddingBottom: 47,
    paddingLeft: 23,
    paddingRight: 23,
    height: 818,
    width: 428,
  },
  AutoLayoutVertical1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 380,
  },
  AutoLayoutVertical: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 380,
  },
  ProfileInputForm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    height: 654,
  },
  Text_field: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  Content2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  LabelText: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 1,
    paddingRight: 1,
    marginBottom: 12,
    // width: 380,
  },
  Txt860: {
    fontSize: 18,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "700",
    lineHeight: 25,
    letterSpacing: 0.2,
    color: "rgba(33,33,33,1)",
  },
  Input: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 20.5,
    paddingRight: 20.5,
    borderRadius: 11,
    backgroundColor: "rgba(0,43,127,0.03)",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "rgba(15,67,123,1",
    width: 370,
    height: 56,
  },
  Content1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    width: 340,
  },
  Txt754: {
    fontSize: 18,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "400",
    lineHeight: 22,
    letterSpacing: 0.2,
    color: "rgba(158,158,158,1)",
    width: 341,
  },
  Txt606: {
    fontSize: 16,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "400",
    lineHeight: 22,
    letterSpacing: 0.2,
    color: "black",
    width: 309,
    marginRight: 12,
  },
  Dropdown: {
    width: 20,
    height: 56,
  },
  Button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    borderRadius: 100,
    backgroundColor: "white",
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: 'gray',
    width: '50%',
    // marginHorizontal: '10%',
  },
  btnTxt: {
    fontSize: 18,
    fontFamily: 'Urbanist, sans-serif',
    fontWeight: '600',
    lineHeight: 28,
    letterSpacing: 0.2,
    color: 'gray',
    textAlign: 'center',
    justifyContent: 'center',
  },
  Button1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    borderRadius: 100,
    backgroundColor: GetColors.PrimaryBlue_500,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: GetColors.PrimaryBlue_500,
    width: '50%',
    // marginHorizontal: '10%',
    marginLeft: 10
  },
  btnTxt1: {
    fontSize: 18,
    fontFamily: 'Urbanist, sans-serif',
    fontWeight: '600',
    lineHeight: 28,
    letterSpacing: 0.2,
    color: GetColors.white,
    textAlign: 'center',
    justifyContent: 'center',
  },
})
