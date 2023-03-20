import { View, Text, TouchableOpacity } from "react-native"
import React from "react"

import { FONTS, COLORS } from "../constants"
import { ArrowSvg } from "../svg"

export default function Header({ goBack = true, onPress, title, titleStyle }) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 42,
      }}
    >
      {goBack && (
        <TouchableOpacity
          style={{
            position: "absolute",
            left: 0,
            paddingHorizontal: 16,
          }}
          onPress={onPress}
        >
          <ArrowSvg />
        </TouchableOpacity>
      )}

      <Text
        style={{
          fontSize: 18,
          ...FONTS.H3,
          color: COLORS.black,
          ...titleStyle,
          textTransform: "capitalize",
        }}
      >
        {title}
      </Text>
    </View>
  )
}
