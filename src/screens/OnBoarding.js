import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  // FlatList,
  Image,
  // Button,
  Linking,
} from "react-native"
import React, { useState, useRef } from "react"
import { useNavigation } from "@react-navigation/native"

import { COLORS, SIZES, FONTS, AndroidSafeArea } from "../constants"
// import {
//   ImageSvgOne,
//   ImageSvgTwo,
//   SkipSvg,
//   ArrowSvg,
//   ImageThreeSvg,
// } from "../svg"

// const slides = [
//   {
//     id: "1",
//     title: "Find the restaurant",
//     description:
//       "Qui ex aute ipsum duis. Incididunt adipisi adipisicing voluptate laborum",
//     image: <ImageSvgOne />,
//   },
//   {
//     id: "2",
//     title: "Choose your favorite dishes",
//     description:
//       "Qui ex aute ipsum duis. Incididunt adipisi adipisicing voluptate laborum",
//     image: <ImageSvgTwo />,
//   },
//   {
//     id: "3",
//     title: "Get your food delivery",
//     description:
//       "Qui ex aute ipsum duis. Incididunt adipisi adipisicing voluptate laborum",
//     image: <ImageThreeSvg />,
//   },
// ]

export default function OnBoarding() {
  const navigation = useNavigation()

  // const [currentSlideIndex, setCurrentSlideIndex] = useState(0)
  // const ref = useRef()

  // function updateCurrentSlideIndex(e) {
  //   const contentOffsetX = e.nativeEvent.contentOffset.x
  //   const currentIndex = Math.round(contentOffsetX / SIZES.width)
  //   setCurrentSlideIndex(currentIndex)
  // }

  // const goToNextSlide = () => {
  //   const nextSlideIndex = currentSlideIndex + 1
  //   if (nextSlideIndex != slides.length) {
  //     const offset = nextSlideIndex * SIZES.width
  //     ref?.current.scrollToOffset({ offset })
  //     setCurrentSlideIndex(currentSlideIndex + 1)
  //   }
  // }

  // const goToPrevtSlide = () => {
  //   const nextSlideIndex = currentSlideIndex - 1
  //   if (nextSlideIndex != slides.length) {
  //     const offset = nextSlideIndex * SIZES.width
  //     ref?.current.scrollToOffset({ offset })
  //     setCurrentSlideIndex(currentSlideIndex - 1)
  //   }
  // }

  // function renderDots() {
  //   return (
  //     <View
  //       style={{
  //         alignItems: "center",
  //         justifyContent: "center",
  //         flexDirection: "row",
  //       }}
  //     >
  //       {slides.map((_, index) => {
  //         return (
  //           <View
  //             key={index}
  //             style={[
  //               styles.dot,
  //               currentSlideIndex == index && {
  //                 backgroundColor: COLORS.green,
  //               },
  //             ]}
  //           />
  //         )
  //       })}
  //     </View>
  //   )
  // }

  function renderContent() {
    return (
      <View style={{ flex: 1 }}>
        {/* showing Skip button */}
        {/* {currentSlideIndex == 0 && (
          <TouchableOpacity
            style={{
              height: 50,
              justifyContent: "center",
              alignItems: "flex-end",
              paddingHorizontal: 16,
            }}
            onPress={() => navigation.navigate("SignIn")}
          >
            <SkipSvg />
          </TouchableOpacity>
        )}
        {currentSlideIndex == slides.length - 1 && (
          <TouchableOpacity
            style={{
              height: 50,
              justifyContent: "center",
              alignItems: "flex-start",
              paddingHorizontal: 16,
            }}
          ></TouchableOpacity>
        )}

        {currentSlideIndex !== 0 && currentSlideIndex !== slides.length - 1 && (
          <TouchableOpacity
            style={{
              height: 50,
              justifyContent: "center",
              alignItems: "flex-end",
              paddingHorizontal: 16,
            }}
            onPress={() => navigation.navigate("SignIn")}
          >
            <SkipSvg />
          </TouchableOpacity>
        )} */}
        {/* end showing Skip button */}
        <Image
          source={require("../assets/images/home.png")}
          style={[styles.image]}
        />
        <Text
          style={{
            textAlign: "center",
            ...FONTS.H1_Lato_700Bold,
            lineHeight: 40 * 1,
            marginTop: 10,
            color: COLORS.black,
            fontWeight: "bold",
          }}
        >
          Discover more from{"\n"} your neighborhood
        </Text>
        <View style={{ width: "80%", marginTop: 30, alignSelf: "center" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignIn")}
            style={[styles.redButtonContainer]}
          >
            <Text style={[styles.redButtonText]}>Continue with Email</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignIn")}
            style={[styles.grayButtonContainer]}
          >
            <Image
              source={require("../assets/images/socials/google.png")}
              style={[styles.socialIcon]}
            />
            <Text style={[styles.grayButtonText]}>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignIn")}
            style={[styles.grayButtonContainer]}
          >
            <Image
              source={require("../assets/images/socials/facebook.png")}
              style={[styles.socialIcon]}
            />
            <Text style={[styles.grayButtonText]}>Continue with Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignIn")}
            style={[styles.grayButtonContainer]}
          >
            <Image
              source={require("../assets/images/socials/apple.png")}
              style={[styles.socialIcon]}
            />
            <Text style={[styles.grayButtonText]}>Continue with Apple</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignIn")}
            style={{
              paddingBottom: 20,
              borderBottomWidth: 1,
              borderBottomColor: "#dddddd",
            }}
          >
            <Text style={[styles.grayButtonText]}>Search Nearby</Text>
          </TouchableOpacity>
          <Text
            style={{
              ...FONTS.bodyText,
              color: COLORS.black,
              margin: 20,
            }}
          >
            By tapping Continue with Email, Google, Facebook, or Apple, or by
            continuing as Guest, you agree to DoorDash's{" "}
            <Text
              style={{ color: "blue" }}
              onPress={() => Linking.openURL("http://google.com")}
            >
              Terms & Conditions
            </Text>{" "}
            and{" "}
            <Text
              style={{ color: "blue" }}
              onPress={() => Linking.openURL("http://google.com")}
            >
              Privacy Policy.
            </Text>
          </Text>
        </View>
        {/* <FlatList
          data={slides}
          ref={ref}
          onMomentumScrollEnd={updateCurrentSlideIndex}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: SIZES.height * 0.03 }}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  width: SIZES.width,
                }}
              >
                <View
                  style={{
                    alignSelf: "center",
                    marginBottom: 11,
                    height: 297,
                  }}
                >
                  {item.image}
                </View>
                <Text
                  style={{
                    textAlign: "center",
                    ...FONTS.H1_Lato_700Bold,
                    lineHeight: 40 * 1,
                    marginBottom: 10,
                    color: COLORS.black,
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    textAlign: "center",
                    color: COLORS.gray,
                    ...FONTS.bodyText,
                    lineHeight: 16 * 1.5,
                    marginBottom: 40,
                    paddingHorizontal: 20,
                  }}
                >
                  {item.description}
                </Text>
                {renderDots()}
              </View>
            )
          }}
        /> */}

        {/* <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 34,
            paddingHorizontal: 16,
          }}
        >
          <TouchableOpacity onPress={currentSlideIndex !== 0 && goToPrevtSlide}>
            {currentSlideIndex !== 0 && <ArrowSvg />}
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: 50,
              width: currentSlideIndex == slides.length - 1 ? 170 : 110,
              backgroundColor: COLORS.green,
              borderRadius: 25,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={
              currentSlideIndex == slides.length - 1
                ? () => navigation.navigate("SignIn")
                : goToNextSlide
            }
          >
            <Text
              style={{
                color: COLORS.white,
                textAlign: "center",
                fontSize: 14,
                textTransform: "uppercase",
                fontFamily: "Lato-Regular",
              }}
            >
              {currentSlideIndex == slides.length - 1 ? "get started" : "next"}
            </Text>
          </TouchableOpacity>
        </View> */}
      </View>
    )
  }

  return (
    <SafeAreaView style={{ ...AndroidSafeArea.AndroidSafeArea }}>
      {renderContent()}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  dot: {
    width: 10,
    height: 10,
    marginHorizontal: 5,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: COLORS.green,
  },
  image: {
    width: "100%",
    height: 250,
  },
  socialIcon: {
    width: 25,
    height: 25,
    position: "absolute",
    left: 20,
    top: 10,
  },
  redButtonContainer: {
    backgroundColor: "#ff0000",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 20,
    marginBottom: 10,
  },
  grayButtonContainer: {
    backgroundColor: "#dddddd",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 20,
    marginBottom: 10,
    position: "relative",
  },
  redButtonText: {
    textAlign: "center",
    ...FONTS.Home_Button_Text,
    color: COLORS.white,
    fontWeight: "bold",
  },
  grayButtonText: {
    textAlign: "center",
    ...FONTS.Home_Button_Text,
    color: COLORS.black,
    fontWeight: "bold",
  },
})
