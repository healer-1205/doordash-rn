import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { SIZES, COLORS, FONTS } from "../constants";
import { Button } from "../components";

export default function CheckoutFailed() {
    const navigation = useNavigation();

    function renderContent() {
        return (
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingTop: SIZES.height * 0.08,
                    paddingBottom: 30,
                    paddingHorizontal: 16,
                }}
            >
                <Image
                    source={require("../assets/images/Checkout-Failed.png")}
                    style={{
                        width: 297,
                        height: 297,
                        alignSelf: "center",
                        top: 42,
                    }}
                />
                <Text
                    style={{
                        ...FONTS.H1,
                        textAlign: "center",
                        lineHeight: 40 * 1,
                        marginBottom: 10,
                    }}
                >
                    Sorry! Your order {"\n"} has failed!
                </Text>
                <Text
                    style={{
                        textAlign: "center",
                        ...FONTS.bodyText,
                        color: COLORS.gray,
                        lineHeight: 16 * 1.5,
                        marginBottom: 70,
                    }}
                >
                    Something went wrong. Please try again to {"\n"} contimue
                    your order.
                </Text>
                <Button
                    title="try again"
                    onPress={() => navigation.navigate("Checkout")}
                    containerStyle={{ marginBottom: 20 }}
                />
            </ScrollView>
        );
    }

    return (
        <View style={{ backgroundColor: COLORS.white, flex: 1 }}>
            {renderContent()}
        </View>
    );
}
