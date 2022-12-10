import React from "react"
import { StyleSheet, Image, Text, View, TextInput, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import GetImage from '../assets/GetImage';
import GetColors from '../assets/GetColors';
export default function Singup() {
    const navigation = useNavigation();
    return (
        <View style={styles.Register_01}>
            <View style={styles.Group433}>
                <View style={styles.AutoLayoutVertical2}>
                    <Image
                        style={styles.Frame}
                        source={require('../assets/Profile/singup.png')}
                    />
                    <Text style={styles.Txt846}>Create Your Account</Text>
                    <View style={styles.AutoLayoutVertical1}>
                        <View style={styles.AutoLayoutVertical}>
                            <View style={styles.SignSignUpInput}>
                                <View style={styles.Text_field}>
                                    {/* <View style={styles.Content1}> */}
                                        <View style={styles.Input}>
                                            <View style={styles.Content}>
                                                <Image
                                                    style={styles.IconlyBoldMessage}
                                                    source={require('../assets/Profile/email.png')}
                                                />
                                               <TextInput style={styles.Txt187}
                                                underlineColorAndroid = "transparent"
                                                placeholder = "Email"
                                                autoCapitalize = "none"
                                                placeholderTextColor = "black"/>
                                            </View>
                                        </View>
                                    {/* </View> */}
                                </View>
                                {/* <View style={styles.Content1}>
                                    <View style={styles.Content1}> */}
                                        <View style={styles.Input}>
                                            <View style={styles.Content2}>
                                                <Image
                                                    style={styles.IconlyBoldMessage}
                                                    source={require('../assets/Profile/password.png')}
                                                />
                                                <TextInput style={styles.Txt187}
                                                underlineColorAndroid = "transparent"
                                                placeholder = "Password"
                                                autoCapitalize = "none"
                                                placeholderTextColor = "black"/>
                                            </View>
                                            <Image
                                                style={styles.IconlyLightHide}
                                                source={require('../assets/Profile/show.png')}
                                            />
                                        </View>
                                    </View>
                                {/* </View>
                            </View> */}
                            {/* <View style={styles.Button}>
                                <View style={styles._buttonBasePrimary}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate("Home")}
                                    >
                                        <Text>Sing up</Text>
                                    </TouchableOpacity>
                                </View>
                            </View> */}
                            <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate("FirstTimeRegister")}>
                                <Text style={styles.btnTxt}>Sign up</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.AutoLayoutHorizontal}>
                        <Text style={styles.Txt8103}>Already have an account?</Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Singin")}
                        >
                            <Text style={styles.Txt901}>Sign in</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    Register_01: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 1)",
        width: '100%',
        height: '100%',
    },
    Group433: {
        display: "flex",
        flexDirection: "column",
    },
    TypeDefaultComponentTopBar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 10,
        paddingBottom: 8,
        paddingLeft: 22,
        paddingRight: 22,
    },
    Txt518: {
        fontSize: 16,
        fontFamily: "Urbanist, sans-serif",
        fontWeight: "600",
        lineHeight: 22,
        letterSpacing: 0.2,
        color: "rgba(18,18,18,1)",
        marginRight: 283,
    },
    Group: {
        width: 18,
        height: 10,
        marginRight: 5,
    },
    Group1: {
        width: 15.27,
        height: 10.97,
        marginRight: 6,
    },
    Group2: {
        width: 26.98,
        height: 13,
    },

    AutoLayoutVertical2: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 23,
        paddingBottom: 47,
        paddingLeft: 23,
        paddingRight: 23,
        height: 482,
        width: 428,
    },
    ThemeLightComponentNavbar: {
        width: 380,
        height: 48,
    },
    Frame: {
        width: 280,
        height: 200,
    },
    Txt846: {
        fontSize: 35,
        fontFamily: "Urbanist, sans-serif",
        fontWeight: "700",
        lineHeight: 58,
        color: "rgba(33,33,33,1)",
        width: 381,
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
        justifyContent: "center",
        alignItems: "center",
        width: 380,
    },
    SignSignUpInput: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginBottom: 20,
    },
    Text_field: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginBottom: 12,
    },
    Content1: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    Input: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 19.5,
        paddingRight: 19.5,
        borderRadius: 12,
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderWidth: 4,
        borderStyle: "solid",
        borderColor: "rgba(189,189,189,1)",
        width: 380,
        height: 56,
    },
    Content: {
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
    IconlyBoldMessage: {
        width: 20,
        height: 20,
        marginRight: 12,
    },
    Txt342: {
        fontSize: 16,
        fontFamily: "Urbanist, sans-serif",
        fontWeight: "400",
        lineHeight: 22,
        letterSpacing: 0.2,
        color: "rgba(158,158,158,1)",
        width: 309,
    },

    Content1: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    Content1: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },
    Content2: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        flex: 1,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        marginRight: 12,
        width: 308,
    },
    IconlyBoldMessage: {
        width: 20,
        height: 20,
        marginRight: 12,
    },
    Txt187: {
        fontSize: 16,
        fontFamily: "Urbanist, sans-serif",
        fontWeight: "400",
        lineHeight: 22,
        letterSpacing: 0.2,
        color: "rgba(158,158,158,1)",
        width: 277,
    },

    IconlyLightHide: {
        width: 20,
        height: 20,
    },

    Button: {
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
    Txt592: {
        fontSize: 18,
        fontFamily: "Urbanist, sans-serif",
        fontWeight: "600",
        lineHeight: 28,
        letterSpacing: 0.2,
        color: "rgba(231,236,242,1)",
        textAlign: "center",
        justifyContent: "center",
    },

    AutoLayoutHorizontal: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: 380,
    },
    Txt8103: {
        fontSize: 14,
        fontFamily: "Urbanist, sans-serif",
        fontWeight: "400",
        lineHeight: 20,
        letterSpacing: 0.2,
        color: "rgba(158,158,158,1)",
        textAlign: "right",
        justifyContent: "flex-end",
        marginRight: 8,
    },
    Txt901: {
        fontSize: 14,
        fontFamily: "Urbanist, sans-serif",
        fontWeight: "600",
        lineHeight: 20,
        letterSpacing: 0.2,
        color: "rgba(0,43,127,1)",
    },
})
