import { View, Text, TextInput } from "react-native"
import React from "react"

import { COLORS, FONTS } from "../constants"

export default function InputField({
  placeholder,
  containerStyle,
  icon,
  title,
  secureTextEntry,
  fontWeight,
  textColor,
  fieldStyle,
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
          color: textColor,
          ...FONTS.fieldLabel,
          fontWeight: fontWeight,
        }}
      >
        {title}
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          ...fieldStyle,
        }}
      >
        <TextInput
          placeholder={placeholder}
          style={{
            flex: 1,
            paddingRight: 15,
            flex: 1,
            paddingVertical: 8,
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
