import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../Components/Header";
import { colors } from "../config/colors.config";
import { hs, ws } from "../utils/design/measurement.design";
import { design } from "../config/design.config";

export default function Profile(props) {
    // const logOut = () => {
    //     Helper.removeItemValue('userdata');
    //     navigation.navigate('Intro1');
    // };
    const navigation = useNavigation();

    return (
        <View style={styles.mainContainer}>
            <ScrollView>
            <Header
                {...props}
                title={"Profile"}
                isLeftIcon={false}
                titleStyle={styles.title}
                labelStyle={design.TEXT[700][24]}
            >
                <View style={styles.container}>

                    <View style={styles.Profile}>
                        <View style={styles.Group0}>
                            <View style={styles.AutoLayoutVertical1}>
                                <Image
                                    style={styles.AvatarThumbail}
                                    source={require('../assets/Profile/profile.png')}
                                />
                                <View style={styles.AutoLayoutVertical}>
                                    <Text style={styles.Txt1}>Ahmad Fazri</Text>
                                    <Text style={styles.Txt2}>+60 11134667671</Text>
                                </View>
                                <Image
                                    style={[styles.themeLightDividerIcon, styles.mt16]}
                                    resizeMode="cover"
                                    source={require("../assets/Profile/themelight-divider1.png")}
                                />
                            </View>


                            <View style={styles.AutoLayoutVertical2}>
                                <Pressable style={styles.AutoLayoutHorizontal}
                                    onPress={() => navigation.navigate("Editprofile")}
                                >
                                    <Image
                                        style={styles.IconlyLightOutlineProfile}
                                        source={require('../assets/Profile/edit.png')}
                                    />
                                    <Text style={styles.Txt385}>Edit Profile</Text>
                                    <Image
                                        style={styles.IconlyLightArrowRight2}
                                        source={require('../assets/Profile/left.png')}
                                    />
                                </Pressable>
                                <Pressable style={styles.AutoLayoutHorizontal}
                                    onPress={() => navigation.navigate("Address")}>
                                    <Image
                                        style={styles.IconlyLightOutlineProfile}
                                        source={require('../assets/Profile/address.png')}
                                    />
                                    <Text style={styles.Txt385}>Address</Text>
                                    <Image
                                        style={styles.IconlyLightArrowRight2}
                                        source={require('../assets/Profile/left.png')}
                                    />
                                </Pressable>
                                <Pressable style={styles.AutoLayoutHorizontal}
                                    onPress={() => navigation.navigate("Notification")}>
                                    <Image
                                        style={styles.IconlyLightOutlineProfile}
                                        source={require('../assets/Profile/notification.png')}
                                    />
                                    <Text style={styles.Txt385}>Notification</Text>
                                    <Image
                                        style={styles.IconlyLightArrowRight2}
                                        source={require('../assets/Profile/left.png')}
                                    />
                                </Pressable>
                                <Pressable style={styles.AutoLayoutHorizontal}
                                    // onPress={() => navigation.navigate("Payment")}>
                                    onPress={() => navigation.navigate("Ewallet")}>

                                    <Image
                                        style={styles.IconlyLightOutlineProfile}
                                        source={require('../assets/Profile/payment.png')}
                                    />
                                    <Text style={styles.Txt385}>Payment</Text>
                                    <Image
                                        style={styles.IconlyLightArrowRight2}
                                        source={require('../assets/Profile/left.png')}
                                    />
                                </Pressable>
                                <Pressable style={styles.AutoLayoutHorizontal}
                                    onPress={() => navigation.navigate("Security")}>
                                    <Image
                                        style={styles.IconlyLightOutlineProfile}
                                        source={require('../assets/Profile/security.png')}
                                    />
                                    <Text style={styles.Txt385}>Security</Text>
                                    <Image
                                        style={styles.IconlyLightArrowRight2}
                                        source={require('../assets/Profile/left.png')}
                                    />
                                </Pressable>
                                <Pressable style={styles.AutoLayoutHorizontal}
                                    onPress={() => navigation.navigate("Language")}>
                                    <Image
                                        style={styles.IconlyLightOutlineProfile}
                                        source={require('../assets/Profile/language.png')}
                                    />
                                    <Text style={styles.Txt2109}>Language</Text>
                                    <Text style={styles.Txt1108}>English (US)</Text>
                                    <Image
                                        style={styles.IconlyLightArrowRight2}
                                        source={require('../assets/Profile/left.png')}
                                    />
                                </Pressable>
                                <Pressable style={styles.AutoLayoutHorizontal}
                                    onPress={() => navigation.navigate("PrivacyPolicy")}>
                                    <Image
                                        style={styles.IconlyLightOutlineProfile}
                                        source={require('../assets/Profile/privacypolicy.png')}
                                    />
                                    <Text style={styles.Txt385}>Privacy Policy</Text>
                                    <Image
                                        style={styles.IconlyLightArrowRight2}
                                        source={require('../assets/Profile/left.png')}
                                    />
                                </Pressable>
                                <Pressable style={styles.AutoLayoutHorizontal}
                                    onPress={() => navigation.navigate("Helpcenter")}>
                                    <Image
                                        style={styles.IconlyLightOutlineProfile}
                                        source={require('../assets/Profile/helpcenter.png')}
                                    />
                                    <Text style={styles.Txt385}>Help Center</Text>
                                    <Image
                                        style={styles.IconlyLightArrowRight2}
                                        source={require('../assets/Profile/left.png')}
                                    />
                                </Pressable>
                                <Pressable style={styles.AutoLayoutHorizontal}
                                    onPress={() => navigation.navigate("Invite")}>
                                    <Image
                                        style={styles.IconlyLightOutlineProfile}
                                        source={require('../assets/Profile/invitefriends.png')}
                                    />
                                    <Text style={styles.Txt385}>Invite Friends</Text>
                                    <Image
                                        style={styles.IconlyLightArrowRight2}
                                        source={require('../assets/Profile/left.png')}
                                    />
                                </Pressable>
                                <Pressable style={styles.AutoLayoutHorizontal1}
                                    onPress={() => navigation.navigate("SignUp")}>
                                    {/* onPress={logOut}> */}
                                    <Image
                                        style={styles.IconlyLightOutlineProfile}
                                        source={require('../assets/Profile/signin.png')}
                                    />
                                    <Text style={styles.Txt241}>Sign In</Text>
                                </Pressable>
                            </View>
                        </View>

                    </View>

                </View>
            </Header>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
  mainContainer: {
    paddingVertical: hs(10),
    flex: 1,
    backgroundColor : colors.white,
  },
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    Profile: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        backgroundColor: "rgba(255, 255, 255, 1)",
        // width: '100%',
        // height: 900,
    },
    Group0: {
        display: "flex",
        flexDirection: "column",
    },
    AutoLayoutVertical1: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
        // width: 140,
    },
    AvatarThumbail: {
        width: 130,
        height: 130,
        marginBottom: 14,
        marginTop: 10
    },
    themeLightDividerIcon: {
        alignSelf: "stretch",
        position: "relative",
        maxWidth: ws(380),
        overflow: "hidden",
        alignSelf: 'center',
        height: 1,
        flexShrink: 0,
    },
    mt16: {
        marginTop: 16,
        marginBottom: 10
    },
    AutoLayoutVertical: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // width: 380,
    },
    Txt1: {
        ...design.TEXT[700][24],
        textAlign: "center",
        justifyContent: "center",
        width: 381,
    },
    Txt2: {
        ...design.TEXT[600][14],
        textAlign: "center",
        justifyContent: "center",
        width: 381,
    },
    AutoLayoutVertical2: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    AutoLayoutHorizontal: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center",
        paddingTop: 1,
        paddingBottom: 1,
        paddingLeft: 0,
        paddingRight: 0,
        paddingBottom: hs(20),
        marginLeft: ws(28)
    },
    IconlyLightOutlineProfile: {
        width: 24,
        height: 24,
        marginRight: 18,
        marginLeft: 10,
    },
    AutoLayoutHorizontal1: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 1,
        paddingBottom: 1,
        paddingLeft: 0,
        paddingRight: 0,
        marginLeft: ws(40)
        // width: 380,
    },
    Txt385: {
        ...design.TEXT[600][18],
        color: colors.C212121,
        width: 305,
        marginRight: 16,
    },
    IconlyLightArrowRight2: {
        width: ws(10),
        height: hs(20),
        right: ws(31),
    },
    Txt2109: {
        ...design.TEXT[600][18],
        color: colors.C212121,
        width: 145,
        marginRight: 16,
    },
    Txt241: {
        ...design.TEXT[600][18],
        color : colors.C002B7F,
        width: 341,
    },
    Txt1108: {
        ...design.TEXT[600][14],
        color: colors.C757575,
        textAlign: "right",
        justifyContent: "flex-end",
        width : ws(145),
        marginRight: ws(32),
        right: ws(23)
    },
    IconlyLightOutlineHome: {
        width: 24,
        height: 24,
        marginBottom: 2,
    },
    title : {
        marginLeft: ws(34)
    }
})