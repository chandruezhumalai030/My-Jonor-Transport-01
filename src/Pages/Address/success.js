import React, { useState } from 'react';
import { StyleSheet, Image, Text, View, ScrollView, Dimensions, TextInput, TouchableOpacity, Button, Pressable } from "react-native"
import { useNavigation } from "@react-navigation/native";
import GetImage from '../../assets/GetImage';
import GetColors from '../../assets/GetColors';
import Header from "../../Components/Header";
import { white } from "react-native-paper/lib/typescript/styles/colors";
import Lottie from 'lottie-react-native';
import ReactModal from '../../Components/ReactModal';
import { design } from '../../config/design.config';
import { colors } from '../../config/colors.config';
import { hs, ws } from '../../utils/design/measurement.design';

export default function Successaddress(props) {
  const height = Dimensions.get("screen").height;
  const [promoModal, setPromoModal] = useState(false)
  const [promoModal1, setPromoModal1] = useState(false)
  const navigation = useNavigation();
  return (
    <Header
      {...props}
      rightIcon={false}
      isLeftIcon
      title={"Edit Address"}
      labelStyle={styles.labelStyle}
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

                    <View style={styles.buttonContainer}>
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
            borderRadius: 24,
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
                ...design.TEXT[700][24],
                color: colors.C181A20_700,
                textAlign:'center'
            }}
            >
              {"Succesfully Update"}
            </Text>
            <Text
              style={{
                ...design.TEXT[400][16],
                color: colors.C212121_400,
                textAlign:'center'
            }}
            >
              Your profile has been updated
            </Text>
          </View>

          <View style={{ flex: 0.2, top: height / 100 * 5 }}>
            <TouchableOpacity
              onPress={() => {
                setPromoModal(!promoModal)
                navigation.navigate("BottomTab")
              }}
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
            height: (height / 100) * 55,
            width: "95%",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 24,
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
                ...design.TEXT[700][24],
                color: colors.C181A20_700,
                textAlign:'center'
            }}
            >
              {"Are you sure?"}
            </Text>
            <Text
              style={{
                ...design.TEXT[400][16],
                color: colors.C212121_400,
                textAlign:'center'
            }}
            >
              Removing this means you won’t be {"\n"}able to see saved data ever
              again
            </Text>
          </View>

          <View style={{ flex: 0.2, top: height / 100 * 3, marginBottom: 10 }}>
            <TouchableOpacity
              onPress={() => setPromoModal1(!promoModal1)}
              style={{
                height: (height / 100) * 6,
                backgroundColor: "#f75555",
                width: (height / 100) * 34,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 25,
                marginBottom: 10
              }}
            >
              <Text
                style={{
                  ...design.TEXT[600][18],
                  color: colors.white,
                  textAlign:'center'
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
                borderColor: "#e0e0e0",
                borderWidth: 1,
                width: (height / 100) * 34,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 25,
                marginBottom: 5
              }}
            >
              <Text
                style={{
                  ...design.TEXT[600][18],
                  color: colors.C616161,
                  textAlign:'center'
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
    ...design.TEXT[700][18],
    color: colors.C212121,
  },
  Input: {
    width: ws(380),
    height: hs(56),
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: colors.CBDBDBD_400,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft: ws(20)
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
    position: 'absolute',
    right: ws(20)
  },
  Button: {
    width: ws(182),
    height: hs(60),
    borderWidth: 1,
    borderRadius: 100,
    borderColor: colors.CE0E0E0,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hs(30),
    marginLeft: ws(0)
  },
  btnTxt: {
    ...design.TEXT[600][18],
    color: colors.C616161_700
  },
  Button1: {
    width: ws(182),
    height: hs(60),
    borderRadius: 100,
    backgroundColor: colors.C0F437B_500,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hs(30),
    marginLeft: ws(16)
  },
  btnTxt1: {
    ...design.TEXT[600][18],
    color: colors.white
  },
  labelStyle: {
    ...design.TEXT[700][24],
    color: colors.C212121
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: hs(100)
  }
})
