import { View, Text, TextInput } from "react-native"
import React from "react"

import { COLORS, FONTS } from "../constants"

export default function InputField({
  placeholder,
  containerStyle,
  icon,
  title,
  secureTextEntry,
}) {
  return (
    <View
      style={{
        width: "100%",
        height: 53,
        ...containerStyle,
      }}
    >
      <Text
        style={{
          marginBottom: 2,
          textTransform: "uppercase",
          color: COLORS.gray,
          fontSize: 12,
          lineHeight: 12 * 1,
          ...FONTS.fieldLabel,
        }}
      >
        {title}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          borderBottomWidth: 1,
          borderBottomColor: COLORS.lightGray,
        }}
      >
        <TextInput
          placeholder={placeholder}
          style={{
            flex: 1,
            paddingRight: 15,
            flex: 1,
            paddingVertical: 4,
            fontSize: 16,
            fontFamily: "Lato-Regular",
          }}
          placeholderTextColor={COLORS.black}
          secureTextEntry={secureTextEntry}
        />
        {icon && icon}
      </View>
    </View>
  )
}
