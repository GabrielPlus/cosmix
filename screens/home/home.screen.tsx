import { View, Text, Pressable, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@/context/theme.context';
import WelcomeHeader from '@/components/home/welcome.header';
import HomeBanner from "@/components/home/home.banner";
import { fontSizes, windowHeight, windowWidth } from '@/themes/app.constant';
import { verticalScale } from 'react-native-size-matters';
import GradiantText from '@/components/common/gradient.text';
import SkeltonLoader from '@/utils/skeleton';




export default function HomeScreen() {
    const { theme } = useTheme();
    const [loading, setLoading] = useState(true);


    return (
        <>
            <LinearGradient
                colors={
                    theme.dark
                        ? ['#fff', '#fff']
                        : ['#fff', '#fff'] // duplicated for light mode
                }
                start={{ x: 0, y: 0}} 
                end={{ x: 0, y: 1}}
                style={{
                    flex:1,
                    backgroundColor: theme.dark ? "#101010" : "#0000",
                }}
            >
                <WelcomeHeader />
                <ScrollView showsVerticalScrollIndicator={false}>
                    <HomeBanner />
                    <View style={{
                        marginHorizontal: windowWidth(20),
                        marginTop: verticalScale(-25),
                    }}>
                        <View style={{
                            flexDirection: "row", marginTop: windowHeight(5)
                        }}>
                                <Text style={{
                                    fontSize: fontSizes.FONT35,
                                    fontFamily: "Poppins_500Medium",
                                    color: theme.dark ? "#000" : "#000"
                                }}>
                                    Spa {""}
                                </Text>
                                <GradiantText
                                    text="Categories "
                                    styles={{
                                        fontSize: fontSizes.FONT35,
                                        fontFamily: "Poppins_500Medium",
                                    }}
                                />
                        </View>
                        <View  style={{ flexDirection: "row", alignItems: "center" }}>
                            <View
                            style={{
                                backgroundColor: "#12BB70",
                                width: windowWidth(15),
                                height: windowWidth(15),
                                borderRadius: 100,
                              }}
                            />
                             <Text
                          style={{
                            fontFamily: "Poppins_400Regular",
                            fontSize: fontSizes.FONT18,
                            paddingLeft: windowWidth(5),
                            color: theme.dark ? "#000" : "#000",
                          }}
                        >
                          explore our full range of hostilic spa services
                        </Text>
                        </View>
                    </View>
                    {
                        loading ? (
                            <>
                            <SkeltonLoader />
              <SkeltonLoader />
                            </>
                        ) : (
                            <View>

                            </View>
                        )
                    }
                </ScrollView>
                </LinearGradient>

        </>
    )
}