import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native"
import React, { useState } from "react"
import { Platform } from "react-native"
import Modal from "react-native-modal"
import { useNavigation } from "@react-navigation/native"
import { Shadow } from "react-native-shadow-2"

import { Header, CheckoutCategory, Button } from "../components"
import { AndroidSafeArea, COLORS, FONTS, SIZES } from "../constants"
import {
  ClipboardSvg,
  SmallMapPinTwo,
  MapPinSvg,
  CreditCardTwoSvg,
  CrossSvg,
  PayPalSvg,
  ApplePaySvg,
} from "../svg"

const addresses = [
  {
    id: "1",
    type: "Home",
    location: "8000 S Kirkland Ave, Chicago, IL 606",
  },
  {
    id: "2",
    type: "Work",
    location: "6391 Elgin St. Celina, Delaware 10299",
  },
  {
    id: "3",
    type: "Other",
    location: "3891 Ranchview Dr. Richardson, Califo",
  },
  {
    id: "4",
    type: "Current Location",
    location: "3891 Ranchview Dr. Richardson, Califor",
  },
]

const creditCards = [
  {
    id: "1",
    number: "7741 ******** 6644",
  },
  {
    id: "2",
    number: "7741 ******** 6644",
  },
]

export default function Checkout() {
  const navigation = useNavigation()

  const [addressModal, setAddressModal] = useState(false)
  const [paymentModal, setPaymentModal] = useState(false)
  const [selectAddress, setSelectAddress] = useState(addresses[0])
  const [selectPayment, setSelectPayment] = useState("Apple Pay")
  const [selectCard, setSelectCard] = useState(creditCards[0])

  function renderHeader() {
    return (
      <Header
        title="Checkout"
        leftIcon="chevron-left"
        onPress={() => navigation.goBack()}
      />
    )
  }

  function renderContent() {
    return (
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 16 }}
        showsVerticalScrollIndicator={false}
      >
        <CheckoutCategory
          icon={<ClipboardSvg />}
          title="My order"
          description="Desert show cafe"
          mapPinIcon={<SmallMapPinTwo />}
          price="60.95"
          containerStyle={{ marginTop: 20 }}
        />
        <CheckoutCategory
          icon={<MapPinSvg />}
          title="Delivery address"
          description="8000 S Kirkland Ave, Chicago, IL 60652"
          containerStyle={{ marginTop: 20 }}
          onPress={() => setAddressModal(true)}
        />
        <CheckoutCategory
          icon={<CreditCardTwoSvg />}
          title="Payment method"
          description="7741 ******** 6644"
          containerStyle={{ marginTop: 20 }}
          onPress={() => setPaymentModal(true)}
        />
        <Text
          style={{
            ...FONTS.Lato_400Regular,
            fontSize: 12,
            textTransform: "uppercase",
            color: COLORS.gray,
            marginTop: 30,
            marginBottom: 10,
          }}
        >
          comment
        </Text>
        <TextInput
          style={{
            borderBottomWidth: 1,
            borderBottomColor: "#E2E2E2",
          }}
          textAlignVertical="top"
          multiline={true}
          numberOfLines={4}
        />
        <View style={{ flex: 1 }} />

        <Button
          title="send order"
          containerStyle={{
            marginBottom: Platform.OS === "ios" ? 0 : 34,
          }}
          onPress={() => navigation.navigate("CheckoutSuccess")}
        />
      </ScrollView>
    )
  }

  function renderAddressModal() {
    return (
      <Modal
        isVisible={addressModal}
        onBackdropPress={() => setAddressModal(false)}
        hideModalContentWhileAnimating={true}
        backdropTransitionOutTiming={0}
        style={{ margin: 0 }}
      >
        <View
          style={{
            backgroundColor: COLORS.lightBlue,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            position: "absolute",
            width: SIZES.width,
            bottom: 0,
            paddingHorizontal: 16,
            paddingVertical: 30,
          }}
        >
          <Text
            style={{
              ...FONTS.H2,
              textTransform: "capitalize",
              marginBottom: 10,
            }}
          >
            Choose delivery address
          </Text>
          {addresses.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  width: "100%",
                  height: 74,
                  flexDirection: "row",
                  alignItems: "center",
                  borderBottomWidth: 1,
                  justifyContent: "space-between",
                  borderBottomColor: "#E2E2E2",
                }}
                onPress={() => setSelectAddress(item.id)}
              >
                <View>
                  <Text
                    style={{
                      ...FONTS.Lato_700Bold,
                      fontSize: 16,
                      color: COLORS.black,
                      lineHeight: 16 * 1.5,
                    }}
                  >
                    {item.type}
                  </Text>
                  <Text
                    style={{
                      ...FONTS.Lato_400Regular,
                      fontSize: 14,
                      color: COLORS.gray,
                    }}
                    numberOfLines={1}
                  >
                    {item.location}
                  </Text>
                </View>
                <View
                  style={{
                    width: 20,
                    height: 20,
                    borderWidth: 2,
                    borderRadius: 10,
                    borderColor: "#E2E2E2",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {item.id === selectAddress && (
                    <View
                      style={{
                        width: 10,
                        height: 10,
                        backgroundColor: COLORS.green,
                        borderRadius: 5,
                      }}
                    />
                  )}
                </View>
              </TouchableOpacity>
            )
          })}
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              padding: 16,
            }}
            onPress={() => setAddressModal(false)}
          >
            <CrossSvg />
          </TouchableOpacity>
        </View>
      </Modal>
    )
  }

  function renderPaymentModal() {
    return (
      <Modal
        isVisible={paymentModal}
        onBackdropPress={() => setPaymentModal(false)}
        hideModalContentWhileAnimating={true}
        backdropTransitionOutTiming={0}
        style={{ margin: 0 }}
      >
        <View
          style={{
            backgroundColor: COLORS.lightBlue,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            position: "absolute",
            width: SIZES.width,
            bottom: 0,
            paddingHorizontal: 16,
            paddingVertical: 30,
          }}
        >
          <Text
            style={{
              ...FONTS.H2,
              textTransform: "capitalize",
              marginBottom: 10,
            }}
          >
            Choose payment method
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 20,
            }}
          >
            <TouchableOpacity
              style={{ width: "48%" }}
              onPress={() => setSelectPayment("Apple Pay")}
            >
              <Shadow
                offset={[0, 0]}
                distance={15}
                startColor={"rgba(6, 38, 100, 0.04)"}
                finalColor={"rgba(6, 38, 100, 0.0)"}
                viewStyle={{ width: "100%" }}
              >
                <View
                  style={{
                    width: "100%",
                    height: 100,
                    backgroundColor: COLORS.white,
                    borderRadius: 20,
                    paddingHorizontal: 20,
                    paddingVertical: 26,
                  }}
                >
                  <ApplePaySvg />
                  <View
                    style={{
                      width: 20,
                      height: 20,
                      borderWidth: 2,
                      borderRadius: 10,
                      borderColor: "#E2E2E2",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      right: 16,
                      bottom: 16,
                    }}
                  >
                    {selectPayment === "Apple Pay" && (
                      <View
                        style={{
                          width: 10,
                          height: 10,
                          backgroundColor: COLORS.green,
                          borderRadius: 5,
                        }}
                      />
                    )}
                  </View>
                </View>
              </Shadow>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ width: "48%" }}
              onPress={() => setSelectPayment("Pay Pal")}
            >
              <Shadow
                offset={[0, 0]}
                distance={15}
                startColor={"rgba(6, 38, 100, 0.04)"}
                finalColor={"rgba(6, 38, 100, 0.0)"}
                viewStyle={{ width: "100%" }}
              >
                <View
                  style={{
                    width: "100%",
                    height: 100,
                    backgroundColor: COLORS.white,
                    borderRadius: 20,
                    paddingHorizontal: 20,
                    paddingVertical: 26,
                  }}
                >
                  <PayPalSvg />
                  <View
                    style={{
                      width: 20,
                      height: 20,
                      borderWidth: 2,
                      borderRadius: 10,
                      borderColor: "#E2E2E2",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      right: 16,
                      bottom: 16,
                    }}
                  >
                    {selectPayment === "Pay Pal" && (
                      <View
                        style={{
                          width: 10,
                          height: 10,
                          backgroundColor: COLORS.green,
                          borderRadius: 5,
                        }}
                      />
                    )}
                  </View>
                </View>
              </Shadow>
            </TouchableOpacity>
          </View>
          <Text
            style={{
              ...FONTS.H4,
              color: COLORS.black,
              lineHeight: 24 * 1.2,
              marginBottom: 11,
            }}
          >
            Credit card
          </Text>
          {creditCards.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{
                  height: 37,
                  borderBottomWidth: 1,
                  marginBottom: 16,
                  borderBottomColor: "#E2E2E2",
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
                onPress={() => setSelectCard(item.id)}
              >
                <Text
                  style={{
                    ...FONTS.bodyText,
                    color: COLORS.gray,
                  }}
                >
                  {item.number}
                </Text>
                <View>
                  <View
                    style={{
                      width: 20,
                      height: 20,
                      borderWidth: 2,
                      borderRadius: 10,
                      borderColor: "#E2E2E2",
                      justifyContent: "center",
                      alignItems: "center",
                      position: "absolute",
                      right: 16,
                      bottom: 16,
                    }}
                  >
                    {selectCard === item.id && (
                      <View
                        style={{
                          width: 10,
                          height: 10,
                          backgroundColor: COLORS.green,
                          borderRadius: 5,
                        }}
                      />
                    )}
                  </View>
                </View>
              </TouchableOpacity>
            )
          })}
          <TouchableOpacity
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              padding: 16,
            }}
            onPress={() => setPaymentModal(false)}
          >
            <CrossSvg />
          </TouchableOpacity>
        </View>
      </Modal>
    )
  }

  return (
    <SafeAreaView style={{ ...AndroidSafeArea.AndroidSafeArea }}>
      {renderHeader()}
      {renderContent()}
      {renderAddressModal()}
      {renderPaymentModal()}
    </SafeAreaView>
  )
}
