import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from "react-native"
import React, { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import Accordion from "react-native-collapsible/Accordion"
import { Shadow } from "react-native-shadow-2"

import { AndroidSafeArea, COLORS, FONTS, dummyData } from "../constants"
import { Header } from "../components"
import { ElementTwoSvg, DeliveredSvg } from "../svg"

export default function OrderHistory() {
  const navigation = useNavigation()

  const [activeSections, setActiveSections] = useState([])

  const setSections = (sections) => {
    setActiveSections(sections.includes(undefined) ? [] : sections)
  }

  const renderHeader = (section, _, isActive) => {
    return (
      <Shadow
        offset={[0, 0]}
        distance={15}
        startColor={"rgba(6, 38, 100, 0.03)"}
        finalColor={"rgba(6, 38, 100, 0.0)"}
        viewStyle={{ width: "100%" }}
      >
        <View
          duration={400}
          style={{
            flexDirection: "row",
            marginBottom: 8,
            width: "100%",
          }}
        >
          <ImageBackground
            source={section.photo_312x324}
            style={{ width: 104, height: 108 }}
            imageStyle={{
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
            }}
          >
            <View
              style={{
                position: "absolute",
                right: 0,
              }}
            >
              <ElementTwoSvg />
            </View>
          </ImageBackground>
          <View
            style={{
              padding: 16,
              flex: 1,
              backgroundColor: COLORS.white,
              borderTopRightRadius: 20,
              borderBottomRightRadius: 20,
            }}
          >
            <Text
              style={{
                ...FONTS.H4,
                textTransform: "capitalize",
                marginBottom: 3,
                color: COLORS.black,
              }}
            >
              {section.name}
            </Text>
            <View style={{ flex: 1 }}>
              <Text
                style={{
                  ...FONTS.Lato_400Regular,
                  fontSize: 12,
                  color: COLORS.gray,
                }}
              >
                May 26, 2021 - 10:38 AM
              </Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <DeliveredSvg />
              <Text
                style={{
                  ...FONTS.Lato_400Regular,
                  fontSize: 14,
                  color: COLORS.black,
                }}
              >
                $36.42
              </Text>
            </View>
          </View>
        </View>
      </Shadow>
    )
  }

  const renderContent = (section, _, isActive) => {
    return (
      <View style={{ paddingVertical: 13 }} transition="backgroundColor">
        {section.dishes.map((item, index) => {
          return (
            <View
              key={index}
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  ...FONTS.Lato_400Regular,
                  fontSize: 14,
                  color: COLORS.gray,
                  textTransform: "capitalize",
                  lineHeight: 14 * 1.5,
                }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  ...FONTS.Lato_400Regular,
                  fontSize: 13,
                  color: COLORS.black,
                }}
              >
                ${item.price}
              </Text>
            </View>
          )
        })}
        <TouchableOpacity
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: 50,
            borderRadius: 25,
            backgroundColor: COLORS.lightBlue,
            marginBottom: 10,
            marginTop: 15,
          }}
        >
          <Text
            style={{
              ...FONTS.Lato_400Regular,
              textTransform: "uppercase",
              fontSize: 14,
              color: COLORS.black,
            }}
          >
            repeat order
          </Text>
        </TouchableOpacity>
      </View>
    )
  }

  return (
    <SafeAreaView style={{ ...AndroidSafeArea.AndroidSafeArea }}>
      <Header title="Order history" onPress={() => navigation.goBack()} />
      <StatusBar barStyle="black-content" />
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 30,
          paddingVertical: 24,
        }}
        showsVerticalScrollIndicator={false}
      >
        <Accordion
          activeSections={activeSections}
          sections={dummyData}
          touchableComponent={TouchableOpacity}
          renderHeader={renderHeader}
          renderContent={renderContent}
          duration={400}
          onChange={setSections}
        />
      </ScrollView>
    </SafeAreaView>
  )
}
