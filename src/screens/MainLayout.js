import { View, Text, TouchableOpacity } from "react-native"
import React, { useState } from "react"
import { Shadow } from "react-native-shadow-2"
import { useNavigation } from "@react-navigation/native"

import Home from "../screens/Home"
import PickUp from "./PickUp" // PickUp for temp
import CartIsEmpty from "../screens/CartIsEmpty"
import Favorite from "../screens/Favorite"
import Profile from "../screens/Profile"

import {
  HomeSvg,
  ProfileSvg,
  SearchSvg,
  BagSvg,
  PickUpSvg,
  OrderSvg,
} from "../svg"
import { COLORS, SIZES, dishes, FONTS } from "../constants"

export default function MainLayout() {
  const navigation = useNavigation()

  const [selectedTab, setSelectedTab] = useState("Home")

  const tabs = [
    {
      id: "1",
      screen: "Home",
      icon: (
        <HomeSvg color={selectedTab == "Home" ? COLORS.carrot : COLORS.gray} />
      ),
    },
    {
      id: "2",
      screen: "PickUp",
      icon: (
        <PickUpSvg
          color={selectedTab == "PickUp" ? COLORS.carrot : COLORS.gray}
        />
      ),
    },
    {
      id: "3",
      screen: "Search",
      icon: (
        <SearchSvg
          color={selectedTab == "CartIsEmpty" ? COLORS.carrot : COLORS.gray}
        />
      ),
    },
    {
      id: "4",
      screen: "Orders",
      icon: (
        <OrderSvg
          color={selectedTab == "Favorite" ? COLORS.carrot : COLORS.gray}
        />
      ),
    },
    {
      id: "5",
      screen: "Account",
      icon: (
        <ProfileSvg
          color={selectedTab == "Profile" ? COLORS.carrot : COLORS.gray}
        />
      ),
    },
  ]

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      {selectedTab === "Home" && <Home />}
      {selectedTab === "PickUp" && <PickUp />}
      {selectedTab === "CartIsEmpty" && <CartIsEmpty />}
      {selectedTab === "Favorite" && <Favorite />}
      {selectedTab === "Profile" && <Profile />}
      {/* start bottom navigation bar */}
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
                <View style={{ paddingVertical: 10 }}>
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
                      <Text
                        style={{
                          textAlign: "center",
                          lineHeight: 16 * 1,
                          fontSize: 12,
                          fontFamily: "Lato-Regular",
                          color:
                            selectedTab == item.screen
                              ? COLORS.carrot
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
      {/* end bottom navigation bar */}
    </View>
  )
}
