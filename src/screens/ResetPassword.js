import {Text, TouchableOpacity, SafeAreaView} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {useNavigation} from '@react-navigation/native';

import {AndroidSafeArea, COLORS, FONTS} from '../constants';
import {Button, InputField, Header} from '../components';
import {EyeOffSvg} from '../svg';

export default function ResetPassword() {
  const navigation = useNavigation();

  function renderHeader() {
    return (
      <Header
        title="Reset Password"
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
        }}>
        <Text
          style={{
            marginBottom: 30,
            ...FONTS.bodyText,
            color: COLORS.gray,
            lineHeight: 16 * 1.5,
          }}>
          Enter new password and confirm.
        </Text>
        <InputField
          containerStyle={{marginBottom: 30}}
          title="new password"
          placeholder="••••••••"
          icon={
            <TouchableOpacity>
              <EyeOffSvg />
            </TouchableOpacity>
          }
        />
        <InputField
          containerStyle={{marginBottom: 30}}
          title="confirm password"
          placeholder="••••••••"
          icon={
            <TouchableOpacity>
              <EyeOffSvg />
            </TouchableOpacity>
          }
        />
        <Button
          title="change password"
          onPress={() => navigation.navigate('PasswordHasBeenReset')}
        />
      </KeyboardAwareScrollView>
    );
  }

  return (
    <SafeAreaView style={{...AndroidSafeArea.AndroidSafeArea}}>
      {renderHeader()}
      {renderContent()}
    </SafeAreaView>
  );
}
