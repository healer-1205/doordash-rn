import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import PhoneInput from 'react-native-phone-input';
import {useNavigation} from '@react-navigation/native';

import {AndroidSafeArea, COLORS, FONTS} from '../constants';
import {Header, Button} from '../components';

export default function VerifyPhoneNumber() {
  const navigation = useNavigation();

  function renderHeader() {
    return (
      <Header
        title="Verify your phone number"
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
          We have sent you an SMS with a code to number +38 0123456789.
        </Text>
        <View style={{marginBottom: 30}}>
          <Text
            style={{
              ...FONTS.Lato_400Regular,
              fontSize: 12,
              textTransform: 'uppercase',
              marginBottom: 11,
              color: COLORS.gray,
            }}>
            phone number
          </Text>
          <PhoneInput
            style={{
              fontSize: 16,
              fontFamily: 'Lato-Regular',
              borderBottomWidth: 1,
              borderBottomColor: '#E2E2E2',
              paddingBottom: 10,
            }}
            placeholderTextColor={COLORS.black}
            initialCountry={'us'}
            // initialValue="0123456789"
          />
        </View>

        <Button
          title="confirm"
          onPress={() => navigation.navigate('ConfirmationCode')}
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
