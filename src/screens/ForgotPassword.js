import { Text, SafeAreaView } from "react-native";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import { useNavigation } from "@react-navigation/native";

import { AndroidSafeArea, COLORS, FONTS } from "../constants";
import { Button, InputField, Header } from "../components";

export default function ForgotPassword() {
    const navigation = useNavigation();

    function renderHeader() {
        return (
            <Header
                title="Forgot password"
                goBack={true}
                onPress={() => navigation.goBack()}
            />
        );
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
                    Please enter your email address. You will receive a link to
                    create a new password via email.
                </Text>
                <InputField
                    containerStyle={{ marginBottom: 30 }}
                    title="email"
                    placeholder="darlenerobertson@mail.com"
                />
                <Button
                    title="send"
                    onPress={() => navigation.navigate("ResetPassword")}
                />
            </KeyboardAwareScrollView>
        );
    }

    return (
        <SafeAreaView style={{ ...AndroidSafeArea.AndroidSafeArea }}>
            {renderHeader()}
            {renderContent()}
        </SafeAreaView>
    );
}
