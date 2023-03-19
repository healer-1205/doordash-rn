import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    FlatList,
    Image,
    TouchableOpacity,
} from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { Shadow } from "react-native-shadow-2";

import { Header } from "../components";
import { AndroidSafeArea, COLORS, creditCards, FONTS } from "../constants";
import { ApplePaySvg, EditTwoSvg, PayPalSvg, PlusTwoSvg } from "../svg";

export default function PaymentMethod() {
    const navigation = useNavigation();

    function Add() {
        return (
            <Svg
                width={43}
                height={21}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <Path
                    d="M6.616 12.276 5.04 8.195a8.305 8.305 0 0 1-.294-.938 7.627 7.627 0 0 1-.301.945L2.87 12.276h3.745ZM9.444 16h-1.05a.452.452 0 0 1-.294-.091.56.56 0 0 1-.168-.231l-.938-2.422H2.493l-.938 2.422a.491.491 0 0 1-.161.224A.447.447 0 0 1 1.1 16H.05L4.06 5.969h1.373L9.443 16Zm5.495-5.404c-.233-.313-.485-.53-.756-.651a2.13 2.13 0 0 0-.91-.189c-.658 0-1.164.236-1.519.707s-.532 1.143-.532 2.016c0 .462.04.859.119 1.19.08.327.196.597.35.812.154.21.343.364.567.462.224.098.478.147.763.147.41 0 .768-.093 1.071-.28.308-.187.59-.45.847-.791v-3.423Zm1.246-4.907V16h-.742c-.177 0-.29-.086-.336-.259l-.112-.861a3.86 3.86 0 0 1-1.036.882c-.387.224-.835.336-1.344.336-.406 0-.775-.077-1.106-.231a2.328 2.328 0 0 1-.847-.693c-.233-.303-.413-.681-.539-1.134a5.84 5.84 0 0 1-.189-1.561c0-.523.07-1.008.21-1.456.14-.453.34-.845.602-1.176.261-.331.581-.59.959-.777a2.84 2.84 0 0 1 1.288-.287c.434 0 .805.075 1.113.224.313.145.59.348.833.609V5.689h1.246Zm6.588 4.907c-.233-.313-.485-.53-.756-.651a2.13 2.13 0 0 0-.91-.189c-.658 0-1.164.236-1.519.707s-.532 1.143-.532 2.016c0 .462.04.859.119 1.19.08.327.196.597.35.812.154.21.343.364.567.462.224.098.478.147.763.147.41 0 .768-.093 1.071-.28.308-.187.59-.45.847-.791v-3.423Zm1.246-4.907V16h-.742c-.177 0-.29-.086-.336-.259l-.112-.861a3.86 3.86 0 0 1-1.036.882c-.387.224-.835.336-1.344.336-.406 0-.775-.077-1.106-.231a2.327 2.327 0 0 1-.847-.693c-.233-.303-.413-.681-.539-1.134a5.838 5.838 0 0 1-.189-1.561c0-.523.07-1.008.21-1.456.14-.453.34-.845.602-1.176.261-.331.581-.59.959-.777a2.84 2.84 0 0 1 1.288-.287c.434 0 .805.075 1.113.224.313.145.59.348.833.609V5.689h1.246Z"
                    fill="#FD5252"
                />
                <Path
                    d="M38 5.917v8.166M33.917 10h8.166"
                    stroke="#FD5252"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </Svg>
        );
    }

    function renderHeader() {
        return (
            <Header
                title="Payment Method"
                onPress={() => navigation.goBack()}
            />
        );
    }

    function renderContent() {
        return (
            <ScrollView
                contentContainerStyle={{ flexGrow: 1 }}
                showsVerticalScrollIndicator={false}
            >
                <View
                    style={{
                        paddingHorizontal: 16,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: 24,
                        marginBottom: 4,
                    }}
                >
                    <Text
                        style={{
                            ...FONTS.H4,
                            lineHeight: 24 * 1.2,
                            textTransform: "capitalize",
                        }}
                    >
                        Credit cards
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("AddNewCard")}
                    >
                        <Add />
                    </TouchableOpacity>
                </View>
                <View>
                    <FlatList
                        horizontal={true}
                        data={creditCards}
                        contentContainerStyle={{
                            paddingLeft: 16,
                            marginBottom: 20,
                        }}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            return (
                                <View>
                                    <Image
                                        source={item.background}
                                        style={{
                                            width: 323,
                                            height: 197,
                                            marginRight: 10,
                                            borderRadius: 10,
                                        }}
                                    />
                                </View>
                            );
                        }}
                    />
                </View>
                <TouchableOpacity style={{ marginBottom: 8 }}>
                    <Shadow
                        offset={[0, 0]}
                        distance={15}
                        startColor={"rgba(6, 38, 100, 0.04)"}
                        finalColor={"rgba(6, 38, 100, 0.0)"}
                        viewStyle={{ width: "100%" }}
                    >
                        <View
                            style={{
                                paddingHorizontal: 16,
                            }}
                        >
                            <View
                                style={{
                                    backgroundColor: COLORS.white,
                                    height: 100,
                                    width: "100%",
                                    borderRadius: 20,
                                    alignItems: "center",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    paddingHorizontal: 20,
                                }}
                            >
                                <ApplePaySvg />
                                <EditTwoSvg />
                            </View>
                        </View>
                    </Shadow>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Shadow
                        offset={[0, 0]}
                        distance={15}
                        startColor={"rgba(6, 38, 100, 0.04)"}
                        finalColor={"rgba(6, 38, 100, 0.0)"}
                        viewStyle={{ width: "100%" }}
                    >
                        <View
                            style={{
                                paddingHorizontal: 16,
                            }}
                        >
                            <View
                                style={{
                                    backgroundColor: COLORS.white,
                                    height: 100,
                                    width: "100%",
                                    borderRadius: 20,
                                    alignItems: "center",
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    paddingHorizontal: 20,
                                }}
                            >
                                <PayPalSvg />
                                <PlusTwoSvg />
                            </View>
                        </View>
                    </Shadow>
                </TouchableOpacity>
            </ScrollView>
        );
    }

    return (
        <SafeAreaView style={{ ...AndroidSafeArea.AndroidSafeArea }}>
            {renderHeader()}
            {renderContent()}
        </SafeAreaView>
    );
}
