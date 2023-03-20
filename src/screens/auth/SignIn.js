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

export default function SignIn() {
  const navigation = useNavigation()

  function renderContent() {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 16,
          paddingTop: SIZES.paddingTop,
          paddingBottom: 30,
        }}
        showVerticalScrollIndicator={false}
      >
        <Text
          style={{
            marginBottom: 54,
            ...FONTS.H1,
            color: COLORS.black,
          }}
        >
          Sign in
        </Text>
        <InputField
          containerStyle={{ marginBottom: 30 }}
          title="email"
          placeholder="darlenerobertson@mail.com"
          icon={<CheckSvg />}
        />
        <InputField
          containerStyle={{ marginBottom: 20 }}
          title="password"
          placeholder="••••••••"
          secureTextEntry={true}
          icon={
            <TouchableOpacity>
              <EyeOffSvg />
            </TouchableOpacity>
          }
        />
        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text
            style={{
              marginBottom: 23,
              textAlign: "right",
              ...FONTS.bodyText,
              color: COLORS.carrot,
              lineHeight: 16 * 1.5,
            }}
          >
            Forgot your password?
          </Text>
        </TouchableOpacity>

        <Button
          title="sign in"
          containerStyle={{ marginBottom: 20 }}
          onPress={() => navigation.navigate("MainLayout")}
        />
        <Button
          title="create account"
          containerStyle={{
            marginBottom: 20,
            backgroundColor: COLORS.lightBlue,
            marginBottom: SIZES.height * 0.1,
          }}
          textStyle={{ color: COLORS.black }}
          onPress={() => navigation.navigate("SignUp")}
        />
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
