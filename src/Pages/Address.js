import React from "react"
import { StyleSheet, Image, Text, View, ScrollView, TouchableOpacity, Pressable } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { RadioButton } from 'react-native-paper';
import GetImage from '../assets/GetImage';
import GetColors from '../assets/GetColors';
import Header from "../Components/Header";
import { design } from "../config/design.config";
import { colors } from "../config/colors.config";
import { hs, ws } from "../utils/design/measurement.design";

export default function Address(props) {
  const navigation = useNavigation();
  const [checked, setChecked] = React.useState('first');
  return (
    <Header
      {...props}
      rightIcon={false}
      isLeftIcon
      title={"Add New Address"}
      labelStyle={styles.labelStyle}
    >
      <ScrollView style={styles.container}>
        <View style={styles.Address_01}>
          <View style={styles.Group}>
            <View style={styles.AutoLayoutVertical3}>
              {/* <View style={styles.AutoLayoutVertical2}> */}
              <View style={styles.AutoLayoutVertical1}>
                <View
                  style={
                    styles.CategoryLocationEditThemeLightComponentLocationList
                  }
                >
                  <View style={styles.AutoLayoutHorizontal}>
                    <View style={styles.ratioButtonContainer}>
                      <RadioButton
                        value="first"
                        status={checked === 'first' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('first')}
                        color={'#0F437B'}
                      />
                    </View>
                    <View style={styles.AutoLayoutVertical}>
                      <Text style={styles.Txt363}>Home</Text>
                      <Text style={styles.Txt979}>
                        364 Stillwater Ave. Attleboro, MA 02703
                      </Text>
                    </View>
                  </View>
                  <Pressable onPress={() => navigation.navigate("Successaddress")}>
                    <Image
                      style={styles.IconlyBoldEdit}
                      source={require('../assets/Profile/pencil.png')}
                    />
                  </Pressable>
                </View>
                <Image
                  style={[styles.themeLightDividerIcon, styles.mt16]}
                  resizeMode="cover"
                  source={require("../assets/Profile/themelight-divider1.png")}
                />
                <View
                  style={
                    styles.CategoryLocationEditThemeLightComponentLocationList1
                  }
                >
                  <View style={styles.AutoLayoutHorizontal}>
                    <View style={styles.ratioButtonContainer}>
                      <RadioButton
                        value="second"
                        status={checked === 'second' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('second')}
                        // uncheckedColor={"#F0F0F0"}
                        color={'#0F437B'}
                      />
                    </View>
                    <View style={styles.AutoLayoutVertical}>
                      <Text style={styles.Txt363}>Office</Text>
                      <Text style={styles.Txt979}>
                        73 Virginia Rd. Cuyahoga Falls, OH 44221
                      </Text>
                    </View>
                  </View>
                  <Pressable onPress={() => navigation.navigate("Successaddress")}>
                    <Image
                      style={styles.IconlyBoldEdit}
                      source={require('../assets/Profile/pencil.png')}
                    />
                  </Pressable>
                </View>
                <Image
                  style={[styles.themeLightDividerIcon, styles.mt16]}
                  resizeMode="cover"
                  source={require("../assets/Profile/themelight-divider1.png")}
                />
                <View
                  style={
                    styles.CategoryLocationEditThemeLightComponentLocationList1
                  }
                >
                  <View style={styles.AutoLayoutHorizontal}>
                    <View style={styles.ratioButtonContainer}>
                      <RadioButton
                        value="three"
                        status={checked === 'three' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('three')}
                        color={'#0F437B'}
                      />
                    </View>
                    <View style={styles.AutoLayoutVertical}>
                      <Text style={styles.Txt363}>Mall Plaza</Text>
                      <Text style={styles.Txt979}>
                        55 Summerhouse Dr. Apopka, FL 32703
                      </Text>
                    </View>
                  </View>
                  <Pressable onPress={() => navigation.navigate("Successaddress")}>
                    <Image
                      style={styles.IconlyBoldEdit}
                      source={require('../assets/Profile/pencil.png')}
                    />
                  </Pressable>
                </View>
                <Image
                  style={[styles.themeLightDividerIcon, styles.mt16]}
                  resizeMode="cover"
                  source={require("../assets/Profile/themelight-divider1.png")}
                />
                <View
                  style={
                    styles.CategoryLocationEditThemeLightComponentLocationList1
                  }
                >
                  <View style={styles.AutoLayoutHorizontal}>
                    <View style={styles.ratioButtonContainer}>
                      <RadioButton
                        value="four"
                        status={checked === 'four' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('four')}
                        color={'#0F437B'}
                      />
                    </View>
                    <View style={styles.AutoLayoutVertical}>
                      <Text style={styles.Txt363}>Grand City Park</Text>
                      <Text style={styles.Txt979}>
                        26 State St. Daphne, AL 36526
                      </Text>
                    </View>
                  </View>
                  <Pressable onPress={() => navigation.navigate("Successaddress")}>
                    <Image
                      style={styles.IconlyBoldEdit}
                      source={require('../assets/Profile/pencil.png')}
                    />
                  </Pressable>
                </View>
                <Image
                  style={[styles.themeLightDividerIcon, styles.mt16]}
                  resizeMode="cover"
                  source={require("../assets/Profile/themelight-divider1.png")}
                />
                <View
                  style={
                    styles.CategoryLocationEditThemeLightComponentLocationList1
                  }
                >
                  <View style={styles.AutoLayoutHorizontal}>
                    <View style={styles.ratioButtonContainer}>
                      <RadioButton
                        value="five"
                        status={checked === 'five' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('five')}
                        color={'#0F437B'}
                      />
                    </View>
                    <View style={styles.AutoLayoutVertical}>
                      <Text style={styles.Txt363}>Town Square</Text>
                      <Text style={styles.Txt979}>
                        20 Applegate St. Hoboken, NJ 07030
                      </Text>
                    </View>
                  </View>
                  <Pressable onPress={() => navigation.navigate("Successaddress")}>
                    <Image
                      style={styles.IconlyBoldEdit}
                      source={require('../assets/Profile/pencil.png')}
                    />
                  </Pressable>
                </View>
                <Image
                  style={[styles.themeLightDividerIcon, styles.mt16]}
                  resizeMode="cover"
                  source={require("../assets/Profile/themelight-divider1.png")}
                />
                <View
                  style={
                    styles.CategoryLocationEditThemeLightComponentLocationList2
                  }
                >
                  <View style={styles.AutoLayoutHorizontal}>
                    <View style={styles.ratioButtonContainer}>
                      <RadioButton
                        value="six"
                        status={checked === 'six' ? 'checked' : 'unchecked'}
                        onPress={() => setChecked('six')}
                        color={'#0F437B'}
                      />
                    </View>
                    <View style={styles.AutoLayoutVertical}>
                      <Text style={styles.Txt363}>Bank</Text>
                      <Text style={styles.Txt979}>
                        917 W. Pine Street Easton, PA 18042
                      </Text>
                    </View>
                  </View>
                  <Pressable onPress={() => navigation.navigate("Successaddress")}>
                    <Image
                      style={styles.IconlyBoldEdit}
                      source={require('../assets/Profile/pencil.png')}
                    />
                  </Pressable>

                </View>
              </View>
              {/* </View> */}
              {/* <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate("Addressnew")}>
                <Text style={styles.btnTxt}>Add new</Text>
              </TouchableOpacity> */}
            </View>
            <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate("Addressnew")}>
                <Text style={styles.btnTxt}>Add new</Text>
              </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </Header>
  )
}

const styles = StyleSheet.create({
  ratioButtonContainer: {
    marginRight: ws(14),
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  mt16: {
    // marginTop: 16,
  },
  Address_01: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "rgba(255, 255, 255, 1)",
    // width: '100%',
    // height: '100%',
  },
  Group: {
    display: "flex",
    flexDirection: "column",
  },
  AutoLayoutVertical3: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 43,
    paddingBottom: 47,
    paddingLeft: 23,
    paddingRight: 23,
    height: 650,
    width: 428,
  },
  AutoLayoutVertical2: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: 380,
  },
  themeLightDividerIcon: {
    width: ws(380),
    height: hs(1),
    marginVertical: hs(16),
  },
  AutoLayoutVertical1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 380,
  },
  CategoryLocationEditThemeLightComponentLocationList: {
    flexDirection: "row",
    justifyContent: 'space-evenly',
    alignItems: "center",
    marginBottom: hs(10),
    marginRight: ws(24),
    marginLeft: ws(16)
  },
  AutoLayoutHorizontal: {
    flexDirection: "row",
    justifyContent: 'flex-start',
    alignItems: "center",
  },
  AutoLayoutVertical: {
    justifyContent: 'space-between',
    alignItems: 'center',

  },
  Txt363: {
    fontSize: 18,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "700",
    lineHeight: 22,
    color: "rgba(33,33,33,1)",
    width: 301,
    marginBottom: 6,
  },
  Txt979: {
    fontSize: 14,
    fontFamily: "Urbanist, sans-serif",
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0.2,
    color: "rgba(97,97,97,1)",
    width: 301,
  },

  IconlyBoldEdit: {
    width: 24,
    height: 24,
  },

  CategoryLocationEditThemeLightComponentLocationList1: {
    flexDirection: "row",
    justifyContent: 'space-evenly',
    alignItems: "center",
    marginBottom: hs(10),
    marginRight: ws(24),
    marginLeft: ws(16)
  },
  CategoryLocationEditThemeLightComponentLocationList2: {
    flexDirection: "row",
    justifyContent: 'space-evenly',
    alignItems: "center",
    marginRight: ws(24),
    marginLeft: ws(16)
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
  labelStyle: {
    ...design.TEXT[700][24],
    color: colors.C212121
  }
})
