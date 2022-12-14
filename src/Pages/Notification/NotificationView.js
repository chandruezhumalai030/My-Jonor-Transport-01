import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Header from '../../Components/Header';
import { useNavigation } from '@react-navigation/native';
import ReactModal from '../../Components/ReactModal';
import GetImage from '../../assets/GetImage';
import Lottie from 'lottie-react-native';
import { width } from '../../assets/fontsAndColors';
import { design } from "../../config/design.config";
import { colors } from "../../config/colors.config";
import { hs, ws } from "../../utils/design/measurement.design";


export default function NotificationView(props) {
    const height = Dimensions.get("screen").height;
    const navigation = useNavigation();


    //state
    const [promoModal, setPromoModal] = useState(false)
    return (

        <Header
            {...props}
            rightIcon={false}
            isLeftIcon
            titleStyle={styles.title}
            labelStyle={design.TEXT[700][24]}
            title={"Special Offer & Promo"} >
            <View style={{ flex: 0.3, marginTop: 15, backgroundColor: '#fff' }}>


                <Image style={styles.bg} source={require("../../assets/Profile/bg.png")} />
            </View>
            <View style={{ flex: 0.5, }}>
                <ScrollView style={{ margin: 15, left: 6 }}>
                    <Text style={{
                        ...design.TEXT[600][26],
                        color: colors.C3A3D42_600
                    }}
                    // style={[styles.font,{fontSize:height/100*2.5,paddingBottom:5,fontWeight:'600'}]} 
                    >{"30% Special Discount!"}</Text>
                    <Text
                    style={{
                        ...design.TEXT[500][14],
                        color: colors.C616161_500
                    }}
                    //  style={{ fontSize: height / 100 * 1.7, color: '#616161', fontWeight: '500', fontFamily: 'Urbanist' } } 
                     >
                        {"Special promotion only valid today"}</Text>



                    <View style={{ height: height / 100 * 2, borderBottomWidth: 1.5, borderColor: '#EEEEEE' }} />

                    <Text 
                    style={{
                        ...design.TEXT[600][18],
                        color: colors.C3A3D42_600
                    }}
                    // style={{
                    //     fontSize: (height / 100) * 2.3,
                    //     fontFamily: "Urbanist",
                    //     color: "#000",
                    //     fontWeight: '600',
                    //     paddingTop: height / 100 * 2
                    // }} 
                    >{"Details"}</Text>

                    <Text 
                    style={{
                        ...design.TEXT[400][14],
                        color: colors.black,
                        marginTop:5,
                        textAlign: 'justify'
                    }}
                    // style={{
                    //     fontSize: (height / 100) * 1.8,
                    //     fontFamily: "Urbanist",
                    //     color: "#000000", paddingTop: height / 100 * 2,
                    //     fontWeight: '400', lineHeight: 23
                    // }}
                     >{"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Read more..."}</Text>


                </ScrollView>

            </View>
            <View style={{ flex: 0.2, justifyContent: "center" }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', }}>
                    <TouchableOpacity
                        onPress={() => setPromoModal(!promoModal)}
                        style={{
                            height: (height / 100) * 6,
                            backgroundColor: "#0F437B",
                            width: (width / 100) * 90,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 25,


                        }}
                    >
                        <Text
                        style={{
                            ...design.TEXT[600][18],
                            color: colors.white
                        }}
                            // style={{
                            //     fontSize: (height / 100) * 2,
                            //     fontFamily: "Urbanist",
                            //     color: "#fff",
                            //     fontWeight: '600'
                            // }}
                        >
                            {"Apply Promo"}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
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
                            {"Enjoy the deal"}
                        </Text>
                        <Text
                            style={{
                                fontSize: (height / 100) * 1.5,
                                fontFamily: "Urbanist_semibold",
                                color: "#616161",
                            }}
                        >
                            We hope you get great day today
                        </Text>
                    </View>

                    <View style={{ flex: 0.2, top: height / 100 * 5 }}>
                        <TouchableOpacity
                            onPress={() => { navigation.goBack(null); navigation.goBack(null) }}
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
                                    fontFamily: "Urbanist",
                                    color: "#fff",
                                }}
                            >
                                {"Got It"}
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
    bg: {
        height: "100%",
        width: '100%',
        backgroundColor: '#fff',
    },
    font: {
        fontFamily: "Urbanist",
        color: "#3A3D42",
    }
})