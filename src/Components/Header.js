import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import GetImage from '../assets/GetImage';
import { icon } from '../assets/icons';

export default function Header(props) {
    const height = Dimensions.get("screen").height;
    const navigation = useNavigation();
    const { title, onPress, righticon ,isBackground,container,isCustom,showBuss,showSeat,isLeftIcon, titleStyle, labelStyle, style } = props
    return (
        <View style={{ flex: 1, backgroundColor: isBackground ?'#002B7F':"#fff" }}>
            <View
                style={styles.container}
            >
            
                <TouchableOpacity
                    onPress={() => props.navigation.goBack(null)}
                    style={styles.sub_Con}
                >
                    <Image
                        source={GetImage.leftArrow}
                        style={styles.img}
                        tintColor={isBackground? '#fff':'#000'}
                    />
                </TouchableOpacity>
                <View style={{ flex: 0.85, justifyContent: "center" }}>
                    <Text
                        style={{
                            fontSize: (height / 100) * 2.2,
                            fontFamily: "Urbanist_semibold",
                            fontWeight: '800',
                            color: isBackground?'#fff': "#000"

                        }}
                    >
                        {title}
                    </Text>
                </View>
               {showBuss &&<View style={{flexDirection:'row',right:15,justifyContent:'center',alignItems:'center'}}>
                <Image
                            source={icon.routerNo}
                            style={{
                                height: 55,
                                width: 55,
                                resizeMode: 'contain'
                            }}
                        />
                         
                </View>}
                {showSeat &&<View style={{flexDirection:'row',right:15,justifyContent:'center',alignItems:'center'}}>
                <Image
                            source={icon.seat}
                            style={{
                                marginLeft:10,
                                height: 55,
                                width: 55,
                                resizeMode: 'contain'
                            }}
                        />
                         
                </View>}
                {righticon &&
                    <TouchableOpacity
                        onPress={onPress}
                        style={{
                            flex: 0.1,
                            justifyContent: "center",
                            alignItems: 'center',
                            right:4
                        }}>
                        <Image
                            source={GetImage.choose}
                            style={{
                                height: 20,
                                width: 20,
                                resizeMode: 'contain'
                            }}
                        />
                    </TouchableOpacity>}
            </View>
            <View style={righticon ? styles.margin : isCustom? container:styles.sub_scroll}>

                {props.children}


            </View>
        </View>
    )
}
const height = Dimensions.get("screen").height;
const styles = StyleSheet.create({
    container: {
        flex: 0.05,
        flexDirection: "row",
        paddingTop: height / 100 * 2,
        left:-2,
    },
    sub_Con: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"
    },
    img: {
        height: 18,
        width: 18,
        resizeMode: "contain",
        
    },
    margin: {
        flex: 0.95,
        margin: 15
    },
    sub_scroll: {
        flex: 0.95,

      
    }

})