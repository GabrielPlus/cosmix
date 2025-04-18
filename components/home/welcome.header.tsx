import { View, StyleSheet, Text, Pressable, StatusBar, TextInput } from 'react-native'
import React, { useState } from 'react'
import { useTheme } from '@/context/theme.context'
import { LinearGradient } from 'expo-linear-gradient';
import { fontSizes, IsAndroid, IsHaveNotch, IsIPAD, windowHeight, windowWidth } from '@/themes/app.constant';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { EvilIcons, Ionicons } from '@expo/vector-icons';

export default function WelcomeHeader() {
    const { theme } = useTheme();
    const [notificationLength, setnotificationLength] = useState(0);


    return (
        <LinearGradient
            colors={
                theme.dark
                    ? ["#F8995A", "#F8995A", "#F8995A"]
                    : ["#F8995A", "#F8995A"]
            }
            start={theme.dark ? { x: 1, y: 1 } : { x: 1, y: 1 }}
            end={theme.dark ? { x: 0, y: 1 } : { x: 0, y: 1 }}
            style={[styles.headerWrapper]}
        >
            <StatusBar barStyle={"light-content"} />
            <View style={{ flexDirection: "row", paddingTop: IsHaveNotch ? IsIPAD ? verticalScale(30) : verticalScale(40) : verticalScale(30),
                justifyContent:"space-between"
             }}>
                <View>
                    <Text style={{
                        fontSize: fontSizes.FONT32,
                        color: "#fff",
                        fontFamily: "Poppins_600SemiBold",
                    }}>
                        Hi Joel,
                    </Text>
                    <Text
                        style={{
                            fontSize: fontSizes.FONT22,
                            color: "#fff",
                            fontFamily: "Poppins_400Regular",
                        }}
                    >
                        Sinulle raätälöidyt hoidot, {"\n"}
                        täydelliseen hetkeen
                    </Text>
                </View>
                <View style={{flexDirection:"row",}}>
                <Pressable>
                    <View style={[styles.notificationWrapper, {
                        backgroundColor: theme.dark ? "transparent" : "#f58d42",
                        borderWidth: theme?.dark ? 1 : 0,
                        borderColor: theme.dark ? "#fff" : "transparent",
                    },]}>
                        <Ionicons
                        name="notifications-sharp"
                        size={scale(25)}
                        color={"#fff"}
                        />
                        <View
                        style={[
                            styles.dot,{
                                position: "absolute",
                                right: windowWidth(15),
                                top: windowHeight(10),
                            },
                        ]}
                        >
                        <Text style={{fontSize: fontSizes.FONT14, color:"#fff"}}>
                        {notificationLength}
                        </Text>
                        </View>
                    </View>
                </Pressable>
                </View>
            </View>
            <View style={{position:"relative"}}>
                <TextInput
                placeholder="Search for treatments..."
                style={[styles.input]}
                />
                <Pressable
          style={{
            position: "absolute",
            right: windowWidth(10),
            top: windowHeight(20),
          }}
        >
          <EvilIcons
            name="search"
            size={IsIPAD ? scale(20) : scale(30)}
            color={theme.dark ? "#000": "#000"}
          />
        </Pressable>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    headerWrapper: {
        height: IsHaveNotch
            ? IsIPAD
                ? verticalScale(175)
                : verticalScale(155)
            : IsAndroid
                ? verticalScale(168)
                : verticalScale(162),
        paddingHorizontal: moderateScale(25),
        borderBottomLeftRadius: moderateScale(40),
        borderBottomRightRadius: moderateScale(40),
        paddingTop: IsAndroid ? verticalScale(10) : verticalScale(0),
    },
    dot: {
        width: scale(13),
        height: scale(13),
        backgroundColor: "#19C964",
        borderRadius: scale(100),
        alignItems: "center",
        justifyContent: "center",
      },
    notificationWrapper: {
        position: "relative",
        width: scale(45),
        height: scale(45),
        borderRadius: scale(10),
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        height: IsHaveNotch ? verticalScale(35) : verticalScale(40),
        backgroundColor: "#fff",
        color: "#000",
        marginTop: verticalScale(12),
        fontSize: IsIPAD ? fontSizes.FONT15 : fontSizes.FONT18,
        borderRadius: moderateScale(30),
        paddingHorizontal: moderateScale(15),
        fontFamily: "Poppins_400Regular",
      },
})