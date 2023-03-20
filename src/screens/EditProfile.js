import { SafeAreaView, Image, View, StatusBar } from "react-native"
import React from "react"
import { Shadow } from "react-native-shadow-2"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview"
import { useNavigation } from "@react-navigation/native"

import { AndroidSafeArea, COLORS } from "../constants"
import { Header, InputField, Button } from "../components"
import { CheckSvg } from "../svg"

export default function EditProfile() {
  const navigation = useNavigation()

  function renderHeader() {
    return <Header title="Edit profile" onPress={() => navigation.goBack()} />
  }

  function renderContent() {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingTop: 36,
        }}
        showVerticalScrollIndicator={false}
      >
        <View style={{ alignSelf: "center", marginBottom: 34 }}>
          <Shadow
            offset={[0, 0]}
            distance={10}
            startColor={"rgba(6, 38, 100, 0.05)"}
            finalColor={"rgba(6, 38, 100, 0.0)"}
          >
            <Image
              source={{
                uri: "https://via.placeholder.com/900x900",
              }}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                alignSelf: "center",
                borderWidth: 6,
                borderColor: COLORS.white,
              }}
            />
          </Shadow>
        </View>

        <InputField
          placeholder="Darlene Robertson"
          title="name"
          containerStyle={{ marginBottom: 30 }}
          icon={<CheckSvg />}
        />
        <InputField
          placeholder="darlenerobertson@mail.com"
          title="email"
          containerStyle={{ marginBottom: 30 }}
          icon={<CheckSvg />}
        />
        <InputField
          placeholder="+38 0123456789"
          title="phone number"
          containerStyle={{ marginBottom: 30 }}
          icon={<CheckSvg />}
        />
        <InputField
          placeholder="Chicago, USA"
          title="location"
          containerStyle={{ marginBottom: 30 }}
          icon={<CheckSvg />}
        />
        <Button title="save changes" />
      </KeyboardAwareScrollView>
    )
  }

  return (
    <SafeAreaView style={{ ...AndroidSafeArea.AndroidSafeArea }}>
      <StatusBar barStyle="black-content" />
      {renderHeader()}
      {renderContent()}
    </SafeAreaView>
  )
}
