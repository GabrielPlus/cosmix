import { View, Text, Pressable, ScrollView } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@/context/theme.context';
import WelcomeHeader from '@/components/home/welcome.header';
import HomeBanner from "@/components/home/home.banner";




export default function HomeScreen() {
    const { theme } = useTheme();

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
                </ScrollView>
                </LinearGradient>

        </>
    )
}