import {
    SafeAreaView,
    ScrollView,
    Image,
    TouchableOpacity,
    StatusBar,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import { Header } from "../components";
import { AndroidSafeArea, dummyData } from "../constants";

export default function AllOffers() {
    const navigation = useNavigation();

    function renderHeader() {
        return (
            <Header title="All Offers" onPress={() => navigation.goBack()} />
        );
    }

    function renderContent() {
        return (
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingHorizontal: 16,
                    paddingTop: 16,
                }}
                showsVerticalScrollIndicator={false}
            >
                {dummyData.map((item, index) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            style={{ marginBottom: 8 }}
                        >
                            <Image
                                source={item.offer}
                                style={{
                                    width: "100%",
                                    height: 170,
                                    borderRadius: 20,
                                }}
                            />
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        );
    }

    return (
        <SafeAreaView style={{ ...AndroidSafeArea.AndroidSafeArea }}>
            <StatusBar barStyle="black-content" />
            {renderHeader()}
            {renderContent()}
        </SafeAreaView>
    );
}
