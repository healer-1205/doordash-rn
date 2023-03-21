import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  StyleSheet,
  Image,
} from "react-native"
import React, { useState } from "react"
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

const categories = [
  {
    id: "1",
    category: "SignIn",
  },
  {
    id: "2",
    category: "SignUp",
  },
]

export default function SignIn() {
  const navigation = useNavigation()
  const [category, setCategory] = useState("SignIn")

  function renderContent() {
    return (
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 16,
          paddingTop: 30,
          paddingBottom: 30,
        }}
        showVerticalScrollIndicator={false}
      >
        <View style={{ alignItems: "center" }}>
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
                    category === item.category ? "#333333" : "#F3F7FF",
                  height: 35,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 50,
                  marginRight: 8,
                }}
                onPress={() => {
                  setCategory(item.category)
                  navigation.navigate(item.category)
                }}
              >
                <Text
                  style={{
                    paddingHorizontal: 20,
                    ...FONTS.Lato_900Black,
                    fontSize: 16,
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
        <View style={{ backgroundColor: "#aef2ef", marginTop: 30 }}>
          <Text
            style={{
              ...FONTS.bodyText,
              textAlign: "center",
              paddingVertical: 15,
            }}
          >
            Sign in to access your credits and discounts
          </Text>
        </View>
        {/* social signin buttons */}
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#dddddd",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("SignIn")}
            style={{
              backgroundColor: "#4287f5",
              paddingVertical: 15,
              borderRadius: 20,
              marginTop: 30,
              marginBottom: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../../assets/images/socials/google.png")}
              style={[styles.socialIcon]}
            />
            <Text style={[styles.buttonText]}>Continue with Google</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("SignIn")}
            style={{
              backgroundColor: "#1c4f63",
              paddingVertical: 15,
              borderRadius: 20,
              marginBottom: 20,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={require("../../assets/images/socials/facebook.png")}
              style={[styles.socialIcon]}
            />
            <Text style={[styles.buttonText]}>Continue with Facebook</Text>
          </TouchableOpacity>
          <Text
            style={{ textAlign: "center", ...FONTS.bodyText, marginBottom: 10 }}
          >
            or continue with email
          </Text>
        </View>
        {/* end social signin buttons */}

        <InputField
          containerStyle={{ marginBottom: 30, marginTop: 30 }}
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
        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text
            style={{
              marginBottom: 20,
              marginTop: 20,
              textAlign: "left",
              ...FONTS.bodyText,
              color: COLORS.gray,
              lineHeight: 16 * 1.5,
            }}
          >
            Forgot your password?
          </Text>
        </TouchableOpacity>

        <Button
          title="Sign In"
          containerStyle={{ marginBottom: 20, backgroundColor: "#ff0000" }}
          textStyle={{ fontWeight: "bold", fontSize: 18 }}
          onPress={() => navigation.navigate("MainLayout")}
        />
        {/* <Button
          title="create account"
          containerStyle={{
            marginBottom: 20,
            backgroundColor: COLORS.lightBlue,
            marginBottom: SIZES.height * 0.1,
          }}
          textStyle={{ color: COLORS.black }}
          onPress={() => navigation.navigate("SignUp")}
        /> */}
      </KeyboardAwareScrollView>
    )
  }

  return (
    <SafeAreaView style={{ ...AndroidSafeArea.AndroidSafeArea }}>
      {renderContent()}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  socialIcon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  buttonText: {
    textAlign: "center",
    ...FONTS.Button_Text,
    color: COLORS.white,
    fontWeight: "bold",
  },
})
