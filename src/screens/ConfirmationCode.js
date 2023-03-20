import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from "react-native"
import React, { useState, useRef } from "react"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview"
import { useNavigation } from "@react-navigation/native"

import { AndroidSafeArea, COLORS, FONTS } from "../constants"
import { Header, Button } from "../components"

export default function ConfirmationCode() {
  const navigation = useNavigation()

  const [otp, setOtp] = useState({ 1: "", 2: "", 3: "", 4: "", 5: "" })

  const firstInput = useRef()
  const secondInput = useRef()
  const thirdInput = useRef()
  const fourthInput = useRef()
  const fiveInput = useRef()

  function renderHeader() {
    return (
      <Header
        title="Verification"
        goBack={true}
        onPress={() => navigation.goBack()}
      />
    )
  }

  function renderContent() {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 16,
          paddingTop: 20,
        }}
      >
        <Text
          style={{
            marginBottom: 30,
            ...FONTS.bodyText,
            color: COLORS.gray,
            lineHeight: 16 * 1.5,
          }}
        >
          Enter your OTP code here.
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 30,
          }}
        >
          <View
            style={{
              borderRadius: 8,
              backgroundColor: "#F3F7FF",
            }}
          >
            <TextInput
              style={{
                textAlign: "center",
                paddingHorizontal: 22,
                paddingVertical: 14.5,
                textAlign: "center",
                fontSize: 24,
                fontFamily: "Lato-Regular",
                color: COLORS.golden,
                width: 60,
              }}
              keyboardType="number-pad"
              maxLength={1}
              ref={firstInput}
              onChangeText={(text) => {
                setOtp({ ...otp, 1: text })
                text && secondInput.current.focus()
              }}
            />
          </View>
          <View
            style={{
              borderRadius: 8,
              backgroundColor: "#F3F7FF",
            }}
          >
            <TextInput
              style={{
                textAlign: "center",
                paddingHorizontal: 22,
                paddingVertical: 14.5,
                textAlign: "center",
                fontSize: 24,
                fontFamily: "Lato-Regular",
                color: COLORS.golden,
                width: 59,
              }}
              keyboardType="number-pad"
              maxLength={1}
              ref={secondInput}
              onChangeText={(text) => {
                setOtp({ ...otp, 2: text })
                text ? thirdInput.current.focus() : firstInput.current.focus()
              }}
            />
          </View>
          <View
            style={{
              borderRadius: 8,
              backgroundColor: "#F3F7FF",
            }}
          >
            <TextInput
              style={{
                textAlign: "center",
                paddingHorizontal: 22,
                paddingVertical: 14.5,
                textAlign: "center",
                fontSize: 24,
                fontFamily: "Lato-Regular",
                color: COLORS.golden,
                width: 59,
              }}
              keyboardType="number-pad"
              maxLength={1}
              ref={thirdInput}
              onChangeText={(text) => {
                setOtp({ ...otp, 3: text })
                text ? fourthInput.current.focus() : secondInput.current.focus()
              }}
            />
          </View>
          <View
            style={{
              borderRadius: 8,
              backgroundColor: "#F3F7FF",
            }}
          >
            <TextInput
              style={{
                textAlign: "center",
                paddingHorizontal: 22,
                paddingVertical: 14.5,
                textAlign: "center",
                fontSize: 24,
                fontFamily: "Lato-Regular",
                color: COLORS.golden,
                width: 59,
              }}
              keyboardType="number-pad"
              maxLength={1}
              ref={fourthInput}
              onChangeText={(text) => {
                setOtp({ ...otp, 4: text })
                text ? fiveInput.current.focus() : thirdInput.current.focus()
              }}
            />
          </View>
          <View
            style={{
              borderRadius: 8,
              backgroundColor: "#F3F7FF",
            }}
          >
            <TextInput
              style={{
                textAlign: "center",
                paddingHorizontal: 22,
                paddingVertical: 14.5,
                textAlign: "center",
                fontSize: 24,
                fontFamily: "Lato-Regular",
                color: COLORS.golden,
                width: 59,
              }}
              keyboardType="number-pad"
              maxLength={1}
              ref={fiveInput}
              onChangeText={(text) => {
                setOtp({ ...otp, 5: text })
              }}
            />
          </View>
        </View>
        <View
          style={{
            marginBottom: 30,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={{ ...FONTS.bodyText, color: COLORS.gray }}>
            Didn’t receive the OTP?{" "}
          </Text>
          <TouchableOpacity>
            <Text style={{ ...FONTS.bodyText, color: COLORS.carrot }}>
              Resend.
            </Text>
          </TouchableOpacity>
        </View>
        <Button title="verify" />
      </KeyboardAwareScrollView>
    )
  }
  return (
    <SafeAreaView style={{ ...AndroidSafeArea.AndroidSafeArea }}>
      {renderHeader()}
      {renderContent()}
    </SafeAreaView>
  )
}
