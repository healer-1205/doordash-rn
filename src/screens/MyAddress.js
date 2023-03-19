import {
    View,
    Text,
    ScrollView,
    SafeAreaView,
    StatusBar,
    TouchableOpacity,
    KeyboardAvoidingView,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Modal from "react-native-modal";

import { Header, Button, InputField } from "../components";
import { FONTS, AndroidSafeArea, COLORS, SIZES } from "../constants";
import { HomeTwoSvg, BriefcaseSvg, MapPinSvg, CrossSvg } from "../svg";

const address = [
    {
        id: "1",
        location: "Home",
        description: "8000 S Kirkland Ave, Chicago, IL 60652",
        icon: <HomeTwoSvg />,
    },
    {
        id: "2",
        location: "Work",
        icon: <BriefcaseSvg />,
        description: "6391 Elgin St. Celina, Delaware 10299",
    },
    {
        id: "3",
        location: "Other",
        icon: <MapPinSvg />,
        description: "3891 Ranchview Dr. Richardson, Califor",
    },
];

export default function MyAddress() {
    const navigation = useNavigation();

    const [showInfoModal, setShowInfoModal] = useState(false);

    function renderHeader() {
        return (
            <Header title="My Address" onPress={() => navigation.goBack()} />
        );
    }

    function renderContent() {
        return (
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    flexGrow: 1,
                    paddingTop: 24,
                }}
            >
                <Text
                    style={{
                        ...FONTS.H4,
                        textTransform: "capitalize",
                        marginBottom: 3,
                    }}
                >
                    saved addresses
                </Text>
                {address.map((item, index) => {
                    return (
                        <View
                            style={{
                                width: "100%",
                                flexDirection: "row",
                                paddingTop: 15,
                            }}
                            key={index}
                        >
                            <View
                                style={{
                                    width: 24,
                                    height: 24,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    marginRight: 16,
                                }}
                            >
                                {item.icon}
                            </View>
                            <View
                                style={{
                                    borderBottomWidth: 1,
                                    borderBottomColor: "#E2E2E2",
                                    width: "100%",
                                    flexShrink: 1,
                                    paddingBottom: 15,
                                }}
                            >
                                <Text
                                    style={{
                                        ...FONTS.Lato_700Bold,
                                        fontSize: 16,
                                        marginBottom: 4,
                                        textTransform: "capitalize",
                                        lineHeight: 16 * 1.2,
                                    }}
                                >
                                    {item.location}
                                </Text>
                                <Text
                                    style={{
                                        flex: 1,
                                        ...FONTS.Lato_400Regular,
                                        fontSize: 14,
                                        color: COLORS.gray,
                                        paddingRight: 25,
                                        lineHeight: 14 * 1.5,
                                    }}
                                    numberOfLines={1}
                                >
                                    {item.description}
                                </Text>
                            </View>
                        </View>
                    );
                })}
                {
                    <Button
                        title="add new address"
                        containerStyle={{ marginTop: 30 }}
                        onPress={() => setShowInfoModal(true)}
                    />
                }
            </ScrollView>
        );
    }

    function renderInfoModal() {
        return (
            <Modal
                isVisible={showInfoModal}
                onBackdropPress={() => setShowInfoModal(false)}
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
                            marginBottom: 20,
                        }}
                    >
                        Add new address
                    </Text>
                    <KeyboardAvoidingView
                        keyboardVerticalOffset={500}
                        behavior="padding"
                        style={{ flex: 1 }}
                    >
                        <InputField
                            title="address"
                            placeholder="8000 S Kirkland Ave, Chicago, IL 606"
                            containerStyle={{ marginBottom: 20 }}
                        />
                    </KeyboardAvoidingView>

                    <TouchableOpacity
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <View
                            style={{
                                width: 20,
                                height: 20,
                                borderRadius: 10,
                                borderWidth: 2,
                                borderColor: "#E2E2E2",
                                justifyContent: "center",
                                alignItems: "center",
                                marginRight: 10,
                            }}
                        >
                            <View
                                style={{
                                    width: 10,
                                    height: 10,
                                    backgroundColor: COLORS.green,
                                    borderRadius: 5,
                                }}
                            />
                        </View>
                        <Text
                            style={{
                                ...FONTS.Lato_400Regular,
                                fontSize: 14,
                                color: COLORS.gray,
                            }}
                        >
                            Use current location
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            position: "absolute",
                            right: 0,
                            top: 0,
                            padding: 16,
                        }}
                        onPress={() => setShowInfoModal(false)}
                    >
                        <CrossSvg />
                    </TouchableOpacity>
                </View>
            </Modal>
        );
    }

    return (
        <SafeAreaView style={{ ...AndroidSafeArea.AndroidSafeArea }}>
            <StatusBar barStyle="black-content" />
            {renderHeader()}
            {renderContent()}
            {renderInfoModal()}
        </SafeAreaView>
    );
}
