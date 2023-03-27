import {
  View,
  Text,
  ImageBackground,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  StatusBar,
} from "react-native"
import React, { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { Shadow } from "react-native-shadow-2"

import { COLORS, dummyData, FONTS } from "../constants"
import {
  MicrophoneSvg,
  ElementSvg,
  ProfileArrowSvg,
  SmallMapPin,
  FreeDeliverySvg,
  StarSvg,
  ViewAllSvg,
  BurgerSvg,
  GuacamoleSvg,
  PizzaSvg,
  SushiSvg,
  DoughnutSvg,
  FreeFromSvg,
  PickUpSvg,
} from "../svg"

const categories = [
  {
    id: "1",
    category: "Burger",
    icon: <BurgerSvg />,
  },
  {
    id: "2",
    category: "Salads",
    icon: <GuacamoleSvg />,
  },
  {
    id: "3",
    category: "Pizza",
    icon: <PizzaSvg />,
  },
  {
    id: "4",
    category: "Sushi",
    icon: <SushiSvg />,
  },
  {
    id: "5",
    category: "Deserts",
    icon: <DoughnutSvg />,
  },
]

const foods = [
  {
    id: "1",
    category: "Burger",
    icon: <BurgerSvg />,
  },
  {
    id: "2",
    category: "Salads",
    icon: <GuacamoleSvg />,
  },
  {
    id: "3",
    category: "Pizza",
    icon: <PizzaSvg />,
  },
  {
    id: "4",
    category: "Sushi",
    icon: <SushiSvg />,
  },
  {
    id: "5",
    category: "Deserts",
    icon: <DoughnutSvg />,
  },
]

const functionButtons = [
  {
    id: "1",
    category: "Offers",
  },
  {
    id: "2",
    category: "Pickup",
  },
  {
    id: "3",
    category: "Ratings",
  },
  {
    id: "4",
    category: "Under 30 min",
  },
  {
    id: "5",
    category: "Price",
  },
  {
    id: "6",
    category: "DashPass",
  },
]

export default function Home() {
  const navigation = useNavigation()

  const [category, setCategory] = useState("Burger")

  function renderHeader() {
    return (
      <ImageBackground
        source={{ uri: "https://via.placeholder.com/1125x540" }}
        style={{
          height: 180,
          paddingHorizontal: 16,
          justifyContent: "center",
          alignItems: "center",
        }}
        imageStyle={{
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        <View
          style={{
            width: "100%",
            height: 50,
            backgroundColor: COLORS.white,
            borderRadius: 25,
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 20,
          }}
        >
          <TextInput style={{ flex: 1 }} placeholder="Search for a dish..." />
          <TouchableOpacity style={{ paddingLeft: 15 }}>
            <MicrophoneSvg />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    )
  }

  function renderCategories() {
    return (
      <View
        style={{
          paddingTop: 30,
          borderBottomWidth: 1,
          borderBottomColor: COLORS.lightGray,
        }}
      >
        <FlatList
          data={categories}
          horizontal={true}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{
            paddingLeft: 16,
            paddingBottom: 15,
          }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View
              style={{
                marginRight: 10,
              }}
            >
              <Shadow
                offset={[0, 0]}
                distance={10}
                startColor={"rgba(6, 38, 100, 0.05)"}
                finalColor={"rgba(6, 38, 100, 0.0)"}
              >
                <TouchableOpacity
                  style={{
                    width: 73,
                    height: 73,
                    backgroundColor: COLORS.white,
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={() => setCategory(item.category)}
                >
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {item.icon}
                  </View>
                </TouchableOpacity>
              </Shadow>
              <Text
                style={{
                  textAlign: "center",
                  marginTop: 8,
                  color:
                    category === item.category ? COLORS.green : COLORS.gray,
                  ...FONTS.Lato_400Regular,
                  fontSize: 14,
                  lineHeight: 14 * 1.5,
                  textTransform: "capitalize",
                }}
              >
                {item.category}
              </Text>
            </View>
          )}
        />
      </View>
    )
  }

  function renderFoods() {
    return (
      <View style={{ paddingTop: 20 }}>
        <FlatList
          data={foods}
          horizontal={true}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{
            paddingLeft: 16,
            paddingBottom: 15,
          }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View
              style={{
                marginRight: 10,
              }}
            >
              <Shadow
                offset={[0, 0]}
                distance={10}
                startColor={"rgba(6, 38, 100, 0.05)"}
                finalColor={"rgba(6, 38, 100, 0.0)"}
              >
                <TouchableOpacity
                  style={{
                    width: 63,
                    height: 63,
                    backgroundColor: COLORS.white,
                    borderRadius: 20,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                  onPress={() => setCategory(item.category)}
                >
                  <View
                    style={{
                      width: 40,
                      height: 40,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {item.icon}
                  </View>
                </TouchableOpacity>
              </Shadow>
              <Text
                style={{
                  textAlign: "center",
                  marginTop: 8,
                  color:
                    category === item.category ? COLORS.green : COLORS.gray,
                  ...FONTS.Lato_400Regular,
                  fontSize: 14,
                  lineHeight: 14 * 1.5,
                  textTransform: "capitalize",
                }}
              >
                {item.category}
              </Text>
            </View>
          )}
        />
      </View>
    )
  }

  function renderFunctionButtons() {
    return (
      <View style={{ paddingTop: 20, marginBottom: 5 }}>
        <FlatList
          data={functionButtons}
          horizontal={true}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={{
            paddingLeft: 16,
            paddingBottom: 15,
          }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View
              style={{
                marginRight: 10,
              }}
            >
              <TouchableOpacity
                style={{
                  height: 40,
                  backgroundColor: COLORS.lightGray,
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onPress={() => setCategory(item.category)}
              >
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                    paddingHorizontal: 20,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      color:
                        category === item.category
                          ? COLORS.white
                          : COLORS.black,
                      ...FONTS.Button_Text,
                      fontWeight: "bold",
                      textTransform: "capitalize",
                    }}
                  >
                    {item.category}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    )
  }

  function renderSliders() {
    return (
      <View style={{ marginBottom: 5 }}>
        {/* <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 16,
            marginBottom: 8,
          }}
        >
          <Text
            style={{ ...FONTS.H2, lineHeight: 32 * 1.2, color: COLORS.black }}
          >
            Hot offers
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("AllOffers")}>
            <ViewAllSvg />
          </TouchableOpacity>
        </View> */}
        <FlatList
          data={dummyData}
          horizontal={true}
          contentContainerStyle={{ paddingLeft: 16 }}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity>
                <Image
                  source={require("../assets/images/sliders/slider1.jpg")}
                  style={{
                    width: 380,
                    height: 160,
                    marginRight: 10,
                    borderRadius: 20,
                  }}
                />
              </TouchableOpacity>
            )
          }}
        />
      </View>
    )
  }

  function renderNearbyRestaurants() {
    return (
      <View style={{ paddingHorizontal: 16, paddingTop: 10 }}>
        <Text
          style={{
            ...FONTS.H2_Lato_700Bold,
            color: COLORS.black,
            fontWeight: "bold",
          }}
        >
          Nearby Restaurants for $0
        </Text>
        <Text
          style={{
            ...FONTS.H2_Lato_700Bold,
            marginBottom: 8,
            color: COLORS.black,
            fontWeight: "bold",
          }}
        >
          Delivery Fee
        </Text>
        <FlatList
          data={dummyData}
          horizontal={true}
          contentContainerStyle={{}}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity>
                <Image
                  source={require("../assets/images/sliders/slider2.jpg")}
                  style={{
                    width: 380,
                    height: 160,
                    marginRight: 10,
                    borderRadius: 20,
                  }}
                />
                <Text
                  style={{
                    ...FONTS.fieldLabel,
                    fontWeight: "bold",
                    color: COLORS.black,
                  }}
                >
                  Bluestone Lane
                </Text>
                <Text
                  style={{
                    ...FONTS.fieldLabel,
                    fontWeight: "bold",
                  }}
                >
                  Sponsored
                </Text>
              </TouchableOpacity>
            )
          }}
        />
      </View>
    )
  }

  function renderWalletFriendly() {
    return (
      <View style={{ paddingHorizontal: 16, paddingTop: 10 }}>
        <Text
          style={{
            ...FONTS.H2_Lato_700Bold,
            color: COLORS.black,
            fontWeight: "bold",
          }}
        >
          Wallet Friendly
        </Text>
        {dummyData.map((item, index) => {
          return (
            <View key={index}>
              <Shadow
                offset={[0, 0]}
                distance={10}
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
                    source={require("../assets/images/mock/food1.jpg")}
                    style={{ width: 142, height: "100%" }}
                    imageStyle={{
                      borderTopLeftRadius: 20,
                      borderBottomLeftRadius: 20,
                    }}
                  >
                    {/* <View
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
                    </View> */}
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
                        ...FONTS.fieldLabel,
                        textTransform: "capitalize",
                        lineHeight: 24 * 1.2,
                        color: COLORS.black,
                        fontWeight: "bold",
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
                    {item.freeDelivery === false && item.freeDeliveryFrom && (
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                        }}
                      >
                        <FreeFromSvg />
                        <Text
                          style={{
                            ...FONTS.Lato_400Regular,
                            fontSize: 14,
                            color: COLORS.black,
                          }}
                        >
                          {" "}
                          ${item.freeDeliveryFrom}
                        </Text>
                      </View>
                    )}
                  </View>
                  <View style={{ paddingRight: 16 }}>
                    <ProfileArrowSvg />
                  </View>
                </TouchableOpacity>
              </Shadow>
            </View>
          )
        })}
      </View>
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
      >
        {/* {renderHeader()} */}
        {renderCategories()}
        {renderFoods()}
        {renderFunctionButtons()}
        {renderSliders()}
        {renderNearbyRestaurants()}
        {renderWalletFriendly()}
      </ScrollView>
    </View>
  )
}
