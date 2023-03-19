import { View, SafeAreaView, ScrollView, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Header, InputField, Button } from "../components";
import { AndroidSafeArea } from "../constants";
import { CameraSvg } from "../svg";

export default function AddNewCard() {
    const navigation = useNavigation();

    function renderHeader() {
        return (
            <Header title="Add new card" onPress={() => navigation.goBack()} />
        );
    }

    function renderContent() {
        return (
            <ScrollView
                contentContainerStyle={{ paddingHorizontal: 16, flexGrow: 1 }}
            >
                <Image
                    source={require("../assets/images/credit-cards/03.png")}
                    style={{
                        width: 323,
                        height: 197,
                        alignSelf: "center",
                        marginTop: 8,
                        marginBottom: 30,
                    }}
                />
                <InputField
                    title="card holder name"
                    placeholder="Darlene Robertson"
                    containerStyle={{ marginBottom: 30 }}
                />
                <InputField
                    title="card number"
                    placeholder="5080 6477 9010 5521"
                    containerStyle={{ marginBottom: 30 }}
                    icon={<CameraSvg />}
                />
                <View
                    style={{
                        flexDirection: "row",
                        width: "100%",
                        justifyContent: "space-between",
                    }}
                >
                    <View style={{ width: "45%" }}>
                        <InputField title="mm/yy" placeholder="12/23" />
                    </View>
                    <View style={{ width: "45%" }}>
                        <InputField title="cvv" placeholder="•••" />
                    </View>
                </View>
                <View style={{ flex: 1 }} />
                <Button
                    title="save card"
                    containerStyle={{ marginBottom: 30 }}
                    onPress={() => navigation.navigate("PaymentMethod")}
                />
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
