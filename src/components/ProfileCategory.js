import { View, Text, TouchableOpacity, Image } from "react-native"
import React from "react"

import { ProfileArrowSvg } from "../svg"
import { COLORS, SIZES } from "../constants"

export default function ProfileCategory({ icon, title, onPress }) {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        width: "100%",
        marginTop: 20,
      }}
      onPress={onPress}
    >
      {icon}
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          borderBottomWidth: 1,
          borderBottomColor: "#E2E2E2",
          justifyContent: "space-between",
          alignItems: "center",
          flexShrink: 1,
          paddingBottom: 20,
          marginLeft: 16,
        }}
      >
        <Text
          style={{
            fontFamily: "Lato-Regular",
            fontSize: 16,
            lineHeight: 16 * 1.5,
            fontWeight: "bold",
            color: COLORS.black,
          }}
        >
          {title}
        </Text>
        <ProfileArrowSvg />
      </View>
    </TouchableOpacity>
  )
}
