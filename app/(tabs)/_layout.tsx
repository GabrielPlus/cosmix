import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useTheme } from "@/context/theme.context";
import { Tabs } from "expo-router";
import { Feather, Ionicons, Octicons } from "@expo/vector-icons";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { fontSizes, IsAndroid, IsIOS, IsIPAD } from "@/themes/app.constant";

export default function _layout() {
  const { theme } = useTheme();

  return (
    <Tabs
      screenOptions={({ route }) => {
        return {
          tabBarIcon: ({ color }) => {
            let iconName;
            if (route.name === "index") {
              iconName = (
                <Feather
                  name="home"
                  size={moderateScale(24)}
                  style={{ width: IsIPAD ? scale(20) : "auto" }}
                  color={color}
                />
              );
            } else if (route.name === "tab1/index") {
              iconName = (
                <Feather
                  name="search"
                  size={moderateScale(24)}
                  style={{ width: IsIPAD ? scale(20) : "auto" }}
                  color={color}
                />
              );
            } else if (route.name === "tab2/index") {
              iconName = (
                <Feather
                  name="scissors"
                  size={moderateScale(24)}
                  style={{ width: IsIPAD ? scale(20) : "auto" }}
                  color={color}
                />
              );
            } else if (route.name === "tab3/index") {
              iconName = (
                <Octicons
                  name="person"
                  size={moderateScale(26)}
                  style={{ width: IsIPAD ? scale(20) : "auto" }}
                  color={color}
                />
              );
            }
            return iconName;
          },
          tabBarActiveTintColor: theme.colors ? "#fff" : "#f58d42",
          tabBarInactiveTintColor: theme.dark ? "#000" : "#000",
          headerShown:
            route.name === "tab1/index" || route.name === "tab2/index"
              ? true
              : false,
          headerTitle:
            route.name === "tab1/index"
              ? "Courses"
              : route.name === "tab2/index"
              ? "Video Lessons"
              : "",
          headerTitleStyle: {
            color: theme.dark ? "#fff" : "#000",
            textAlign: "center",
            width: scale(320),
            fontSize: fontSizes.FONT22,
            fontFamily: "Poppins_400Regular",
          },
          headerBackgroundContainerStyle: {
            backgroundColor: theme.dark ? "#131313" : "#fff",
            shadowColor: theme.dark ? "#fff" : "#000",
            shadowOpacity: theme.dark ? 0.1 : 0.1,
            shadowOffset: { width: 0, height: 1 },
            shadowRadius: 1,
            elevation: 1,
          },
          headerBackground: () => (
            <View
              
              style={{
                borderTopLeftRadius: scale(20),
                borderTopRightRadius: scale(20),
                overflow: "hidden",
                backgroundColor: "transparent",
              }}
            />
          ),
          tabBarShowLabel: false,
          tabBarStyle: {
            position: IsIOS ? (theme.dark ? "absolute" : "static") : "absolute",
            borderTopLeftRadius: IsAndroid ? 0 : IsIPAD ? scale(20) : scale(35),
            borderTopRightRadius: IsAndroid
              ? 0
              : IsIPAD
              ? scale(20)
              : scale(35),
            borderTopWidth: 0,
            height: verticalScale(55),
          },
          tabBarBackground: () => {
            return (
              <>
                {IsIOS && !theme.dark ? (
                  <View
                    style={{
                      ...StyleSheet.absoluteFillObject,
                      backgroundColor: "#f58d42",
                      borderTopLeftRadius: IsAndroid
                        ? 0
                        : IsIPAD
                        ? scale(25)
                        : scale(35),
                      borderTopRightRadius: IsAndroid
                        ? 0
                        : IsIPAD
                        ? scale(25)
                        : scale(35),
                      overflow: "hidden",
                    }}
                  />
                ) : (
                  <View
                    
                    style={{
                      ...StyleSheet.absoluteFillObject,
                      borderTopLeftRadius: IsAndroid
                        ? 0
                        : IsIPAD
                        ? scale(25)
                        : scale(35),
                      borderTopRightRadius: IsAndroid
                        ? 0
                        : IsIPAD
                        ? scale(25)
                        : scale(35),
                      overflow: "hidden",
                      backgroundColor: IsAndroid
                        ? theme.dark
                          ? "#f58d42"
                          : "#f58d42"
                        : theme.dark
                        ? "transparent"
                        : "#f58d42",
                    }}
                  />
                )}
              </>
            );
          },
        };
      }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="tab1/index" />
      <Tabs.Screen name="tab2/index" />
      <Tabs.Screen name="tab3/index" />
    </Tabs>
  );
}