import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import { Header, Button } from "../components";
import { AndroidSafeArea, COLORS, FONTS } from "../constants";
import { SelectSvg, CheckTwoSvg } from "../svg";

const sortBy = [
    {
        id: "1",
        text: "Price low to high",
    },
    {
        id: "2",
        text: "Price high to low",
    },
    {
        id: "3",
        text: "Top rated",
    },
    {
        id: "4",
        text: "Nearest to me",
    },
    {
        id: "5",
        text: "Most popular",
    },
];

const cuisines = [
    {
        id: "1",
        text: "Ukrainian",
    },
    {
        id: "2",
        text: "Italian",
    },
    {
        id: "3",
        text: "Georgian",
    },
    {
        id: "4",
        text: "American",
    },
    {
        id: "5",
        text: "Chines",
    },
    {
        id: "6",
        text: "Thai",
    },
    {
        id: "7",
        text: "Asian",
    },
    {
        id: "8",
        text: "Japanese",
    },
];

export default function Filter() {
    const navigation = useNavigation();

    const [selectedSortBy, setSelectedSortBy] = useState("1");
    const [selectedCuisines, setSelectedCuisines] = useState(0);

    function renderHeader() {
        return (
            <Header
                title="Filter"
                leftIcon="back"
                onPress={() => navigation.goBack()}
            />
        );
    }

    function renderContent() {
        return (
            <ScrollView
                contentContainerStyle={{
                    flexGrow: 1,
                    paddingHorizontal: 16,
                    paddingVertical: 20,
                }}
                showsVerticalScrollIndicator={false}
            >
                <Text
                    style={{
                        textTransform: "capitalize",
                        marginBottom: 11,
                        color: COLORS.black,
                        ...FONTS.H4,
                    }}
                >
                    sort by
                </Text>
                {sortBy.map((item, index) => {
                    return (
                        <TouchableOpacity
                            key={item.id}
                            style={{
                                paddingVertical: 15,
                                borderBottomWidth: 1,
                                borderBottomColor: "#E2E2E2",
                            }}
                            activeOpacity={0.3}
                            onPress={() => setSelectedSortBy(item.id)}
                        >
                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 14,
                                        color: COLORS.gray,
                                    }}
                                >
                                    {item.text}
                                </Text>

                                {selectedSortBy === item.id && <SelectSvg />}
                            </View>
                        </TouchableOpacity>
                    );
                })}
                <View style={{ height: 30 }} />
                <Text
                    style={{
                        textTransform: "capitalize",
                        marginBottom: 11,
                        color: COLORS.black,
                        ...FONTS.H4,
                    }}
                >
                    Cuisines
                </Text>
                <View
                    style={{
                        flexDirection: "row",
                        flexWrap: "wrap",
                        marginBottom: 30,
                    }}
                >
                    {cuisines.map((item, index) => (
                        <View
                            key={item.id}
                            style={{
                                width: "50%",
                            }}
                        >
                            <TouchableOpacity
                                style={{
                                    flexDirection: "row",
                                    alignItems: "center",
                                    paddingVertical: 7.5,
                                }}
                                activeOpacity={0.3}
                                onPress={() => {
                                    setSelectedCuisines(index);
                                }}
                            >
                                <View
                                    style={{
                                        height: 24,
                                        width: 24,
                                        backgroundColor:
                                            selectedCuisines == index
                                                ? COLORS.carrot
                                                : "#E5EAF4",
                                        borderRadius: 8,
                                        marginRight: 8,
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    {selectedCuisines == index && (
                                        <View style={{ right: -1 }}>
                                            <CheckTwoSvg color="white" />
                                        </View>
                                    )}
                                </View>
                                <Text
                                    style={{
                                        fontSize: 14,
                                        color: COLORS.gray,
                                    }}
                                >
                                    {item.text}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>
                <Button title="Apply filter" />
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
