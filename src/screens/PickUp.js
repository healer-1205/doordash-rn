import {
  View,
  SafeAreaView,
  ScrollView,
  TextInput,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList,
} from "react-native"
import React, { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { Shadow } from "react-native-shadow-2"

import {
  AndroidSafeArea,
  FONTS,
  dummyData,
  COLORS,
  categories,
} from "../constants"
import {
  StarSvg,
  ElementSvg,
  SmallMapPin,
  FreeDeliverySvg,
  ProfileArrowSvg,
  FilterSvg,
  MicrophoneSvg,
} from "../svg"

export default function PickUp() {
  const navigation = useNavigation()

  const [category, setCategory] = useState("All")

  function renderSearch() {
    return (
      <View
        style={{
          height: 50,
          backgroundColor: "#F3F7FF",
          borderRadius: 25,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 20,
          marginHorizontal: 16,
          flexShrink: 1,
          marginBottom: 16,
          marginTop: 20,
        }}
      >
        <TextInput placeholder="Search for a dish..." style={{ flex: 1 }} />
        <MicrophoneSvg />
      </View>
    )
  }

  function renderCategories() {
    return (
      <View style={{ marginBottom: 40 }}>
        <FlatList
          data={categories}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          contentContainerStyle={{ paddingLeft: 16 }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{
                backgroundColor:
                  category === item.category ? COLORS.carrot : "#F3F7FF",
                height: 35,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 50,
                marginRight: 8,
              }}
              onPress={() => setCategory(item.category)}
            >
              <Text
                style={{
                  paddingHorizontal: 20,
                  ...FONTS.Lato_400Regular,
                  fontSize: 14,
                  color:
                    category === item.category ? COLORS.white : COLORS.gray,
                }}
              >
                {item.category}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    )
  }

  function renderContent() {
    return (
      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              ...FONTS.H2,
              marginBottom: 8,
              lineHeight: 32 * 1.2,
              color: COLORS.black,
            }}
          >
            Restaurant
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Filter")}>
            <FilterSvg />
          </TouchableOpacity>
        </View>

        {dummyData.map((item, index) => {
          return (
            <Shadow
              key={index}
              offset={[0, 0]}
              distance={15}
              startColor={"rgba(6, 38, 100, 0.04)"}
              finalColor={"rgba(6, 38, 100, 0.0)"}
            >
              <TouchableOpacity
                style={{
                  width: "100%",
                  height: 140,
                  backgroundColor: COLORS.white,
                  borderRadius: 20,
                  marginBottom: 8,
                  flexDirection: "row",
                  alignItems: "center",
                }}
                onPress={() =>
                  navigation.navigate("RestaurantMenu", {
                    restaurant: item,
                  })
                }
              >
                <ImageBackground
                  source={{
                    uri: "https://via.placeholder.com/142x140",
                  }}
                  style={{ width: 142, height: "100%" }}
                  imageStyle={{
                    borderTopLeftRadius: 20,
                    borderBottomLeftRadius: 20,
                  }}
                >
                  <View
                    style={{
                      height: 26,
                      backgroundColor: COLORS.carrot,
                      alignSelf: "flex-start",
                      paddingHorizontal: 13,
                      borderRadius: 20,
                      right: -10,
                      top: 10,
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <StarSvg />
                    <Text
                      style={{
                        fontSize: 12,
                        fontFamily: "Lato-Regular",
                        color: COLORS.white,
                        marginLeft: 6,
                      }}
                    >
                      {item.rating}
                    </Text>
                  </View>
                  <View
                    style={{
                      position: "absolute",
                      right: 0,
                    }}
                  >
                    <ElementSvg />
                  </View>
                </ImageBackground>
                <View
                  style={{
                    marginLeft: 20,
                    marginVertical: 20,
                    flex: 1,
                  }}
                >
                  <Text
                    style={{
                      ...FONTS.H4,
                      textTransform: "capitalize",
                      lineHeight: 24 * 1.2,
                      color: COLORS.black,
                    }}
                    numberOfLines={1}
                  >
                    {item.name}
                  </Text>
                  <Text
                    style={{
                      color: COLORS.gray,
                      fontFamily: "Lato-Regular",
                      fontSize: 14,
                      marginBottom: 8,
                    }}
                  >
                    {item.type}
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <SmallMapPin />
                    <Text
                      style={{
                        marginLeft: 8,
                        fontFamily: "Lato-Regular",
                        fontSize: 14,
                        color: COLORS.black,
                        marginBottom: 2,
                      }}
                    >
                      {item.distance}
                    </Text>
                  </View>
                  {item.freeDelivery && <FreeDeliverySvg />}
                </View>
                <View style={{ paddingRight: 16 }}>
                  <ProfileArrowSvg />
                </View>
              </TouchableOpacity>
            </Shadow>
          )
        })}
      </View>
    )
  }

  return (
    <SafeAreaView style={{ ...AndroidSafeArea.AndroidSafeArea }}>
      {renderSearch()}
      {/* {renderCategories()} */}
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 16,
          paddingBottom: 30,
        }}
        showsVerticalScrollIndicator={false}
      >
        {renderContent()}
      </ScrollView>
    </SafeAreaView>
  )
}
