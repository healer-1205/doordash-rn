import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
} from "react-native"
import React, { useState } from "react"
import { useRoute, useNavigation } from "@react-navigation/native"
import { Shadow } from "react-native-shadow-2"
import Modal from "react-native-modal"

import { COLORS, SIZES, dishes, FONTS } from "../constants"
import {
  HomeSvg,
  ProfileSvg,
  HeartSvg,
  BagSvg,
  PlaceSvg,
  CroissantSvg,
  InfoSvg,
  ArrowTwo,
  TruckSvg,
  StarThreeSvg,
  CrossSvg,
  PhoneSvg,
  MapPinTwoSvg,
  MailSvg,
  ClockSvg,
  TruckTwoSvg,
  FacebookSvg,
  GoogleSvg,
  TwitterSvg,
  PlusSvg,
} from "../svg"

const categories = [
  {
    id: "1",
    category: "Most Popular",
  },
  {
    id: "2",
    category: "Cakes",
  },
  {
    id: "3",
    category: "Ice-cream",
  },
  {
    id: "4",
    category: "Pasta",
  },
  {
    id: "5",
    category: "Drinks",
  },
]

export default function RestaurantMenu() {
  const navigation = useNavigation()
  const route = useRoute()
  const { restaurant } = route.params
  const [selectedTab, setSelectedTab] = useState("Home")
  const [showInfoModal, setShowInfoModal] = useState(false)
  const [category, setCategory] = useState("Most Popular")

  const tabs = [
    {
      id: "1",
      screen: "Home",
      icon: <HomeSvg color={COLORS.gray} />,
    },
    {
      id: "2",
      screen: "Places",
      icon: <PlaceSvg color={COLORS.gray} />,
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
      icon: <HeartSvg color={COLORS.gray} />,
    },
    {
      id: "5",
      screen: "Profile",
      icon: <ProfileSvg color={COLORS.gray} />,
    },
  ]

  function renderHeader() {
    return (
      <ImageBackground
        style={{
          width: SIZES.width,
          height: 220,
          paddingHorizontal: 16,
          paddingTop: 30,
          justifyContent: "center",
        }}
        source={{ uri: "https://via.placeholder.com/1125x660" }}
        imageStyle={{
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.3)",
            overflow: "hidden",
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        />
        <TouchableOpacity
          style={{ position: "absolute", left: 16, top: 34 }}
          onPress={() => navigation.goBack()}
        >
          <ArrowTwo />
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <CroissantSvg />
          <View style={{ flex: 1, marginLeft: 16 }}>
            <Text
              style={{
                ...FONTS.H2,
                color: COLORS.white,
                textTransform: "capitalize",
              }}
            >
              {restaurant.name}
            </Text>
            <Text
              style={{
                ...FONTS.Lato_400Regular,
                fontSize: 14,
                color: COLORS.white,
                textTransform: "capitalize",
              }}
            >
              {restaurant.type}
            </Text>
          </View>
          <TouchableOpacity onPress={() => setShowInfoModal(true)}>
            <InfoSvg />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    )
  }

  function renderRestaurantInfo() {
    return (
      <View style={{ paddingHorizontal: 16, top: -25 }}>
        <Shadow
          offset={[0, 0]}
          distance={10}
          startColor={"rgba(6, 38, 100, 0.05)"}
          finalColor={"rgba(6, 38, 100, 0.0)"}
          viewStyle={{ width: "100%" }}
        >
          <View
            style={{
              width: "100%",
              height: 50,
              borderRadius: 25,
              backgroundColor: COLORS.white,
              flexDirection: "row",
              alignItems: "center",
              paddingHorizontal: 20,
            }}
          >
            <TruckSvg />
            <View
              style={{
                marginLeft: 8,
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  ...FONTS.Lato_400Regular,
                  fontSize: 14,
                  color: COLORS.black,
                }}
              >
                Free delivery from{" "}
              </Text>
              <Text
                style={{
                  ...FONTS.Lato_400Regular,
                  fontSize: 14,
                  color: COLORS.green,
                }}
              >
                ${restaurant.freeDeliveryFrom}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <StarThreeSvg />
              <Text
                style={{
                  ...FONTS.Lato_400Regular,
                  fontSize: 14,
                  color: COLORS.black,
                  marginLeft: 5,
                }}
              >
                {restaurant.rating}
              </Text>
            </View>
          </View>
        </Shadow>
      </View>
    )
  }

  function renderCategories() {
    return (
      <View style={{ top: -4 }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingLeft: 16 }}
        >
          {categories.map((item, index) => {
            return (
              <TouchableOpacity
                key={item.id}
                style={{
                  backgroundColor:
                    category === item.category
                      ? COLORS.carrot
                      : COLORS.lightBlue,
                  marginRight: 8,
                  borderRadius: 50,
                }}
                onPress={() => setCategory(item.category)}
              >
                <Text
                  style={{
                    paddingHorizontal: 20,
                    paddingVertical: 7,
                    color:
                      category === item.category ? COLORS.white : COLORS.gray,
                    ...FONTS.Lato_400Regular,
                    fontSize: 14,
                    lineHeight: 14 * 1.5,
                    textTransform: "capitalize",
                  }}
                >
                  {item.category}
                </Text>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </View>
    )
  }

  function renderContent() {
    return (
      <View
        style={{
          paddingHorizontal: 28,
          marginTop: 40,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          top: -10,
        }}
      >
        {dishes.map((item, index) => {
          return (
            <Shadow
              key={item.id}
              offset={[0, 0]}
              distance={15}
              startColor={"rgba(6, 38, 100, 0.03)"}
              finalColor={"rgba(6, 38, 100, 0.0)"}
            >
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("DishDescription", {
                    dish: item,
                  })
                }
              >
                <View
                  style={{
                    width: (SIZES.width - 28) * 0.445,
                    height: 196,
                    backgroundColor: COLORS.white,
                    marginBottom: 8,
                    borderRadius: 20,
                    padding: 4,
                    paddingBottom: 15,
                  }}
                >
                  <Image
                    source={item.photo_477x300}
                    style={{
                      width: "100%",
                      height: 100,
                      borderRadius: 20,
                      marginBottom: 14,
                    }}
                  />
                  <View
                    style={{
                      flex: 1,
                      marginHorizontal: 12,
                    }}
                  >
                    <Text
                      style={{
                        ...FONTS.Lato_700Bold,
                        fontSize: 14,
                        lineHeight: 14 * 1.3,
                        flex: 1,
                        color: COLORS.black,
                      }}
                      numberOfLines={2}
                    >
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        color: COLORS.gray,
                        ...FONTS.Lato_400Regular,
                        fontSize: 12,
                      }}
                    >
                      ${item.price}
                    </Text>
                    {item.addedToCart ? (
                      <TouchableOpacity
                        style={{
                          position: "absolute",
                          width: 36,
                          height: 36,
                          backgroundColor: COLORS.lightBlue,
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: 20,
                          right: -12,
                          bottom: -10,
                        }}
                      >
                        <PlusSvg />
                      </TouchableOpacity>
                    ) : (
                      <View
                        style={{
                          position: "absolute",
                          width: 36,
                          height: 36,
                          backgroundColor: "#80C0A5",
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: 20,
                          right: -12,
                          bottom: -10,
                        }}
                      >
                        <Text
                          style={{
                            color: COLORS.white,
                            ...FONTS.Lato_400Regular,
                          }}
                        >
                          3
                        </Text>
                      </View>
                    )}
                  </View>
                </View>
              </TouchableOpacity>
            </Shadow>
          )
        })}
      </View>
    )
  }

  function renderInfoModal() {
    return (
      <Modal
        isVisible={showInfoModal}
        onBackdropPress={() => setShowInfoModal(false)}
        hideModalContentWhileAnimating={true}
        backdropTransitionOutTiming={0}
        style={{ margin: 0 }}
      >
        <View
          style={{
            backgroundColor: COLORS.white,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            position: "absolute",
            width: SIZES.width,
            bottom: 0,
            paddingHorizontal: 16,
            paddingVertical: 30,
          }}
        >
          <ScrollView>
            <Text
              style={{
                fontSize: 20,
                textTransform: "capitalize",
                paddingBottom: 10,
                color: COLORS.black,
                ...FONTS.H2,
              }}
            >
              {restaurant.name}
            </Text>
            <Text
              style={{
                marginBottom: 30,
                fontSize: 16,
                lineHeight: 16 * 1.5,
                color: COLORS.gray,
              }}
            >
              {restaurant.description}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <PhoneSvg />
              <Text
                style={{
                  marginLeft: 10,
                  ...FONTS.Lato_400Regular,
                  fontSize: 14,
                  lineHeight: 14 * 1.5,
                  color: COLORS.gray,
                }}
              >
                {restaurant.phoneNumber}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <MapPinTwoSvg />
              <Text
                style={{
                  marginLeft: 10,
                  ...FONTS.Lato_400Regular,
                  fontSize: 14,
                  lineHeight: 14 * 1.5,
                  color: COLORS.gray,
                }}
              >
                {restaurant.address}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <MailSvg />
              <Text
                style={{
                  marginLeft: 10,
                  ...FONTS.Lato_400Regular,
                  fontSize: 14,
                  lineHeight: 14 * 1.5,
                  color: COLORS.gray,
                }}
              >
                {restaurant.mail}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 12,
              }}
            >
              <ClockSvg />
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 10,
                }}
              >
                <Text
                  style={{
                    ...FONTS.Lato_400Regular,
                    fontSize: 14,
                    lineHeight: 14 * 1.5,
                    color: COLORS.black,
                  }}
                >
                  {restaurant.time}{" "}
                </Text>
                <Text
                  style={{
                    ...FONTS.Lato_400Regular,
                    fontSize: 14,
                    lineHeight: 14 * 1.5,
                    color: COLORS.gray,
                  }}
                >
                  {restaurant.days}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 30,
              }}
            >
              <TruckTwoSvg />
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  marginLeft: 10,
                }}
              >
                <Text
                  style={{
                    ...FONTS.Lato_400Regular,
                    fontSize: 14,
                    lineHeight: 14 * 1.5,
                    color: COLORS.black,
                  }}
                >
                  Free delivery from{" "}
                </Text>
                <Text
                  style={{
                    ...FONTS.Lato_400Regular,
                    fontSize: 14,
                    lineHeight: 14 * 1.5,
                    color: COLORS.green,
                  }}
                >
                  ${restaurant.freeDeliveryFrom}
                </Text>
                <Text
                  style={{
                    ...FONTS.Lato_400Regular,
                    fontSize: 14,
                    color: COLORS.green,
                  }}
                >
                  {" "}
                  in order
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 30,
              }}
            >
              <TouchableOpacity style={{ marginHorizontal: 7.5 }}>
                <FacebookSvg />
              </TouchableOpacity>
              <TouchableOpacity style={{ marginHorizontal: 7.5 }}>
                <TwitterSvg />
              </TouchableOpacity>
              <TouchableOpacity style={{ marginHorizontal: 7.5 }}>
                <GoogleSvg />
              </TouchableOpacity>
            </View>
          </ScrollView>
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              padding: 16,
            }}
            onPress={() => setShowInfoModal(false)}
          >
            <CrossSvg />
          </TouchableOpacity>
        </View>
      </Modal>
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
      >
        {renderHeader()}
        {renderRestaurantInfo()}
        {renderCategories()}
        {renderContent()}
      </ScrollView>

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
                    : navigation.navigate("MainLayout", {
                        screen: item.screen,
                      })
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
                          backgroundColor: COLORS.transparent,
                          marginTop: 4,
                        }}
                      />
                      <Text
                        style={{
                          textAlign: "center",
                          lineHeight: 16 * 1,
                          fontSize: 12,
                          fontFamily: "Lato-Regular",
                          color: COLORS.gray,
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

      {renderInfoModal()}
    </View>
  )
}
