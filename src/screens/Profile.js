import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Shadow} from 'react-native-shadow-2';
import {useNavigation} from '@react-navigation/native';

import {COLORS, FONTS} from '../constants';
import {ProfileCategory} from '../components';
import {
  CalendarSvg,
  CreditCardSvg,
  MapPinSvg,
  GiftSvg,
  LogOutSvg,
  EditSvg,
} from '../svg';

export default function Profile() {
  const navigation = useNavigation();

  function renderHeader() {
    return (
      <ImageBackground
        source={{uri: 'https://via.placeholder.com/1125x540'}}
        style={{
          height: 180,
          paddingHorizontal: 16,
          justifyContent: 'center',
        }}
        imageStyle={{
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}>
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.3)',
            overflow: 'hidden',
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        />
        <Text
          style={{
            color: COLORS.white,
            ...FONTS.H1,
          }}>
          My profile
        </Text>
      </ImageBackground>
    );
  }

  function renderPersonInfo() {
    return (
      <View
        style={{
          paddingHorizontal: 16,
          top: -40,
        }}>
        <Shadow
          offset={[0, 0]}
          distance={10}
          startColor={'rgba(6, 38, 100, 0.05)'}
          finalColor={'rgba(6, 38, 100, 0.0)'}
          viewStyle={{width: '100%'}}
          style={{width: '100%'}}>
          <TouchableOpacity
            style={{
              width: '100%',
              height: 100,
              backgroundColor: COLORS.white,
              borderRadius: 20,
              padding: 16,
              flexDirection: 'row',
              alignItems: 'center',
            }}
            onPress={() => navigation.navigate('EditProfile')}>
            <Image
              style={{
                width: 70,
                height: 70,
                borderRadius: 35,
                marginRight: 16,
              }}
              source={{
                uri: 'https://via.placeholder.com/210x210',
              }}
            />
            <View>
              <Text
                style={{
                  ...FONTS.H4,
                  color: COLORS.black,
                  lineHeight: 24 * 1.2,
                }}>
                Darlene Robertson
              </Text>
              <Text
                style={{
                  ...FONTS.Lato_400Regular,
                  fontSize: 14,
                  color: COLORS.gray,
                  lineHeight: 14 * 1.5,
                }}>
                darlenerobertson@mail.com
              </Text>
            </View>
            <View style={{position: 'absolute', top: 16, right: 16}}>
              <EditSvg />
            </View>
          </TouchableOpacity>
        </Shadow>
      </View>
    );
  }

  function renderProfileCategory() {
    return (
      <View style={{width: '100%', paddingHorizontal: 16, top: -20}}>
        <ProfileCategory
          title="Orders History"
          icon={<CalendarSvg />}
          onPress={() => navigation.navigate('OrderHistory')}
        />
        <ProfileCategory
          title="Payment Method"
          icon={<CreditCardSvg />}
          onPress={() => navigation.navigate('PaymentMethod')}
        />
        <ProfileCategory
          title="My Address"
          icon={<MapPinSvg />}
          onPress={() => navigation.navigate('MyAddress')}
        />
        <ProfileCategory
          title="My Promocodes"
          icon={<GiftSvg />}
          onPress={() => navigation.navigate('MyPromocodes')}
        />
        <ProfileCategory
          title="Sign Out"
          icon={<LogOutSvg />}
          onPress={() => navigation.navigate('SignIn')}
        />
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="light-content" />
      <ScrollView
        contentContainerStyle={{flexGrow: 1, paddingBottom: 35}}
        showsVerticalScrollIndicator={false}>
        {renderHeader()}
        {renderPersonInfo()}
        {renderProfileCategory()}
      </ScrollView>
    </View>
  );
}
