import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { scale, verticalScale } from "react-native-size-matters";
import { Feather } from "@expo/vector-icons";
import { categoriesData } from "@/configs/constants";
import Swiper from "react-native-swiper";

const brownColor = "#512916";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.categoriesSection}>
        <Text style={styles.categoryTitle}>Kategoriat</Text>
        <Swiper
          horizontal={true}
          showsPagination={false}
          autoplay={true}
          autoplayTimeout={5}
          loop={true}
          style={styles.swiperContainer}
        >
          {categoriesData.map((cat, idx) => {
            return (
              <Pressable
                key={idx}
                style={[styles.card]}
                onPress={() => {
                  // Navigation logic: will replace with actual screen once implemented
                  // navigation.navigate("CategoryDetailScreen", { category: cat.title });
                  console.log(`Navigating to category: ${cat.title}`);
                }}
              >
                <Image
                  source={{ uri: cat.image }}
                  style={styles.cardImage}
                  resizeMode="cover"
                />
                <View style={styles.cardBottom}>
                  <Text style={styles.cardText}>{cat.title}</Text>
                  <View style={styles.arrowContainer}>
                    <Feather
                      name="arrow-right"
                      size={20}
                      color="white"
                      style={styles.arrowIcon}
                    />
                  </View>
                </View>
              </Pressable>
            );
          })}
        </Swiper>
      </View>

      <View style={styles.welcomeBox}>
        <Text style={styles.welcomeText}>
          Tervetuloa, kirjaudu sisään ja astu{"\n"}kauneuden maailmaan
        </Text>
        <Pressable style={styles.loginButton}>
          <Text style={styles.loginText}>kirjaudu sisään…</Text>
        </Pressable>
        <Text style={[styles.sparkle, styles.topLeftSparkle]}>✦</Text>
        <Text style={[styles.sparkle, styles.bottomRightSparkle]}>✦</Text>
      </View>

      <View style={styles.welcomeBoxV2}>
        <View style={styles.borderRow}>
          <Text style={styles.sparkleBrown}>✦</Text>
          <View style={styles.horizontalLine} />
        </View>
        <Text style={styles.welcomeTextV2}>
          Kauneuden ammattilaisille, yrittäjille{"\n"}ja unelmien toteuttajille
        </Text>
        <Pressable style={styles.loginButtonV2}>
          <Text style={styles.loginTextV2}>kirjaudu sisään…</Text>
        </Pressable>
        <View style={styles.borderRow}>
          <View style={styles.horizontalLine} />
          <Text style={styles.sparkleBrown}>✦</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: verticalScale(40),
    backgroundColor: "#fff",
  },

  categoriesSection: {
    backgroundColor: "#fff",
    marginTop: verticalScale(15),
    paddingHorizontal: scale(15),
  },
  categoryTitle: {
    fontSize: scale(18),
    fontWeight: "700",
    color: brownColor,
    marginBottom: verticalScale(10),
  },
  swiperContainer: {
    height: verticalScale(150),
  },
  card: {
    width: "90%",
    backgroundColor: "#F8E5D8",
    borderRadius: scale(15),
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: verticalScale(10),
    marginHorizontal: scale(10),
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    height: verticalScale(160),
  },
  cardImage: {
    width: "100%",
    height: verticalScale(100),
    borderTopLeftRadius: scale(15),
    borderTopRightRadius: scale(15),
  },
  cardBottom: {
    paddingVertical: verticalScale(10),
    paddingHorizontal: scale(10),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  cardText: {
    color: brownColor,
    fontWeight: "600",
    fontSize: scale(14),
    flexShrink: 1,
    textAlign: "center",
    width: "100%",
  },
  moreCard: {
    borderWidth: 2,
    borderColor: "#EAC19A",
  },

  welcomeBox: {
    backgroundColor: "#E68E57",
    borderRadius: scale(20),
    paddingVertical: verticalScale(40),
    paddingHorizontal: scale(20),
    marginTop: verticalScale(25),
    marginHorizontal: scale(15),
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },
  welcomeText: {
    color: "white",
    fontSize: scale(16),
    fontWeight: "600",
    textAlign: "center",
    marginBottom: verticalScale(20),
    lineHeight: verticalScale(22),
  },
  loginButton: {
    backgroundColor: "white",
    borderRadius: scale(20),
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(25),
  },
  loginText: {
    color: "#E68E57",
    fontWeight: "500",
    fontSize: scale(14),
  },
  sparkle: {
    color: "white",
    fontSize: scale(20),
    position: "absolute",
  },
  topLeftSparkle: {
    top: scale(10),
    left: scale(15),
  },
  bottomRightSparkle: {
    bottom: scale(10),
    right: scale(15),
  },

  welcomeBoxV2: {
    backgroundColor: "white",
    borderRadius: scale(20),
    paddingVertical: verticalScale(25),
    paddingHorizontal: scale(25),
    marginTop: verticalScale(30),
    marginHorizontal: scale(15),
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeTextV2: {
    color: brownColor,
    fontSize: scale(16),
    fontWeight: "600",
    textAlign: "center",
    marginVertical: verticalScale(20),
    lineHeight: verticalScale(22),
  },
  loginButtonV2: {
    borderColor: brownColor,
    borderWidth: 1,
    borderRadius: scale(20),
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(25),
  },
  loginTextV2: {
    color: brownColor,
    fontWeight: "500",
    fontSize: scale(14),
  },
  sparkleBrown: {
    fontSize: scale(18),
    color: brownColor,
    marginHorizontal: scale(5),
  },
  borderRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  horizontalLine: {
    flex: 1,
    height: 1,
    backgroundColor: brownColor,
  },
  arrowContainer: {
    backgroundColor: "#F58D42", 
    borderRadius: 25, 
    padding: 5, 
  },
  arrowIcon: {
    width: 20,
    height: 20,
  },
});
