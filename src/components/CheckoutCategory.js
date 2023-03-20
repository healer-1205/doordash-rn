import { View, Text, TouchableOpacity } from "react-native"
import React from "react"
import { COLORS, FONTS } from "../constants"

export default function CheckoutCategory({
  icon,
  title,
  description,
  mapPinIcon,
  price,
  containerStyle,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={{ width: "100%", flexDirection: "row", ...containerStyle }}
      onPress={onPress}
    >
      <View
        style={{
          width: 24,
          height: 24,
          justifyContent: "center",
          alignItems: "center",
          marginRight: 16,
        }}
      >
        {icon && icon}
      </View>
      <View
        style={{
          borderBottomWidth: 1,
          borderBottomColor: "#E2E2E2",
          width: "100%",
          flexShrink: 1,
          paddingBottom: 15,
        }}
      >
        <Text
          style={{
            ...FONTS.Lato_700Bold,
            fontSize: 16,
            marginBottom: 4,
            textTransform: "capitalize",
            lineHeight: 16 * 1.2,
          }}
        >
          {title}
        </Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {mapPinIcon && <View style={{ marginRight: 8 }}>{mapPinIcon}</View>}
          <Text
            style={{
              flex: 1,
              ...FONTS.Lato_400Regular,
              fontSize: 14,
              color: COLORS.gray,
              paddingRight: 25,
              lineHeight: 14 * 1.5,
            }}
            numberOfLines={1}
          >
            {description}
          </Text>
          {price && (
            <Text
              style={{
                ...FONTS.Lato_400Regular,
                fontSize: 16,
                color: COLORS.carrot,
                lineHeight: 16 * 1.2,
              }}
            >
              ${price}
            </Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  )
}
