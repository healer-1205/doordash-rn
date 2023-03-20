import { View, Text, TouchableOpacity } from "react-native"
import React, { useState } from "react"
import { Shadow } from "react-native-shadow-2"
import { useNavigation } from "@react-navigation/native"

import Home from "../screens/Home"
import Places from "../screens/Places"
import CartIsEmpty from "../screens/CartIsEmpty"
import Favorite from "../screens/Favorite"
import Profile from "../screens/Profile"

import { HomeSvg, ProfileSvg, HeartSvg, BagSvg, PlaceSvg } from "../svg"
import { COLORS, SIZES, dishes, FONTS } from "../constants"

export default function MainLayout() {
  const navigation = useNavigation()

  const [selectedTab, setSelectedTab] = useState("Home")

  const tabs = [
    {
      id: "1",
      screen: "Home",
      icon: (
        <HomeSvg color={selectedTab == "Home" ? COLORS.green : COLORS.gray} />
      ),
    },
    {
      id: "2",
      screen: "Places",
      icon: (
        <PlaceSvg
          color={selectedTab == "Places" ? COLORS.green : COLORS.gray}
        />
      ),
    },
    {
      id: "3",
      screen: "CartIsEmpty",
      icon: (
        <View
          style={{
            width: 76,
            height: 76,
            backgroundColor: COLORS.white,
            top: -30,
            borderRadius: 40,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 64,
              height: 64,
              backgroundColor: COLORS.green,
              borderRadius: 35,
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1,
            }}
          >
            <BagSvg />
            <View
              style={{
                width: 22,
                height: 22,
                backgroundColor: COLORS.white,
                borderRadius: 11,
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                right: 11,
                bottom: 11,
              }}
            >
              <Text
                style={{
                  fontSize: 12,
                  color: COLORS.golden,
                  ...FONTS.Lato_900Black,
                  color: COLORS.green,
                }}
              >
                5
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Lato-Regular",
              textAlign: "center",
              color: COLORS.green,
              position: "absolute",
              bottom: -15,
            }}
          >
            $48.93
          </Text>
        </View>
      ),
    },
    {
      id: "4",
      screen: "Favorite",
      icon: (
        <HeartSvg
          color={selectedTab == "Favorite" ? COLORS.green : COLORS.gray}
        />
      ),
    },
    {
      id: "5",
      screen: "Profile",
      icon: (
        <ProfileSvg
          color={selectedTab == "Profile" ? COLORS.green : COLORS.gray}
        />
      ),
    },
  ]

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {selectedTab === "Home" && <Home />}
      {selectedTab === "Places" && <Places />}
      {selectedTab === "CartIsEmpty" && <CartIsEmpty />}
      {selectedTab === "Favorite" && <Favorite />}
      {selectedTab === "Profile" && <Profile />}
      <Shadow
        offset={[0, 0]}
        distance={15}
        startColor={"rgba(6, 38, 100, 0.06)"}
        finalColor={"rgba(6, 38, 100, 0.0)"}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 22,
            backgroundColor: COLORS.white,
            paddingBottom: 4,
            paddingTop: 2,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            width: SIZES.width,
          }}
        >
          {tabs.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  item.screen === "CartIsEmpty" && dishes.length !== 0
                    ? navigation.navigate("Order")
                    : setSelectedTab(item.screen)
                }
                activeOpacity={0.8}
              >
                <View>
                  <View
                    style={{
                      alignSelf: "center",
                      height: item.screen !== "CartIsEmpty" ? 24 : 80,
                      width: item.screen !== "CartIsEmpty" ? 24 : 78,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {item.icon}
                  </View>
                  {item.screen !== "CartIsEmpty" && (
                    <View style={{ alignItems: "center" }}>
                      <View
                        style={{
                          width: 4,
                          height: 4,
                          borderRadius: 2,
                          backgroundColor:
                            selectedTab == item.screen
                              ? COLORS.green
                              : COLORS.transparent,
                          marginTop: 4,
                        }}
                      />
                      <Text
                        style={{
                          textAlign: "center",
                          lineHeight: 16 * 1,
                          fontSize: 12,
                          fontFamily: "Lato-Regular",
                          color:
                            selectedTab == item.screen
                              ? COLORS.green
                              : COLORS.gray,
                        }}
                      >
                        {item.screen}
                      </Text>
                    </View>
                  )}
                </View>
              </TouchableOpacity>
            )
          })}
        </View>
      </Shadow>
    </View>
  )
}
