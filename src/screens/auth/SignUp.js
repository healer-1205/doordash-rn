import { View, Text, TouchableOpacity, SafeAreaView } from "react-native"
import React from "react"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview"
import { useNavigation } from "@react-navigation/native"

import { AndroidSafeArea, COLORS, FONTS, SIZES } from "../../constants"
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
          paddingTop: SIZES.paddingTop,
          paddingBottom: 20,
        }}
      >
        <Text
          style={{
            marginBottom: 54,
            ...FONTS.H1,
            color: COLORS.black,
          }}
        >
          Sign up
        </Text>
        <InputField
          containerStyle={{ marginBottom: 30 }}
          title="name"
          placeholder="Darlene Robertson"
          icon={<CheckSvg />}
        />
        <InputField
          containerStyle={{ marginBottom: 30 }}
          title="email"
          placeholder="darlenerobertson@mail.com"
          icon={<CheckSvg />}
        />
        <InputField
          containerStyle={{ marginBottom: 30 }}
          title="password"
          placeholder="••••••••"
          secureTextEntry={true}
          icon={
            <TouchableOpacity>
              <EyeOffSvg />
            </TouchableOpacity>
          }
        />
        <InputField
          containerStyle={{ marginBottom: 30 }}
          title="confirm password"
          placeholder="••••••••"
          secureTextEntry={true}
          icon={
            <TouchableOpacity>
              <EyeOffSvg />
            </TouchableOpacity>
          }
        />

        <Button
          title="sign up"
          containerStyle={{ marginBottom: 20 }}
          onPress={() => navigation.navigate("VerifyPhoneNumber")}
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

        <View
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
        </View>
      </KeyboardAwareScrollView>
    )
  }

  return (
    <SafeAreaView style={{ ...AndroidSafeArea.AndroidSafeArea }}>
      {renderContent()}
    </SafeAreaView>
  )
}
