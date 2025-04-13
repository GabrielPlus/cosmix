import { View, StyleSheet, Text, Pressable, StatusBar } from 'react-native'
import React from 'react'
import { useTheme } from '@/context/theme.context'
import { LinearGradient } from 'expo-linear-gradient';
import { fontSizes, IsAndroid, IsHaveNotch, IsIPAD } from '@/themes/app.constant';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';
import { Ionicons } from '@expo/vector-icons';

export default function WelcomeHeader() {
    const { theme } = useTheme();

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
                        Hi Pius
                    </Text>
                </View>
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
                    </View>
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
    notificationWrapper: {
        position: "relative",
        width: scale(45),
        height: scale(45),
        borderRadius: scale(10),
        alignItems: "center",
        justifyContent: "center",
    }
})