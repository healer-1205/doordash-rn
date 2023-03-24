import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Linking,
} from "react-native"
import React, { useState } from "react"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview"
import { useNavigation } from "@react-navigation/native"

import {
  AndroidSafeArea,
  COLORS,
  FONTS,
  SIZES,
  authCategories,
} from "../../constants"
import { Button, InputField } from "../../components"
import {
  FacebookSvg,
  TwitterSvg,
  GoogleSvg,
  CheckSvg,
  EyeOffSvg,
} from "../../svg"

export default function SignUp() {
  const navigation = useNavigation()

  function renderContent() {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 16,
          paddingTop: 30,
          paddingBottom: 30,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <FlatList
            data={authCategories}
            keyExtractor={(item) => item.id.toString()}
            horizontal={true}
            contentContainerStyle={{ paddingLeft: 16 }}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={{
                  backgroundColor:
                    item.category === "SignUp" ? "#333333" : "#F3F7FF",
                  height: 35,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 50,
                  marginRight: 8,
                }}
                onPress={() => {
                  navigation.navigate(item.category)
                }}
              >
                <Text
                  style={{
                    paddingHorizontal: 20,
                    ...FONTS.Lato_900Black,
                    fontSize: 16,
                    color:
                      item.category === "SignUp" ? COLORS.white : COLORS.gray,
                  }}
                >
                  {item.category}
                </Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={{ backgroundColor: "#aef2ef", marginTop: 30 }}>
          <Text
            style={{
              ...FONTS.bodyText,
              textAlign: "center",
              paddingVertical: 15,
            }}
          >
            Sign up and get up to 40% off your first order
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <InputField
            containerStyle={{
              marginBottom: 30,
              marginTop: 30,
              width: "50%",
              paddingRight: 5,
            }}
            title="First Name"
            placeholder=""
            fontWeight="bold"
            textColor={COLORS.black}
            fieldStyle={{
              backgroundColor: COLORS.lightGray,
              borderRadius: 10,
              marginTop: 10,
            }}
          />
          <InputField
            containerStyle={{
              marginBottom: 30,
              marginTop: 30,
              width: "50%",
              paddingLeft: 5,
            }}
            title="Last Name"
            placeholder=""
            fontWeight="bold"
            textColor={COLORS.black}
            fieldStyle={{
              backgroundColor: COLORS.lightGray,
              borderRadius: 10,
              marginTop: 10,
            }}
          />
        </View>
        <InputField
          containerStyle={{ marginBottom: 30, marginTop: 10 }}
          title="Email"
          placeholder=""
          fontWeight="bold"
          textColor={COLORS.black}
          fieldStyle={{
            backgroundColor: COLORS.lightGray,
            borderRadius: 10,
            marginTop: 10,
          }}
        />
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <InputField
            containerStyle={{
              marginBottom: 30,
              width: "40%",
              paddingRight: 5,
            }}
            title="Country"
            placeholder=""
            fontWeight="bold"
            textColor={COLORS.black}
            fieldStyle={{
              backgroundColor: COLORS.lightGray,
              borderRadius: 10,
              marginTop: 10,
            }}
          />
          <InputField
            containerStyle={{
              marginBottom: 30,
              width: "60%",
              paddingLeft: 5,
            }}
            title="Mobile Number"
            placeholder=""
            fontWeight="bold"
            textColor={COLORS.black}
            fieldStyle={{
              backgroundColor: COLORS.lightGray,
              borderRadius: 10,
              marginTop: 10,
            }}
          />
        </View>
        <InputField
          containerStyle={{ marginBottom: 20, marginTop: 10 }}
          title="Password"
          placeholder=""
          fontWeight="bold"
          textColor={COLORS.black}
          secureTextEntry={true}
          fieldStyle={{
            backgroundColor: COLORS.lightGray,
            borderRadius: 10,
            marginTop: 10,
          }}
          icon={
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: COLORS.black,
                marginRight: 10,
              }}
            >
              Show
            </Text>
          }
        />
        <Text
          style={{ ...FONTS.bodyText, marginVertical: 20, textAlign: "center" }}
        >
          By tapping "Sign Up" or "Continue with Google, Facebook, or Apple" you
          agree to DoorDash's{" "}
          <Text
            style={{ color: "#0000ff" }}
            onPress={() => {
              Linking.openURL("https://www.google.com/")
            }}
          >
            Terms and Conditions
          </Text>{" "}
          and{" "}
          <Text
            style={{ color: "#0000ff" }}
            onPress={() => {
              Linking.openURL("https://www.google.com/")
            }}
          >
            Privacy Policy
          </Text>
          .
        </Text>

        <Button
          title="Sign Up"
          containerStyle={{ marginBottom: 20, backgroundColor: "#ff0000" }}
          textStyle={{ fontWeight: "bold", fontSize: 18 }}
          onPress={() => navigation.navigate("MainLayout")}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 63,
          }}
        >
          <Text style={{ color: COLORS.gray, ...FONTS.bodyText }}>
            Already have an account?{" "}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
            <Text
              style={{
                textAlign: "right",
                ...FONTS.bodyText,
                color: COLORS.carrot,
                lineHeight: 16 * 1.5,
              }}
            >
              Sign in.
            </Text>
          </TouchableOpacity>
        </View>

        {/* <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
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
        </View> */}
      </KeyboardAwareScrollView>
    )
  }

  return (
    <SafeAreaView style={{ ...AndroidSafeArea.AndroidSafeArea }}>
      {renderContent()}
    </SafeAreaView>
  )
}
